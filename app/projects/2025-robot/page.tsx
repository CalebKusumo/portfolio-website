"use client";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';

const ModelViewer = dynamic(() => import('@/components/ModelViewer'), { ssr: false });

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const detailVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const leftCallouts = [
  { id: '01', label: 'Algae Grabber',  title: 'Harpoon Intake',   desc: 'Harpoon Tip Contour // Neo 550 9:1 // SRPP Composite Structure' },
  { id: '02', label: 'Coral Intake',   title: 'Funnel Pickup',    desc: 'Station Funnel // Coral Game Piece // Station-Side Collection' },
  { id: '03', label: 'Drivetrain',     title: 'MK4i Swerve',      desc: 'L3+ Reduction (5.36:1) // Kraken X60 Drive // 19 ft/s Free Speed' },
  { id: '04', label: 'End Game',       title: 'Winch Climb',      desc: 'Intake-Style Deploy // Dyneema Pull // 30in Travel in 2s' },
];

const rightCallouts = [
  { id: '05', label: 'End Effector',  title: 'Turntable Wrist',  desc: '108:1 Gearbox // 10in Turntable Bearing // Dual-Piece Scoring' },
  { id: '06', label: 'Chassis',       title: '27"×32" Frame',    desc: '1/8" Bellypan Pocketed // Battery Offset CG // Sparkmax on Pan' },
  { id: '07', label: 'Scoring Reach', title: 'Cascade Elevator', desc: '3-Stage Chain Drive // 60in Full Extension // 0.4s Full Travel' },
  { id: '08', label: 'Game Pieces',   title: 'Coral + Algae',    desc: 'Reef Zone Pick & Place // Barge Scoring // Retroreflective Confirm' },
];

const details = [
  {
    img: '/projects/2025-robot/detail-1.jpg',
    alt: 'Swerve Drivetrain',
    label: 'Drivetrain',
    title: 'MK4i Swerve Drive',
    body: 'Four independently steered and driven SDS MK4i modules provide full holonomic freedom across the field. L3+ gearing (5.36:1) driven by Kraken X60 motors achieves 19 ft/s free speed, with NEO motors handling steering. The 27" × 32" chassis runs an aggressively pocketed 1/8" bellypan with the battery offset to balance the center of gravity.',
    accent: 'border-orange-500',
  },
  {
    img: '/projects/2025-robot/algaegrabber.mp4',
    video: '/projects/2025-robot/algaegrabber.mp4',
    alt: 'Algae Grabber',
    label: 'Algae Grabber',
    title: 'Harpoon Intake',
    body: 'The algae grabber uses 3" flex wheels 1" tall for linear speed when intaking algae. A harpoon-shaped tip on the contour deforms the ball when compressed for better grip and secure holding. A Neo 550 through a 9:1 reduction powers the wheels via HTD 5M 9mm pulleys. The structure is built from SRPP composite — a military-grade material chosen for its light weight and stiffness.',
    accent: 'border-white/20',
  },
  {
    img: '/projects/2025-robot/elevatorcoral.mp4',
    video: '/projects/2025-robot/elevatorcoral.mp4',
    alt: 'Elevator Coral Scoring',
    label: 'Scoring Reach',
    title: 'Cascade Elevator',
    body: 'A 3-stage cascade elevator — chain driven off a 3:1 gearbox powered by two Kraken X60 motors — covers the full 60" range of motion in 0.4 seconds. 2×1×1/8" uprights are supported by an A-frame and crossbars. Two hall-effect magnetic limit sensors define the range of motion. Igus chain is routed on the side to enable smooth wire motion.',
    accent: 'border-orange-500',
  },
  {
    img: '/projects/2025-robot/manualelevator.mp4',
    video: '/projects/2025-robot/manualelevator.mp4',
    alt: 'Elevator Manual Operation',
    label: 'Scoring Reach',
    title: 'Elevator Range',
    body: 'The carriage moves the full 60" range of motion within 0.4 seconds and is overextended for extra reach. A rectangular frame allows the turntable wrist mounting plates to bolt directly on.',
    accent: 'border-white/20',
  },
  {
    img: '/projects/2025-robot/wristturntable.mp4',
    video: '/projects/2025-robot/wristturntable.mp4',
    alt: 'Turntable Wrist',
    label: 'End Effector',
    title: 'Turntable Wrist',
    body: 'A Kraken X60 drives a 108:1 gearbox that rotates a 10" diameter turntable bearing — giving the end effector full rotational freedom without repositioning the elevator. The coral grabber uses 3" and 2" flex wheels driven by a NEO Vortex through a 3:1 reduction, with a spring-loaded alignment system providing a 60° acquisition window. A retroreflective sensor confirms coral capture.',
    accent: 'border-orange-500',
  },
  {
    img: '/projects/2025-robot/intakeclimb.mp4',
    video: '/projects/2025-robot/intakeclimb.mp4',
    alt: 'Winch Climb',
    label: 'End Game',
    title: 'Intake-Style Climb',
    body: 'The climb mechanism pivots downward from the robot chassis to deploy, then uses a one-way locking anchor to grab the cage bottom. Two Kraken X60 motors drive a 62.5:1 gearbox that spools dyneema onto a 1" drum, pulling 30" of travel in 2 seconds to lift the robot off the ground. The anchor uses a clevis-pin pivot with a custom spring-loaded latch as a one-way gate.',
    accent: 'border-white/20',
  },
  {
    img: '/projects/2025-robot/funnel1.avif',
    video: '/projects/2025-robot/funnel2.mp4',
    alt: 'Coral Intake Funnel',
    label: 'Coral Intake',
    title: 'Station Funnel Pickup',
    body: 'The coral intake uses a funnel-style entry for station-side collection of coral game pieces.',
    accent: 'border-orange-500',
  },
];

