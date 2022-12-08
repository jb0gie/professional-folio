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
  <h1 class="text-3xl">Yes, I am Jermaine.</h1>
  <br />
  <article>
    <h2>
      I am a media specialist with a passion for using webXR and artificial
      intelligence in my art. I have always been drawn to the intersection of
      technology and creativity.
    </h2>
  </article>
	<br />
  <Info {...placesLived} />
	<br />
	<Info2 />
  <p>
    If you would like to <a href="/connect">.\connect</a>
    I'd love to see how I can help you fulfill you're wishes.
  </p>
</div>
