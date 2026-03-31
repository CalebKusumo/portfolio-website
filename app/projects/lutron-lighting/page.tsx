"use client";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';

const ModelViewer = dynamic(() => import('@/components/ModelViewer'), { ssr: false });

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] as const // Fixed TS Error for Cloudflare
    } 
  },
};

export default function LutronProject() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="relative bg-black min-h-screen">
      {/* FIXED 3D BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ModelViewer 
          modelPath="/models/lutron.glb" 
          modelScale={7} 
          modelPosition={[0, -0.5, 0]} 
          scrollProgress={scrollYProgress} 
        />
      </div>

      <div className="relative z-10 w-full">
        {/* HERO SECTION */}
        <section className="relative h-screen w-full flex flex-col items-center justify-center text-center bg-black overflow-hidden shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img 
              src="/projects/lutron-lighting/header.jpg" 
              className="w-full h-full object-cover opacity-40 grayscale" 
              alt="Lutron" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }} 
            className="relative z-10 px-4"
          >
            <span className="font-mono text-[10px] tracking-[0.6em] text-blue-600 mb-4 uppercase block">
              Architectural: Multi-Use Gallery
            </span>
            <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mix-blend-difference">
              LUTRON <br /> 
              <span className="text-outline italic text-white text-7xl md:text-[8rem]">LIGHTING</span>
            </h1>
          </motion.div>
        </section>

        {/* GAP FOR 3D MODEL REVEAL */}
        <div className="h-[50vh] pointer-events-none" />

        {/* DATA CALLOUTS WITH IMAGES */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          className="flex flex-col gap-y-96 py-20 px-8 md:px-24 lg:px-40 bg-black/75 backdrop-blur-sm"
        >
          {/* CALLOUT 01: Image Left, Text Right */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pointer-events-auto">
            <div className="aspect-video bg-white/5 overflow-hidden border border-white/10 group">
               <img 
                 src="/projects/lutron-lighting/detail-1.jpg" 
                 className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                 alt="Photometrics Detail" 
               />
            </div>
            <div className="border-l-2 border-blue-600 pl-8">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Photometrics</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
                AGI32 Simulation // 98 CRI // R9 Red Rendering Optimization // Point-by-Point Calculation
              </p>
            </div>
          </motion.div>

          {/* CALLOUT 02: Text Left, Image Right */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pointer-events-auto">
            <div className="order-2 md:order-1 border-r-2 border-white/20 pr-8 text-right">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">System Controls</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
                Athena Wireless Hub // Daylight Harvesting // Timeclock Scheduling // Occupancy Logic
              </p>
            </div>
            <div className="order-1 md:order-2 aspect-video bg-white/5 overflow-hidden border border-white/10 group">
               <img 
                 src="/projects/lutron-lighting/detail-2.jpg" 
                 className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                 alt="Controls Detail" 
               />
            </div>
          </motion.div>

          {/* CALLOUT 03: Image Left, Text Right */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pointer-events-auto">
            <div className="aspect-video bg-white/5 overflow-hidden border border-white/10 group">
               <img 
                 src="/projects/lutron-lighting/detail-3.jpg" 
                 className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                 alt="Fixture Design Detail" 
               />
            </div>
            <div className="border-l-2 border-white/20 pl-8">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Fixture Design</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
                Recessed Linear Flangeless // Custom 2700K-5000K Tunable White // Zero-Sightline Trim
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* FOOTER */}
        <footer className="py-24 flex flex-col items-center justify-center bg-black relative z-20 border-t border-white/10 gap-10">
          <div className="flex items-center gap-8">
            <Link href="/projects/rail-camera" className="font-mono text-base tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors">← 4x5 Rail</Link>
            <Link href="/projects" className="px-14 py-5 border border-white/20 font-mono text-sm tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all">Return to Index</Link>
            <Link href="/projects/directors-finder" className="font-mono text-base tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors">Waist Finder →</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}