"use client";

import React, { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

// The Inner Model Component
function Model({ url }: { url: string }) {
  const group = useRef<THREE.Group>(null);
  const scrollRef = useRef(0);
  
  // Load the specific GLB file passed via props
  const { scene } = useGLTF(url);

  // Sync scroll position to a internal reference (0 to 1)
  useEffect(() => {
    const onScroll = () => {
      const winScroll = window.pageYOffset || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = winScroll / (height || 1);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animation Loop: Handles the 360-degree rotation and smooth scaling
  useFrame(() => {
    if (group.current) {
      // 1. Smooth Rotation (Lerp makes it feel heavy/mechanical)
      const targetRotation = scrollRef.current * Math.PI * 2;
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        targetRotation,
        0.07
      );

      // 2. Visibility/Reveal Logic
      // Model stays at scale 0 until user scrolls past 5% of the page
      const revealThreshold = 0.05;
      const targetScale = scrollRef.current > revealThreshold ? 10 : 0;
      
      const currentScale = THREE.MathUtils.lerp(
        group.current.scale.x,
        targetScale,
        0.1
      );
      
      group.current.scale.set(currentScale, currentScale, currentScale);
    }
  });

  return <primitive ref={group} object={scene} position={[0, -1, 0]} />;
}

// The Main Exported Viewer
export default function ModelViewer({ modelPath = "/model.glb" }: { modelPath?: string }) {
  return (
    <div className="fixed inset-0 z-0 bg-black">
      <Canvas 
        shadows 
        dpr={[1, 1.5]} // Performance cap to prevent 'Context Lost' errors
        gl={{ 
          antialias: true, 
          alpha: false, 
          powerPreference: "high-performance",
          preserveDrawingBuffer: true 
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={35} />
        <color attach="background" args={["#000000"]} />
        
        {/* Engineering Lighting Rig */}
        <ambientLight intensity={0.4} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={2} 
          castShadow 
        />
        
        <Suspense fallback={null}>
          <Model url={modelPath} />
          <Environment preset="city" />
          
          {/* Subtle ground shadow for depth */}
          <ContactShadows 
            position={[0, -2, 0]} 
            opacity={0.4} 
            scale={20} 
            blur={2} 
            far={4.5} 
          />
        </Suspense>
      </Canvas>
    </div>
  );
}