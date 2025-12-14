// PADHA Token Contract Configuration (Sepolia Testnet)

export const CONTRACT_ADDRESS = '0x95dEeFCD64A97Af2c727595B3fB92C50d33e3CF9';

export const ETHERSCAN_LINKS = {
  // Main contract overview
  contract: `https://sepolia.etherscan.io/address/${CONTRACT_ADDRESS}`,

  // Contract read/write panels
  readContract: `https://sepolia.etherscan.io/address/${CONTRACT_ADDRESS}#readContract`,
  writeContract: `https://sepolia.etherscan.io/address/${CONTRACT_ADDRESS}#writeContract`,

  // Token transfers (PADHA Activity Feed)
  tokenTransfers: `https://sepolia.etherscan.io/token/${CONTRACT_ADDRESS}`,

  // Burn events (tokens sent to zero address)
  burnEvents: 'https://sepolia.etherscan.io/txs?a=0x0000000000000000000000000000000000000000',

  // Contract code/deployment
  contractCode: `https://sepolia.etherscan.io/address/${CONTRACT_ADDRESS}#code`,
};

// Helper function to get specific link
export const getEtherscanLink = (type: keyof typeof ETHERSCAN_LINKS) => {
  return ETHERSCAN_LINKS[type];
};
