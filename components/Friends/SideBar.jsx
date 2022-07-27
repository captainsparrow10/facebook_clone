import { CogIcon } from "@heroicons/react/outline";
import React from "react";

export default function SideBar() {
	return (
		<div className="w-1/6 p-3">
			<div className="flex justify-between">
				<h1 className="friends-titulo">Amigos</h1>
				<CogIcon className="iconheader animate-spin-slow" />
			</div>
		</div>
	);
}
