const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "display once enrich six sausage rabbit sense evil toward kiwi category mountain",
  // remember to change this to your own phrase!
  "https://rinkeby.infura.io/v3/299e2cf66cb941fa9d6c0789d0a6c7c1"
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();

// contract address: 0x3c0e08Cdd844348e6ce9A3E82dC395adf070B0F3
