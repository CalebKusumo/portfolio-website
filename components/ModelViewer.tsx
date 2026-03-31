"use client";
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Center, Environment, Stage } from '@react-three/drei';
import * as THREE from 'three';

function Model({ url, scale, position, scrollProgress }: any) {
  const { scene } = useGLTF(url) as any;
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current && scrollProgress) {
      // Get the current numeric value from the motion scroll object
      const currentScroll = typeof scrollProgress === 'number' ? scrollProgress : scrollProgress.get();
      
      // Target rotation: 360 degrees (Math.PI * 2) multiplied by scroll progress
      const targetRotation = currentScroll * Math.PI * 2;
      
      // Smooth interpolation
      const smoothing = 1 - Math.exp(-10 * delta);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotation,
        smoothing
      );
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Center top={false}>
        <primitive object={scene} scale={scale} />
      </Center>
    </group>
  );
}

export default function ModelViewer({ modelPath, modelScale = 1, modelPosition = [0, 0, 0], scrollProgress }: any) {
  return (
    <div className="w-full h-full bg-black">
      <Canvas camera={{ position: [0, 0, 10], fov: 35 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <Stage intensity={0.5} environment="city" adjustCamera={false}>
            <Model 
              url={modelPath} 
              scale={modelScale} 
              position={modelPosition} 
              scrollProgress={scrollProgress} 
            />
          </Stage>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}