import preprocess from 'svelte-preprocess';
//import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-cloudflare';
import vercel from '@sveltejs/adapter-vercel';
//import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		//adapter: adapter({ out: 'build' }),
		adapter: vercel({ edge : false, external: [], split: false})
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
