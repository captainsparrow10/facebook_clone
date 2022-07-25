import Image from "next/image";
import React from "react";

export default function Stories() {
	const datas = [
		{
			img: require("../assets/img/kaisa.jpg"),
			user: require("../assets/img/riot.png"),
			name: "Riot",
			city: "USA",
		},
		{
			img: require("../assets/img/hu tao.jpg"),
			user: require("../assets/img/genshin.jpg"),
			name: "Genshin",
			city: "Chinese",
		},
		{
			img: require("../assets/img/optimus.jpg"),
			user: require("../assets/img/autobots.png"),
			name: "Autobots",
			city: "USA",
		},
		{
			img: require("../assets/img/guilty crown.webp"),
			user: require("../assets/img/gc-logo.webp"),
			name: "Guilty Crown",
			city: "JAPAN",
		},
		{
			img: require("../assets/img/flash.png"),
			user: require("../assets/img/logo flash.png"),
			name: "Flash",
			city: "DC",
		},
	];
	return (
		<div className="mt-5 overflow-hidden flex">
			{datas.map((data) => (
				<div className="relative mr-2" key={data.img}>
					<Image
						className="rounded-3xl"
						objectFit="cover"
						src={data.img}
						layout="fixed"
						alt={"imagen"}
						width={120}
						height={200}
					/>
					<div className="absolute top-3 left-1">
						<Image
							className="rounded-full "
							objectFit="cover"
							layout="fixed"
							width={40}
							height={40}
							src={data.user}
							alt={"imagen"}
						/>
					</div>
					<div className="absolute right-1 bottom-4 text-white">
						<h5 className="text-2xl font-bold">{data.name}</h5>
						<p className="text-sm">{data.city}</p>
					</div>
				</div>
			))}
		</div>
	);
}
