"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows, PerspectiveCamera } from "@react-three/drei";
import { useRef, useEffect, useState, Suspense } from "react";
import * as THREE from "three";

function Model({ url }: { url: string }) {
  const group = useRef<THREE.Group>(null);
  const scrollRef = useRef(0);
  const { scene } = useGLTF(url);

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
      // 1. Rotation Logic
      const targetRotation = scrollRef.current * Math.PI * 2;
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotation, 0.07);

      // 2. Visibility Logic: Reveal only after 10% scroll
      const revealThreshold = 0.1;
      const scaleFactor = scrollRef.current > revealThreshold 
        ? THREE.MathUtils.lerp(group.current.scale.x, 10, 0.1) 
        : THREE.MathUtils.lerp(group.current.scale.x, 0, 0.1);
      
      group.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
    }
  });

  return <primitive ref={group} object={scene} position={[0, -1, 0]} />;
}

export default function ModelViewer() {
  return (
    <div className="fixed inset-0 z-0 bg-black">
      <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, powerPreference: "high-performance" }}>
        <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={35} />
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        <Suspense fallback={null}>
          <Model url="/2024robotfinalassm.glb" />
          <Environment preset="city" />
          <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={200} blur={2} far={4.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}