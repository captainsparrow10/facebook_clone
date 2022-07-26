import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Content from "../components/Principal";
import Contacts from "../components/Principal/Contacts";

export default function index() {
	return (
		<div>
			<Head>
				<title>Facebook</title>
			</Head>
			{/* Header */}
			<Header />
			<main className="flex justify-center">
				{/* SideBar aparece en full screen*/}
				{/* Principal content */}
				<Content  />
				{/* Contacts and Widgets  cuando esta en 1024 */}
				<Contacts/>
			</main>
		</div>
	);
}