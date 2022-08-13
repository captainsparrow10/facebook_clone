import React from "react";
import { RiSettings5Fill } from "react-icons/ri";
import { SidebarIcons } from "../assets/const/functions";
import { friendIcons } from "../assets/const/icons";

export default function SideBarFriends() {
	return (
		<div className=" hidden sm:inline-block sm:w-2/6 lg:w-1/5 md:h-screen">
			<div className="fixed sm:w-2/6 lg:w-1/5 bg-white h-full pt-5 px-2">
				<div className="h-[80%] hover:overflow-y-auto overflow-hidden scroll-smooth">
					<div className="flex justify-between">
						<h2 className="font-bold cursor-defaul">Amigos</h2>
						<div className="p-1 bg-gray-100 rounded-full hover:bg-gray-300">
							<RiSettings5Fill className="h-6 w-6 text-gray-800" />
						</div>
					</div>
					<SidebarIcons dataIcons={friendIcons} />
				</div>
			</div>
		</div>
	);
}
