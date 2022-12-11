<script>
  import { Canvas } from '@threlte/core'; 
  import Threne from './Threne.svelte';
  /**
   * @type {any}
   */
  export let uk;
</script>
<p>I was born in {uk} and raised in various places, such as:</p>
<!-- <wrapper class="relative h-full"></wrapper> -->
<Canvas>
  <Threne/>
</Canvas>