// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
    colorTheme: import('$lib/types').ColorTheme;
  }
  // interface Platform {}
  interface Session {
    colorTheme: import('$lib/types').ColorTheme;
  }
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}
