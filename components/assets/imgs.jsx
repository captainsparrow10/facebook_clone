import Image from "next/image";
import React from "react";
import sparrow from "./img/facebook-profile.jpg"

function HeaderImg() {
	return (
		<div className="imgicon  mr-2">
			<Image
				className="rounded-full"
				objectFit="cover"
				src={sparrow}
				layout="fill"
				alt="facebook logo"
			/>
		</div>
	);
}
function SidebarImg() {
	return (
		<div className="relative w-[30px] h-[30px] cursor-pointer">
			<Image
				className="rounded-full"
				objectFit="cover"
				src={sparrow}
				layout="fill"
				alt="facebook logo"
			/>
		</div>
	);
}

export { SidebarImg, HeaderImg};
