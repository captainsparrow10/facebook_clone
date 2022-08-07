import React from "react";
import { datas } from "./data";
import { AiOutlinePlus } from "react-icons/ai";
import { ImgProfile } from "../assets/const/functions";
export default function Contacts() {
	return (
		<div className="hidden lg:inline-block fixed top-20 right-0 w-1/6 h-screen overflow-y-hidden">
			<div className=" h-[80%] hover:overflow-y-scroll overflow-hidden scroll-smooth">
				<h2 className="titulo-lateral pr-4 border-b py-3">Publicidad</h2>
				<div className="flex flex-col">
					<h2 className="titulo-lateral border-t pr-4 py-3 ">Contactos</h2>
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
