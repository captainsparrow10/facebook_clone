/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: "Helvetica, Arial, sans-serif",
			},
			animation: {
				"spin-slow": "spin 3s linear infinite",
			},
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
