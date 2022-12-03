<script>
  import Counter from './Counter.svelte';
  import pfp_closeup from '$lib/images/jj2.png';
</script>

<svelte:head>
  <title>I'm Jermaine John</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>
		<picture>
			<img src={pfp_closeup} alt="Welcome" />
		</picture>
    <span class="welcome">
      <!-- replace with threlte cube starter -->
      <em>Hey I'm,</em>
      <strong>JERMAINE JOHN</strong>
    </span>
  </h1>

  <h2>
    a technical <strong>savaunt</strong>
  </h2>

  <Counter />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  h1 {
    width: 100%;
  }

  .welcome {
    display: block;
    position: relative;
    width: 100%;
    height: 0;
    padding: 20;
  }

  .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }
</style>
