import React from "react";
import { sidebar, sidebarAd } from "../assets/icons";
import { SidebarImg } from "../assets/imgs";
export default function SideBar() {
	return (
		<div className="hidden xl:inline-block fixed top-20 left-5 w-1/6 h-screen">
			<div className="h-[80%] hover:overflow-y-scroll overflow-hidden">
				{/*  Lista*/}
				<div className="flex flex-col">
					<div className="sidebar">
						<div className="flex items-center">
							<SidebarImg />
						</div>
						<h3 className="texto-lateral">Sparrow</h3>
					</div>
					{sidebar.map((ruta) => (
						<div className="sidebar" key={ruta.texto}>
							<ruta.icono className={ruta.class} />
							<h3 className="texto-lateral">{ruta.texto}</h3>
						</div>
					))}
				</div>
				<div>
					<h2 className="titulo-lateral border-t py-3">Tus accesos directos</h2>
					{sidebarAd.map((ruta) => (
						<div className="sidebar" key={ruta.texto}>
							<ruta.icono className={ruta.class} />
							<h3 className="texto-lateral">{ruta.texto}</h3>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
