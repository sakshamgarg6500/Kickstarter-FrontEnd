//STEP 1: Configure web3 with a provider from metamask
import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && window.web3 !== "undefined") {
	//typeof can be used to check if a variable is defined or not
	//we are in the browser && we have metamask injected
	web3 = new Web3(window.ethereum);
} else {
	//we are on the server OR the user is not running metamask
	const provider = new Web3.providers.HttpProvider(
		"https://sepolia.infura.io/v3/558401cb462a4e819af0f0022ef7afb7"
	);
	web3 = new Web3(provider);
}

export default web3;
