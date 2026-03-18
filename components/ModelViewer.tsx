"use client";

import React, { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function Model({ 
  url, 
  targetScale, 
  position 
}: { 
  url: string; 
  targetScale: number; 
  position: [number, number, number];
}) {
  const group = useRef<THREE.Group>(null);
  const scrollRef = useRef(0);
  
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
      // Rotation
      const targetRotation = scrollRef.current * Math.PI * 2;
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotation, 0.07);

      // Scale / Reveal
      const revealThreshold = 0.05;
      const activeScale = scrollRef.current > revealThreshold ? targetScale : 0;
      const currentScale = THREE.MathUtils.lerp(group.current.scale.x, activeScale, 0.1);
      group.current.scale.set(currentScale, currentScale, currentScale);
    }
  });

  return <primitive ref={group} object={scene} position={position} />;
}

export default function ModelViewer({ 
  modelPath = "/model.glb",
  modelScale = 10,
  modelPosition = [0, -1, 0]
}: { 
  modelPath?: string;
  modelScale?: number;
  modelPosition?: [number, number, number];
}) {
  return (
    <div className="fixed inset-0 z-0 bg-black">
      <Canvas 
        shadows 
        dpr={[1, 1.5]} 
        gl={{ antialias: true, powerPreference: "high-performance", preserveDrawingBuffer: true }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={35} />
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        
        <Suspense fallback={null}>
          <Model url={modelPath} targetScale={modelScale} position={modelPosition} />
          <Environment preset="city" />
          <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/2024robotfinalassm.glb", "https://www.gstatic.com/draco/versioned/decoders/1.5.5/");