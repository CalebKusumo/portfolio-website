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
  { id: '01', label: 'Arm Mechanism',    title: 'Double-Joint Arm', desc: 'Carbon Fiber Extrusions // Dual-Motor Sync // 78" Extension Reach' },
  { id: '02', label: 'Game Piece Grip',  title: 'Pneumatic Gripper', desc: '120 PSI Working // High-Torque Actuation // Custom Solenoid Manifold' },
  { id: '03', label: 'Drivetrain',       title: 'West Coast Drive',  desc: '6-Wheel Tank // Skid-Steer Differential // KOP Chassis Modified' },
  { id: '04', label: 'Power System',     title: 'PDP Distribution',  desc: '12V 18Ah Battery // 40A Breakers // CAN Bus Monitoring' },
];

const rightCallouts = [
  { id: '05', label: 'Vision System',   title: 'Limelight 2+',      desc: 'AprilTag Targeting // Grid Alignment // 22ms Pipeline Latency' },
  { id: '06', label: 'Software Core',   title: 'Java Framework',    desc: 'Command-Based WPILib // IK Arm Pathing // Setpoint Optimization' },
  { id: '07', label: 'Auto Balance',    title: 'Charge Station',    desc: 'Gyro-Leveling PID // 2-Point Engage // <0.5° Final Pitch Error' },
  { id: '08', label: 'Chassis Frame',   title: '6061 Aluminum',     desc: '1"×2" Welded Frame // SolidWorks FEA // 122 lb Competition Weight' },
];

const details = [
  {
    img: '/projects/2023-robot/detail-1.jpg',
    alt: 'Double-Jointed Arm',
    label: 'Arm Mechanism',
    title: 'Double-Jointed Arm',
    body: 'A two-degree-of-freedom arm built from carbon fiber tube extrusions gives the robot the reach needed to score on all three grid levels. Each joint is driven by a pair of NEO motors through a custom gearbox, with the joints synchronized via WPILib\'s DifferentialArmFeedforward. The full extension of 78 inches clears the top node while keeping the center of gravity within the robot\'s wheelbase during transport.',
    accent: 'border-orange-500',
  },
  {
    img: '/projects/2023-robot/detail-2.jpg',
    alt: 'Pneumatic Gripper',
    label: 'Game Piece Grip',
    title: 'Pneumatic Gripper',
    body: 'A double-acting pneumatic cylinder drives the gripper between open and close positions in under 80ms, fast enough to snatch cones and cubes from the substation without stopping. A custom solenoid manifold consolidates all pneumatic control onto a single CAN-addressable CTRE PCM, and 120 PSI working pressure ensures consistent actuation force across the full match.',
    accent: 'border-white/20',
  },
  {
    img: '/projects/2023-robot/detail-3.jpg',
    alt: 'Controls Logic',
    label: 'Software',
    title: 'Inverse Kinematics',
    body: 'Rather than controlling joint angles directly, the arm runs a full 2-link inverse kinematics solver so the drivers command end-effector position in Cartesian space. Preset positions for each grid node are stored as field-relative coordinates and activated with a single button press. A gravity-compensation feedforward keeps the arm stable at any position without continuous driver input.',
    accent: 'border-orange-500',
  },
  {
    img: '/projects/2023-robot/detail-4.jpg',
    alt: 'Chassis Design',
    label: 'Chassis',
    title: 'West Coast Drive',
    body: 'The drivetrain uses a traditional 6-wheel west coast layout with a lowered center wheel for easier turning. The frame is welded 1"×2" 6061 aluminum tube, sized to fit within the 28"×32" bumper perimeter. SolidWorks FEA was used to verify weld joint stress under impact loading, and the final robot weighed in at 122 lbs — well within the 125 lb limit.',
    accent: 'border-white/20',
  },
  {
    img: '/projects/2023-robot/detail-5.jpg',
    alt: 'Vision System',
    label: 'Vision',
    title: 'AprilTag Alignment',
    body: 'A Limelight 2+ mounted on the front of the robot provides real-time AprilTag detection for automated grid alignment. When the driver activates auto-align, the robot drives to the target tag\'s pose using a P controller on both strafe and forward axes. The 22ms pipeline latency is compensated in the pose estimator to prevent targeting overshoot during fast approach runs.',
    accent: 'border-orange-500',
  },
  {
    img: '/projects/2023-robot/detail-6.jpg',
    alt: 'Charge Station Balance',
    label: 'Autonomous',
    title: 'Charge Station',
    body: 'The autonomous charge station routine uses the NavX2 IMU\'s pitch reading to drive a bang-bang controller that rocks the robot onto the station and then a fine PID to settle to level. The engage sequence reliably achieves under 0.5° final pitch error, earning the full 10 autonomous points. The routine is tunable per-field through a dashboard-exposed coefficient set.',
    accent: 'border-white/20',
  },
];

export default function Robot2023() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="relative bg-black min-h-screen">
      {/* FIXED 3D BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ModelViewer
          modelPath="/models/robot2023.glb"
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
              src="/projects/2023-robot/header.jpg"
              className="w-full h-full object-cover opacity-40"
              alt="2023 Robot"
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
              Mechatronics: Charged Up 2023
            </span>
            <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mix-blend-difference text-center">
              2023 <br />
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
            <Link href="/projects/2024-robot" className="font-mono text-base tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors">← 2024 Robot</Link>
            <Link href="/projects" className="px-14 py-5 border border-white/20 font-mono text-sm tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all">Index</Link>
            <Link href="/projects/darkslide" className="font-mono text-base tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors">Darkslide →</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
