import React from "react";
import { datas } from "./data";
import { AiOutlinePlus } from "react-icons/ai";
import { ImgProfile } from "../assets/const/functions";
import { publicidadIcon } from "../assets/const/icons";
export default function Contacts() {
	return (
		<div className="hidden lg:inline-block fixed top-20 right-4 w-1/6 h-screen overflow-y-hidden">
			<div className=" h-[80%] hover:overflow-y-auto overflow-hidden scroll-smooth">
				<h2 className="titulo-lateral border-b pr-4 py-3 ">Publicidad</h2>
				<div className="flex flex-col">
					<div className="flex justify-between items-center">
						<h2 className="titulo-lateral pr-4 border-t py-3">Contactos</h2>
						<div className="flex">
							{publicidadIcon.map((publicidad) => (
								<div
									className="hover:bg-gray-300 rounded-full p-2"
									key={publicidad.icon}
								>
									<publicidad.icon className="text-gray-500" />
								</div>
							))}
						</div>
					</div>
					{datas.map((data) => (
						<div
							key={data.img}
							className="flex items-center justify-start my-2 hover"
						>
							<ImgProfile url={data.img} />
							<h3 className="texto-lateral">{data.name}</h3>
						</div>
					))}
				</div>
				<div>
					<h2 className="titulo-lateral border-t py-3 pr-4">
						Conversaciones en grupo
					</h2>
					<div className="flex items-center hover">
						<AiOutlinePlus className="icon-lateral text-black bg-gray-300 rounded-full p-1" />
						<h3 className="texto-lateral">Crear nuevo grupo</h3>
					</div>
				</div>
			</div>
		</div>
	);
}
