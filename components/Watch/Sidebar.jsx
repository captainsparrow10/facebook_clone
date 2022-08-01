import React from "react";
import {
	CogIcon,
	BookmarkIcon,
	VideoCameraIcon,
	PlayIcon,
	DesktopComputerIcon,
} from "@heroicons/react/outline";

export default function SideBar() {
	const rutas = [
		{
			titulo: "Inicio",
			icono: VideoCameraIcon,
			clase: "friends-div bg-gray-200 ",
			claseicono: "icon",
		},
		{
			titulo: "En vivo",
			icono: PlayIcon,
			clase: "friends-div",
			claseicono: "iconheader hover:text-gray-500",
		},
		{
			titulo: "Programas",
			icono: DesktopComputerIcon,
			clase: "friends-div",
			claseicono: "iconheader hover:text-gray-500",
		},
		{
			titulo: "Videos Guardados",
			icono: BookmarkIcon,
			clase: "friends-div",
			claseicono: "iconheader hover:text-gray-500",
		},
	];
	return (
		<div className="sm:w-2/6 lg:w-1/6 pl-2 hidden sm:inline-flex">
			<div className="w-full">
				<div className="flex justify-between">
					<h2 className="font-bold cursor-defaul">Watch</h2>
					<CogIcon className="icon animate-spin-slow" />
				</div>
				{rutas.map((ruta) => (
					<div className="flex items-center my-6" key={ruta.titulo}>
						<div className={ruta.clase}>
							<ruta.icono className={ruta.claseicono} />
							<h3 className="font-bold cursor-default ml-3">{ruta.titulo}</h3>
						</div>
					</div>
				))}
				<div className="flex justify-between titulo-lateral border-t py-3">
					<p className="cursor-defaul">Seguidas</p>
					<p className="cursor-defaul text-blue-400">Administrar</p>
				</div>
			</div>
		</div>
	);
}
