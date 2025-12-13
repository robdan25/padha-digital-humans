# Makefile – Slither integration for PADHA Coin
#
# This Makefile provides targets for static analysis using Slither.
# Assumes a Foundry project structure with contracts in src/

.PHONY: help slither slither-install slither-ci clean

# Default target - show available commands
help:
	@echo "PADHA Coin - Slither Static Analysis"
	@echo ""
	@echo "Available targets:"
	@echo "  make slither-install  - Install Slither (one-time setup)"
	@echo "  make slither          - Run Slither analysis on contracts"
	@echo "  make slither-ci       - Run Slither for CI (stricter settings)"
	@echo "  make clean            - Clean build artifacts"
	@echo ""

# Install Slither locally (user runs this once)
# Requires Python 3.10+
slither-install:
	@echo "Installing Slither and dependencies..."
	python3 -m pip install --upgrade pip
	python3 -m pip install "slither-analyzer>=0.10.0" "crytic-compile>=0.3.0"
	@echo "Slither installed successfully!"
	@echo "Run 'slither --version' to verify installation"

# Run Slither on the whole repo
# Filters out third-party code (OpenZeppelin, etc.) and test files
# Excludes informational findings to focus on actual issues
slither:
	@echo "Running Slither static analysis..."
	@if [ ! -f "slither.config.json" ]; then \
		echo "Warning: slither.config.json not found. Using command-line flags."; \
	fi
	slither . \
	  --filter-paths "node_modules|lib|out|artifacts|cache|test|script" \
	  --exclude-dependencies \
	  --exclude-informational \
	  --exclude-optimization \
	  --exclude-low
	@echo ""
	@echo "Slither analysis complete. Review findings above."

# CI-friendly Slither run (includes all severity levels, fails on medium+)
slither-ci:
	@echo "Running Slither in CI mode (strict)..."
	slither . \
	  --filter-paths "node_modules|lib|out|artifacts|cache|test|script" \
	  --exclude-dependencies \
	  --fail-medium
	@echo "Slither CI analysis complete."

# Clean build artifacts (Foundry)
clean:
	@echo "Cleaning build artifacts..."
	@rm -rf out cache broadcast
	@echo "Clean complete."

# Optional: Run Slither with JSON output for further processing
slither-json:
	@echo "Running Slither with JSON output..."
	@mkdir -p reports
	slither . \
	  --filter-paths "node_modules|lib|out|artifacts|cache|test|script" \
	  --exclude-dependencies \
	  --json reports/slither-report.json
	@echo "JSON report saved to reports/slither-report.json"
