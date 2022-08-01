import React from "react";
import SideBarFriends from "../components/friends/FriendSB";
import Personas from "../components/friends/Personas";

export default function friends() {
	return (
		<div className="flex w-full mt-4">
			<SideBarFriends />
			<Personas />
		</div>
	);
}
