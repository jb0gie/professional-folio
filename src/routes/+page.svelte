<script>
  // @ts-nocheck
  import { Canvas } from '@threlte/core';
  import MainThrene from './MainThrene.svelte';
  import pfp_closeup from '$lib/images/jj.png';
</script>

<svelte:head>
  <meta name="description" content="my professional personal page" />
</svelte:head>

<div class="relative py-3 sm:max-w-xl sm:mx-auto">
  <div
    class="relative px-4 py-10 bg-white shadow-lg rounded-3xl p-20 bg-clip-padding bg-opacity-60 border border-gray-200 sm:p-12 lg:p-16"
    style="backdrop-filter: blur(20px);"
  >
    <div class="max-w-md mx-auto justify-center items-center flex flex-col lg:flex-row">
      <img
        class="h-48 sm:h-48 lg:h-64 rounded-full mb-4 lg:mb-0"
        src={pfp_closeup}
        alt="2017 - Kin NYC"
      />
      <div class="space-y-4 text-gray-700 text-3xl sm:text-3xl lg:text-3xl">
        <h1 class="mb-2 sm:mb-6 lg:mb-6">
          <strong>
            <em>I am a</em>
          </strong>
        </h1>
        <div class="pt-6 font-bold sm:text-2xl lg:text-2xl">
          <h2 class="text-center mb-2 sm:mb-4 lg:mb-6">
            <span
              style="
                color: transparent;
                background-clip: text;
                -webkit-background-clip: text; 
                background-image: url('https://media2.giphy.com/media/JlVxiw2MrW4DwKeG4e/giphy.gif?cid=ecf05e47havsfdo7vnub33cofwhw8suyhqvh1e5t1wr1veb4&rid=giphy.gif&ct=g');"
            >
              technical
            </span>
            <br />
            <strong
              style="
                color: transparent; 
                background-clip: text;
                -webkit-background-clip: text; 
                background-image: url('https://media2.giphy.com/media/bTDdkhpX34Hwp1eaiS/200w.webp?cid=ecf05e47havsfdo7vnub33cofwhw8suyhqvh1e5t1wr1veb4&rid=200w.webp&ct=g');"
            >
              savant
            </strong>
          </h2>
        </div>
        <div class="pt-6 font-bold sm:text-lg lg:text-xl">
          <p class="text-right">
            <a href="/about" class="hover:">more on me &rarr; 🔎 </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>








<!-- this will replace the scene once i know more 
  <Canvas>
  <MainThrene />
</Canvas> -->