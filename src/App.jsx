import { Canvas } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import Scene from './Scene'
import gsap from 'gsap'

const App = () => {

  // const canvas = useRef(null)

  // useEffect(()=>{
  //   gsap.from(canvas.current, {
  //     x: "100%",
  //     duration: 1
  //   })    
  // },[])

  return (
      <Canvas  style={{ height: '100vh', width: '100vw', backgroundColor : 'black' }} >
        <Scene/>
      </Canvas>
  )
}

export default App