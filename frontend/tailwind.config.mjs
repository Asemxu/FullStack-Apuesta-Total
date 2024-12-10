/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'pokemon-blue': '#2E3192',
				'pokemon-light': '#00B9FF'
			}
		},
	},
	plugins: [],
}
