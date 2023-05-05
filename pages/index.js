import React, { useState } from "react";
import Layout from "components/Layout.js";
import Navbar from "components/Navbar.js";
import Campaigns from "components/Campaigns.js";
import factory from "../ethereum/factory.js";
import SpecificCampaign from "components/SpecificCampaign.js";

export async function getStaticProps() {
	const campaign = await factory.methods.getDeployedCampaigns().call();
	return {
		props: { campaign }, // will be passed to the page component as props
	};
}

export default function campaignIndex({ campaign }) {
	const [campaignPage, setCampaignPage] = useState(true);
	const [createCampaignPage, setCreateCampaignPage] = useState(false);
	const [viewCampaign, setViewCampaign] = useState(false);
	const [specificCampaign, setSpecificCampaign] = useState("");

	function renderCampaignPage() {
		setCreateCampaignPage(false);
		setViewCampaign(false);
		setCampaignPage(true);
	}

	function renderCreateCampaignPage() {
		setCampaignPage(false);
		setViewCampaign(false);
		setCreateCampaignPage(true);
	}

	function renderCampaign(address) {
		setCreateCampaignPage(false);
		setCampaignPage(false);
		setViewCampaign(true);
		setSpecificCampaign(address);
	}

	return (
		<div className="font-sans ">
			<div className="sticky top-0 z-50">
				<Navbar
					opt1={renderCampaignPage}
					opt2={renderCreateCampaignPage}
					comp1={campaignPage}
					comp2={createCampaignPage}
				/>
			</div>
			<div className="relative bg-[#EFEAE4] border-2 h-screen">
				<Layout>
					<div className="flex">
						{campaignPage && (
							<Campaigns campaigns={campaign} renderCampaign={renderCampaign} />
						)}
						{viewCampaign && <SpecificCampaign address={specificCampaign} />}
					</div>
				</Layout>
			</div>
		</div>
	);
}
