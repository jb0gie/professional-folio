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
<section class="flex flex-col justify-center items-center">
  <br />
  <br />
  <br />
  <img
    class="h-24 sm:h-80 rounded-full"
    src={pfp_closeup}
    alt="2017 - Kin NYC"
  />
  <br />
  <br />
  <h1 class="text-5xl">
    <span class="block relative w-full h-0">
      <em>Hey I'm,</em>
      <strong
        style="color: transparent; background-clip: text;
  -webkit-background-clip: text; background-image: url('https://media2.giphy.com/media/JlVxiw2MrW4DwKeG4e/giphy.gif?cid=ecf05e47havsfdo7vnub33cofwhw8suyhqvh1e5t1wr1veb4&rid=giphy.gif&ct=g');"
      >
        JERMAINE JOHN
      </strong>
    </span>
  </h1>
  <br />
  <br />
  <br />
  <h2 class="text-3xl">
    the <em>technical</em>
    <strong>savaunt</strong>
  </h2>
</section>
