/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./screens/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary_background: "#e1d5c9",
				primary_title: "#1e2225"
			},
		},
	},
	plugins: [],
};
