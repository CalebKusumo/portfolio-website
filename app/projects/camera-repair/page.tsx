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

      {/* REPAIR TYPES TABLE */}
      <div className="px-8 md:px-24 lg:px-40 py-20 border-t border-white/10">
        <p className="font-mono text-xs tracking-[0.5em] text-amber-500 uppercase mb-10">Repair Services</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {[
            { name: "Shutter Timing",    detail: "Focal Plane & Leaf"      },
            { name: "Film Transport",    detail: "Advance & Winding"       },
            { name: "Light Seals",       detail: "Foam & Flocked Material" },
            { name: "Lens & Optics",     detail: "CLA & Element Cleaning"  },
            { name: "CLA Service",       detail: "Clean, Lube, Adjust"     },
            { name: "Aperture Blades",   detail: "Degreasing & Alignment"  },
            { name: "Rangefinder",       detail: "Patch & Cam Alignment"   },
            { name: "Sensor Cleaning",   detail: "DSLR & Mirrorless"       },
          ].map((r) => (
            <div key={r.name} className="bg-black px-8 py-6 hover:bg-white/[0.03] transition-colors">
              <p className="text-white font-bold uppercase tracking-tight text-sm mb-1">{r.name}</p>
              <p className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">{r.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CAMERA CALLOUTS */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-y-24 py-20 px-8 md:px-24 lg:px-40"
      >
        {/* CALLOUT 01: Image Left, Text Right */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-video bg-white/5 overflow-hidden border border-white/10 group">
            <img
              src="/projects/camera-repair/detail-1.jpg"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              alt="Mamiya RB67"
            />
          </div>
          <div className="border-l-2 border-amber-500 pl-8">
            <h3 className="text-3xl font-black uppercase italic text-white mb-2">Mamiya RB67</h3>
            <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
              Medium Format SLR // Darkslide Interlock Repair // Light Seal Replacement // Bellows Inspection
            </p>
          </div>
        </motion.div>

        {/* CALLOUT 02: Text Left, Image Right */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 border-r-2 border-white/20 pr-8 text-right">
            <h3 className="text-3xl font-black uppercase italic text-white mb-2">Canonet QL17 GIII</h3>
            <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
              35mm Rangefinder // Rangefinder Cleaning // Aperture Blade Degreasing // Shutter Jam Repair & CLA // Light Seal Replacement
            </p>
          </div>
          <div className="order-1 md:order-2 aspect-video bg-white/5 overflow-hidden border border-white/10 group">
            <img
              src="/projects/camera-repair/detail-2.jpg"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              alt="Canonet QL17 GIII"
            />
          </div>
        </motion.div>

        {/* CALLOUT 03: Image Left, Text Right */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-video bg-white/5 overflow-hidden border border-white/10 group">
            <img
              src="/projects/camera-repair/detail-3.jpg"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              alt="Canon AE-1 Program"
            />
          </div>
          <div className="border-l-2 border-white/20 pl-8">
            <h3 className="text-3xl font-black uppercase italic text-white mb-2">Canon AE-1 Program</h3>
            <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
              35mm SLR // Light Seal Replacement // Shutter Solenoid Repair // CLA
            </p>
          </div>
        </motion.div>

        {/* CALLOUT 04: Text Left, Image Right */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 border-r-2 border-amber-500 pr-8 text-right">
            <h3 className="text-3xl font-black uppercase italic text-white mb-2">Pentax 67</h3>
            <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
              Medium Format SLR // Advance & Shutter Mechanism Repair
            </p>
          </div>
          <div className="order-1 md:order-2 aspect-video bg-white/5 overflow-hidden border border-white/10 group">
            <img
              src="/projects/camera-repair/detail-4.jpg"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              alt="Pentax 67"
            />
          </div>
        </motion.div>

        {/* CALLOUT 05: Image Left, Text Right */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-video bg-white/5 overflow-hidden border border-white/10 group">
            <img
              src="/projects/camera-repair/detail-5.jpg"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              alt="Fujifilm X100V"
            />
          </div>
          <div className="border-l-2 border-white/20 pl-8">
            <h3 className="text-3xl font-black uppercase italic text-white mb-2">Fujifilm X100V</h3>
            <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
              Digital Compact // Viewfinder Glass Repair // Water Damage Repair
            </p>
          </div>
        </motion.div>

        {/* CALLOUT 06: Text Left, Image Right */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 border-r-2 border-white/20 pr-8 text-right">
            <h3 className="text-3xl font-black uppercase italic text-white mb-2">Canon R6</h3>
            <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
              Digital Mirrorless // Body Panel Repair
            </p>
          </div>
          <div className="order-1 md:order-2 aspect-video bg-white/5 overflow-hidden border border-white/10 group">
            <img
              src="/projects/camera-repair/detail-6.jpg"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              alt="Canon R6"
            />
          </div>
        </motion.div>

        {/* CALLOUT 07: Image Left, Text Right */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-video bg-white/5 overflow-hidden border border-white/10 group">
            <img
              src="/projects/camera-repair/detail-7.jpg"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              alt="Nikon Coolpix S5600"
            />
          </div>
          <div className="border-l-2 border-amber-500 pl-8">
            <h3 className="text-3xl font-black uppercase italic text-white mb-2">Nikon Coolpix S5600</h3>
            <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
              Digital Point & Shoot // LCD Screen Repair // Cleaning
            </p>
          </div>
        </motion.div>

        {/* CALLOUT 08: Text Left, Image Right */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 border-r-2 border-white/20 pr-8 text-right">
            <h3 className="text-3xl font-black uppercase italic text-white mb-2">Kodak PIXPRO FZ55</h3>
            <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
              Digital Point & Shoot // Water Damage Repair // Cleaning
            </p>
          </div>
          <div className="order-1 md:order-2 aspect-video bg-white/5 overflow-hidden border border-white/10 group">
            <img
              src="/projects/camera-repair/detail-8.jpg"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              alt="Kodak PIXPRO FZ55"
            />
          </div>
        </motion.div>

        {/* CALLOUT 09: Image Left, Text Right */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-video bg-white/5 overflow-hidden border border-white/10 group">
            <img
              src="/projects/camera-repair/detail-9.jpg"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              alt="Fujica GS645 Professional"
            />
          </div>
          <div className="border-l-2 border-white/20 pl-8">
            <h3 className="text-3xl font-black uppercase italic text-white mb-2">Fujica GS645 Professional</h3>
            <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
              Medium Format Folding Rangefinder // Shutter Jam Repair & CLA // Rangefinder Cleaning // Light Seal Replacement
            </p>
          </div>
        </motion.div>

        {/* CALLOUT 10: Text Left, Image Right */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 border-r-2 border-amber-500 pr-8 text-right">
            <h3 className="text-3xl font-black uppercase italic text-white mb-2">Fujica GS645W Professional</h3>
            <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
              Medium Format Rangefinder // Sticky Rangefinder Repair // Rangefinder Cleaning // CLA
            </p>
          </div>
          <div className="order-1 md:order-2 aspect-video bg-white/5 overflow-hidden border border-white/10 group">
            <img
              src="/projects/camera-repair/detail-10.jpg"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              alt="Fujica GS645W Professional"
            />
          </div>
        </motion.div>

        {/* CALLOUT 11: Image Left, Text Right */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-video bg-white/5 overflow-hidden border border-white/10 group">
            <img
              src="/projects/camera-repair/detail-11.jpg"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              alt="Canon EF 85mm f/1.8"
            />
          </div>
          <div className="border-l-2 border-white/20 pl-8">
            <h3 className="text-3xl font-black uppercase italic text-white mb-2">Canon EF 85mm f/1.8</h3>
            <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
              35mm D/SLR Lens // Aperture Blade Degreasing // Autofocus Repair // Lens Element Cleaning
            </p>
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
