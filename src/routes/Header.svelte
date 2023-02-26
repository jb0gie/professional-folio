<script lang="ts">
	import { confetti } from '@neoconfetti/svelte';
	import { tick } from 'svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	let isVisible = false;
  import logo from '$lib/images/linkedin.svg';
  import github from '$lib/images/github.svg';
</script>

<!-- <a href="https://www.linkedin.com/in/web3genie/">
        <img src={logo} alt="LinkedIn" />
      </a>

<a href="https://github.com/jb0gie">
        <img src={github} alt="GitHub" />
      </a> -->

<div class="navbar bg-base-100">
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0" class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a href="/">Home 🏠</a></li>
				<li><a href="/about">About 📜</a></li>
				<li><a href="/connect">Connect 🤙</a></li>
			</ul>
		</div>
		<!-- svelte-ignore a11y-invalid-attribute -->
	</div>
		<!-- svelte-ignore a11y-invalid-attribute -->
	<div class="navbar-center">
		<a
			href="#"
			class="btn btn-ghost normal-case text-xl"
			on:click={async () => {
				isVisible = false;
				await tick();
				isVisible = true;
			}}
			>W3LP, it's CONT3NT. (🪔,🧞)
		</a>
		{#if isVisible}
			<div>
				<div use:confetti />
			</div>
		{/if}
	</div>
	<div class="navbar-end">
		<ThemeToggle />
	</div>
</div>

<style>
	:global(body) {
		overflow: hidden;
	}

	div {
		display: flex;
		justify-content: center;
	}
</style>
