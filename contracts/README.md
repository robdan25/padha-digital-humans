# Contracts (Audit / Verification Mirror)

This folder mirrors the **verified PADHA token contract source** for analysis tooling (Slither) and security reporting.

## Contract Details

- **Name:** PADHA Token
- **Symbol:** PADHA
- **Network:** Base (Chain ID: 8453)
- **Contract Address:** `0x95dEeFCD64A97Af2c727595B3fB92C50d33e3CF9`
- **Verified Source:** [BaseScan](https://basescan.org/address/0x95dEeFCD64A97Af2c727595B3fB92C50d33e3CF9#code)

## Purpose

This is **not** a development repository for the contract. The contract is already deployed and immutable on the Base blockchain.

The purpose of this folder is to:
1. **Mirror the verified source** from BaseScan for transparency
2. **Enable automated security analysis** using Slither static analysis
3. **Provide a reference** for auditors and researchers

## Fetching the Verified Source

The `src/PADHA.sol` file currently contains a placeholder. To populate it with the real verified source:

### Option 1: Manual (Recommended)
1. Visit [BaseScan Contract Page](https://basescan.org/address/0x95dEeFCD64A97Af2c727595B3fB92C50d33e3CF9#code)
2. Click the **"Contract"** tab
3. Copy the complete verified source code
4. Replace `src/PADHA.sol` with the verified code

### Option 2: API (Advanced)
```bash
curl "https://api.basescan.org/api?module=contract&action=getsourcecode&address=0x95dEeFCD64A97Af2c727595B3fB92C50d33e3CF9" | jq -r '.result[0].SourceCode' > src/PADHA.sol
```

## Running Slither Analysis

Once the verified source is in place:

```bash
# Install Slither
pip install slither-analyzer

# Run analysis
make slither

# Or via npm
npm run security:slither
```

## Notes

- The Slither CI workflow will fail until the placeholder is replaced with real source code (expected behavior)
- This analysis is for informational purposes only and does not modify the deployed contract
- All findings should be reviewed in context of the already-deployed and verified contract
