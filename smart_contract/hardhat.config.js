
//https://eth-sepolia.g.alchemy.com/v2/UTMVa5-Gxxjm8E95eq5yNqTli5gflS97

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/UTMVa5-Gxxjm8E95eq5yNqTli5gflS97',
      accounts: ['27dbf0332cd314b30a45b02aa88ca64f4106b68b297ef79df4bd64fe92ce751e'],
    },
  },
};