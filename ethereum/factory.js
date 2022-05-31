import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x3c0e08Cdd844348e6ce9A3E82dC395adf070B0F3'
)

export default instance;
