<script>
  import { Canvas } from '@threlte/core';
  import { HTML } from '@threlte/extras';
  import { Debug, World } from '@threlte/rapier';
  import About from './About.svelte';
  import Threne from './Threne.svelte';

  const placesLived = {
    us: 'US',
    gn: 'GN',
    ca: 'CA',
    uk: 'UK',
  };
</script>

<!-- <p>I was born in the {placesLived.uk} and raised in various places, such as:</p> -->

<Canvas>
  <Threne {...placesLived}/>
  <!-- maybe one day i'll use this 🤔 but rn it's a longness and i gotta apply for MOAR JOBS ❗
    <World>
    <About {...placesLived}/>

    <HTML slot="fallback" transform>
			<p>
				It seems your browser<br />
				doesn't support WASM.<br />
				I'm sorry.
			</p>
		</HTML>
  </World> -->
</Canvas>

