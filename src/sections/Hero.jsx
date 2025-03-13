import React, { useEffect, useRef } from 'react'
import Scene from '../components/Scene'
import gsap from 'gsap';

const Hero = () => {

  const move = useRef(null);

  useEffect(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: move.current,
        start: "top top",
        end: "300% top",
        scrub: 0.3,
      },
    });
    tl.to(move.current, {
      y: "100%",
      x: "-30%",
      ease : 'none'
    })
    .to(move.current, {
      y: "200%",
      x: "25%",
      ease : 'none'
    })
    .to(move.current, {
      y: "300%",
      x: "-20%",
      ease : 'none'
    });
  })

  return (
    <section className='w-full h-screen relative bg-zinc-900 text-zinc-200'>
        <div ref={move} className="canvas-container w-full h-full">
            <Scene/>
        </div>
        <div className="text-1 absolute top-5 left-1/2 -translate-x-1/2">
            <h1 className='text-6xl font-bold'>Apple Watch Pro 2</h1>
        </div>
        <div className="text-2 absolute bottom-5 left-1/2 -translate-x-1/2">
            <h1 className='text-6xl font-bold'>$999</h1>
        </div>
    </section>
  )
}

export default Hero