import React from "react";
import InputBox from "./InputBox";
import Published from "./Published";
import Stories from "./Stories";

export default function Content() {
	return (
		<div className="content">
			{/* Historias */}
			<Stories />
			{/* Publicacion */}
			<InputBox />
			{/* Publicaciones */}
			<Published />
		</div>
	);
}
