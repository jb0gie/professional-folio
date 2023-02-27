<script>
  // @ts-nocheck
  // import { Canvas } from '@threlte/core';
  // import MainThrene from './MainThrene.svelte';
  import pfp_closeup from '$lib/images/pic1.png';
</script>

<svelte:head>
  <title>I am me</title>
  <meta name="description" content="my professional personal page" />
</svelte:head>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content">
    <div class="avatar">
      <div
        class="w-64 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
      >
        <img src={pfp_closeup} alt="2017 - Kin NYC" />
      </div>
    </div>

    <div class="max-w-md px-12">
      <div class="mockup-code">
        <pre data-prefix="$"><code>npx i am-me -pro --folio</code></pre>
        <pre
          data-prefix=">"
          class="text-warning"><code>installing...</code></pre>
        <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
        <br />
        <pre data-prefix=">"><code>I am a</code></pre>
        <pre data-prefix=">"><code style="color: transparent; background-clip: text; -webkit-background-clip: text; 
                background-image: url('https://i.giphy.com/media/ToMjGpAzmvYWQYWQn8Q/giphy.webp');">technical</code> <code style="color: transparent; background-clip: text; -webkit-background-clip: text; background-image: url('https://i.giphy.com/media/l3vReuFsyO7j8HVLO/giphy.webp');">savant</code>
        </pre>
        <pre data-prefix=">"><code><a href="/about" class="link link-hover">learn more </a></code></pre>
      </div>
    </div>
  </div>
</div>

<!-- 




<div class="relative py-3 sm:max-w-xl sm:mx-auto">
  <div class="relative px-4 py-10 rounded-3xl p-20 sm:p-12 lg:p-16">
    <div class="pt-6 font-bold sm:text-lg lg:text-xl">
      <h1 class="text-center mb-2 sm:mb-6 sm:text-2xl lg:mb-6" lg:text-3xl>
        
      </h1>
      <h2 class="text-center mb-2 sm:mb-4 sm:text-2xl lg:mb-6 lg:text-6xl">
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
      <p class="text-right">
        <a href="/about" class="hover:">more on me &rarr; 🔎</a>
      </p>
    </div>  
  </div>
</div> -->

<!-- this will replace the scene once i know more -->
<!--
  <Canvas>
  <MainThrene />
</Canvas> -->
