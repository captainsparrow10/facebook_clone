import React from "react";
import SideBarFriends from "../components/Friends/SideBarFriends";
import Personas from "../components/Friends/Personas";

export default function friends({ request }) {
	return (
		<div className="flex w-full">
			<SideBarFriends />
			<Personas results={request} />
		</div>
	);
}

export async function getStaticProps() {
	const res = await fetch("https://randomuser.me/api/?results=18")
		.then((data) => data.json())
		.then((data) => data["results"]);
	return {
		props: {
			request: res,
		},
	};
}
