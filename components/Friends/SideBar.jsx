import {
	CogIcon,
	UsersIcon,
	UserAddIcon,
	UserGroupIcon,
	CakeIcon,
} from "@heroicons/react/outline";
import React from "react";

export default function SideBarFriends() {
	const rutas = [
		{
			titulo: "Inicio",
			icono: UsersIcon,
			clase: "friends-div bg-gray-200 ",
			claseicono: "icon",
		},
		{
			titulo: "Solicitudes",
			icono: UserAddIcon,
			clase: "friends-div",
			claseicono: "iconheader hover:text-gray-500",
		},
		{
			titulo: "Sugerencias",
			icono: UserAddIcon,
			clase: "friends-div",
			claseicono: "iconheader hover:text-gray-500",
		},
		{
			titulo: "Cumpleaños",
			icono: CakeIcon,
			clase: "friends-div",
			claseicono: "iconheader hover:text-gray-500",
		},
		{
			titulo: "Amigos",
			icono: UserGroupIcon,
			clase: "friends-div",
			claseicono: "iconheader hover:text-gray-500",
		},
	];

	return (
		<div className="sm:w-2/6 lg:w-1/6 pl-2 hidden sm:inline-flex">
			<div className="w-full">
				<div className="flex justify-between">
					<h2 className="font-bold cursor-defaul">Amigos</h2>
					<CogIcon className="icon animate-spin-slow" />
				</div>
				<div>
					{rutas.map((ruta) => (
						<div className="flex items-center my-6" key={ruta.titulo}>
							<div className={ruta.clase}>
								<ruta.icono className={ruta.claseicono} />
								<h3 className="font-bold cursor-default ml-3">{ruta.titulo}</h3>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
