import React from "react";
import Content from "../components/principal/index.jsx";
import SideBar from "../components/principal/SideBar.jsx";
import Contacts from "../components/principal/Contacts.jsx";
export default function index() {
	return (
		<>
			<main className="flex justify-center xl:justify-between">
				{/* SideBar aparece en full screen*/}
				<SideBar />
				{/* Principal content */}
				<Content />
				{/* Contacts and Widgets  cuando esta en 1024 */}
				<Contacts />
			</main>
		</>
	);
}
