import Image from "next/image";
import React, { useState } from "react";

export default function Videos() {
	// const [anime, setAnime] = useState([]);
	// async function fetchData() {
	// 	const dataApi = await fetch("https://api.jikan.moe/v4/anime")
	// 		.then((response) => response.json())
	// 		.then((json) => json.data);
	// 	setAnime(dataApi);
	// }
	// useEffect(() => {
	// 	fetchData();
	// }, []);
	return (
		<div className="mt-3 w-full p-5 lg:p-0 sm:w-4/6 lg:w-5/6  flex flex-col items-center">
			<div className="lg:w-[768px]">
				<h2 className="font-bold cursor-default pb-2 text-left">
					Nuevos Videos
				</h2>
				<div className="flex items-center px-2">
					<div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]">
						<Image
							className="rounded-full "
							src={require("../assets/img/facebook-profile.webp")}
							layout="responsive"
							alt="facebook logo"
						/>
					</div>
					<div className="px-2">
						<h3 className="texto-titulo font-bold">Sparrow</h3>
						<p className="text-gray-500">2h</p>
					</div>
				</div>
				<div className="px-2 text-justify py-1 texto-generico">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
						aliquam natus dolorem illo vitae voluptatibus earum? Ratione,
						reprehenderit, recusandae, vel sapiente eaque voluptatem rem
						adipisci dolorum incidunt explicabo laborum delectus?
					</p>
				</div>
				<div className="relative w-full">
					<Image
						src={require("../assets/img/kaisa sg.webp")}
						layout="responsive"
						alt="facebook logo"
					/>
				</div>
			</div>
		</div>
	);
}
