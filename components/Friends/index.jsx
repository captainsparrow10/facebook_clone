import React from "react";
import Personas from "./Personas";
import SideBar from "./SideBar";

export default function index() {
	return (
		<div className="flex w-full mt-4">
			<SideBar />
			<Personas />
		</div>
	);
}
