"use client"
import React from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from '../components/Experience'
import { Suspense } from "react"

const Page = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Experience></Experience>
      </Suspense>
    </Canvas>
  )
}

export default Page