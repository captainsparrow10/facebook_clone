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
	const rutas = [
		{
			icono: UsersIcon,
			texto: "Buscar Amigos",
		},
		{
			icono: UserGroupIcon,
			texto: "Grupos",
		},
		{
			icono: FilmIcon,
			texto: "Watch",
		},
		{
			icono: ClockIcon,
			texto: "Recuerdos",
		},
		{
			icono: ChevronDownIcon,
			texto: "Ver mas",
		},
	];
	return (
		<div className="hidden xl:inline-block fixed top-20 left-0 w-1/6 h-screen overflow-y-hidden ">
			<div className="h-4/6 hover:overflow-y-scroll overflow-hidden">
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
						<h3 className="texto-lateral">Sparrow</h3>
					</div>
					{rutas.map((ruta) => (
						<div className="sidebar" key={ruta.texto}>
							<ruta.icono className="icon" />
							<h3 className="texto-lateral">{ruta.texto}</h3>
						</div>
					))}
				</div>
				<div>
					<h2 className="titulo-lateral border-t py-3">Tus accesos directos</h2>
					<div className="sidebar">
						<SearchIcon className="icon" />
						<h3 className="hidden xl:flex texto-lateral">Buscar grupos</h3>
					</div>
				</div>
			</div>
		</div>
	);
}
