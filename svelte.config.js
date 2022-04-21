import preprocess from 'svelte-preprocess';
//import adapter from '@sveltejs/adapter-static';
import cloudflare from '@sveltejs/adapter-cloudflare';
//import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		//adapter: adapter({ out: 'build' }),
		adapter: cloudflare(),
		//adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html

	},


	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
