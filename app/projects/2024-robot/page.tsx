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
  { id: '01', label: 'Drivetrain',     title: 'MK4i Swerve',      desc: 'L2 Reduction (6.75:1) // Falcon 500 Drive // 15 ft/s Free Speed' },
  { id: '02', label: 'Note Intake',    title: 'Under-Bumper',      desc: '5 Roller Sets // NEO 550 5:1 // Chassis-Integrated Mount' },
  { id: '03', label: 'Shooter System', title: 'Dual Flywheel',     desc: '8×4" Colson Wheels // 2× Kraken X60 // 9" Gear Rack Hood' },
  { id: '04', label: 'Amp Stinger',    title: 'Linear Elevator',   desc: '3:1 Falcon 500 // 13in Travel // 0.2s Full Cycle' },
];

const rightCallouts = [
  { id: '05', label: 'Vision System',  title: 'Limelight',         desc: 'Speaker Auto-Aim // Distance Calibrated // Mounted Vantage Point' },
  { id: '06', label: 'Software Core',  title: 'Java Framework',    desc: 'WPILib Command-Based // AdvantageKit Logging // Custom Kinematics' },
  { id: '07', label: 'End Game',       title: 'Linear Climb',      desc: 'UHMW Hook Carriages // 81:1 Gearbox // 24in Travel in 2s' },
  { id: '08', label: 'End Effector',   title: 'Amp Wrist',         desc: '108:1 Gearbox // Turntable Bearing // Trap + Amp Capable' },
];

const details = [
  {
    img: '/projects/2024-robot/detail-1.jpg',
    alt: 'Swerve Drive',
    label: 'Drivetrain',
    title: 'MK4i Swerve Drive',
    body: 'Four SDS MK4i modules running L2 gearing (6.75:1) with Falcon 500 drive and NEO steer motors give the robot full holonomic mobility at 15 ft/s. The 27" × 32" chassis uses an aggressively pocketed 1/8" bellypan, with the battery laid down flat to lower the center of gravity and free up space above. RoboRIO, PDP, and Spark MAX controllers are all mounted to the bellypan for consolidated wiring.',
    accent: 'border-orange-500',
  },
  {
    img: '/projects/2024-robot/detail-2.jpg',
    alt: 'Note Shooter',
    label: 'Shooter',
    title: 'Flywheel + Adjustable Hood',
    body: 'Eight 4" Colson wheels driven by two Kraken X60 motors launch notes at high linear speed from the shooter chamber. A 9" radius gear rack powered by a Falcon 500 through an 81:1 gearbox adjusts the hood angle in real time, enabling variable-distance speaker shots. A Limelight camera mounted at a fixed vantage point feeds distance data to the hood controller for auto-calibrated aiming.',
    accent: 'border-white/20',
  },
  {
    img: '/projects/2024-robot/detail-3.jpg',
    alt: 'Ground Intake',
    label: 'Note Intake',
    title: 'Under-Bumper Intake',
    body: 'An under-the-bumper intake mounts directly to the chassis perimeter, keeping the note acquisition geometry low and protected. Five sets of 1.625" horizontal rollers — each with a polycarbonate tube and silicone sleeve — grab notes immediately on contact. A NEO 550 motor through a 5:1 reduction drives the rollers via HTD 5M pulleys and 20DP spur gears for reliable transfer into the shooter path.',
    accent: 'border-orange-500',
  },
  {
    img: '/projects/2024-robot/detail-4.jpg',
    alt: 'Amp Grabber Wrist',
    label: 'End Effector',
    title: 'Amp Grabber Wrist',
    body: 'A NEO 550 drives a 108:1 gearbox that rotates a 54T #25 sprocket bolted to a large-diameter turntable, giving the wrist full rotational freedom. Bevel gears between the gearbox and sprocket allow compact packaging within the narrow carriage. The grabber uses 1.625" double horizontal rollers with a silicone sleeve driven by a second NEO 550 through a 3:1 reduction — a limit switch confirms note capture for autonomous handoff.',
    accent: 'border-white/20',
  },
  {
    img: '/projects/2024-robot/detail-5.jpg',
    alt: 'Amp Stinger',
    label: 'Scoring Reach',
    title: 'Stinger Elevator',
    body: 'A single Falcon 500 through a 3:1 set of 20DP gears drives the stinger — a compact two-stage elevator that moves the amp wrist through 13" of travel in 0.2 seconds. 2×1×1/8" uprights are mounted to an angled pivot for optimal amp station geometry. Igus chain manages wire routing along the carriage, and physical limit switches at both ends define hard travel boundaries.',
    accent: 'border-orange-500',
  },
  {
    img: '/projects/2024-robot/detail-6.jpg',
    alt: 'Linear Climb',
    label: 'Endgame',
    title: 'Winch Linear Climb',
    body: 'Two linear rails — held by chassis-integrated sideplates and a C-channel crossbar — guide UHMW plastic carriages that carry the stage hooks. Two NEO 550 motors drive an 81:1 gearbox that spools flexible cable wire onto a 1" OD drum, retracting 24" in 2 seconds to pull the 125 lb robot off the ground. The winch mount and anchor structure are integrated directly into the chassis tube for minimal added weight.',
    accent: 'border-white/20',
  },
];

export default function Robot2024() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="relative bg-black min-h-screen">
      {/* FIXED 3D BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ModelViewer
          modelPath="/models/robot2024.glb"
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
              src="/projects/2024-robot/header.jpg"
              className="w-full h-full object-cover opacity-40"
              alt="2024 Robot"
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
              Mechatronics: Crescendo 2024 // 125 lbs // 32″ × 27″ × 27″
            </span>
            <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mix-blend-difference text-center">
              2024 <br />
              <span className="text-outline italic text-white text-7xl md:text-[8rem]">ROBOT</span>
            </h1>
          </motion.div>
        </section>

        {/* REVEAL GAP */}
        <div className="h-[60vh] pointer-events-none" />

        {/* ENGINEERING CALLOUT DIAGRAM */}
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

            {/* RIGHT CALLOUTS — staggered */}
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
                      <img src={d.img} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt={d.alt} />
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
            <p className="font-mono text-[10px] tracking-[1em] text-orange-500 uppercase mb-4 text-center">End of Documentation</p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic text-white text-center">Project <br /> <span className="text-outline">Archived</span></h2>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/projects/2025-robot" className="font-mono text-base tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors">← 2025 Robot</Link>
            <Link href="/projects" className="px-14 py-5 border border-white/20 font-mono text-sm tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all">Index</Link>
            <Link href="/projects/2023-robot" className="font-mono text-base tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors">2023 Robot →</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
