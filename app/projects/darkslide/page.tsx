"use client";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';

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

export default function DarkslideProject() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="relative bg-black min-h-screen">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ModelViewer 
          modelPath="/models/darkslide.glb" 
          modelScale={8} 
          modelPosition={[0, 0, 0]} 
          scrollProgress={scrollYProgress} 
        />
      </div>

      <div className="relative z-10 w-full">
        <section className="relative h-screen w-full flex flex-col items-center justify-center text-center bg-black overflow-hidden shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img src="/projects/darkslide/header.jpg" className="w-full h-full object-cover opacity-40 grayscale" alt="Darkslide" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 px-4">
            <span className="font-mono text-[10px] tracking-[0.6em] text-red-600 mb-4 uppercase block text-center">Mechanical Design: High Precision</span>
            <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mix-blend-difference text-center">DARK <br /> <span className="text-outline italic text-white text-7xl md:text-[8rem]">SLIDE</span></h1>
          </motion.div>
        </section>

        <div className="h-[60vh] pointer-events-none" />

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="flex flex-col gap-y-96 py-20 px-8 md:px-24 lg:px-40 bg-black/75 backdrop-blur-sm">
          {/* CALLOUT 01: Image Left, Text Right */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pointer-events-auto">
            <div className="aspect-video bg-white/5 overflow-hidden border border-white/10 group">
              <img src="/projects/darkslide/detail-1.jpg" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Linear Motion" />
            </div>
            <div className="border-l-2 border-red-600 pl-8">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Linear Motion</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">Specialized Low-Friction Coatings // 0.005mm Tolerance // SolidWorks Managed Assembly</p>
            </div>
          </motion.div>
          {/* CALLOUT 02: Text Left, Image Right */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pointer-events-auto">
            <div className="order-2 md:order-1 border-r-2 border-white/20 pr-8 text-right">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">FEA Analysis</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">ANSYS Structural Simulation // Thermal Expansion Mitigation // Strain Gauge Validation</p>
            </div>
            <div className="order-1 md:order-2 aspect-video bg-white/5 overflow-hidden border border-white/10 group">
              <img src="/projects/darkslide/detail-2.jpg" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="FEA Analysis" />
            </div>
          </motion.div>
          {/* CALLOUT 03: Image Left, Text Right */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pointer-events-auto">
            <div className="aspect-video bg-white/5 overflow-hidden border border-white/10 group">
              <img src="/projects/darkslide/detail-3.jpg" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="GD&T Standards" />
            </div>
            <div className="border-l-2 border-white/20 pl-8">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">GD&T Standards</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">ASME Y14.5 Compliance // Form and Orientation Controls // Critical Interface Mapping</p>
            </div>
          </motion.div>
          {/* CALLOUT 04: Text Left, Image Right */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pointer-events-auto">
            <div className="order-2 md:order-1 border-r-2 border-red-600 pr-8 text-right">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Sub-Assembly</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">Modular Integration // Zero-Backlash Coupling // Lightweight Magnesium Alloy Body</p>
            </div>
            <div className="order-1 md:order-2 aspect-video bg-white/5 overflow-hidden border border-white/10 group">
              <img src="/projects/darkslide/detail-4.jpg" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Sub-Assembly" />
            </div>
          </motion.div>
        </motion.div>

        <footer className="py-24 flex flex-col items-center justify-center bg-black relative z-20 pointer-events-auto border-t border-white/10 gap-10">
          <div className="flex items-center gap-8">
            <Link href="/projects/2023-robot" className="font-mono text-base tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors">← 2023 Robot</Link>
            <Link href="/projects" className="px-14 py-5 border border-white/20 font-mono text-sm tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all">Return to Index</Link>
            <Link href="/projects/rail-camera" className="font-mono text-base tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors">4x5 Rail →</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}