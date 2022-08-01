import React from "react";
import Shop from "../components/store/Shop.jsx";
import SideBarShop from "../components/store/StoreSB.jsx";

export default function store() {
	return (
		<div className="flex w-full mt-4">
			<SideBarShop />
			<Shop />
		</div>
	);
}
