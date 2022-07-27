import Head from "next/head";
import React from "react";
import Content from "../components/Principal";
import SideBar from "../components/Principal/SideBar";
import Contacts from "../components/Principal/Contacts";
export default function index() {
	return (
		<>
			<main className="flex justify-center xl:justify-between">
				{/* SideBar aparece en full screen*/}
				<SideBar />
				{/* Principal content */}
				<Content  />
				{/* Contacts and Widgets  cuando esta en 1024 */}
				<Contacts />
			</main>
		</>
	);
}
