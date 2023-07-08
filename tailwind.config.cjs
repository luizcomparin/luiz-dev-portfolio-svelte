/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'red-hat': "'Red Hat Display',sans-serif"
			},
			colors: {
				'port-bg': '#283845',
				'port-bg2': '#173954'
			}
		}
	},

	plugins: []
};

module.exports = config;
