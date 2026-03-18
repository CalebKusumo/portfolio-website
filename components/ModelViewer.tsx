"use client";

import React, { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function Model({ url }: { url: string }) {
  const group = useRef<THREE.Group>(null);
  const scrollRef = useRef(0);
  
  // DRACO SUPPORT: useGLTF automatically handles the decoder if we provide the path
  const { scene } = useGLTF(url, "https://www.gstatic.com/draco/versioned/decoders/1.5.5/");

  useEffect(() => {
    const onScroll = () => {
      const winScroll = window.pageYOffset || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = winScroll / (height || 1);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame(() => {
    if (group.current) {
      const targetRotation = scrollRef.current * Math.PI * 2;
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotation, 0.07);

      const revealThreshold = 0.05;
      const targetScale = scrollRef.current > revealThreshold ? 10 : 0;
      const currentScale = THREE.MathUtils.lerp(group.current.scale.x, targetScale, 0.1);
      group.current.scale.set(currentScale, currentScale, currentScale);
    }
  });

  return <primitive ref={group} object={scene} position={[0, -1, 0]} />;
}

export default function ModelViewer({ modelPath = "/model.glb" }: { modelPath?: string }) {
  return (
    <div className="fixed inset-0 z-0 bg-black">
      <Canvas 
        shadows 
        dpr={[1, 1.5]} 
        gl={{ 
          antialias: true, 
          powerPreference: "high-performance",
          preserveDrawingBuffer: true 
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={35} />
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        
        <Suspense fallback={null}>
          <Model url={modelPath} />
          <Environment preset="city" />
          <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Preload the specific robot model to speed up the transition
useGLTF.preload("/2024robotfinalassm.glb", "https://www.gstatic.com/draco/versioned/decoders/1.5.5/");