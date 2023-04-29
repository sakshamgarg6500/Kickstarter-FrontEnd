import React from "react";

export default () => {
	return (
		<nav className="bg-blue-700 text-white p-4 font-semibold text-lg flex justify-between">
			<div className="p-2 text-2xl">Kickstarter Blockchain</div>
			<div className="flex space-x-4 place-content-end">
				<div className="border-2 border-white rounded-md p-2 hover:bg-blue-600">
					<a>Campaigns</a>
				</div>
				<div className="border-2 border-white rounded-md p-2 hover:bg-blue-600">
					<a>Create Campaign</a>
				</div>
			</div>
		</nav>
	);
};
