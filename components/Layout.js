import React from "react";

export default (props) => {
	return (
		<div className="border-2 border-blue-900 container mx-auto">
			{props.children}
		</div>
	);
};
