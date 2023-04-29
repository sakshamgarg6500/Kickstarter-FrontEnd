import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

//STEP 2: Tell web3 that a deployed instance of CampaignFactory already exists
const instance = new web3.eth.Contract(
	CampaignFactory.abi,
	"0x56F55e4Faf180F845CF4c6C9b18e8071a3c53311"
);

export default instance;
