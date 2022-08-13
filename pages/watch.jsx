import React from "react";
import SideBarWatch from "../components/Watch/WatchSB";
import Videos from "../components/Watch/Videos";
export default function watch() {
	return (
		<div className="flex w-full">
			<SideBarWatch />
			<Videos />
		</div>
	);
}
