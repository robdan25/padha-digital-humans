# PADHA Coin – Technical Overview

This page summarizes the key technical and economic properties of PADHA Coin on Base. It is meant to help explorers, integrators, and users verify they are interacting with the correct contract.

## 1. Summary

PADHA Coin (**PADHA**) is a Base-native ERC-20 utility token used inside the Phaeton AI ecosystem to power digital human avatars such as **Phae**. Instead of being marketed primarily as a trading asset, PADHA is designed to meter and pay for real usage: AI compute, storage, and infrastructure backing avatar conversations.

When a supported digital human avatar runs a session (voice, video, or chat), small amounts of PADHA are consumed over time. This creates a direct link between real-world usage of the underlying AI agents and on-chain token flows.

## 2. Contract & Network

- **Standard:** ERC-20
- **Network:** Base (Ethereum L2)
- **Chain ID:** 8453
- **Contract:** `0x95dEeFCD64A97Af2c727595B3fB92C50d33e3CF9`
- **Decimals:** 18
- **Total supply:** 1,000,000,000 PADHA (fixed)

The contract source code is verified on BaseScan. Always verify the contract address from this site (PADHACoin.com) before interacting.

## 3. Launch & Distribution

PADHA Coin did **not** launch via an ICO, IEO, seed round, or private sale. No public token sale was conducted.

- **Launch method:** Permissionless deployment on Base, followed by initial liquidity supplied by the deployer.
- **Primary market:** Uniswap v3 PADHA/ETH pool on Base.
- **Fundraising:** No funds were raised via ICO/IEO/private sale using PADHA.
- **Team allocation:** Any treasury or team holdings are funded from the deployer's own liquidity and not from an ICO.

As a result, PADHA's initial price and ongoing price discovery are set entirely by the open market through liquidity pools and secondary trading.

## 4. Utility & Use Cases

Within the Phaeton AI ecosystem, PADHA is intended to be used for:

- **Session metering:** Paying for compute, storage, and bandwidth during avatar sessions.
- **Premium features:** Unlocking longer or higher-resolution avatar sessions, priority routing, and advanced interaction modes.
- **Developer tools:** Accessing future SDK / API features that require on-chain consumption of PADHA.
- **On-chain telemetry:** Using micro-burns to record that a conversation took place, enabling transparent usage analytics.

These utilities are focused on real usage of digital human avatars, not on speculative token mechanics. PADHA is designed as "fuel" for AI interactions rather than as a promise of profit.

## 5. Integrations & Tooling

The core contract is a standard ERC-20 on Base, which makes it compatible with common Web3 tooling, including wallets, explorers, and DEX interfaces.

- **Explorer:** View the token on BaseScan using the contract above.
- **DEX analytics:** PADHA trading activity may be visible on third-party tools such as DEXTools and others that index the Base network.
- **Wallets:** PADHA can be added to any EVM-compatible wallet by pasting the contract address.

## 6. Disclaimers & Risk Notice

PADHA is built as a utility token to support AI infrastructure and digital human avatars. Nothing on this site, or in related materials, should be interpreted as financial, investment, or legal advice.

- There is **no guarantee** of price, liquidity, or future utility.
- Token usage and integrations may evolve as the Phaeton AI ecosystem is developed.
- Users and integrators should perform their own research and comply with local regulations.

By interacting with PADHA or any related smart contracts, you acknowledge that you understand and accept the technical and market risks involved.
