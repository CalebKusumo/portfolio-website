"use client";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';

const ModelViewer = dynamic(() => import('@/components/ModelViewer'), { ssr: false });

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const leftCallouts = [
  { id: '01', label: 'Vision System',      title: 'Limelight 3G',    desc: 'AprilTag Triangulation // 3D Pose Est. // 12ms Latency' },
  { id: '02', label: 'Intake Mechanism',   title: 'Poly Rollers',    desc: 'Variable-Duro PC // 40N Grip Force // Dual-Game-Piece' },
  { id: '03', label: 'Drivetrain',         title: 'MK4i Swerve',     desc: '4-Module Independent // L2 Gearing // 15.1 ft/s Free Speed' },
  { id: '04', label: 'Power Distribution', title: 'REV PDH',         desc: '240A Continuous // 20-Channel // Real-Time CAN Telemetry' },
];

const rightCallouts = [
  { id: '05', label: 'Edge AI',       title: 'Jetson Orin',   desc: 'Nano Deployment // Python Inference // 100 TOPS Compute' },
  { id: '06', label: 'Software Core', title: 'C++ Framework', desc: 'Command-Based // Custom PID Loops // Multithreaded Subsystems' },
  { id: '07', label: 'Scoring Reach', title: 'Elevator',      desc: '3-Stage Cascade // 84in Max Extension // 0.8s Full Travel' },
  { id: '08', label: 'End Effector',  title: 'Coral Scorer',  desc: '±2° Placement Precision // Compliant Geometry // L1–L4 Scoring' },
];

export default function Robot2025() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="relative bg-black min-h-screen">
      {/* FIXED 3D BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ModelViewer
          modelPath="/models/robot2025.glb"
          modelScale={4.8}
          modelPosition={[0, -1, 0]}
          scrollProgress={scrollYProgress}
        />
      </div>

      <div className="relative z-10 w-full">
        {/* HERO HEADER */}
        <section className="relative aspect-[3/2] w-full flex flex-col items-center justify-center text-center bg-black overflow-hidden shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src="/projects/2025-robot/header.jpg"
              className="w-full h-full object-cover opacity-40"
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

        {/* ENGINEERING CALLOUT DIAGRAM */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative min-h-screen flex items-center py-24"
        >
          <div className="w-full grid grid-cols-[1fr_28%_1fr] items-center">

            {/* LEFT CALLOUTS */}
            <div className="flex flex-col gap-y-8 pl-6 md:pl-12 lg:pl-20 pointer-events-auto">
              {leftCallouts.map((c) => (
                <motion.div key={c.id} variants={itemVariants} className="flex items-center">
                  {/* Text box */}
                  <div className="flex-1 text-right bg-black/70 backdrop-blur-sm p-4 border border-white/10">
                    <div className="flex items-center justify-end gap-2 mb-1">
                      <span className="font-mono text-[8px] text-gray-500 tracking-widest uppercase">{c.label}</span>
                      <span className="font-mono text-[9px] text-orange-500 font-bold tracking-widest">{c.id}</span>
                    </div>
                    <h4 className="text-lg font-black uppercase italic text-white leading-tight">{c.title}</h4>
                    <p className="text-gray-500 font-mono text-[8px] tracking-widest uppercase mt-1">{c.desc}</p>
                  </div>
                  {/* Leader line — dot at model end */}
                  <div className="flex-shrink-0 w-10 md:w-16 flex items-center relative">
                    <div className="w-full" style={{ borderTop: '1px dashed rgba(255,255,255,0.35)' }} />
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-orange-500 ring-1 ring-orange-500/40" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CENTER — transparent, model shows through */}
            <div />

            {/* RIGHT CALLOUTS */}
            <div className="flex flex-col gap-y-8 pr-6 md:pr-12 lg:pr-20 pointer-events-auto">
              {rightCallouts.map((c) => (
                <motion.div key={c.id} variants={itemVariants} className="flex items-center">
                  {/* Leader line — dot at model end */}
                  <div className="flex-shrink-0 w-10 md:w-16 flex items-center relative">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-orange-500 ring-1 ring-orange-500/40" />
                    <div className="w-full" style={{ borderTop: '1px dashed rgba(255,255,255,0.35)' }} />
                  </div>
                  {/* Text box */}
                  <div className="flex-1 text-left bg-black/70 backdrop-blur-sm p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[9px] text-orange-500 font-bold tracking-widest">{c.id}</span>
                      <span className="font-mono text-[8px] text-gray-500 tracking-widest uppercase">{c.label}</span>
                    </div>
                    <h4 className="text-lg font-black uppercase italic text-white leading-tight">{c.title}</h4>
                    <p className="text-gray-500 font-mono text-[8px] tracking-widest uppercase mt-1">{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.section>

        {/* FOOTER */}
        <footer className="py-24 flex flex-col items-center justify-center bg-black relative z-20 pointer-events-auto border-t border-white/10 gap-10">
          <div className="text-center">
            <p className="font-mono text-[10px] tracking-[1em] text-orange-500 uppercase mb-4 text-center">End of Documentation</p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic text-white text-center">Project <br /> <span className="text-outline">Archived</span></h2>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/projects/camera-repair" className="font-mono text-base tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors">← Camera Repair</Link>
            <Link href="/projects" className="px-14 py-5 border border-white/20 font-mono text-sm tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all">Index</Link>
            <Link href="/projects/2024-robot" className="font-mono text-base tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors">2024 Robot →</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
