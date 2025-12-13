.PHONY: slither slither-ci slither-sarif

# Path to Solidity target(s)
# If you already have contracts elsewhere, update SLITHER_TARGET accordingly.
SLITHER_TARGET ?= contracts/src

slither:
	@echo "Running Slither locally..."
	@slither $(SLITHER_TARGET) --config-file slither.config.json

slither-ci:
	@echo "Running Slither (CI mode)..."
	@slither $(SLITHER_TARGET) --config-file slither.config.json

slither-sarif:
	@echo "Generating SARIF for GitHub Security..."
	@slither $(SLITHER_TARGET) --config-file slither.config.json --sarif slither-report.sarif
