import Image from "next/image";
import React from "react";
import { HomeIcon, MenuIcon, SearchIcon } from "@heroicons/react/solid";
import { ChatIcon, CollectionIcon, FilmIcon, UsersIcon } from "@heroicons/react/outline";
export default function Header() {
	return (
		<div className="px-2 w-screen">
			<div className="nav">
				{/* Icono de facebook */}
				<div className="flex items-center">
					<div className="sm:hidden">
						<Image
							src={require("../assets/img/facebook-mobile.png")}
							width={80}
							height={40}
							layout="fixed"
							alt="facebook logo"
						/>
					</div>
					<div className="hidden sm:inline-flex">
						<Image
							src={require("../assets/img/facebook.png")}
							width={40}
							height={30}
							layout="fixed"
							alt="facebook logo"
						/>
					</div>
				</div>
				{/* Iconos a la izquierda */}
				<div className="flex items-center">
					<SearchIcon className="icon pr-3" />
					<ChatIcon className="icon" />
				</div>
			</div>
      <div className="flex justify-between items-center">
        <HomeIcon  className="icon"/>
        <UsersIcon className="icon" />
        <FilmIcon className="icon" />
        <CollectionIcon className="icon" />
        <MenuIcon className="icon" />
      </div>
		</div>
	);
}
