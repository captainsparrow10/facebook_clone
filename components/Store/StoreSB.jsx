import {
	CogIcon,
	ShoppingBagIcon,
	CashIcon,
	BellIcon,
	ShoppingCartIcon,
} from "@heroicons/react/outline";
import React from "react";
import { SidebarIcons } from "../assets/const/functions";
import { storeIcons } from "../assets/const/icons";

export default function SideBarShop() {
	return (
		<div className="sm:w-2/6 lg:w-1/6 pl-2 hidden sm:inline-flex">
			<div className="w-full">
				<div className="flex justify-between">
					<h2 className="font-bold cursor-defaul">Marketplace</h2>
					<CogIcon className="icon animate-spin-slow" />
				</div>
				<SidebarIcons dataIcons={storeIcons} />
			</div>
		</div>
	);
}
