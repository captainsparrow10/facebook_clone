import React from "react";
import SideBar from "./SideBar";
import Videos from "./Videos";

export default function index() {
	return (
		<div className="flex w-full mt-4">
			<SideBar />
			<Videos />
		</div>
	);
}
