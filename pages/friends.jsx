import React from "react";
import SideBarFriends from "../components/friends/FriendSB.jsx";
import Personas from "../components/friends/Personas.jsx";

export default function friends() {
	return (
		<div className="flex w-full mt-4">
			<SideBarFriends />
			<Personas />
		</div>
	);
}
