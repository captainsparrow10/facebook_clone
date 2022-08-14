import { watchIcons } from "../assets/const/icons";
import { SidebarIcons } from "../assets/const/functions";
import { AiOutlineSearch } from "react-icons/ai";
import { RiSettings5Fill } from "react-icons/ri";

export default function SideBarWatch() {
	return (
		<div className=" hidden sm:inline-block sm:w-2/6 lg:w-1/5 md:h-screen">
			<div className="fixed sm:w-2/6 lg:w-1/5 bg-white h-full pt-5 px-2">
				<div className="h-[80%] hover:overflow-y-auto overflow-hidden scroll-smooth">
					<div className="flex justify-between">
						<h2 className="font-bold cursor-defaul">Watch</h2>
						<div className="p-1 bg-gray-100 rounded-full hover:bg-gray-300">
							<RiSettings5Fill className="h-6 w-6 text-gray-800" />
						</div>
					</div>
					<div className="bg-gray-100 rounded-full hover:bg-gray-300 flex my-4">
						<AiOutlineSearch className="iconheader-lateral" />
						<input
							type="text"
							placeholder="Buscar en facebook"
							className="bg-transparent rounded-full"
						/>
					</div>
					<SidebarIcons dataIcons={watchIcons} />
					<div className="flex justify-between titulo-lateral border-t py-3">
						<p className="cursor-defaul">Seguidas</p>
						<p className="cursor-defaul text-blue-400">Administrar</p>
					</div>
				</div>
			</div>
		</div>
	);
}
