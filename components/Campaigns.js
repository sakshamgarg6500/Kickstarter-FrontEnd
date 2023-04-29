import React from "react";

export default ({ campaigns }) => {
	return campaigns.map((campaign) => (
		<div className="m-4 p-3 shadow-lg rounded-md bg-blue-400 w-max text-white mx-auto">
			<p className="font-bold text-lg m">Campaign No :</p>
			<p className="font-semibold py-1">{campaign}</p>
			<div className="border-2 border-white p-1.5 my-1 mx-2 w-max rounded-md text-sm object-right hover:bg-blue-600 float-right">
				<button>View Campaign</button>
			</div>
		</div>
	));
};
