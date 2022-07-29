import Image from "next/image";
import React from "react";
import { datas } from "./data";
import { PlusCircleIcon } from "@heroicons/react/outline";
export default function Contacts() {
	return (
		<div className="hidden xl:inline-block mt-6 mr-3">
			<div>
				<h2 className="titulo-lateral pr-4 border-b py-3">
					Publicidad
				</h2>
			</div>
			<div className="flex flex-col">
				<h2 className="titulo-lateral border-t pr-4 py-3 ">Contactos</h2>
				{datas.map((data) => (
					<div key={data.img} className="flex items-center justify-start my-2 hover">
						<div className="relative w-[40px] h-[40px] mr-3">
							<Image
								className="rounded-full"
								objectFit="cover"
								src={data.img}
								layout="fill"
								alt="facebook logo"
							/>
						</div>
						<h3 className="texto-lateral">{data.name}</h3>
					</div>
				))}
			</div>
			<div>
				<h2 className="titulo-lateral border-t py-3 pr-4">
					Conversaciones en grupo
				</h2>
				<div className="flex items-center hover">
					<PlusCircleIcon className="icon" />
					<h3 className="texto-lateral">
						Crear nuevo grupo
					</h3>
				</div>
			</div>
		</div>
	);
}
