import React from "react";
//#d4bd9f
//campaugn #f3e1c7
export default ({ campaigns, renderCampaign }) => {
	return campaigns.map((campaign) => (
		<div className="m-4 p-3 shadow-lg rounded-md bg-[#f3e1c7] w-max mx-auto border-2 border-amber-950 text-amber-950">
			<p className="font-bold text-lg m">Campaign No :</p>
			<p className="font-semibold py-1">{campaign}</p>
			<div
				className="border-2 border-amber-950 p-1.5 my-1 mx-2 w-max rounded-md text-sm object-right hover:bg-[#EFEAE4] float-right"
				onClick={() => renderCampaign(campaign)}
			>
				<button>View Campaign</button>
			</div>
		</div>
	));
};
