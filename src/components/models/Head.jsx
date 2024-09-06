import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Head (props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("/models/Head-transformed.glb")
  const { actions } = useAnimations(animations, group)
  console.log(actions);
  useEffect(() =>{
    
    
    actions['Idle'].reset().fadeIn(.5).play()
    // eslint-disable-next-line
},[])
  
  return (
    <group ref={group}  dispose={null}
    rotation={[Math.PI/5,0,0]} scale={0.2}
    >
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.Head}
          skeleton={nodes.Object_9.skeleton}
          position={[0, 4.149, -0.548]}
          rotation={[-1.253, 0, 0]}
        />
      </group>
    </group>
  )
}
useGLTF.preload("/models/Head-transformed.glb")

export default Head
