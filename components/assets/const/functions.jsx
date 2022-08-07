import Image from "next/image";
import React from "react";
import sparrow from "../img/facebook-profile.jpg"

function ImgProfile({url}) {
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

export {ImgProfile}