import Image from "next/image";
import React from "react";
import {
	ChevronDownIcon,
	FilmIcon,
	UsersIcon,
	SearchIcon,
	UserGroupIcon,
	ClockIcon,
} from "@heroicons/react/outline";
export default function SideBar() {
	return (
		<div className="hidden xl:inline-block mt-6 ml-3">
			{/*  Lista*/}
			<div className="flex flex-col">
				<div className="sidebar">
					<div className="flex items-center">
						<div className="imgicon">
							<Image
								className="rounded-full"
								objectFit="cover"
								src={require("../assets/img/facebook-profile.jpg")}
								layout="fill"
								alt="facebook logo"
							/>
						</div>
					</div>
					<h1 className="texto-lateral">Sparrow</h1>
				</div>
				<div className="sidebar">
					<UsersIcon className="icon" />
					<h1 className="texto-lateral">
						Buscar Amigos
					</h1>
				</div>
				<div className="sidebar">
					<UserGroupIcon className="icon" />
					<h1 className="texto-lateral">Grupos</h1>
				</div>
				<div className="sidebar">
					<FilmIcon className="icon" />
					<h1 className="texto-lateral">Watch</h1>
				</div>
				<div className="sidebar">
					<ClockIcon className="icon" />
					<h1 className="texto-lateral">
						Recuerdos
					</h1>
				</div>
				<div className="sidebar">
					<ChevronDownIcon className="icon" />
					<h1 className="texto-lateral">Ver mas</h1>
				</div>
			</div>
			<div>
				<h1 className="titulo-lateral border-t py-3">
					Tus accesos directos
				</h1>
				<div className="sidebar">
					<SearchIcon className="icon" />
					<h1 className="hidden xl:flex texto-lateral">
						Buscar grupos
					</h1>
				</div>
			</div>
		</div>
	);
}
