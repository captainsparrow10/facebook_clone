import { CogIcon } from "@heroicons/react/outline";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { SidebarIcons } from "../assets/const/functions";
import { gamingIcons } from "../assets/const/icons";

export default function GamingSB() {
	return (
		<div className=" hidden sm:inline-block sm:w-2/6 lg:w-1/5 md:h-screen">
			<div className="fixed sm:w-2/6 lg:w-1/5 bg-white h-full pt-5 px-2">
				<div className="h-[80%] hover:overflow-y-auto overflow-hidden scroll-smooth">
					<div className="flex justify-between">
						<h2 className="font-bold cursor-defaul">Gaming</h2>
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
					<SidebarIcons dataIcons={gamingIcons} />
					<div className="flex justify-start titulo-lateral border-t py-3">
						<p className="cursor-defaul">Streamer que sigues</p>
					</div>
				</div>
			</div>
		</div>
	);
}
