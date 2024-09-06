"use client"
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import React, { Suspense } from 'react'


const RenderModels = ({children, className}) => {



  return (
 <Canvas
   className={clsx("w-screen h-screen  cursor-pointer -z-10 relative", className )}
 >
    <Suspense fallback = {null}>
        {children}
    </Suspense>
 
 <Environment preset="forest" />
 <OrbitControls/>
 <ambientLight/>
 <directionalLight  position={[10,10,10]}  />
 <pointLight/>

   </Canvas>
   
  )
}

export default RenderModels
