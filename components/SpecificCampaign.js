import React, { useEffect, useState } from "react";
import Campaign from "../ethereum/campaign.js";

const SpecificCampaign = ({ address }) => {
	const [data, setData] = useState([]);

	const getDetails = async () => {
		const campaign = Campaign(address);
		const summary = await campaign.methods.getSummary().call();
		setData(summary);
	};

	useEffect(() => {
		getDetails();
	}, []);

	return (
		<div>
			<p>Campaign Address = {address}</p>
			<p>Campaign Creator = {data[4]}</p>
			<p>Minimum Contribution = {data[0]}</p>
			<p>Campaign Balance = {data[1]}</p>
			<p>Request Count = {data[2]}</p>
			<p>Contributers Count = {data[3]}</p>
		</div>
	);
};

export default SpecificCampaign;
