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

const details = [
  {
    img: '/projects/2025-robot/detail-1.jpg',
    alt: 'Swerve Drivetrain',
    label: 'Drivetrain',
    title: 'MK4i Swerve Drive',
    body: 'Four independently steered and driven modules give the robot full holonomic freedom — any direction, any heading, at any time. Running L2 gearing with Falcon 500s, the drivetrain achieves 15.1 ft/s free speed with near-instant directional changes. Odometry is fused from wheel encoders and the NavX2 IMU for sub-centimeter dead-reckoning accuracy.',
    accent: 'border-orange-500',
  },
  {
    img: '/projects/2025-robot/detail-2.jpg',
    alt: 'Vision & Localization',
    label: 'Vision System',
    title: 'AprilTag Localization',
    body: 'A Limelight 3G camera runs on-board pose estimation using the field\'s AprilTag layout. 3D tag triangulation updates the robot\'s field position at 100Hz, correcting odometry drift in real time. Latency compensation is applied back through the WPILib pose estimator so the fused pose remains accurate even during rapid maneuvers.',
    accent: 'border-white/20',
  },
  {
    img: '/projects/2025-robot/detail-3.jpg',
    alt: 'Elevator Mechanism',
    label: 'Scoring Reach',
    title: 'Telescoping Elevator',
    body: 'A 3-stage continuous rigged cascade elevator extends to 84 inches in under 0.8 seconds, powered by two NEO motors on a 9:1 reduction. A custom trapezoidal motion profile minimizes jerk at the top of travel, preventing oscillation when the end effector is extended at full height. Hard stops at both ends are backed by software limits for redundancy.',
    accent: 'border-orange-500',
  },
  {
    img: '/projects/2025-robot/detail-4.jpg',
    alt: 'Coral End Effector',
    label: 'End Effector',
    title: 'Coral Scorer',
    body: 'The end effector uses a compliant geometry wrist that self-centers coral pieces during intake. A brushless motor drives the rollers through a torque-sensing loop — grip is confirmed by current spike detection rather than a sensor, removing a potential failure point. The wrist pivots ±90° to address L1 through L4 reef branches without repositioning the elevator.',
    accent: 'border-white/20',
  },
  {
    img: '/projects/2025-robot/detail-5.jpg',
    alt: 'Edge AI',
    label: 'Perception',
    title: 'Jetson Orin Nano',
    body: 'A Jetson Orin Nano co-processor handles game-piece classification and field object detection independent of the main RoboRIO. A custom-trained YOLO model identifies coral and algae pieces at 30fps with a 97% mAP. Detections are published over NetworkTables so the main robot controller can act on them within a single 20ms loop cycle.',
    accent: 'border-orange-500',
  },
  {
    img: '/projects/2025-robot/detail-6.jpg',
    alt: 'Software Architecture',
    label: 'Software',
    title: 'Command-Based C++',
    body: 'The robot runs a fully command-based C++ architecture built on WPILib. Every mechanism is isolated into its own subsystem with explicit state machines, making autonomous routine composition declarative and testable. PID controllers for the elevator, wrist, and drive are tuned using SysId characterization routines and run at 1kHz on the motor controllers\' onboard processors.',
    accent: 'border-white/20',
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
            <Link href="/projects/camera-repair" className="font-mono text-base tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors">← Camera Repair</Link>
            <Link href="/projects" className="px-14 py-5 border border-white/20 font-mono text-sm tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all">Index</Link>
            <Link href="/projects/2024-robot" className="font-mono text-base tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors">2024 Robot →</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
