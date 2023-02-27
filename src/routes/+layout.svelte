<script>
  import '../app.postcss';
  import { confetti } from '@neoconfetti/svelte';
  import { tick } from 'svelte';
  import ThemeToggle from './ThemeToggle.svelte';
  let isVisible = false;
  import Footer from './Footer.svelte';
</script>

<div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="w-full navbar bg-base-300">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
      </div>
      <div class="flex-1 px-2 mx-2">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a
          href=""
          class="btn btn-ghost normal-case text-xl"
          on:click={async () => {
            isVisible = false;
            await tick();
            isVisible = true;
          }}
        >
          Hi 👋, Welcome 🙏
        </a>
        {#if isVisible}
          <div>
            <div use:confetti />
          </div>
        {/if}
      </div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          <!-- Navbar menu content here -->
          <li><a href="/">Home 🏠</a></li>
          <li><a href="/about">About 📜</a></li>
          <li><a href="/connect">Connect 🤙</a></li>
          <li><ThemeToggle /></li>
        </ul>
      </div>
    </div>
    <!-- Page content here -->
    <slot />
    <Footer />
  </div>
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay" />
    <ul class="menu p-4 w-80 bg-base-100">
      <!-- Sidebar content here -->
      <li><a href="/">Home 🏠</a></li>
      <li><a href="/about">About 📜</a></li>
      <li><a href="/connect">Connect 🤙</a></li>
      <li><ThemeToggle /></li>
    </ul>
  </div>
</div>

<!-- <div class="flex flex-col min-h-screen">
  <Header />

  <div class="flex flex-col p-4 w-full box-border">
    <slot />
  </div>

</div> -->
