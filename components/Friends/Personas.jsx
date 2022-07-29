import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Personas() {
	const [anime, setAnime] = useState([]);
	const [personas, setPersonas] = useState([]);
	async function fetchData() {
		const dataApi = await fetch("https://api.jikan.moe/v4/anime")
			.then((response) => response.json())
			.then((json) => json.data);
		setAnime(dataApi);
		const personas = await fetch("https://randomuser.me/api/?results=10")
			.then((response) => response.json())
			.then(function (data) {
				setPersonas(data["results"]);
			});
	}
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="w-full sm:w-4/6 lg:w-5/6 flex justify-center">
			<div className="p-5 w-full ml-2">
				<h2 className="font-bold cursor-default pb-2">
					Personas que quizá conozcas
				</h2>
				<div className="flex flex-col items-center lg:grid lg:grid-cols-3 lg:gap-2  xl:grid-cols-4 2xl:grid-cols-5">
					{personas.map((data) => (
						<div
							className="friend-card-mobile lg:friend-card-desktop"
							key={data.picture.medium}
						>
							<div className="relative w-[80px] h-[80px] lg:w-full lg:h-2/3">
								<Image
									className="rounded-full lg:rounded-none"
									src={data.picture.large}
									alt="product"
									layout="fill"
								/>
							</div>
							<div className="flex flex-col ml-3 lg:ml-0 w-full lg:h-1/3">
								<div className="lg:h-1/3 flex lg:justify-center items-center">
									<h3>{data.name.first + " " + data.name.last}</h3>
								</div>
								<div className="flex justify-between lg:flex-col items-center lg:justify-center w-full lg:h-2/3">
									<button className="amigos-btn bg-blue-500 mr-2 lg:mr-0">
										Agregar
									</button>
									<button className="amigos-btn bg-gray-400">Eliminar</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
