/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/Guard.glb 
*/

import React, { useEffect } from 'react'
import { useFrame, useGraph, useThree } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { getMouseDegrees } from "./utils"
import * as THREE from "three"

function moveJoint(mouse, joint, degreeLimit = 40) {
  let degrees = getMouseDegrees(mouse.x, mouse.y, degreeLimit)
  joint.rotation.xD = THREE.MathUtils.lerp(joint.rotation.xD || 0, degrees.y, 0.1)
  joint.rotation.yD = THREE.MathUtils.lerp(joint.rotation.yD || 0, degrees.x, 0.1)
  joint.rotation.x = THREE.MathUtils.degToRad(joint.rotation.xD)
  joint.rotation.y = THREE.MathUtils.degToRad(joint.rotation.yD)
}

const Guard = (props) =>  {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/Guard.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  const { size } = useThree()


  

  useEffect(() => {
    actions.idle.play();
  });

  useFrame((state) => {
    const mouse = { x: size.width / 2 + (state.mouse.x * size.width) / 2, y: size.height / 2 + (-state.mouse.y * size.height) / 2 }
    moveJoint(mouse, nodes.mixamorigNeck)
    moveJoint(mouse, nodes.mixamorigSpine)
  })

  //mixamorigHead, mixamorigNeck, mixamorigSpine

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Guard02" geometry={nodes.Guard02.geometry} material={materials.Guard_02} skeleton={nodes.Guard02.skeleton} />
        </group>
      </group>
    </group>
  )
}

export default Guard;

useGLTF.preload('/Guard.glb')
