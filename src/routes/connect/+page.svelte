<script>
	import { confetti } from '@neoconfetti/svelte';
	import { enhance } from '$app/forms';

	let name = '';
  let email = '';
  let message = '';

	function handleSubmit() {
		
	}
</script>

<svelte:head>
	<title>Connect with me</title>
	<meta name="description" content="Connect with me" />
</svelte:head>

<form on:submit|preventDefault={handleSubmit}>
  <label>
    Name:
    <input type="text" bind:value={name} />
  </label>

  <label>
    Email:
    <input type="email" bind:value={email} />
  </label>

  <label>
    Message:
    <textarea bind:value={message} />
  </label>

	<div>
		<div use:confetti={{
			force: 0.7,
			stageWidth: window.innerWidth,
			stageHeight: window.innerHeight,
			colors: ['#ff3e00', '#40b3ff', '#676778']
		}} />
  <button type="submit">Send</button>
	</div>
</form>


<style>
	form {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		flex: 1;
	}

	

	input {
		aspect-ratio: 1;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		box-sizing: border-box;
		text-transform: lowercase;
		border: none;
		font-size: calc(0.08 * var(--width));
		border-radius: 2px;
		background: white;
		margin: 0;
		color: rgba(0, 0, 0, 0.7);
	}

	input:disabled:not(.exact):not(.close) {
		background: rgba(255, 255, 255, 0.5);
		color: rgba(0, 0, 0, 0.5);
	}


	@keyframes wiggle {
		0% {
			transform: translateX(0);
		}
		10% {
			transform: translateX(-2px);
		}
		30% {
			transform: translateX(4px);
		}
		50% {
			transform: translateX(-6px);
		}
		70% {
			transform: translateX(+4px);
		}
		90% {
			transform: translateX(-2px);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>