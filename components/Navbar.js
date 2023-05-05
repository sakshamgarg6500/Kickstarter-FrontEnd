import React, { useState } from "react";

export default (props) => {
	return (
		<nav className="bg-[#d4bd9f] text-amber-950 p-4 font-semibold text-lg flex justify-between">
			<div className="p-2 pr-5 text-3xl border-r-4 border-amber-950">
				Kickstarter Blockchain
			</div>
			<div className="flex space-x-4 place-content-end">
				<div
					className={`${
						props.comp1 && "bg-[#f3e1c7]"
					} ${"border-2 border-amber-950 rounded-md p-2 hover:bg-[#f3e1c7]"}`}
					onClick={props.opt1}
				>
					<button>Campaigns</button>
				</div>
				<div
					className={`${
						props.comp2 && "bg-[#f3e1c7]"
					} ${"border-2 border-amber-950 rounded-md p-2 hover:bg-[#f3e1c7]"}`}
					onClick={props.opt2}
				>
					<button>Create Campaign</button>
				</div>
			</div>
		</nav>
	);
};
