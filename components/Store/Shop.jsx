import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Shop() {
	const [celulares, setCelulares] = useState([]);
	async function fetchData() {
		const data = await fetch(
			" https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48?page=1"
		)
			.then((response) => response.json())
			.then(function (data) {
				setCelulares(data["data"]["phones"]);
			});
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="w-full sm:w-4/6 lg:w-5/6 flex justify-center">
			<div className="p-5 w-full ml-2">
				<h2 className="font-bold cursor-default pb-2">Tienda</h2>
				<div className="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-2  xl:grid-cols-4 2xl:grid-cols-5">
					{celulares.map((celular) => (
						<div
							className="flex flex-col w-[250px] h-[300px] items-center p-0 "
							key={celular.slug}
						>
							<div className="relative w-2/3  lg:w-full h-2/3">
								<Image
									src={celular.image}
									alt="product"
									layout="fill"
								/>
							</div>
							<div className="h-1/3 flex justify-center items-center">
								<h3>{celular.phone_name}</h3>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
