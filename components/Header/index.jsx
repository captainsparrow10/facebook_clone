import Image from "next/image";
import React from "react";
import { HomeIcon, MenuIcon, SearchIcon } from "@heroicons/react/solid";
import {
	BellIcon,
	ChatIcon,
	ChevronDownIcon,
	CollectionIcon,
	FilmIcon,
	UsersIcon,
	ViewGridAddIcon,
} from "@heroicons/react/outline";
export default function Header() {
	return (
		<div className="header">
			<div className="nav">
				{/* Icono de facebook */}
				<div className="flex items-center sm:w:1/5 w-full">
					{/* Iconos a la izquierda que desaparecen en sm*/}
					<div className="sm:hidden">
						<Image
							src={require("../assets/img/facebook-mobile.png")}
							width={80}
							height={40}
							layout="fixed"
							alt="facebook logo"
						/>
					</div>
					<div className="hidden sm:inline-flex items-center ">
						<Image
							src={require("../assets/img/facebook.png")}
							width={40}
							height={30}
							layout="fixed"
							alt="facebook logo"
						/>
						<SearchIcon className="icon ml-2" />
					</div>
				</div>
				{/* Parte del centro */}
				<div className="hidden iconlist sm:w:3/5 sm:inline-flex w-full">
					<HomeIcon className="icon" />
					<UsersIcon className="icon" />
					<FilmIcon className="icon" />
					<CollectionIcon className="icon" />
					<MenuIcon className="icon" />
				</div>
				{/* Iconos a la izquierda que desaparecen en sm*/}
				<div className="justify-end flex items-center sm:w:1/5 w-full">
					<div className="flex items-center sm:hidden">
						<SearchIcon className="icon pr-3" />
						<ChatIcon className="icon" />
					</div>
					<div className="hidden sm:flex items-center">
						<div className="hidden xl:flex items-center">
							<ViewGridAddIcon className="icon mr-2" />
							<ChatIcon className="icon  mr-2" />
							<BellIcon className="icon  mr-2" />
						</div>
						<div className="flex items-center">
							<Image
								className="rounded-full"
								src={require("../assets/img/facebook-profile.jpg")}
								width={40}
								height={40}
								layout="fixed"
								alt="facebook logo"
							/>
						</div>
						<h1 className="ml-2">Sparrow</h1>
					</div>
				</div>
			</div>
			{/* Iconos de abjo que desaparecen en sm*/}
			<div className="iconlist sm:hidden">
				<HomeIcon className="icon" />
				<UsersIcon className="icon" />
				<FilmIcon className="icon" />
				<CollectionIcon className="icon" />
				<MenuIcon className="icon" />
			</div>
		</div>
	);
}
