module.exports = {
  build: {
    "TokenTransfer.js": [
      "services/TokenTransfer.js"
    ]
  },
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      from: "", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4612388 // Gas limit used for deploys
    },
    live: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      from: "", // default address to use for any transaction Truffle makes during migrations
      network_id: 1
    }
  
  },
   rpc: {
 host: 'localhost',
 post:8545
   }
};