# Security

This repository includes automated static analysis for Solidity using **Slither** (by Trail of Bits).

## Run locally

1. **Install:** `pip install slither-analyzer`
2. **Run:** `make slither`

Alternatively, use npm scripts:
```bash
npm run security:slither
```

## CI

GitHub Actions runs Slither on pull requests and pushes to main, uploading SARIF results to GitHub Security tab.

Workflow location: `.github/workflows/slither.yml`

## Contract Source

The `contracts/src/PADHA.sol` file should contain the verified PADHA token source code from BaseScan:
- **Address:** `0x95dEeFCD64A97Af2c727595B3fB92C50d33e3CF9`
- **Network:** Base (Chain ID: 8453)
- **BaseScan:** https://basescan.org/address/0x95dEeFCD64A97Af2c727595B3fB92C50d33e3CF9#code

## Notes

- Static analysis is **advisory**. Findings should be reviewed and triaged.
- This repository mirrors the deployed contract for analysis purposes only.
- The contract is already deployed and verified on-chain. This analysis does not modify the deployed contract.

## Reporting Security Issues

If you discover a security vulnerability in the PADHA smart contract or this repository, please contact the team via:
- **Twitter/X:** [@PADHACoin](https://x.com/PADHACoin)
- **GitHub Issues:** [padha-digital-humans/issues](https://github.com/robdan25/padha-digital-humans/issues)

Please do not publicly disclose security issues until they have been addressed.
