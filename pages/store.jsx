import React from "react";
import Shop from "../components/Store/Shop";
import SideBarShop from "../components/Store/SideBar";

export default function store() {
	return (
		<div className="flex w-full mt-4">
			<SideBarShop />
			<Shop />
		</div>
	);
}
