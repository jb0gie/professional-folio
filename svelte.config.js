import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-auto';
import seqPreprocessor from 'svelte-sequential-preprocessor'
import { preprocessThrelte } from '@threlte/preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter()
  },
  preprocess: seqPreprocessor([preprocess({ postcss: true }), preprocessThrelte()])
};

export default config;
