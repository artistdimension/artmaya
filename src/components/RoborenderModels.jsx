"use client"
import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import React, { Suspense } from 'react'


const TenderModels1 = ({children, className}) => {



  return (
 <Canvas
   className={clsx("w-screen h-screen -z-10 relative", className )}
 >
    <Suspense fallback = {null}>
        {children}
    </Suspense>
 
 <Environment preset="sunset" />
 <directionalLight position={[1,1,1]}/>
 <ambientLight/>
<pointLight/>
<spotLight/>
   </Canvas>
   
  )
}

export default TenderModels1
