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

export default function FinderProject() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="relative bg-black min-h-screen">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ModelViewer 
          modelPath="/models/finder.glb" 
          modelScale={9} 
          modelPosition={[0, 0, 0]} 
          scrollProgress={scrollYProgress} 
        />
      </div>

      <div className="relative z-10 w-full">
        <section className="relative h-screen w-full flex flex-col items-center justify-center text-center bg-black overflow-hidden shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img src="/projects/directors-finder/header.jpg" className="w-full h-full object-cover opacity-40 grayscale" alt="Finder" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 px-4">
            <span className="font-mono text-[10px] tracking-[0.6em] text-emerald-500 mb-4 uppercase block text-center">Optomechanical: 1:1 Director's View</span>
            <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mix-blend-difference text-center">WAIST <br /> <span className="text-outline italic text-white text-7xl md:text-[8rem]">FINDER</span></h1>
          </motion.div>
        </section>

        <div className="h-[60vh] pointer-events-none" />

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="flex flex-col gap-y-96 py-20 px-8 md:px-24 lg:px-40">
          {/* CALLOUT 01: Image Left, Text Right */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pointer-events-auto bg-black/75 backdrop-blur-sm p-8">
            <div className="aspect-video bg-white/5 overflow-hidden border border-white/10 group">
              <img src="/projects/directors-finder/detail-1.jpg" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Ground Glass" />
            </div>
            <div className="border-l-2 border-emerald-500 pl-8">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Ground Glass</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">Custom Acid-Etched Plane // High-Contrast Micro-Screen // Optimized for 120 Format</p>
            </div>
          </motion.div>
          {/* CALLOUT 02: Text Left, Image Right */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pointer-events-auto bg-black/75 backdrop-blur-sm p-8">
            <div className="order-2 md:order-1 border-r-2 border-white/20 pr-8 text-right">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Glare Control</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">Four-Leaf Shielding // Anti-Reflective Internal Baffling // High-Daylight Visibility</p>
            </div>
            <div className="order-1 md:order-2 aspect-video bg-white/5 overflow-hidden border border-white/10 group">
              <img src="/projects/directors-finder/detail-2.jpg" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Glare Control" />
            </div>
          </motion.div>
          {/* CALLOUT 03: Image Left, Text Right */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pointer-events-auto bg-black/75 backdrop-blur-sm p-8">
            <div className="aspect-video bg-white/5 overflow-hidden border border-white/10 group">
              <img src="/projects/directors-finder/detail-3.jpg" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Precision Optics" />
            </div>
            <div className="border-l-2 border-white/20 pl-8">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Precision Optics</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">Integrated Pop-up Magnifier // Achromatic Lens Element // 3x Critical Focus Check</p>
            </div>
          </motion.div>
          {/* CALLOUT 04: Text Left, Image Right */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pointer-events-auto bg-black/75 backdrop-blur-sm p-8">
            <div className="order-2 md:order-1 border-r-2 border-emerald-500 pr-8 text-right">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">CNC Housing</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">Billet Aluminum Machining // Friction-Fit Hinges // Ergonomic Thumb Release</p>
            </div>
            <div className="order-1 md:order-2 aspect-video bg-white/5 overflow-hidden border border-white/10 group">
              <img src="/projects/directors-finder/detail-4.jpg" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="CNC Housing" />
            </div>
          </motion.div>
        </motion.div>

        <footer className="py-24 flex flex-col items-center justify-center bg-black relative z-20 pointer-events-auto border-t border-white/10 gap-10">
          <div className="flex items-center gap-8">
            <Link href="/projects/lutron-lighting" className="font-mono text-base tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors">← Lutron Lighting</Link>
            <Link href="/projects" className="px-14 py-5 border border-white/20 font-mono text-sm tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all">Return to Index</Link>
            <Link href="/projects/mamiya-hood" className="font-mono text-base tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors">Mamiya Hood →</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}