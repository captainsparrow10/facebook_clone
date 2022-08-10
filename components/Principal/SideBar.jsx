import React from "react";
import { ImgProfile, SidebarIcons } from "../assets/const/functions";
import { sidebar, sidebarAd } from "../assets/const/icons";
export default function SideBar() {
	return (
		<div className="hidden xl:inline-block fixed top-20 left-5 w-1/6 h-screen">
			<div className="h-[80%] hover:overflow-y-auto overflow-hidden scroll-smooth">
				<div className="flex flex-col">
					<div className="sidebar">
						<div className="flex items-center">
							<ImgProfile />
						</div>
						<h3 className="texto-lateral">Sparrow</h3>
					</div>
					<SidebarIcons dataIcons={sidebar} />
				</div>
				<div>
					<h2 className="titulo-lateral border-t py-3">Tus accesos directos</h2>
					<SidebarIcons dataIcons={sidebarAd} />
				</div>
			</div>
		</div>
	);
}
