import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineInstagram, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaTiktok, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
export default function Presentacion() {
	// Iconos
	const iconos = [
		{
			url: "https://www.instagram.com/sparrowpty",
			icon: AiOutlineInstagram,
      color: "group-hover:text-white",
      bg: "hover:bg-red-500"
		},
		{
			url: "https://www.tiktok.com/@sparrowpty",
			icon: FaTiktok,
      color: "group-hover:text-white",
      bg: "hover:bg-black"
		},
		{
			url: "https://twitter.com/A75528910Acosta",
			icon: FaTwitter,
      color: "group-hover:text-white",
      bg: "hover:bg-blue-400"
		},
		{
			url: "https://www.linkedin.com/in/javieracostat/",
			icon: FaLinkedinIn,
      color: "group-hover:text-white",
      bg: "hover:bg-blue-500"
		},
		{
			url: "https://github.com/captainsparrow10",
			icon: AiFillGithub,
      color: "group-hover:text-black",
      color: "group-hover:text-white",
      bg: "hover:bg-black"
		},
		{
			url: "mailto:javieracostatullock@gmail.com",
			icon: SiGmail,
      color: "group-hover:text-red-500",
      bg: "hover:bg-white"
		},
	];
	return (
		<div className="flex justify-center w-full h-full mt-10">
			<div className="w-3/4 items-center flex flex-col static md:w-1/4">
				<div className="relative w-[300px] h-[300px] shadow-gray-800 shadow-sm rounded-full overflow-hidden">
					<Image
						src={require("../components/assets/img/facebook-profile.webp")}
						layout="fill"
						priority
						objectFit="cover"
						objectPosition="top"
						alt="me"
					/>
				</div>
				<h1 className="text-3xl text-center my-4 font-bold">Javier Acosta</h1>
				<h2 className="text-lg text-center text-gray-600 font-medium">Code, Eat, Sleep</h2>
				<div className="flex justify-between w-full my-4 md:my-6">
					{iconos.map((icono) => (
						<Link href={icono.url} key={icono.url}>
							<div className={`group ${icono.bg} rounded-full p-2 cursor-pointer`}>
								<icono.icon className={`h-6 w-6 ${icono.color}`} />
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
