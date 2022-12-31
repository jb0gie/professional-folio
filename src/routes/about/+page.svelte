<script>
  import Info from './Info.svelte';
  import pfp_closeup from '$lib/images/pic2.png';

  const placesLived = {
    us: 'Brooklyn, NYC',
    gd: 'St.Georges, GN',
    ca: 'Ajax, CA',
    uk: 'Ealing, UK',
  };
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
  <h1 class="text-2xl">
    Yes,
    <em
      style="color: transparent; background-clip: text;
      -webkit-background-clip: text; background-image: url('https://media2.giphy.com/media/JlVxiw2MrW4DwKeG4e/giphy.gif?cid=ecf05e47havsfdo7vnub33cofwhw8suyhqvh1e5t1wr1veb4&rid=giphy.gif&ct=g');"
    >
      I am me.
    </em>
  </h1>
  <br />
  <article class="text-lg">
    <p>
      I am a media specialist with a passion for using webXR and artificial
      intelligence in my art. I have always been drawn to the intersection of
      technology and creativity.
    </p>
    <br />
    <p>
      As a media specialist, I have extensive experience with a variety of
      digital tools and platforms, and I love using these skills to push the
      boundaries of what is possible in the world of art.
    </p>
    <br />
    <p>
      In my work, I strive to create immersive and engaging experiences that
      explore the potential of these exciting technologies. Whether I am
      creating a virtual reality installation or using AI to generate unique
      visualizations, my goal is always to push the boundaries of what is
      possible and to inspire others to do the same.
    </p>
    <br />
    <p>
      Growing up, I was surrounded by a vibrant arts community and was
      constantly inspired by the creative energy of the city. I studied media
      and art in college and have been working as a media specialist for over 10
      years. In recent years, I have been focusing on using webXR and AI to create
      interactive and engaging works of art. This technology allows me to create
      immersive experiences that truly captivate and engage my audience.
    </p>
    <br />
    <p>
      Aside from my work as a media specialist, I am also a passionate artist
      who loves to explore new mediums and push the boundaries of traditional
      art forms.
    </p>
  </article>
  <br />
  <p class="text-xl">
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
<!-- SOOM.
    <br />
<Info />
  <br /> -->