export default function Robot2025() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="relative bg-black min-h-screen">
      {/* FIXED 3D BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ModelViewer
          modelPath="/models/robot2025.glb"
          modelScale={3.84}
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
              Mechatronics: Reefscape 2025 // 115 lbs // 32″ × 27″ × 42″
            </span>
            <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mix-blend-difference text-center">
              2025 <br />
              <span className="text-outline italic text-white text-7xl md:text-[8rem]">ROBOT</span>
            </h1>
          </motion.div>
        </section>

        {/* REVEAL GAP */}
        <div className="h-[60vh] pointer-events-none" />

        {/* ENGINEERING CALLOUT DIAGRAM — left/right columns staggered vertically */}
        <section className="relative w-full py-32 pointer-events-none">
          <div className="w-full grid grid-cols-[1fr_42%_1fr]">

            {/* LEFT CALLOUTS */}
            <div className="flex flex-col gap-y-40 pt-0 pl-2 md:pl-4 lg:pl-6 pointer-events-auto">
              {leftCallouts.map((c) => (
                <motion.div
                  key={c.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={itemVariants}
                  className="flex items-center"
                >
                  <div className="flex-1 text-right bg-black/70 backdrop-blur-sm p-4 border border-white/10">
                    <div className="flex items-center justify-end gap-2 mb-1">
                      <span className="font-mono text-[8px] text-gray-500 tracking-widest uppercase">{c.label}</span>
                      <span className="font-mono text-[9px] text-orange-500 font-bold tracking-widest">{c.id}</span>
                    </div>
                    <h4 className="text-lg font-black uppercase italic text-white leading-tight">{c.title}</h4>
                    <p className="text-gray-500 font-mono text-[8px] tracking-widest uppercase mt-1">{c.desc}</p>
                  </div>
                  <div className="flex-shrink-0 w-8 md:w-14 flex items-center relative">
                    <div className="w-full" style={{ borderTop: '1px dashed rgba(255,255,255,0.35)' }} />
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-orange-500 ring-1 ring-orange-500/40" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CENTER — transparent for model */}
            <div />

            {/* RIGHT CALLOUTS — offset by half a gap to stagger */}
            <div className="flex flex-col gap-y-40 pt-24 pr-2 md:pr-4 lg:pr-6 pointer-events-auto">
              {rightCallouts.map((c) => (
                <motion.div
                  key={c.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={itemVariants}
                  className="flex items-center"
                >
                  <div className="flex-shrink-0 w-8 md:w-14 flex items-center relative">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-orange-500 ring-1 ring-orange-500/40" />
                    <div className="w-full" style={{ borderTop: '1px dashed rgba(255,255,255,0.35)' }} />
                  </div>
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
        </section>

        {/* FEATURE DETAIL ROWS */}
        <div className="flex flex-col py-40 px-8 md:px-20 lg:px-36 bg-black pointer-events-auto">
          {details.map((d, i) => {
            const imgLeft = i % 2 === 0;
            return (
              <motion.div
                key={d.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={detailVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8"
              >
                {imgLeft ? (
                  <>
                    <div className="aspect-video overflow-hidden border border-white/10 group">
                      {d.video ? (
                        <video src={d.video} className="w-full h-full object-cover opacity-80" autoPlay loop muted playsInline />
                      ) : (
                        <img src={d.img} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt={d.alt} />
                      )}
                    </div>
                    <div className={`border-l-2 ${d.accent} pl-8`}>
                      <span className="font-mono text-[9px] text-gray-500 tracking-widest uppercase block mb-2">{d.label}</span>
                      <h3 className="text-3xl font-black uppercase italic text-white mb-4">{d.title}</h3>
                      <p className="text-gray-400 font-mono text-xs leading-relaxed">{d.body}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`order-2 md:order-1 border-r-2 ${d.accent} pr-8 text-right`}>
                      <span className="font-mono text-[9px] text-gray-500 tracking-widest uppercase block mb-2">{d.label}</span>
                      <h3 className="text-3xl font-black uppercase italic text-white mb-4">{d.title}</h3>
                      <p className="text-gray-400 font-mono text-xs leading-relaxed">{d.body}</p>
                    </div>
                    <div className="order-1 md:order-2 aspect-video overflow-hidden border border-white/10 group">
                      {d.video ? (
                        <video src={d.video} className="w-full h-full object-cover opacity-80" autoPlay loop muted playsInline />
                      ) : (
                        <img src={d.img} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt={d.alt} />
                      )}
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
