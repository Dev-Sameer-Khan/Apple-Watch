import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

const Scene = () => {
    const model = useGLTF('/watch.glb')

    gsap.registerPlugin(ScrollTrigger)

    const group = useRef(null)

    useEffect(() => {
        
        gsap.to(group.current.rotation, {
            y: Math.PI * 2,
            duration: 10
        });

    }, [])

  return (
    <>
    <OrbitControls enableZoom={false}/>
    <group ref={group} position={[0,0 ,0]} scale={50}>
        {/* <ambientLight intensity={1}/> */}
        <Environment files='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_09_1k.hdr'/>
        <primitive object={model.scene}/>
    </group>
    </>
  )
}

export default Scene