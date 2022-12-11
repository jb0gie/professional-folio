<script>
  import {
    AmbientLight,
    DirectionalLight,
    OrbitControls,
    PerspectiveCamera,
    useThrelte,
  } from '@threlte/core';
  import { Environment, GLTF } from '@threlte/extras';
  import { onDestroy } from 'svelte';
  import { GridHelper, Mesh as ThreeMesh } from 'three';
  
  const { scene } = useThrelte();
  

  const gridHelper = new GridHelper(30);
  gridHelper.position.y = -10;
  scene.add(gridHelper);
  
  onDestroy(() => {
    scene.remove(gridHelper);
  });
</script>

<Environment path="hdr/" files="Studio_01.hdr" />

<PerspectiveCamera position={{ z: 20 }} fov={50}>
  <OrbitControls target={{ y: -2 }} enableDamping />
</PerspectiveCamera>

<DirectionalLight position={{ y: 10, z: 10 }} />

<AmbientLight intensity={0.3} />

<!-- each flag place in mid norm 2.5 of 5x5 quad -->
<GLTF url="models/ca.glb" /> 
<GLTF url="models/gd.glb" />
<GLTF url="models/us.glb" />
<GLTF url="models/uk.glb" />