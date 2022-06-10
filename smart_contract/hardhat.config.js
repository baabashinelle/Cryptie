//https://eth-goerli.alchemyapi.io/v2/biPSFQI0M01tW_afge5JKemJd5m655Aq

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/biPSFQI0M01tW_afge5JKemJd5m655Aq",
      accounts: [
        "02f801718c4e293088249f132372a064cc4eba9a2843b4b19ed50dbe2632d785",
      ],
    },
  },
};