import { getContext } from 'svelte';

export const useTheme = () => {
  const theme = getContext('theme');
  return theme;
};
