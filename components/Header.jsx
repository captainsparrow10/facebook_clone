import { useRouter } from "next/router";
import React from "react";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";
import { ImgProfile } from "./assets/const/functions";
import { headerIcon, headerLateralIcon } from "./assets/const/icons";
export default function Header() {
	const router = useRouter();
	return (
		<div className="header">
			<div className="nav">
				{/* Parte lateral izquierda */}
				<div className="w-full sm:w-1/6 ">
					<div className="flex items-center">
						<div className="flex items-center ml-5 mr-2">
							<BsFacebook className="cursor-pointer  text-blue-500 w-10 h-10" />
						</div>
						<div className="bg-gray-100 rounded-full hover:bg-gray-300 xl:flex ">
							<AiOutlineSearch className="iconheader-lateral" />
							<input
								type="text"
								placeholder="Buscar en facebook"
								className="bg-transparent rounded-full xl:inline-flex hidden"
							/>
						</div>
					</div>
				</div>
				{/* Parte del centro */}
				<div className="sm:w-4/6  w-full flex justify-center h-full">
					<div className="flex justify-evenly items-center w-4/6 ">
						{headerIcon.map((ruta) => (
							<Link href={ruta.href} key={ruta.href}>
								<div
									className={`h-full w-full p-1 hidden  ${ruta.display} ${
										router.pathname == ruta.href && "p-0"
									}`}
								>
									<div
										className={`h-full items-center flex w-[95%] justify-center hover:bg-gray-100 rounded-lg overflow-hidden" ${
											router.pathname == ruta.href && "hover:bg-white border-b-4 border-blue-500 rounded-none"
										}`}
									>
										<ruta.icono
											className={`iconheader ${
												router.pathname == ruta.href && "text-blue-500"
											}`}
										/>
									</div>
								</div>
							</Link>
						))}
						<div className="h-full w-full p-1 xl:hidden">
							<AiOutlineMenu className="iconheader" />
						</div>
					</div>
				</div>
				{/* Iconos a la izquierda que desaparecen en sm*/}
				<div className="justify-end flex items-center sm:w-1/6 w-full">
					<div className="flex items-center">
						<div className="flex items-center">
							{headerLateralIcon.map((ruta) => (
								<div
									className={`bg-gray-100 rounded-full hover:bg-gray-300 mr-2 ${ruta.display}`}
									key={ruta.icono}
								>
									<ruta.icono className="iconheader-lateral" />
								</div>
							))}
						</div>
						<div className="flex items-center mr-2">
							<ImgProfile />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
