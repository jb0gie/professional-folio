<script>
  // @ts-nocheck
  import {
    FogExp2,
    Pass,
    DirectionalLight,
    Group,
    Mesh,
    Object3DInstance,
    OrthographicCamera,
    PerspectiveCamera,
    OrbitControls,
    useFrame,
    useThrelte,
  } from '@threlte/core';
  import { Environment, GLTF, Text, Float } from '@threlte/extras';
  import {
    AutoColliders,
    CollisionGroups,
    Debug,
    RigidBody,
  } from '@threlte/rapier';
  import { spring, tweened } from 'svelte/motion';
  import {
    BoxGeometry,
    GridHelper,
    Group as ThreeGroup,
    Mesh as ThreeMesh,
    MeshStandardMaterial,
    Vector3,
  } from 'three';
  import { DEG2RAD } from 'three/src/math/MathUtils';
  import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
  import Door from './Door.svelte';
  import Ground from './Ground.svelte';
  import Player from './Player.svelte';

  // export let ca;
  // export let gn;
  // export let us;
  // export let uk;

  let targetGroup;
  let playerMesh;
  let positionHasBeenSet = false;
  let r = 0;
  let r2 = 0;

  const smoothPlayerPosX = spring(0);
  const smoothPlayerPosZ = spring(0);
  const t = tweened(0, { duration: 2000 });
  const t3 = new Vector3();

  useFrame(() => {
    r += 0.05;
    r2 += 0.001;
    if (!playerMesh) return;
    playerMesh.getWorldPosition(t3);
    smoothPlayerPosX.set(t3.x, {
      hard: !positionHasBeenSet,
    });
    smoothPlayerPosZ.set(t3.z, {
      hard: !positionHasBeenSet,
    });
    if (!positionHasBeenSet) positionHasBeenSet = true;
  });
  const { size } = useThrelte();
  $: zoom = $size.width / 11;
</script>

<!-- <Pass pass={new GlitchPass()} /> -->
<FogExp2 color={'#dddddd'} density={0.01} />
<Environment path="/hdr/" files="Studio_01.hdr" />

<Group position={{ x: $smoothPlayerPosX, z: $smoothPlayerPosZ }}>
  <Group position={{ y: 0.1 }} bind:group={targetGroup}>
    <!-- <OrthographicCamera
      {zoom}
      position={{ x: 50, y: 50, z: 30 }}
      lookAt={targetGroup}
    >
      <OrbitControls target={{ y: -2 }} enableZoom enableDamping />
    </OrthographicCamera> -->
    <PerspectiveCamera
      fov={90}
      lookAt={targetGroup}
      position={{ x: 7, y: 7, z: 5 }}
    >
      <OrbitControls target={{ y: -2 }} enableZoom enableDamping />
    </PerspectiveCamera>
  </Group>
</Group>

<DirectionalLight shadow position={{ y: 20, x: 8, z: -3 }} />

<Object3DInstance object={new GridHelper(30)} />

<Debug depthTest={false} depthWrite={false} />

<!--
	The ground needs to be on both group 15 which is the group
	to detect the groundedness of the player as well as on group
	0 which is the group that the player is actually physically
	interacting with.
-->
<CollisionGroups groups={[0, 15]}>
  <Ground />
</CollisionGroups>

<!--
	All physically interactive stuff should be on group 0
-->
<CollisionGroups groups={[0]}>
  <Player bind:playerMesh position={{ z: -3, y: 2 }} />

  <Door />

  <!-- WALLS -->
  <AutoColliders shape={'cuboid'}>
    <Mesh
      receiveShadow
      castShadow
      position={{ y: 1.275, x: 30 + 0.7 + 0.15 }}
      geometry={new BoxGeometry(60, 2.55, 0.15)}
      material={new MeshStandardMaterial({
        opacity: 0.5,
        color: 0x333333,
      })}
    />
    <Mesh
      receiveShadow
      castShadow
      position={{ y: 1.275, x: -30 - 0.7 - 0.15 }}
      geometry={new BoxGeometry(60, 2.55, 0.15)}
      material={new MeshStandardMaterial({
        opacity: 0.5,
        color: 0x333333,
      })}
    />
  </AutoColliders>
</CollisionGroups>

<Group>
  <GLTF
    receiveShadow
    castShadow
    position={{ x: 3, z: 6 }}
    url="models/column.glb"
  />

  <GLTF
    receiveShadow
    castShadow
    position={{ x: 3, z: 12 }}
    url="models/column.glb"
  />

  <GLTF
    receiveShadow
    castShadow
    position={{ x: 3, z: 6 }}
    url="models/column.glb"
  />

  <GLTF
    receiveShadow
    castShadow
    position={{ x: 3, z: 12 }}
    url="models/column.glb"
  />

  <GLTF
    receiveShadow
    castShadow
    position={{ x: -3, z: 6 }}
    url="models/column.glb"
  />

  <GLTF
    receiveShadow
    castShadow
    position={{ x: -3, z: 12 }}
    url="models/column.glb"
  />

  <Text
    text={'use the arrow keys to move around'}
    position={{y:5}}
    scale={8}
    color="black"
  />

  <GLTF
    receiveShadow
    castShadow
    position={{ x: -6, z: -6 }}
    url="models/column.glb"
  />
</Group>
