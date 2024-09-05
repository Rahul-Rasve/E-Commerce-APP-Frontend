/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./screens/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			boxShadow: {
				// neon: "0 0 5px colors-purple-200, 0 0 20px colors-purple-700",
			},
			colors: {
				primary_background: "#e1d5c9",
				primary_title: "#1e2225",
				primary_button: "#1e2225",
			},
		},
	},
	plugins: [],
};
