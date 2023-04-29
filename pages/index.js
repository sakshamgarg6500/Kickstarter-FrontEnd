import React from "react";
import Layout from "components/Layout.js";
import Navbar from "components/Navbar.js";
import Campaigns from "components/Campaigns.js";
import factory from "../ethereum/factory.js";

export async function getStaticProps() {
	const campaign = await factory.methods.getDeployedCampaigns().call();
	return {
		props: { campaign }, // will be passed to the page component as props
	};
}

export default function campaignIndex({ campaign }) {
	return (
		<div className="font-sans">
			<div className="sticky top-0 z-50">
				<Navbar />
			</div>
			<div className="relative">
				<Layout>
					<div className="flex">
						<Campaigns campaigns={campaign} />
					</div>
				</Layout>
			</div>
		</div>
	);
}
