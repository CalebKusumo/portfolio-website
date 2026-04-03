"use client";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';

const ModelViewer = dynamic(() => import('@/components/ModelViewer'), { ssr: false });

const detailVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const details = [
  {
    img: '/projects/rail-camera/detail-1.jpg',
    alt: '4-Axis Motion',
    title: '4-Axis Motion',
    body: 'Independent Rise, Fall, Shift, and Swing // Geared Precision Drives // Lead-Screw Accuracy',
    accent: 'border-emerald-500',
  },
  {
    img: '/projects/rail-camera/detail-2.jpg',
    alt: 'Modular Bellows',
    title: 'Modular Bellows',
    body: 'High-Extension Synthetic Fabric // Magnetic Quick-Release Frames // Light-Tight Optimization',
    accent: 'border-white/20',
  },
  {
    img: '/projects/rail-camera/detail-3.jpg',
    alt: 'CNC Machining',
    title: 'CNC Machining',
    body: 'Aircraft Aluminum Chassis // Type III Hard Anodizing // Laser-Etched Vernier Scales',
    accent: 'border-emerald-500',
  },
  {
    img: '/projects/rail-camera/detail-4.jpg',
    alt: 'Optical Path',
    title: 'Optical Path',
    body: 'Zero-Vignetting Architecture // Ground Glass Focus Plane Alignment // Custom Lens Board Support',
    accent: 'border-white/20',
  },
];

export default function RailCameraProject() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="relative bg-black min-h-screen">
      {/* FIXED 3D BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ModelViewer
          modelPath="/models/railcamera.glb"
          modelScale={10}
          modelPosition={[0, -0.5, 0]}
          modelRotation={[0, Math.PI, 0]}
          scrollProgress={scrollYProgress}
        />
      </div>

      <div className="relative z-10 w-full">
        {/* HERO HEADER */}
        <section className="relative aspect-[3/2] w-full flex flex-col items-center justify-center text-center bg-black overflow-hidden shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img src="/projects/rail-camera/header.jpg" className="w-full h-full object-cover opacity-40" alt="Rail Camera" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 px-4"
          >
            <span className="font-mono text-[10px] tracking-[0.6em] text-emerald-500 mb-4 uppercase block text-center">
              Optomechanical: Modular System
            </span>
            <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mix-blend-difference text-center">
              4x5 <br />
              <span className="text-outline italic text-white text-7xl md:text-[8rem]">RAIL</span>
            </h1>
          </motion.div>
        </section>

        {/* REVEAL GAP */}
        <div className="h-[100vh] pointer-events-none" />

        {/* FEATURE DETAIL ROWS */}
        <div className="flex flex-col py-40 px-8 md:px-20 lg:px-36 bg-black pointer-events-auto">
          {details.map((d, i) => {
            const imgLeft = i % 2 === 0;
            return (
              <motion.div
                key={d.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={detailVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8"
              >
                {imgLeft ? (
                  <>
                    <div className="aspect-video overflow-hidden border border-white/10 group">
                      <img src={d.img} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt={d.alt} />
                    </div>
                    <div className={`border-l-2 ${d.accent} pl-8`}>
                      <h3 className="text-3xl font-black uppercase italic text-white mb-4">{d.title}</h3>
                      <p className="text-gray-400 font-mono text-xs leading-relaxed">{d.body}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`order-2 md:order-1 border-r-2 ${d.accent} pr-8 text-right`}>
                      <h3 className="text-3xl font-black uppercase italic text-white mb-4">{d.title}</h3>
                      <p className="text-gray-400 font-mono text-xs leading-relaxed">{d.body}</p>
                    </div>
                    <div className="order-1 md:order-2 aspect-video overflow-hidden border border-white/10 group">
                      <img src={d.img} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt={d.alt} />
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* FOOTER */}
        <footer className="py-24 flex flex-col items-center justify-center bg-black relative z-20 pointer-events-auto border-t border-white/10 gap-10">
          <div className="text-center">
            <p className="font-mono text-[10px] tracking-[1em] text-emerald-500 uppercase mb-4 text-center">End of Documentation</p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic text-white text-center">Project <br /> <span className="text-outline">Archived</span></h2>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/projects/darkslide" className="font-mono text-base tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors">← Darkslide</Link>
            <Link href="/projects" className="px-14 py-5 border border-white/20 font-mono text-sm tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all">Index</Link>
            <Link href="/projects/lutron-lighting" className="font-mono text-base tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors">Lutron Lighting →</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
