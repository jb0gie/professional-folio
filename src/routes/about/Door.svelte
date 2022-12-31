<script>
  import { Group, Mesh } from '@threlte/core';
  import { HTML } from '@threlte/extras';
  import {
    AutoColliders,
    Collider,
    CollisionGroups,
    RigidBody,
  } from '@threlte/rapier';
  import { cubicIn, cubicOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';
  import { blur } from 'svelte/transition';
  import {
    BoxGeometry,
    Euler,
    MeshStandardMaterial,
    Quaternion,
  } from 'three';
  import { DEG2RAD } from 'three/src/math/MathUtils';
  /**
   * @type any
   */
  export let position = undefined;
  /**
   * @type any
   */
  export let rotation = undefined;
  export let open = false;
  let objectsInSensor = 0;
  $: open = objectsInSensor > 0;
  /**
   * @type any
   */
  let group;
  /**
   * @type any
   */
  let doorRigidBody;
  let doorRotationClosed = 0;
  let doorRotationOpen = -105 * DEG2RAD;
  let doorRotation = tweened(doorRotationClosed);
  $: doorRotation.set(open ? doorRotationOpen : doorRotationClosed, {
    easing: open ? cubicOut : cubicIn,
  });
  const q = new Quaternion();
  const e = new Euler();
  const applyDoorRotation = (/** @type {number} */ rotation) => {
    if (!group || !doorRigidBody) return;
    group.getWorldQuaternion(q);
    e.setFromQuaternion(q);
    e.y += rotation;
    q.setFromEuler(e);
    doorRigidBody.setNextKinematicRotation(q);
  };
  $: if (group && doorRigidBody) applyDoorRotation($doorRotation);
</script>

<Group bind:group {position} {rotation}>
  <!-- FRAME -->
  <AutoColliders shape={'cuboid'}>
    <!-- SIDE FRAME A -->
    <Mesh
      receiveShadow
      castShadow
      position={{ y: 1.125, x: 0.7 }}
      geometry={new BoxGeometry(0.3, 2.25, 0.3)}
      material={new MeshStandardMaterial()}
    />

    <!-- SIDE FRAME B -->
    <Mesh
      receiveShadow
      castShadow
      position={{ y: 1.125, x: -0.7 }}
      geometry={new BoxGeometry(0.3, 2.25, 0.3)}
      material={new MeshStandardMaterial()}
    />

    <!-- TOP FRAME -->
    <Mesh
      receiveShadow
      castShadow
      position={{ y: 2.4 }}
      geometry={new BoxGeometry(1.4 + 0.3, 0.3, 0.3)}
      material={new MeshStandardMaterial()}
    />
  </AutoColliders>

  <HTML transform={false} position={{ y: -2 }} pointerEvents={'none'}>
    {#key open}
      <small
        in:blur={{
          amount: 15,
          duration: 300,
        }}
        out:blur={{
          amount: 15,
          duration: 300,
        }}
        class="door"
        class:closed={!open}
        class:open
      >
        {open ? 'UNLOCKED' : 'LOCKED'}
      </small>
    {/key}
  </HTML>

  <!-- DOOR -->
  <RigidBody
    position={{ y: 1.125, x: -0.5 }}
    bind:rigidBody={doorRigidBody}
    type={'kinematicPosition'}
  >
    <AutoColliders shape={'cuboid'}>
      <Mesh
        receiveShadow
        castShadow
        position={{ x: 0.5 }}
        geometry={new BoxGeometry(1, 2.25, 0.1)}
        material={new MeshStandardMaterial()}
      />
    </AutoColliders>
  </RigidBody>

  <CollisionGroups groups={[15]}>
    <Collider
      position={{ y: 1.5 }}
      shape={'cuboid'}
      args={[1, 1.35, 1.5]}
      sensor
      on:sensorenter={() => (objectsInSensor += 1)}
      on:sensorexit={() => (objectsInSensor -= 1)}
    />
  </CollisionGroups>
</Group>

<style>
  .door {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    color: rgb(255, 255, 255);
    border-radius: 0.375rem;
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
  }

  .closed {
    background-color: rgb(239, 68, 68);
  }

  .open {
    background-color: rgb(34, 197, 94);
  }
</style>
