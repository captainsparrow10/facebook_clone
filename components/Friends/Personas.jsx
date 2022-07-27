import React from "react";

export default function Personas() {
	const animes = fetch("https://api.jikan.moe/v4/anime?q=&sfw/data")
		.then((response) => response.json())
		.then((quote) => console.log(quote));
    console.log(animes)
	return (
		<div className="w-5/6">
			<div>
				<div className="flex justify-between">
					<h1>Personas que quizá conozcas</h1>
					<h1>Ver todas</h1>
				</div>
			</div>
		</div>
	);
}
