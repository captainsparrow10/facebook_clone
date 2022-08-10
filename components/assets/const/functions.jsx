import Image from "next/image";
import React from "react";
import sparrow from "../img/facebook-profile.jpg";

function ImgProfile({ url }) {
	return (
		<div className="relative w-[40px] h-[40px] cursor-pointer ">
			<Image
				className="rounded-full"
				objectFit="cover"
				src={url || sparrow}
				layout="fill"
				alt="facebook logo"
			/>
		</div>
	);
}

function SidebarIcons({dataIcons}) {
	return (
		<div className="flex flex-col">
			{dataIcons.map((data) => (
				<div className="sidebar" key={data.texto}>
					<div className={data.classDiv}>
						<data.icono className={data.class} />
					</div>
					<h3 className="texto-lateral">{data.texto}</h3>
				</div>
			))}
		</div>
	);
}

export { ImgProfile, SidebarIcons };
