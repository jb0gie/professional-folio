<script>
  import { Canvas } from '@threlte/core'; 
  import Threne from './Threne.svelte';
  import flag_us from './us.png';
  import flag_gd from './gd.png';
  import flag_ca from './ca.png';
  /**
   * @type {any}
   */
  export let us;
  /**
   * @type {any}
   */
  export let gd;
  /**
   * @type {any}
   */
  export let ca;
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
<br />
<ul class="list-disc space-y-2 px-12">
  <li class="flex items-start">
    <img class="h-6 flex items-center sm:h-7" src={flag_us} alt="" />
    <p class="ml-2">{us}</p>
  </li>
  <li class="flex items-start">
    <img class="h-6 flex items-center sm:h-7" src={flag_gd} alt="" />

    <p class="ml-2">{gd}</p>
  </li>
  <li class="flex items-start">
    <img class="h-6 flex items-center sm:h-7" src={flag_ca} alt="" />
    <p class="ml-2">{ca}</p>
  </li>
</ul>