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

export default function Robot2025() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="relative bg-black min-h-screen">
      {/* FIXED 3D BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ModelViewer 
          modelPath="/models/robot2025.glb" 
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
              src="/projects/2025-robot/header.jpg" 
              className="w-full h-full object-cover opacity-40 grayscale" 
              alt="2025 Robot"
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
              Mechatronics: Reefscape 2025
            </span>
            <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mix-blend-difference text-center">
              2025 <br /> 
              <span className="text-outline italic text-white text-7xl md:text-[8rem]">ROBOT</span>
            </h1>
          </motion.div>
        </section>

        {/* REVEAL GAP */}
        <div className="h-[60vh] pointer-events-none" />

        {/* DATA CALLOUTS WITH IMAGES */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-y-96 py-20 px-8 md:px-24 lg:px-40"
        >
          {/* CALLOUT 01: Image Left, Text Right */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pointer-events-auto">
            <div className="aspect-video bg-white/5 overflow-hidden border border-white/10 group">
              <img src="/projects/2025-robot/detail-1.jpg" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Vision Tracking" />
            </div>
            <div className="border-l-2 border-orange-500 pl-8">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Vision Tracking</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
                OpenCV + Limelight 3G // Real-time AprilTag Triangulation // Latency: 12ms
              </p>
            </div>
          </motion.div>

          {/* CALLOUT 02: Text Left, Image Right */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pointer-events-auto">
            <div className="order-2 md:order-1 border-r-2 border-white/20 pr-8 text-right">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Edge AI</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
                Coral Manipulation Logic // Jetson Orin Nano Deployment // Python Inference
              </p>
            </div>
            <div className="order-1 md:order-2 aspect-video bg-white/5 overflow-hidden border border-white/10 group">
              <img src="/projects/2025-robot/detail-2.jpg" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Edge AI" />
            </div>
          </motion.div>

          {/* CALLOUT 03: Image Left, Text Right */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pointer-events-auto">
            <div className="aspect-video bg-white/5 overflow-hidden border border-white/10 group">
              <img src="/projects/2025-robot/detail-3.jpg" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Precision Intake" />
            </div>
            <div className="border-l-2 border-white/20 pl-8">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Precision Intake</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
                Variable-Duro Polycarbonate Rollers // High-Precision Torque Control
              </p>
            </div>
          </motion.div>

          {/* CALLOUT 04: Text Left, Image Right */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pointer-events-auto">
            <div className="order-2 md:order-1 border-r-2 border-orange-500 pr-8 text-right">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">C++ Core</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
                Custom PID Loop Tuning // Multithreaded Command-Based Framework
              </p>
            </div>
            <div className="order-1 md:order-2 aspect-video bg-white/5 overflow-hidden border border-white/10 group">
              <img src="/projects/2025-robot/detail-4.jpg" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="C++ Core" />
            </div>
          </motion.div>
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