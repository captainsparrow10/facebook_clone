import React from "react";
import SideBarFriends from "../components/Friends/SideBarFriends";
import Personas from "../components/Friends/Personas";

export default function friends() {
	return (
		<div className="flex w-full mt-4">
			<SideBarFriends />
			<Personas />
		</div>
	);
}
