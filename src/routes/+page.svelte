<script>
  import { Canvas } from '@threlte/core';
  import MainThrene from './MainThrene.svelte';
  import pfp_closeup from '$lib/images/jj.png';
</script>

<svelte:head>
  <title>I'm Jermaine John</title>
  <meta name="description" content="Jermaine's professional" />
</svelte:head>

<!-- <Canvas>
  <MainThrene />
</Canvas> -->
<div class="h-full w-full">
  <section class="flex flex-col justify-center items-center">
    <img
      class="h-24 sm:h-80 rounded-full"
      src={pfp_closeup}
      alt="2017 - Kin NYC"
    />
    <br />
    <h1 class="text-4xl">
      <span class="block relative w-full h-0">
        
        <em>Hey I'm,</em>
        <strong>JERMAINE JOHN</strong>
      </span>
    </h1>
    <br />
    <br />  
    <h2>
      the <em>technical</em>
      <strong>savaunt</strong>
    </h2>
  </section>
</div>
