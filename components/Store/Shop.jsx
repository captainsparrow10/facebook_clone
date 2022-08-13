import Image from "next/image";
import React, { forwardRef } from "react";
import { v4 } from "uuid";
import { AiOutlineLoading } from "react-icons/ai";
const Shop = forwardRef(({results}, ref) => {
	return (
		<div className="w-full sm:w-4/6 lg:w-4/5 flex justify-center" ref={ref}>
			<div className="p-5 w-full ml-2">
				<h1 className="font-bold cursor-default pb-2">Tienda</h1>
				<div className="flex flex-grow flex-wrap justify-evenly">
					{results ? (
						results.map((celular) => (
							<div
								className="flex flex-col w-[250px] h-[300px] justify-evenly"
								key={v4()}
							>
								<div className="relative w-2/3  lg:w-full h-2/3">
									<Image src={celular.image} alt="product" layout="fill" priority />
								</div>
								<div className="h-1/3 flex justify-center pt-4">
									<h2>{celular.phone_name}</h2>
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
})
Shop.displayName ="Shop"
export default Shop