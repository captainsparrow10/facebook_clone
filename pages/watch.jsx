import React from "react";
import SideBarWatch from "../components/watch/SideBar";
import Videos from "../components/watch/Videos";
export default function watch() {
	return (
		<div className="flex w-full mt-4">
			<SideBarWatch />
			<Videos />
		</div>
	);
}
