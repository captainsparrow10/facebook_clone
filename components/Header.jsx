import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import {
	AiFillHome,
	AiOutlineSearch,
	AiOutlinePlus,
	AiOutlineMenu,
} from "react-icons/ai";
import { FaUserFriends, FaFacebookMessenger } from "react-icons/fa";
import {
	BsDisplay,
	BsFillGrid3X3GapFill,
	BsBellFill,
	BsFacebook,
} from "react-icons/bs";
import { TbBuildingStore } from "react-icons/tb";
import { SiFacebookgaming } from "react-icons/si";
import Link from "next/link";
export default function Header() {
	const router = useRouter();
	const rutas = [
		{
			href: "/",
			icono: AiFillHome,
		},
		{
			href: "/friends",
			icono: FaUserFriends,
		},
		{
			href: "/watch",
			icono: BsDisplay,
		},
		{
			href: "/store",
			icono: TbBuildingStore,
		},
	];

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
							<input type="text" placeholder="Buscar en facebook" className="bg-transparent rounded-full border-0 outline-none xl:inline-flex hidden" />
						</div>
					</div>
				</div>
				{/* Parte del centro */}
				<div className="sm:w-4/6  w-full flex justify-center">
					<div className="iconlist w-4/6 ">
						{rutas.map((ruta) => (
							<Link href={ruta.href} key={ruta.href}>
								<div
									className={`h-full w-full p-1 hidden sm:inline-flex ${
										router.pathname == ruta.href && "border-b-2 border-blue-500"
									}`}
								>
									<div
										className={`h-full items-center flex w-full justify-center hover:bg-gray-100 rounded-md" ${
											router.pathname == ruta.href && "hover:bg-white"
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
						<Link href="/gaming">
							<div
								className={`h-full w-full p-1 hidden xl:inline-flex ${
									router.pathname == "/gaming" && "border-b-2 border-blue-500"
								}`}
							>
								<div
									className={`h-full items-center flex w-full justify-center hover:bg-gray-100 rounded-md" ${
										router.pathname == "/gaming" && "hover:bg-white"
									}`}
								>
									<SiFacebookgaming
										className={`iconheader ${
											router.pathname == "/gaming" && "text-blue-500"
										}`}
									/>
								</div>
							</div>
						</Link>
					</div>
				</div>
				{/* Iconos a la izquierda que desaparecen en sm*/}
				<div className="justify-end flex items-center sm:w-1/6 w-full">
					<div className="flex items-center">
						<div className="flex items-center">
							<div className="bg-gray-100 rounded-full hover:bg-gray-300 mr-2 lg:inline-flex hidden">
								<BsFillGrid3X3GapFill className="iconheader-lateral" />
							</div>
							<div className="bg-gray-100 rounded-full hover:bg-gray-300 mr-2 lg:hidden ">
								<AiOutlinePlus className="iconheader-lateral" />
							</div>
							<div className="bg-gray-100 rounded-full hover:bg-gray-300  mr-2">
								<FaFacebookMessenger className="iconheader-lateral" />
							</div>
							<div className="bg-gray-100 rounded-full hover:bg-gray-300 mr-2">
								<BsBellFill className="iconheader-lateral" />
							</div>
						</div>
						<div className="flex items-center">
							<div className="imgicon  mr-2">
								<Image
									className="rounded-full"
									objectFit="cover"
									src={require("./assets/img/facebook-profile.jpg")}
									layout="fill"
									alt="facebook logo"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
