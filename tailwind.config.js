/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {},
		},
		fontFamily: {
			montserrat: ["Montserrat"],
			lato: ["Lato"],
			garamond: ["Garamond"],
			sans: ["ui-sans-serif", "system-ui"],
			serif: ["ui-serif", "Georgia"],
			mono: ["ui-monospace", "SFMono-Regular"],
		},
	},
	plugins: [],
};
