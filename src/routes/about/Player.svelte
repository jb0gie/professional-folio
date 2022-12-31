<script>
// @ts-nocheck

  import { Mesh, useFrame } from '@threlte/core';
  import {
    AutoColliders,
    BasicPlayerController,
    RigidBody,
  } from '@threlte/rapier';
  import {
    CapsuleGeometry,
    Mesh as ThreeMesh,
    MeshStandardMaterial,
    SphereGeometry,
    Vector3,
  } from 'three';
  /**
   * @type {undefined}
   */
  export let position = undefined;
  /**
   * @type {{ getWorldPosition: (arg0: Vector3) => void; }}
   */
  export let playerMesh;
  /**
   * @type {{ getWorldPosition: (arg0: Vector3) => void; }}
   */
  let ballMesh;
  /**
   * @type {{ applyImpulse: (arg0: Vector3, arg1: boolean) => void; }}
   */
  let rigidBody;
  const playerPos = new Vector3();
  const ballPos = new Vector3();
  const maxF = 0.05;
  const min = new Vector3(-maxF, 0, -maxF);
  const max = new Vector3(maxF, 0, maxF);
  useFrame(() => {
    if (!playerMesh || !ballMesh || !rigidBody) return;
    playerMesh.getWorldPosition(playerPos);
    ballMesh.getWorldPosition(ballPos);
    const diff = playerPos.sub(ballPos).divideScalar(2000);
    diff.y = 0;
    const f = diff.clamp(min, max);
    rigidBody.applyImpulse(f, true);
  });
</script>

<!-- To detect the groundedness of the player, a collider on group 15 is used -->
<BasicPlayerController
  {position}
  speed={3}
  radius={0.3}
  height={1.8}
  jumpStrength={2}
  groundCollisionGroups={[15]}
  playerCollisionGroups={[0]}
>
  <Mesh
    bind:mesh={playerMesh}
    position={{ y: 0.9 }}
    receiveShadow
    castShadow
    geometry={new CapsuleGeometry(0.3, 1.8 - 0.3 * 2)}
    material={new MeshStandardMaterial()}
  />
</BasicPlayerController>

<RigidBody bind:rigidBody position={{ y: 1, z: -5 }}>
  <AutoColliders shape={'ball'}>
    <Mesh
      bind:mesh={ballMesh}
      receiveShadow
      castShadow
      geometry={new SphereGeometry(0.25)}
      material={new MeshStandardMaterial()}
    >
      <slot />
    </Mesh>
  </AutoColliders>
</RigidBody>
