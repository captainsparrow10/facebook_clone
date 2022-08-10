import { CogIcon } from "@heroicons/react/outline";
import React from "react";
import { friendIcons } from "../assets/const/icons";

export default function SideBarFriends() {
	return (
		<div className="sm:w-2/6 lg:w-1/6 pl-2 hidden sm:inline-flex">
			<div className="w-full">
				<div className="flex justify-between">
					<h2 className="font-bold cursor-defaul">Amigos</h2>
					<CogIcon className="icon animate-spin-slow" />
				</div>
				<div className="flex flex-col">
					{friendIcons.map((friend) => (
						<div className="sidebar" key={friend.texto}>
							<div className={friend.classDiv}>
								<friend.icono className={friend.class} />
							</div>
							<h3 className="texto-lateral">{friend.texto}</h3>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
