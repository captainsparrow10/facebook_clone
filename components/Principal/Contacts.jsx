import Image from "next/image";
import React from "react";
import { datas } from "./data";

export default function Contacts() {
	return (
		<div className="hidden lg:inline-block mt-3">
			<div className="absolute right-2 2xl:right-20">
				<div className="flex flex-col">
					<h1 className="text-2xl xl:text-4xl text-blue-500">Contactos</h1>
					{datas.map((data) => (
						<div key={data.img} className="flex items-center lg:justify-center xl:justify-start">
							<div className="relative w-[70px] h-[70px] xl:w-[100px] xl:h-[100px]  mt-5 xl:mr-3" >
								<Image
									className="rounded-full"
									objectFit="cover"
									src={data.img}
									layout="fill"
									alt="facebook logo"
								/>
							</div>
							<h1 className="hidden xl:flex text-2xl">{data.name}</h1>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
