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
  { id: '01', label: 'Drivetrain',        title: 'MK4i Swerve',     desc: 'Falcon 500 Powered // Field-Oriented // 16 ft/s Top Speed' },
  { id: '02', label: 'Note Intake',       title: 'Ground Pickup',    desc: 'Beam-Break Confirmation // 0.3s Cycle Time // Over-Bumper Deploy' },
  { id: '03', label: 'Shooter System',    title: 'Dual Flywheel',    desc: 'Variable RPM // Speaker & Amp // Spin-Up Under 0.4s' },
  { id: '04', label: 'Power System',      title: 'REV PDH',          desc: '240A Continuous // 20-Channel // Real-Time CAN Telemetry' },
];

const rightCallouts = [
  { id: '05', label: 'Vision System',    title: 'PhotonVision',     desc: 'Pose Estimation // Auto Note Tracking // AprilTag Alignment' },
  { id: '06', label: 'Software Core',   title: 'Java Framework',    desc: 'WPILib Command-Based // Custom Kinematics // AdvantageKit Logging' },
  { id: '07', label: 'Climb System',    title: 'Twin-Arm Hooks',    desc: 'Chain Driven // 1.8s Full Deploy // Stage Trap Capable' },
  { id: '08', label: 'CAD Design',      title: 'SolidWorks',        desc: 'Managed Assembly // Stress FEA on Pivots // Weight Optimized' },
];

const details = [
  {
    img: '/projects/2024-robot/detail-1.jpg',
    alt: 'Swerve Drive',
    label: 'Drivetrain',
    title: 'MK4i Swerve Drive',
    body: 'SDS MK4i modules with Falcon 500 drive and steer motors give the robot full holonomic mobility at 16 ft/s. Field-oriented control is handled by a custom swerve kinematics implementation layered on top of WPILib\'s SwerveDriveKinematics, with continuous heading correction from the NavX2 IMU. Odometry is fused with vision measurements for accurate autonomous positioning.',
    accent: 'border-orange-500',
  },
  {
    img: '/projects/2024-robot/detail-2.jpg',
    alt: 'Vision Alignment',
    label: 'Vision',
    title: 'PhotonVision',
    body: 'Two OV9281 cameras running PhotonVision provide pose estimation and automated note tracking. AprilTag detections from both cameras are fused into the pose estimator using a Kalman filter, dramatically reducing accumulated odometry error across the field. A separate pipeline handles note (ring) detection, enabling the robot to auto-drive to the nearest game piece with a single driver input.',
    accent: 'border-white/20',
  },
  {
    img: '/projects/2024-robot/detail-3.jpg',
    alt: 'Mechanical CAD',
    label: 'Mechanical Design',
    title: 'SolidWorks Assembly',
    body: 'The entire robot was modeled in SolidWorks before any metal was cut, using a top-down assembly workflow that let subsystem designers work concurrently without conflicts. Pivot arms on both the intake and shooter were run through static structural FEA to verify they wouldn\'t yield under game-piece impact loads. The final design came in 6 lbs under the weight limit, leaving margin for late-season additions.',
    accent: 'border-orange-500',
  },
  {
    img: '/projects/2024-robot/detail-4.jpg',
    alt: 'Java Software',
    label: 'Software',
    title: 'AdvantageKit Logging',
    body: 'The robot runs WPILib\'s command-based Java framework with AdvantageKit for full data replay. Every sensor input is logged to a structured binary file, allowing any match replay to be run through the exact same robot code off-board for debugging. Custom kinematics handle the shooter\'s variable spin angle and the intake\'s over-bumper pivot, all with full SysId-characterized PID gains.',
    accent: 'border-white/20',
  },
  {
    img: '/projects/2024-robot/detail-5.jpg',
    alt: 'Shooter System',
    label: 'Shooter',
    title: 'Dual Flywheel',
    body: 'A pair of independently-controlled flywheels spin the note out at different RPMs to apply deliberate backspin, improving arc consistency and reducing sensitivity to launch angle error. The shooter spins up from rest in under 0.4 seconds and holds velocity within ±30 RPM under load. Speed setpoints are interpolated from a range-to-speaker lookup table updated by the vision system in real time.',
    accent: 'border-orange-500',
  },
  {
    img: '/projects/2024-robot/detail-6.jpg',
    alt: 'Climb System',
    label: 'Endgame',
    title: 'Twin-Arm Climb',
    body: 'Two independently-actuated climb arms deploy in 1.8 seconds and hook onto the stage chain for the endgame hang. Each arm is driven by a single NEO through a 45:1 reduction, generating enough torque to lift the 118 lb robot reliably. A ratchet mechanism holds position with zero motor power once engaged, freeing the controller for other tasks. The trap scoring attachment is bolted directly to the arm carriage.',
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
              Mechatronics: Crescendo 2024
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
