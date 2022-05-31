import React, {useEffect} from "react";
import factory from "../ethereum/factory";

export default () => {
  useEffect(() => {
    async function fetchCampaigns() {
      const campaigns = await factory.methods.getDeployedCampaigns().call();
      console.log({campaigns})
    }
    fetchCampaigns();
  }, [])
  return (
    <h1>This is the campaign list page</h1>
  )
}
