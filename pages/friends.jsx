import React from "react";
import Personas from "../components/Friends/Personas";
import SideBarFriends from "../components/Friends/SideBar";

export default function friends() {
	return (
		<div className="flex w-full mt-4">
			<SideBarFriends />
			<Personas />
		</div>
	);
}
