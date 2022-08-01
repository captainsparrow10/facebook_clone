import React from "react";
import Shop from "../components/store/Shop";
import SideBarShop from "../components/store/SideBar";

export default function store() {
	return (
		<div className="flex w-full mt-4">
			<SideBarShop />
			<Shop />
		</div>
	);
}
