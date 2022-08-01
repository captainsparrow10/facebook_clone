import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { HomeIcon, SearchIcon } from "@heroicons/react/solid";
import {
	BellIcon,
	ChatIcon,
	ShoppingCartIcon,
	UsersIcon,
	VideoCameraIcon,
	ViewGridAddIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
export default function Header() {
	const router = useRouter();
	console.log(router.route);
	const rutas = [
		{
			href: "/",
			icono: HomeIcon,
			clase: "iconheader",
		},
		{
			href: "/friends",
			icono: UsersIcon,
			clase: "iconheader",
		},
		{
			href: "/watch",
			icono: VideoCameraIcon,
			clase: "iconheader",
		},
		{
			href: "/store",
			icono: ShoppingCartIcon,
			clase: "iconheader",
		},
	];

	return (
		<div className="header">
			<div className="nav">
				{/* Icono de facebook */}
				<div className="flex items-center sm:w:1/5 w-full">
					{/* Iconos a la izquierda que desaparecen en sm*/}
					<div className="sm:hidden">
						<Image
							src={require("../assets/img/facebook-mobile.png")}
							width={80}
							height={40}
							layout="fixed"
							alt="facebook logo"
						/>
					</div>
					<div className="hidden sm:inline-flex items-center ">
						<div className="imgicon">
							<Image
								className="rounded-full"
								objectFit="cover"
								src={require("./assets/img/facebook.png")}
								layout="fill"
								alt="facebook logo"
							/>
						</div>
					</div>
				</div>
				{/* Parte del centro */}
				<div className="hidden iconlist sm:w:3/5 sm:inline-flex w-full">
					{rutas.map((ruta) => (
						<Link href={ruta.href} key={ruta.href}>
							<ruta.icono
								className={`iconheader ${
									router.pathname == ruta.href && "text-blue-500"
								}`}
							/>
						</Link>
					))}
				</div>
				{/* Iconos a la izquierda que desaparecen en sm*/}
				<div className="justify-end flex items-center sm:w:1/5 w-full">
					<div className="flex items-center sm:hidden">
						<SearchIcon className="iconheader  pr-3" />
						<ChatIcon className="iconheader " />
					</div>
					<div className="hidden sm:flex items-center">
						<div className="hidden xl:flex items-center">
							<ViewGridAddIcon className="iconheader  mr-2" />
							<ChatIcon className="iconheader   mr-2" />
							<BellIcon className="iconheader   mr-2" />
						</div>
						<div className="flex items-center">
							<div className="imgicon">
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
						<ruta.icono
							className={`iconheader ${
								router.pathname == ruta.href && "text-blue-500"
							}`}
						/>
					</Link>
				))}
			</div>
		</div>
	);
}
