import Image from "next/image";
import React from "react";
import { datas } from "./data";
import { PlusCircleIcon } from "@heroicons/react/outline";
export default function Contacts() {
	return (
		<div className="hidden xl:inline-block mt-6 mr-3">
			<div>
				<h1 className="titulo-lateral border-b py-3">
					Publicidad
				</h1>
			</div>
			<div className="flex flex-col">
				<h1 className="titulo-lateral py-3 ">Contactos</h1>
				{datas.map((data) => (
					<div key={data.img} className="flex items-center justify-start my-2 hover-lateral">
						<div className="relative w-[40px] h-[40px] mr-3">
							<Image
								className="rounded-full"
								objectFit="cover"
								src={data.img}
								layout="fill"
								alt="facebook logo"
							/>
						</div>
						<h1 className="texto-lateral">{data.name}</h1>
					</div>
				))}
			</div>
			<div>
				<h1 className="titulo-lateral border-t py-3 pr-4">
					Conversaciones en grupo
				</h1>
				<div className="flex items-center hover-lateral">
					<PlusCircleIcon className="icon" />
					<h1 className="texto-lateral">
						Crear nuevo grupo
					</h1>
				</div>
			</div>
		</div>
	);
}
