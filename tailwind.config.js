/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'kaisa': "url('/components/assets/img/facebook-profile.jpg')",
			},
		},
	},
	plugins: [],
};
