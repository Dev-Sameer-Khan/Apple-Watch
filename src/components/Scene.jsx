import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect} from "react";

gsap.registerPlugin(ScrollTrigger);

const Scene = () => {
  const model = useGLTF("/watch.glb");

  useEffect(() => {
    model.scene.rotateX(0.25)
    model.scene.rotateY(-0.25)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: "top top",
        end: "bottom top",
        scrub: .3,
      },
    });
    tl.to(model.scene.rotation, {
      x: 0.5,
      y: Math.PI * 0.5,
      duration: 1,
      ease: "power1.inOut"
    })
    .to(model.scene.rotation, {
      x: -0.2,
      y: Math.PI,
      duration: 1,
      ease: "power1.inOut"
    })
    .to(model.scene.rotation, {
      x: 0.3,
      y: Math.PI * 1.7,
      duration: 1,
      ease: "power1.inOut"
    })
    .to(model.scene.rotation, {
      x: 0,
      y: Math.PI * 2,
      duration: 1,
      ease: "power1.inOut"
    });

  }, []);

  return (
    <Canvas>
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
      <group  scale={60}>
        <Environment files={"https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_03_1k.hdr"}/>
        <primitive object={model.scene} />
      </group>
    </Canvas>
  );
};

export default Scene;
