import { OrbitControls } from '@react-three/drei';
import React from 'react';
import Guard from './Guard'
import { DirectionalLight } from 'three';

const Experience = () => {
  return (
    <mesh>
        <Guard></Guard>
        <ambientLight />
    </mesh>
  )
}

export default Experience