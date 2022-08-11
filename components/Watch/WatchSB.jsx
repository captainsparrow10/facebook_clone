import React from "react";
import { CogIcon } from "@heroicons/react/outline";
import { watchIcons } from "../assets/const/icons";
import { SidebarIcons } from "../assets/const/functions";
import { AiOutlineSearch } from "react-icons/ai";

export default function SideBarWatch() {
	return (
		<div className="sm:w-2/6 lg:w-1/6 pl-2 hidden sm:inline-flex">
			<div className="w-full">
				<div className="flex justify-between">
					<h2 className="font-bold cursor-defaul">Watch</h2>
					<CogIcon className="icon animate-spin-slow" />
				</div>
				<div className="bg-gray-100 rounded-full hover:bg-gray-300 flex my-4">
					<AiOutlineSearch className="iconheader-lateral" />
					<input
						type="text"
						placeholder="Buscar en facebook"
						className="bg-transparent rounded-full"
					/>
				</div>
				<SidebarIcons dataIcons={watchIcons} />
				<div className="flex justify-between titulo-lateral border-t py-3">
					<p className="cursor-defaul">Seguidas</p>
					<p className="cursor-defaul text-blue-400">Administrar</p>
				</div>
			</div>
		</div>
	);
}
