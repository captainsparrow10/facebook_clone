import React from "react";
import { ImgProfile } from "../assets/const/functions";
import { inputIcon } from "../assets/const/icons";
export default function InputBox() {
	return (
		<div className="shadow-lg bg-white mt-6 rounded-lg h-[130px] p-3">
			<div className="flex justify-evenly items-center h-1/2 w-full mb-2">
				<div className="flex justify-center">
					<ImgProfile />
				</div>
				<div className="w-full px-2">
					<input
						className="w-full rounded-full bg-gray-100 py-2 px-4"
						type="text"
						placeholder="What's on your mind?"
					/>
				</div>
			</div>
			<div className="w-full border-t flex items-center justify-evenly h-1/2 pt-2 pb-1">
				{inputIcon.map((input) => (
					<div
						className="flex h-full items-center cursor-pointer hover:bg-gray-100 w-full justify-center rounded-lg"
						key={input.name}
					>
						<input.icon className={`h-7 w-7 ${input.color}`} />
						<p className="ml-3 text-gray-500">{input.name}</p>
					</div>
				))}
			</div>
		</div>
	);
}
