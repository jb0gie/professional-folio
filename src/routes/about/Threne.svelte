<script>
  // @ts-nocheck
  import { onDestroy } from 'svelte';
  import { tweened } from 'svelte/motion';
  import {
    FogExp2,
    Pass,
    SpotLight,
    OrbitControls,
    PerspectiveCamera,
    useThrelte,
    Mesh,
    Group,
    Object3D,
    useFrame,
  } from '@threlte/core';
  import { Environment, GLTF, Text, Float } from '@threlte/extras';
  import { BoxGeometry, GridHelper, IcosahedronGeometry, MeshNormalMaterial, MeshStandardMaterial } from 'three';
  import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';

  export let ca;
  export let gn;
  export let us;
  export let uk;

  let target;

  const { scene } = useThrelte();
  const gridHelper = new GridHelper(30);

  gridHelper.position.y = -10;

  scene.add(gridHelper);

  onDestroy(() => {
    scene.remove(gridHelper);
  });

  // const onClickCa = (e: CustomEvent<ThreltePointerEvent>) => {}
  // const onClickUs = (e: CustomEvent<ThreltePointerEvent>) => {}
  // const onClickGd = (e: CustomEvent<ThreltePointerEvent>) => {}
  // const onClickUk = (e: CustomEvent<ThreltePointerEvent>) => {}

  const t = tweened(0, { duration: 2000 });
  let r = 0;
  let r2 = 0;
  useFrame(() => {
    r += 0.05;
    r2 += 0.001;
  });
</script>

<!-- <Pass pass={new GlitchPass()} /> -->
<FogExp2 color={'#dddddd'} density={0.01} />
<!-- <Environment path="hdr/" files="Studio_01.hdr" /> -->

<PerspectiveCamera position={{ z: 20 }} fov={90} lookAt={target}>
  <OrbitControls target={{ y: -2 }} enableDamping />
</PerspectiveCamera>



<!-- <SpotLight position={{ y: 10 }} color="green" target={{ x: 0, y: 0, z: 0 }} /> -->

<Mesh
  geometry={new BoxGeometry()}
  material={new MeshStandardMaterial()}
  position={{y:-10.5}}
  scale={{x:30,z:30}}
/>

<Object3D>
  <Mesh
    geometry={new IcosahedronGeometry()}
    material={new MeshNormalMaterial()}
    position={{ x: $t }}
    rotation={{ y: r }}
  />
</Object3D>

<Group>
  <GLTF
    castShadow
    receiveShadow
    url="models/ca.glb"
    position={{ x: -7.5, z: -7.5 }}
    rotation={{ y: r2 }}
    scale={5}
  />
  <GLTF
    castShadow
    receiveShadow
    url="models/gn.glb"
    position={{ x: 7.5, z: 7.5 }}
    rotation={{ y: r2 }}
    scale={5}
  />
  <GLTF
    castShadow
    receiveShadow
    url="models/us.glb"
    position={{ x: 7.5, z: -7.5 }}
    rotation={{ y: r2 }}
    scale={5}
  />
  <GLTF
    castShadow
    receiveShadow
    url="models/uk.glb"
    position={{ x: -7.5, z: 7.5 }}
    rotation={{ y: r2 }}
    scale={5}
  />
</Group>

<GLTF
  castShadow
  receiveShadow
  url="models/column.glb"
  position={{ y: -10 }}
  scale={7.5}
/>