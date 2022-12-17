<script>
  import { Canvas } from '@threlte/core'; 
  import Threne from './Threne.svelte';
  const placesLived = {
    us: 'Brooklyn, NYC',
    gd: 'St.Georges, GN',
    ca: 'Ajax, CA',
    uk: 'Ealing, UK',
  };
</script>

<p>I was born in {placesLived.uk} and raised in various places, such as:</p>
<Canvas>
  <Threne {...placesLived}/>
</Canvas>