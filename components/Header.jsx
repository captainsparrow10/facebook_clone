import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
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
	console.log(router.route);
	const rutas = [
		{
			href: "/",
			icono: AiFillHome,
			clase: "iconheader",
		},
		{
			href: "/friends",
			icono: FaUserFriends,
			clase: "iconheader",
		},
		{
			href: "/watch",
			icono: BsDisplay,
			clase: "iconheader",
		},
		{
			href: "/store",
			icono: TbBuildingStore,
			clase: "iconheader",
		},
		{
			href: "/gaming",
			icono: SiFacebookgaming,
			clase: "iconheader",
		},
	];

	return (
		<div className="header">
			<div className="nav">
				{/* Icono de facebook */}
				<div className="flex items-center sm:w:1/5 w-full">
					{/* Iconos a la izquierda que desaparecen en sm*/}
					<div className="sm:hidden pl-3">
						<Image
							src={require("./assets/img/facebook-mobile.png")}
							width={80}
							height={40}
							layout="fixed"
							alt="facebook logo"
						/>
					</div>
					<div className="hidden sm:inline-flex items-center pl-6">
						<BsFacebook className="cursor-pointer  text-blue-500 w-10 h-10" />
					</div>
				</div>
				{/* Parte del centro */}
				<div className="hidden iconlist sm:w:3/5 sm:inline-flex w-full">
					{rutas.map((ruta) => (
						<Link href={ruta.href} key={ruta.href}>
							<div
								className={`h-full w-full p-1 ${
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
				</div>
				{/* Iconos a la izquierda que desaparecen en sm*/}
				<div className="justify-end flex items-center sm:w:1/5 w-full">
					<div className="flex items-center sm:hidden">
						<div className="bg-gray-100 rounded-full hover:bg-gray-300  mr-2">
							<AiOutlineSearch className="iconheader   text-gray-800" />
						</div>
						<div className="bg-gray-100 rounded-full hover:bg-gray-300  mr-2">
							<FaFacebookMessenger className="iconheader  text-gray-800  " />
						</div>
					</div>
					<div className="hidden sm:flex items-center">
						<div className="hidden xl:flex items-center">
							<div className="bg-gray-100 rounded-full hover:bg-gray-300 mr-2">
								<BsFillGrid3X3GapFill className="iconheader text-gray-800 " />
							</div>
							<div className="bg-gray-100 rounded-full hover:bg-gray-300  mr-2">
								<FaFacebookMessenger className="iconheader  text-gray-800  " />
							</div>
							<div className="bg-gray-100 rounded-full hover:bg-gray-300 mr-2">
								<BsBellFill className="iconheader  text-gray-800  " />
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
			{/* Iconos de abjo que desaparecen en sm*/}
			<div className="iconlist sm:hidden">
				{rutas.map((ruta) => (
					<Link href={ruta.href} key={ruta.href}>
						<div
							className={`h-full w-full p-1 ${
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
			</div>
		</div>
	);
}
