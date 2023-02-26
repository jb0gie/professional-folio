<script>
  import '../app.postcss';
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
</script>

<div class="flex flex-col min-h-screen">
  <Header />

  <main class="flex flex-col p-4 w-full box-border">
    <slot />
  </main>

  <Footer />
</div>

<style>
  main {
    flex: 1;
    max-width: 80rem;
    margin: 0 auto;
  }
</style>
