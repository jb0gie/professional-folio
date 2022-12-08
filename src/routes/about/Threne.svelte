<script>
  import {
    AmbientLight,
    DirectionalLight,
    OrbitControls,
    PerspectiveCamera,
    useThrelte,
  } from '@threlte/core';
  import { Environment, useGltf } from '@threlte/extras';
  import { onDestroy } from 'svelte';
  import { derived } from 'svelte/store';
  import { GridHelper, Mesh as ThreeMesh } from 'three';
  const { scene } = useThrelte();
  const { gltf } = useGltf('/models/blobs/blobs.glb', {
    useDraco: true,
  });
  const meshes = derived(gltf, gltf => {
    if (!gltf) return undefined;
    return Object.values(gltf.nodes);
  });
  const gridHelper = new GridHelper(30);
  gridHelper.position.y = -10;
  scene.add(gridHelper);
  onDestroy(() => {
    scene.remove(gridHelper);
  });
</script>

<Environment path="$libimages/hdr/" files="cinema_lobby_4k.exr" />

<PerspectiveCamera position={{ z: 20 }} fov={50}>
  <OrbitControls target={{ y: -2 }} enableDamping />
</PerspectiveCamera>

<DirectionalLight position={{ y: 10, z: 10 }} />

<AmbientLight intensity={0.3} />

{#if $meshes}
  {#each $meshes as mesh}
    <Blob geometry={mesh.geometry} />
  {/each}
{/if}
