# PADHA Coin Smart Contract Analysis Setup

## Overview

This directory contains Slither static analysis configuration for the PADHA Coin ERC-20 token deployed on Base (Chain ID 8453).

**Contract Address**: `0x95dEeFCD64A97Af2c727595B3fB92C50d33e3CF9`

## Important Note

⚠️ **This repository (`padha-digital-humans`) is the frontend website codebase.**

The actual PADHA Coin smart contract is already **deployed and verified on BaseScan**:
- https://basescan.org/token/0x95dEeFCD64A97Af2c727595B3fB92C50d33e3CF9

## Setting up Slither for Contract Analysis

If you want to analyze the PADHA contract source code, you have two options:

### Option 1: Download verified source from BaseScan

1. Visit the contract on BaseScan (link above)
2. Go to the "Contract" tab → "Code"
3. Download the flattened source code
4. Create a Foundry project:

```bash
# In a new directory (NOT this frontend repo)
mkdir padha-coin-contracts
cd padha-coin-contracts
forge init
```

5. Copy the downloaded contract to `src/PADHACoin.sol`
6. Copy the Slither config files from this repo:

```bash
cp ../padha-digital-humans/Makefile .
cp ../padha-digital-humans/slither.config.json .
cp -r ../padha-digital-humans/.github .
```

7. Run Slither:

```bash
make slither-install  # one-time
make slither
```

### Option 2: Use Slither's etherscan integration

Slither can directly analyze verified contracts on Etherscan-compatible explorers:

```bash
# Install Slither first
python3 -m pip install slither-analyzer crytic-compile

# Analyze from BaseScan (requires API key)
export BASESCAN_API_KEY="your_api_key_here"
slither 0x95dEeFCD64A97Af2c727595B3fB92C50d33e3CF9 \
  --etherscan-api-key $BASESCAN_API_KEY \
  --network base \
  --exclude-informational \
  --exclude-optimization
```

## Files in this repository

- `Makefile` – Make targets for Slither analysis
- `slither.config.json` – Slither configuration
- `.github/workflows/slither.yml` – GitHub Actions CI workflow
- `docs/security/slither.md` – Full documentation on using Slither

## Quick Reference

```bash
# Install Slither (one-time)
make slither-install

# Run analysis (requires Solidity contracts in src/)
make slither

# Run analysis for CI (stricter)
make slither-ci

# Generate JSON report
make slither-json

# Clean build artifacts
make clean
```

## Security Notes

The PADHA contract has been analyzed with:
- ✅ **SolidityScan QuickScan** – 91.1/100 score (Great), 0 Critical, 0 High issues
- ✅ **BaseScan verification** – Source code publicly verified
- ⏳ **Slither static analysis** – Can be run by anyone using instructions above

This is NOT a substitute for professional security audits, but provides additional assurance through automated tooling.

## Questions?

See `docs/security/slither.md` for detailed instructions on interpreting Slither results.
