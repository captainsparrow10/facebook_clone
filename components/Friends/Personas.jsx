import Image from "next/image";
import React, { forwardRef } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { v4 } from "uuid";
 const Personas = forwardRef(({ results }, ref) => {
	return (
		<div className="w-full sm:w-4/6 lg:w-5/6 flex justify-center" ref={ref}>
			<div className="p-5 w-full ml-2">
				<h2 className="font-bold cursor-default pb-2">
					Personas que quizá conozcas
				</h2>
				<div className="flex items-center flex-grow flex-wrap justify-evenly">
					{results ? (
						results.map((data) => (
							<div
								className="friend-card-mobile lg:friend-card-desktop"
								key={v4()}
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
										<button className="amigos-btn bg-blue-200 hover:bg-blue-400 mr-2 lg:mr-0">
											Agregar
										</button>
										<button className="amigos-btn bg-gray-200 hover:bg-gray-400">
											Eliminar
										</button>
									</div>
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
Personas.displayName = "Personas"
export default Personas