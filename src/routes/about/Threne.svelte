<script>
  // @ts-nocheck
  import { onDestroy } from 'svelte';
  import {
    FogExp2,
    Pass,
    SpotLight,
    OrbitControls,
    PerspectiveCamera,
    useThrelte,
    T,
  } from '@threlte/core';
  import { Environment, GLTF, Text } from '@threlte/extras';
  import {
    GridHelper,
    IcosahedronGeometry,
    MeshNormalMaterial,
  } from 'three';
  import { DEG2RAD } from 'three/src/math/MathUtils';
  import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';

  const { scene } = useThrelte();
  const gridHelper = new GridHelper(30);
  gridHelper.position.y = -10;
  scene.add(gridHelper);
  onDestroy(() => {
    scene.remove(gridHelper);
  });
  
  /**
   * @type {any}
   */
  export let ca;
  /**
   * @type {any}
   */
  export let gd;
  /**
   * @type {any}
   */
  export let us;
  /**
   * @type {any}
   */
  export let uk;

  // let target;
</script>

<!-- <Pass pass={new GlitchPass()} /> -->
<FogExp2 color={'#dddddd'} density={0.05} />
<Environment path="hdr/" files="Studio_01.hdr" />
<PerspectiveCamera position={{ z: 20 }} fov={90}>
  <OrbitControls target={{ y: -2 }} enableDamping />
</PerspectiveCamera>

<T.DirectionalLight position={{ y: 10, z: 10 }} />
<T.AmbientLight intensity={0.3} />

<SpotLight position={{ x: -7.5, y: 1, z: 7.5 }} color="red" />
<SpotLight position={{ x: 7.5, y: 1, z: 7.5 }} color="green" />
<SpotLight position={{ x: 7.5, y: 1, z: -7.5 }} color="yellow" />
<SpotLight position={{ x: -7.5, y: 1, z: 7.5 }} color="blue" />

<T.Mesh
  geometry={new IcosahedronGeometry()}
  material={new MeshNormalMaterial()}
/>
<T.Group>
</T.Group>

<T.Group>
  <GLTF
    castShadow
    receiveShadow
    url="models/ca.glb"
    position={{ x: -7.5, z: -7.5 }}
    scale={5}
    on:pointerenter={() => {}}
    on:pointerleave={() => {}}
  />
  <GLTF
    castShadow
    receiveShadow
    url="models/gd.glb"
    position={{ x: 7.5, z: 7.5 }}
    scale={5}
  />
  <GLTF
    castShadow
    receiveShadow
    url="models/us.glb"
    position={{ x: 7.5, z: -7.5 }}
    scale={5}
  />
  <GLTF
    castShadow
    receiveShadow
    url="models/uk.glb"
    position={{ x: -7.5, z: 7.5 }}
    scale={5}
  />
</T.Group>

<T.Group>
  <Text
    text={uk}
    position={{ x: -10, y: -2, z: 7.5 }}
    scale={10}
    color="black"
  />
  <Text
    text={ca}
    position={{ x: -9.5, y: -2, z: -7.5 }}
    scale={10}
    color="black"
  />
  <Text text={gd} position={{ x: 4, y: -2, z: 7.5 }} scale={10} color="black" />
  <Text
    text={us}
    position={{ x: 4, y: -2, z: -7.5 }}
    scale={10}
    color="black"
  />
</T.Group>

<GLTF
  castShadow
  receiveShadow
  url="models/column.glb"
  position={{ y: -10 }}
  scale={7.5}
/>
