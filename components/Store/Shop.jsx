import Image from "next/image";
import React from "react";
import { v4 } from "uuid";
import useSWR from "swr";
import { AiOutlineLoading } from "react-icons/ai";
export default function Shop() {
	const fetcher = (...args) =>
		fetch(...args)
			.then((res) => res.json())
			.then((data) => data["data"]["phones"]);
	const { data, error } = useSWR(
		"https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48?page=1",
		fetcher
	);

	return (
		<div className="w-full sm:w-4/6 lg:w-5/6 flex justify-center">
			<div className="p-5 w-full ml-2">
				<h2 className="font-bold cursor-default pb-2">Tienda</h2>
				<div className="flex items-center flex-grow flex-wrap justify-evenly">
					{data ? (
						data.map((celular) => (
							<div
								className="flex flex-col w-[250px] h-[300px] items-center p-0 "
								key={v4()}
							>
								<div className="relative w-2/3  lg:w-full h-2/3">
									<Image src={celular.image} alt="product" layout="fill" priority />
								</div>
								<div className="h-1/3 flex justify-center items-center">
									<h3>{celular.phone_name}</h3>
								</div>
							</div>
						))
					) : (
						<AiOutlineLoading className="text-blue-500 h-96 w-96 animate-spin-slow mt-40" />
					)}
				</div>
			</div>
		</div>
	);
}
