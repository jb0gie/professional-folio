<script>
  import Info from './Info.svelte';
  const placesLived = {
    us: 'Brooklyn, NYC',
    gd: 'St.Georges, GN',
    ca: 'Ajax, CA',
    uk: 'Ealing, UK',
  };
  import Info2 from './Info2.svelte';
</script>

<svelte:head>
  <title>About Jermaine John</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
  <h1 class="text-3xl">
    Yes,
    <em
      style="color: transparent; background-clip: text;
  -webkit-background-clip: text; background-image: url('https://media2.giphy.com/media/JlVxiw2MrW4DwKeG4e/giphy.gif?cid=ecf05e47havsfdo7vnub33cofwhw8suyhqvh1e5t1wr1veb4&rid=giphy.gif&ct=g');"
    >
      I am Jermaine.
    </em>
  </h1>
  <br />
  <article>
    <h2>
      I am a media specialist with a passion for using webXR and artificial
      intelligence in my art. I have always been drawn to the intersection of
      technology and creativity.
    </h2>
  </article>
  <br />
  <Info />
  <br />
  <Info2 />
  <br />
  <p>
    If you would like to <a href="/connect">.\connect</a>
    I'd love to see how I can help you fulfill you're wishes.
  </p>
</div>
