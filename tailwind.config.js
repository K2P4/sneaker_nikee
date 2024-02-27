
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			san: ["Rubik", "san-serif"],
		},

		extend: {
			fontFamily: {
				heading: ["Montserrat", "sans-serif"],
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};