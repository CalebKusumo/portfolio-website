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

export default function LutronProject() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="relative bg-black min-h-screen">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ModelViewer 
          modelPath="/models/lutron.glb" 
          modelScale={7} 
          modelPosition={[0, -0.5, 0]} 
          scrollProgress={scrollYProgress} 
        />
      </div>

      <div className="relative z-10 w-full">
        <section className="relative h-screen w-full flex flex-col items-center justify-center text-center bg-black overflow-hidden shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img src="/projects/lutron-lighting/header.jpg" className="w-full h-full object-cover opacity-40 grayscale" alt="Lutron" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 px-4">
            <span className="font-mono text-[10px] tracking-[0.6em] text-blue-600 mb-4 uppercase block text-center">Architectural: Multi-Use Gallery</span>
            <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mix-blend-difference text-center">LUTRON <br /> <span className="text-outline italic text-white text-7xl md:text-[8rem]">LIGHTING</span></h1>
          </motion.div>
        </section>

        <div className="h-[60vh] pointer-events-none" />

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="flex flex-col gap-y-64 py-20 pointer-events-none">
          <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-24 lg:px-40 gap-x-40 pointer-events-auto">
            <motion.div variants={itemVariants} className="w-full max-w-md border-l-2 border-blue-600 pl-8 group">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Photometrics</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">AGI32 Simulation // 98 CRI // R9 Red Rendering Optimization // Point-by-Point Calculation</p>
            </motion.div>
            <motion.div variants={itemVariants} className="w-full max-w-md md:ml-auto border-l-2 border-white/20 pl-8 group md:mt-40">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">System Controls</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">Athena Wireless Hub // Daylight Harvesting // Timeclock Scheduling // Occupancy Logic</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-24 lg:px-40 gap-x-40 pointer-events-auto">
            <motion.div variants={itemVariants} className="w-full max-w-md border-l-2 border-white/20 pl-8 group">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Energy Model</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">LPD: 0.45 W/SQFT // IECC 2021 Compliant // Revit BIM Integration // LEED Platinum Target</p>
            </motion.div>
            <motion.div variants={itemVariants} className="w-full max-w-md md:ml-auto border-l-2 border-blue-600 pl-8 group md:mt-20">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Fixture Design</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">Recessed Linear Flangeless // Custom 2700K-5000K Tunable White // Zero-Sightline Trim</p>
            </motion.div>
          </div>
        </motion.div>

        <footer className="h-screen flex flex-col items-center justify-center bg-black relative z-20 pointer-events-auto border-t border-white/10">
          <Link href="/projects" className="px-16 py-6 border border-white/20 font-mono text-[11px] tracking-[0.5em] uppercase hover:bg-white hover:text-black transition-all">Return to Index</Link>
        </footer>
      </div>
    </main>
  );
}