import React from "react";
import SideBarWatch from "../components/watch/WatchSB.jsx";
import Videos from "../components/watch/Videos.jsx";
export default function watch() {
	return (
		<div className="flex w-full mt-4">
			<SideBarWatch />
			<Videos />
		</div>
	);
}
