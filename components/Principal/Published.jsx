import Image from "next/image";
import React from "react";

export default function Published() {
	return (
		<div className="mt-3 shadow-md pb-2">
			<div className="flex items-center px-2">
				<div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]">
					<Image
						className="rounded-full "
						src={require("../assets/img/facebook-profile.jpg")}
						layout="responsive"
						alt="facebook logo"
					/>
				</div>
				<div className="px-2">
					<h1 className="text-lg md:text-xl font-bold">Sparrow</h1>
					<h2 className="text-md md:text-lg text-gray-500">2h</h2>
				</div>
			</div>
			<div className="px-2 text-justify py-1 text-md md:text-lg">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
					aliquam natus dolorem illo vitae voluptatibus earum? Ratione,
					reprehenderit, recusandae, vel sapiente eaque voluptatem rem adipisci
					dolorum incidunt explicabo laborum delectus?
				</p>
			</div>
			<div className="relative w-full">
				<Image
					src={require("../assets/img/kaisa sg.jpg")}
					layout="responsive"
					alt="facebook logo"
				/>
			</div>
		</div>
	);
}
