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
  import {
    BoxGeometry,
    GridHelper,
    IcosahedronGeometry,
    MeshNormalMaterial,
  } from 'three';
  // import { DEG2RAD } from 'three/src/math/MathUtils';
  import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';

  export let ca;
  export let gd;
  export let us;
  export let uk;

  let mesh;

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
  useFrame(() => {
    r += 0.05;
  });
</script>

<!-- <Pass pass={new GlitchPass()} /> -->
<FogExp2 color={'#dddddd'} density={0.05} />
<Environment path="hdr/" files="Studio_01.hdr" />

<PerspectiveCamera position={{ z: 20 }} fov={90} lookAt={mesh}>
  <OrbitControls target={{ y: -2 }} enableDamping />
</PerspectiveCamera>

<SpotLight position={{ y: 10 }} color="green" target={{ x: 0, y: 0, z: 0 }} />

<!-- <Mesh
  geometry={new BoxGeometry()}
  material={new MeshStandardMaterial()}
  position={{y:-10.5}}
  scale={{x:30,z:30}}
/> -->

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
    scale={5}
    interactive
    on:pointerenter={() => ($t >= 0 ? -7.5 : 0)}
    on:pointerleave={() => {}}
    
  />
  <Text
    text={ca}
    position={{ x: -9.5, y: -2, z: -7.5 }}
    scale={8}
    color="black"
  />
</Group>

<Group>
  <GLTF
    castShadow
    receiveShadow
    url="models/gd.glb"
    position={{ x: 7.5, z: 7.5 }}
    scale={5}
  />
  <Text text={gd} position={{ x: 4, y: -2, z: 7.5 }} scale={8} color="black" />
</Group>

<Group>
  <GLTF
    castShadow
    receiveShadow
    url="models/us.glb"
    position={{ x: 7.5, z: -7.5 }}
    scale={5}
  />
  <Text text={us} position={{ x: 4, y: -2, z: -7.5 }} scale={8} color="black" />
</Group>

<Group>
  <GLTF bind:mesh
    castShadow
    receiveShadow
    url="models/uk.glb"
    position={{ x: -7.5, z: 7.5 }}
    scale={5}
  />
  <Text
    text={uk}
    position={{ x: -10, y: -2, z: 7.5 }}
    scale={8}
    color="black"
  />
</Group>

<GLTF receiveShadow url="models/column.glb" position={{ y: -10 }} scale=