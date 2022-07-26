import Image from "next/image";
import React from "react";
import { datas } from "./data";

export default function Stories() {
	return (
		<div className="mt-5 flex overflow-hidden">
			{datas.map((data) => (
				<div className="flex mr-2 " key={data.img}>
					<div className="relative story rounded-3xl overflow-hidden">
						<Image
							objectFit="cover"
							objectPosition="center"
							src={data.img}
							layout="fill"
							alt={"imagen"}
						/>
						<div className="relative top-3 left-2 iconstory">
							<Image
								className="rounded-full"
								objectFit="cover"
								layout="fill"
								src={data.user}
								alt={"imagen"}
							/>
						</div>
						<div className="absolute right-1 bottom-1 text-white">
							<h5 className="story-title font-bold">{data.name}</h5>
							<p className="story-subtitle font-semibold border-black">
								{data.city}
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
