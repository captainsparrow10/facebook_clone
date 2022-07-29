import React from "react";
import Personas from "../components/Friends/Personas";
import SideBar from "../components/Friends/SideBar";

export default function friends() {
	return (
		<>
			<div className="flex w-full mt-4">
				<SideBar />
				<Personas />
			</div>
		</>
	);
}
