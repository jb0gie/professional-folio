<script>
  // import Info from './Info.svelte';
  import pfp_closeup from '$lib/images/pic2.png';
  // const placesLived = {
  //   us: 'Brooklyn, NYC',
  //   gd: 'St.Georges, GN',
  //   ca: 'Ajax, CA',
  //   uk: 'Ealing, UK',
  // };
</script>

<svelte:head>
  <title>About me</title>
  <meta name="description" content="A little bit about me" />
</svelte:head>
<br />
<br />
<div class="text-column">
  <div class="max-w-md mx-auto justify-center items-center">
    <img
      class="h-48 sm:h-48 lg:h-64 rounded-full mb-4 lg:mb-0"
      src={pfp_closeup}
      alt="2017 - Kin NYC"
    />
  </div>
  <br />
  <div class="max-w-prose mx-auto lg:text-lg">
    <div class="mt-8 prose mx-auto lg:prose-lg">
      <p>
        I am a media specialist with a passion for using webXR and artificial
        intelligence in my art. I have extensive experience with digital tools
        and platforms and enjoy using them to create immersive and engaging
        experiences that explore the potential of these exciting technologies.
      </p>
    </div>
    <br />
    <p>
      If you would like to,
      <a href="/connect">
        <strong
          style=" 
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          background-image: url('https://media2.giphy.com/media/bTDdkhpX34Hwp1eaiS/200w.webp?cid=ecf05e47havsfdo7vnub33cofwhw8suyhqvh1e5t1wr1veb4&rid=200w.webp&ct=g');"
        >
          connect
        </strong>
      </a>
      I'd love to see how I can help you fulfill you're wishes.
    </p>
  </div>
</div>
<!-- SOOM.
    <br />
<Info />
  <br /> -->
