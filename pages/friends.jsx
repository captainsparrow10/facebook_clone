import React from "react";
import Personas from "../components/friends/Personas";
import SideBarFriends from "../components/friends/SideBar";

export default function friends() {
	return (
		<div className="flex w-full mt-4">
			<SideBarFriends />
			<Personas />
		</div>
	);
}
