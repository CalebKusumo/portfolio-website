"use client";
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Center, Environment, Stage } from '@react-three/drei';
import * as THREE from 'three';

function Model({ url, scale, position, scrollProgress, initialRotation = [0, 0, 0] }: any) {
  const { scene } = useGLTF(url) as any;
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current && scrollProgress) {
      // Get the current numeric value from the motion scroll object
      const currentScroll = typeof scrollProgress === 'number' ? scrollProgress : scrollProgress.get();
      const targetRotation = initialRotation[1] + currentScroll * Math.PI * 2;
      const smoothing = 1 - Math.exp(-10 * delta);

      groupRef.current.rotation.x = initialRotation[0];
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotation,
        smoothing
      );
      groupRef.current.rotation.z = initialRotation[2];
    }
  });

  return (
    <group ref={groupRef} rotation={initialRotation} position={position}>
      <Center top={false}>
        <primitive object={scene} scale={scale} />
      </Center>
    </group>
  );
}

export default function ModelViewer({ modelPath, modelScale = 1, modelPosition = [0, 0, 0], modelRotation = [0, 0, 0], scrollProgress }: any) {
  return (
    <div className="w-full h-full bg-black">
      <Canvas camera={{ position: [0, 0, 10], fov: 35 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <Stage intensity={0.5} environment="city" adjustCamera={false}>
            <Model
              url={modelPath}
              scale={modelScale}
              position={modelPosition}
              initialRotation={modelRotation}
              scrollProgress={scrollProgress}
            />
          </Stage>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}