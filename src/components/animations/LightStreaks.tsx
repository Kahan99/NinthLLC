"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion } from "framer-motion";

function Streaks() {
  const count = 60;
  const mesh = useRef<THREE.InstancedMesh>(null!);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
       const x = (Math.random() - 0.5) * 20;
       const y = (Math.random() - 0.5) * 10;
       const z = (Math.random() - 0.5) * 5;
       const height = 2 + Math.random() * 12;
       const speed = 0.1 + Math.random() * 0.4;
       const opacity = 0.02 + Math.random() * 0.1;
       temp.push({ x, y, z, height, speed, opacity, offset: Math.random() * 100 });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    particles.forEach((p, i) => {
      const { x, y, z, height, speed, offset } = p;
      
      // Horizontal drift & Vertical oscillation
      const xPos = x + Math.sin(t * 0.1 + offset) * 0.5;
      const yPos = y + Math.cos(t * speed * 0.2) * 1.5;
      
      dummy.position.set(xPos, yPos, z);
      dummy.scale.set(0.015, height + Math.sin(t * speed) * 3, 0.01);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial 
        color="#ffffff" 
        transparent 
        opacity={0.08} 
        blending={THREE.AdditiveBlending} 
        depthWrite={false}
      />
    </instancedMesh>
  );
}

export default function LightStreaks() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
    >
      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        className="w-full h-full relative z-10"
      >
        <ambientLight intensity={1.5} />
        <Streaks />
      </Canvas>
      {/* Subtle Bottom Vignette */}
      <div className="absolute inset-x-0 bottom-0 h-96 z-30 bg-gradient-to-t from-background via-background/60 to-transparent" />
    </motion.div>
  );
}
