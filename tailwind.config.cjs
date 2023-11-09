/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'red-hat': "'Red Hat Display',sans-serif",
			},
			colors: {
				'port-bg': '#283845',
				'port-bg2': '#173954',
			},
			dropShadow: {
				'luiz-md': '0px 0px 5px #00000050',
				'luiz-lg': '0px 0px 10px #00000040',
			},
		},
	},

	plugins: [],
}

module.exports = config
