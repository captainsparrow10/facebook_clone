import React from "react";
import { v4 } from "uuid";
import { iframes } from "../assets/const/data";
import { ImgProfile } from "../assets/const/functions";
import { reactionComments, reactions } from "../assets/const/icons";

export default function Videos() {
	return (
		<div className="w-full flex items-center flex-col p-2  sm:w-4/6 lg:w-4/5  ml-2">
			{iframes.map((iframe) => (
				<div className="w-full" key={v4()}>
					<div className="my-8 shadow-md pb-2 bg-white rounded-lg">
						<div className="p-4">
							<div className="flex items-center px-2">
								<ImgProfile />
								<div className="px-2">
									<h3 className="texto-titulo font-bold">Sparrow</h3>
									<p className="text-gray-500">2h</p>
								</div>
							</div>
							<div className="px-2 text-justify py-1 texto-generico">
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Nesciunt aliquam natus dolorem illo vitae voluptatibus earum?
									Ratione, reprehenderit, recusandae, vel sapiente eaque
									voluptatem rem adipisci dolorum incidunt explicabo laborum
									delectus?
								</p>
							</div>
						</div>
						<div className="relative w-full">
							{iframe.video}
						</div>
						<div className="p-4 flex justify-center items-center border-t">
							{reactions.map((reaction) => (
								<div
									className="flex h-full items-center cursor-pointer hover:bg-gray-100 w-full justify-center rounded-lg"
									key={reaction.name}
								>
									<reaction.icon className={`h-5 w-5 text-gray-500`} />
									<p className="ml-3 text-gray-500">{reaction.name}</p>
								</div>
							))}
						</div>
						<div className="flex justify-evenly items-center w-full p-4 border-t">
							<div className="flex justify-center">
								<ImgProfile />
							</div>
							<div className="w-full px-2 h-full flex items-center bg-gray-100 rounded-full">
								<div className="w-4/5 lg:5/6">
									<input
										className="w-5/6 sm:w-full bg-transparent py-2 px-4"
										type="text"
										placeholder="Text a comment..."
									/>
								</div>
								<div className="flex w-1/5 lg:1/6 justify-end ml-4 lg:m-0">
									{reactionComments.map((reaction) => (
										<div
											className="hover:bg-gray-300 rounded-full p-2"
											key={reaction.icon}
										>
											<reaction.icon className="text-gray-500" />
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
