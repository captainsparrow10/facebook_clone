import Image from "next/image";
import React from "react";
import { datas } from "./data";
import { AiOutlinePlus } from "react-icons/ai";
import { storyTitle } from "../assets/const/icons";
export default function Stories() {
	return (
		<div className="w-full h-[293px] bg-white rounded-xl shadow-md">
			<div className="flex justify-evenly items-center h-1/5 border-b">
				{storyTitle.map((story) => (
					<div className="w-full h-full flex items-center justify-center" key={story.name}>
						<h1 className={`${story.active} h-full w-5/6 items-center flex justify-center`}>
							{story.name}
						</h1>
					</div>
				))}
			</div>
			<div className="w-full p-2 relative h-4/5">
				<div className="flex overflow-x-auto scrollbar-hide">
					<div className="flex m-2">
						<div className="relative w-[112px] h-[200px] rounded-xl shadow-md overflow-hidden shadow-gray-400 bg-white">
							<div className="relative w-[112px] h-2/3">
								<Image
									objectFit="cover"
									objectPosition="center"
									src={require("../assets/img/facebook-profile.jpg")}
									layout="fill"
									alt={"imagen"}
								/>
							</div>
							<div className="absolute left-1/3 top-[60%] bg-white rounded-full p-1">
								<AiOutlinePlus className="icon-lateral text-white bg-blue-500 rounded-full" />
							</div>
							<div className="absolute right-2 bottom-4 text-white">
								<h3 className="font-bold text-black">Crear historias</h3>
							</div>
						</div>
					</div>
					{datas.map((data) => (
						<div className="flex  m-2 " key={data.img}>
							<div className="relative w-[112px] h-[200px] rounded-xl overflow-hidden">
								<Image
									objectFit="cover"
									objectPosition="center"
									src={data.img}
									layout="fill"
									alt={"imagen"}
								/>
								<div className="relative top-3 left-2 w-[25px] h-[25px]">
									<Image
										className="rounded-full"
										objectFit="cover"
										layout="fill"
										src={data.user}
										alt={"imagen"}
									/>
								</div>
								<div className="absolute right-5 bottom-1 text-white">
									<h3 className="font-bold">{data.name}</h3>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
