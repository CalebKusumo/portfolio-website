"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

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
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function CameraRepairProject() {
  return (
    <main className="bg-black min-h-screen text-white">

      {/* HERO */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img
            src="/projects/camera-repair/header.jpg"
            className="w-full h-full object-cover opacity-40 grayscale"
            alt="Camera Repair"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-4"
        >
          <span className="font-mono text-[10px] tracking-[0.6em] text-amber-500 mb-4 uppercase block">
            CalebColor: Mechanical Repair
          </span>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mix-blend-difference text-center">
            CAMERA <br />
            <span className="text-outline italic text-white text-7xl md:text-[8rem]">REPAIR</span>
          </h1>
        </motion.div>
      </section>

      {/* CAMERAS SERVICED */}
      <div className="px-8 md:px-24 lg:px-40 py-20 border-t border-white/10">
        <p className="font-mono text-xs tracking-[0.5em] text-amber-500 uppercase mb-10">Cameras Serviced</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {[
            { name: "Mamiya RB67",          type: "Medium Format SLR"  },
            { name: "Mamiya GS645",         type: "Medium Format RF"   },
            { name: "Mamiya GS645S",        type: "Medium Format RF"   },
            { name: "Canonet QL17 GIII",    type: "35mm Rangefinder"   },
            { name: "Canon AE-1 Program",   type: "35mm SLR"           },
            { name: "Pentax 67",            type: "Medium Format SLR"  },
            { name: "Fujifilm X100V",       type: "Digital Compact"    },
            { name: "Canon R6",             type: "Digital Mirrorless"  },
            { name: "Nikon Coolpix S5600",  type: "Digital Compact"    },
            { name: "Kodak PIXPRO FZ55",    type: "Digital Compact"    },
            { name: "Canon EF 85mm f/1.8",  type: "EF Lens"            },
          ].map((cam) => (
            <div key={cam.name} className="bg-black px-8 py-6 hover:bg-white/[0.03] transition-colors">
              <p className="text-white font-bold uppercase tracking-tight text-sm mb-1">{cam.name}</p>
              <p className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">{cam.type}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CALLOUTS WITH IMAGES */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-y-96 py-20 px-8 md:px-24 lg:px-40"
      >
        {/* CALLOUT 01: Image Left, Text Right */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-video bg-white/5 overflow-hidden border border-white/10 group">
            <img
              src="/projects/camera-repair/detail-1.jpg"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              alt="Shutter Timing"
            />
          </div>
          <div className="border-l-2 border-amber-500 pl-8">
            <h3 className="text-3xl font-black uppercase italic text-white mb-2">Shutter Timing</h3>
            <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
              Focal Plane & Leaf Shutter Calibration // CLA Service // Curtain Tension Adjustment // Speed Accuracy Testing
            </p>
          </div>
        </motion.div>

        {/* CALLOUT 02: Text Left, Image Right */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 border-r-2 border-white/20 pr-8 text-right">
            <h3 className="text-3xl font-black uppercase italic text-white mb-2">Film Transport</h3>
            <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
              Advance Mechanism Overhaul // Sprocket & Take-up Spool Repair // Film Counter Reset // Winding Clutch Service
            </p>
          </div>
          <div className="order-1 md:order-2 aspect-video bg-white/5 overflow-hidden border border-white/10 group">
            <img
              src="/projects/camera-repair/detail-2.jpg"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              alt="Film Transport"
            />
          </div>
        </motion.div>

        {/* CALLOUT 03: Image Left, Text Right */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-video bg-white/5 overflow-hidden border border-white/10 group">
            <img
              src="/projects/camera-repair/detail-3.jpg"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              alt="Light Seals"
            />
          </div>
          <div className="border-l-2 border-white/20 pl-8">
            <h3 className="text-3xl font-black uppercase italic text-white mb-2">Light Seals</h3>
            <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
              Foam & Flocked Seal Replacement // Mirror Box Sealing // Light Trap Installation // Material Selection by Format
            </p>
          </div>
        </motion.div>

        {/* CALLOUT 04: Text Left, Image Right */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 border-r-2 border-amber-500 pr-8 text-right">
            <h3 className="text-3xl font-black uppercase italic text-white mb-2">Lens & Optics</h3>
            <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
              Element Cleaning & Defogging // Fungus Removal // Aperture Blade Service // Helicoid Relubrication
            </p>
          </div>
          <div className="order-1 md:order-2 aspect-video bg-white/5 overflow-hidden border border-white/10 group">
            <img
              src="/projects/camera-repair/detail-4.jpg"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              alt="Lens & Optics"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* FOOTER */}
      <footer className="py-24 flex flex-col items-center justify-center bg-black border-t border-white/10 gap-10">
        <div className="flex items-center gap-8">
          <Link href="/projects/mamiya-hood" className="font-mono text-base tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors">← Mamiya Hood</Link>
          <Link href="/projects" className="px-14 py-5 border border-white/20 font-mono text-sm tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all">Return to Index</Link>
          <Link href="/projects/2025-robot" className="font-mono text-base tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors">2025 Robot →</Link>
        </div>
      </footer>

    </main>
  );
}
