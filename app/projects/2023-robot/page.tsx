"use client";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const ModelViewer = dynamic(() => import('@/components/ModelViewer'), { ssr: false });

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
  },
};

export default function Robot2023() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="relative bg-black min-h-screen">
      {/* FIXED 3D BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ModelViewer 
          modelPath="/models/robot2023.glb" 
          modelScale={6} 
          modelPosition={[0, -1, 0]} 
          scrollProgress={scrollYProgress} 
        />
      </div>

      <div className="relative z-10 w-full">
        {/* HERO HEADER */}
        <section className="relative h-screen w-full flex flex-col items-center justify-center text-center bg-black overflow-hidden shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img 
              src="/projects/2023-robot/header.jpg" 
              className="w-full h-full object-cover opacity-40 grayscale" 
              alt="2023 Robot"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }} 
            className="relative z-10 px-4"
          >
            <span className="font-mono text-[10px] tracking-[0.6em] text-orange-500 mb-4 uppercase block text-center">
              Mechatronics: Charged Up 2023
            </span>
            <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mix-blend-difference text-center">
              2023 <br /> 
              <span className="text-outline italic text-white text-7xl md:text-[8rem]">ROBOT</span>
            </h1>
          </motion.div>
        </section>

        {/* REVEAL GAP */}
        <div className="h-[60vh] pointer-events-none" />

        {/* DATA CALLOUT GRID */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          className="flex flex-col gap-y-64 py-20 pointer-events-none"
        >
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-24 lg:px-40 gap-x-40 pointer-events-auto">
            <motion.div variants={itemVariants} className="w-full max-w-md border-l-2 border-orange-500 pl-8 group">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Double-Jointed Arm</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
                Carbon Fiber Extrusions // Dual-Motor Synchronization // 78" Extension Reach
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="w-full max-w-md md:ml-auto border-l-2 border-white/20 pl-8 group md:mt-40">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Pneumatics</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
                120 PSI Working Pressure // High-Torque Gripper // Custom Solenoid Manifold
              </p>
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-24 lg:px-40 gap-x-40 pointer-events-auto">
            <motion.div variants={itemVariants} className="w-full max-w-md border-l-2 border-white/20 pl-8 group md:mt-20">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Controls Logic</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
                Inverse Kinematics for Arm Pathing // Java Command-Based // Setpoint Optimization
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="w-full max-w-md md:ml-auto border-l-2 border-orange-500 pl-8 group">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Chassis Design</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
                West Coast Drive // 6-Wheel Tank // SolidWorks Stress Simulation
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* FOOTER */}
        <footer className="h-screen flex flex-col items-center justify-center bg-black relative z-20 pointer-events-auto border-t border-white/10">
          <div className="text-center mb-12">
            <p className="font-mono text-[10px] tracking-[1em] text-orange-500 uppercase mb-4 text-center">End of Documentation</p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic text-white text-center">Project <br/> <span className="text-outline">Archived</span></h2>
          </div>
          <Link href="/projects" className="px-16 py-6 border border-white/20 font-mono text-[11px] tracking-[0.5em] uppercase hover:bg-white hover:text-black transition-all">
            Return to Index
          </Link>
        </footer>
      </div>
    </main>
  );
}