import Web3 from "web3";

let web3;

// if (typeof window !== "undefined") {
//   // window.ethereum.request({method: "eth_requestAccounts"});
// }
web3 = new Web3(window.web3.currentProvider);

export default web3;
