import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import Published from "./Published";
import Stories from "./Stories";

export default function Content() {
	return (
		<div className="content">
			{/* Publicacion */}
			<div className="pb-2 shadow-md">
				<div className="sendbox">
					<div className="imgsendbox">
						<div className="relative w-[50px] md:w-[70px]">
							<Image
								className="rounded-full"
								src={require("../assets/img/facebook-profile.jpg")}
								layout="responsive"
								alt="facebook logo"
							/>
						</div>
					</div>
					<input
						className="inputsendbox"
						type="text"
						placeholder="What's on your mind?"
					/>
					<div className="buttonsendbox">
						<button className="boton-generico">
							Post
						</button>
					</div>
				</div>
				<div className="hidden sm:flex items-center justify-evenly mt-5 pt-3 border-t">
					<div className="flex items-center cursor-pointer hover:drop-shadow-2xl hover:rounder-full p-2 md:flex-col lg:inline-flex">
						<VideoCameraIcon className="icon text-red-500" />
						<p className="mt-1 ml-1 text-black hidden md:inline-flex texto-generico">
							Live Video
						</p>
					</div>
					<div className="flex items-center cursor-pointer hover:drop-shadow-2xl hover:rounder-full p-2 md:flex-col">
						<CameraIcon className="icon text-green-500" />
						<p className="mt-1 ml-1 text-black hidden md:inline-flex texto-generico">
							Photo/video
						</p>
					</div>
					<div className="flex items-center cursor-pointer hover:drop-shadow-2xl hover:rounder-full p-2 md:flex-col">
						<EmojiHappyIcon className="icon text-yellow-500" />
						<p className="mt-1 ml-1 text-black hidden md:inline-flex texto-generico">
							Feeling Activity
						</p>
					</div>
				</div>
			</div>
			{/* Historias */}
			<div className="flex flex-col w-full mt-3 shadow-md p-2">
				<div className="flex justify-evenly w-full ">
					<h1 className="texto-generico text-blue-600 border-b w-1/2 text-center border-blue-600">Stories</h1>
					<h2 className="texto-generico w-1/2 text-gray-400 border-b text-center">Rells</h2>
				</div>
				<Stories />
			</div>
			{/* Publicaciones */}
			<Published />
		</div>
	);
}
