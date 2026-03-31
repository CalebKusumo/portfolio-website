"use client";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ModelViewer = dynamic(() => import('@/components/ModelViewer'), { ssr: false });

// Animation variants with 'as const' to fix the TypeScript build error
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] as const 
    } 
  },
};

export default function LutronProject() {
  return (
    <main className="relative bg-black min-h-screen">
      {/* 3D BACKGROUND LAYER */}
      <ModelViewer 
        modelPath="/lutron-model.glb" 
        modelScale={7} 
        modelPosition={[0, -0.5, 0]} 
      />

      {/* CONTENT LAYER */}
      <div className="relative z-10 w-full overflow-hidden pointer-events-none">
        
        {/* SECTION 1: HERO WITH HEADER PHOTO */}
        <section className="h-screen relative flex flex-col items-center justify-center text-center pointer-events-auto">
          {/* Header Photo Container */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/projects/lutron/header-bg.jpg" 
              alt="Lutron Architecture" 
              className="w-full h-full object-cover opacity-30 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 px-4"
          >
            <span className="font-mono text-[10px] tracking-[0.6em] text-blue-600 mb-4 uppercase block">
              Competition_Entry: 2025
            </span>
            <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mix-blend-difference">
              LUTRON <br /> 
              <span className="text-outline italic text-white text-7xl md:text-[8rem]">LIGHTING</span>
            </h1>
          </motion.div>
        </section>

        {/* SECTION 2: 6-CALLOUT MATRIX */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-y-32 py-40 pointer-events-auto"
        >
          
          {/* ROW 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-24 lg:px-40 gap-x-40">
            <motion.div variants={itemVariants} className="w-full max-w-md border-l-2 border-blue-600 pl-8 group">
              <div className="w-full h-40 bg-white/5 mb-6 overflow-hidden border border-white/10">
                <img src="/projects/lutron/photometrics.jpg" className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700" />
              </div>
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Photometrics</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase leading-relaxed">
                AGI32 Simulation // 98 CRI // R9 Red Rendering Optimization
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="w-full max-w-md md:ml-auto border-l-2 border-white/20 pl-8 group md:mt-40">
              <div className="w-full h-40 bg-white/5 mb-6 overflow-hidden border border-white/10">
                <img src="/projects/lutron/controls.jpg" className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700" />
              </div>
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Controls</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase leading-relaxed">
                Athena Wireless Hub // Daylight Harvesting // Timeclock Scheduling
              </p>
            </motion.div>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-24 lg:px-40 gap-x-40">
            <motion.div variants={itemVariants} className="w-full max-w-md border-l-2 border-white/20 pl-8 group md:mt-20">
              <div className="w-full h-40 bg-white/5 mb-6 overflow-hidden border border-white/10">
                <img src="/projects/lutron/fixtures.jpg" className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700" />
              </div>
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Luminaires</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase leading-relaxed">
                Recessed Linear Flangeless // Custom 2700K-5000K Tunable White
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="w-full max-w-md md:ml-auto border-l-2 border-blue-600 pl-8 group">
              <div className="w-full h-40 bg-white/5 mb-6 overflow-hidden border border-white/10">
                <img src="/projects/lutron/daylight.jpg" className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700" />
              </div>
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Daylighting</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase leading-relaxed">
                Automated Sivoia QS Shades // Glare Analysis // Solar Tracking
              </p>
            </motion.div>
          </div>

          {/* ROW 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-24 lg:px-40 gap-x-40">
            <motion.div variants={itemVariants} className="w-full max-w-md border-l-2 border-blue-600 pl-8 group">
              <div className="w-full h-40 bg-white/5 mb-6 overflow-hidden border border-white/10">
                <img src="/projects/lutron/energy.jpg" className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700" />
              </div>
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Efficiency</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase leading-relaxed">
                LPD: 0.45 W/SQFT // IECC 2021 Compliant // LEED Platinum Target
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="w-full max-w-md md:ml-auto border-l-2 border-white/20 pl-8 group md:mt-40">
              <div className="w-full h-40 bg-white/5 mb-6 overflow-hidden border border-white/10">
                <img src="/projects/lutron/details.jpg" className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700" />
              </div>
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Detailing</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase leading-relaxed">
                Seismic Bracing // Thermal Bridging // Zero-Sightline Trim
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* FOOTER */}
        <footer className="h-screen flex flex-col items-center justify-center bg-black relative z-20 pointer-events-auto border-t border-white/10">
          <div className="text-center mb-12">
            <p className="font-mono text-[10px] tracking-[1em] text-blue-600 uppercase mb-4">End of Documentation</p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic text-white">System <br/> <span className="text-outline">Complete</span></h2>
          </div>
          <Link href="/projects" className="px-16 py-6 border border-white/20 font-mono text-[11px] tracking-[0.5em] uppercase hover:bg-white hover:text-black transition-all">
            Return to Index
          </Link>
        </footer>
      </div>
    </main>
  );
}