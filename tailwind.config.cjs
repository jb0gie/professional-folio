/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: [
      'lofi',
      'retro',
      'dark',
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
