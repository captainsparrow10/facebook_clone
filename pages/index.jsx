import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Content from "../components/Principal";

export default function index() {
	return (
		<div>
			<Head>
				<title>Facebook</title>
			</Head>
			{/* Header */}
			<Header />
			<main>
				{/* SideBar */}
				{/* Principal content */}
				<Content />
				{/* Contacts and Widgets */}
			</main>
		</div>
	);
}
