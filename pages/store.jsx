import React from "react";
import Shop from "../components/Store/Shop";
import SideBarShop from "../components/Store/StoreSB";

export default function store({ request }) {
	return (
		<div className="flex w-full mt-4">
			<SideBarShop />
			<Shop results={request} />
		</div>
	);
}
export async function getStaticProps() {
	const res = await fetch(
		"https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48?page=1"
	).then((data) => data.json()).then(data => data["data"]["phones"]);
	return {
		props: {
			request: res,
		},
	};
}
