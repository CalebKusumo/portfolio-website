"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

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
  { id: '01', label: 'Drivetrain',    title: 'MK4i Swerve',     desc: 'L2 Reduction (6.75:1) // Falcon 500 Drive // 17 ft/s Free Speed' },
  { id: '02', label: 'Ground Intake', title: 'Cone & Cube',     desc: 'Rotate-Out Deploy // NEO 550 9:1 Pivot // 2" Roller Intake 3:1' },
  { id: '03', label: 'Pivot Arm',    title: 'Rack & Pinion',    desc: '45:1 Gearbox // 80° Range of Motion // 1.2s Full Travel' },
  { id: '04', label: 'End Effector', title: 'Roller Grabber',   desc: '8×3" Flex Wheels // 2× NEO 550 5:1 // Current Detect Confirm' },
];

const rightCallouts = [
  { id: '05', label: 'Arm Extension', title: 'Piston Stage',    desc: 'Inner Stage Deploy // Piston Actuated // Extra Scoring Reach' },
  { id: '06', label: 'Counterbalance', title: 'Spring System',  desc: '6×10lb Constant Force // Pivot-Mounted // Passive Load Offset' },
  { id: '07', label: 'End Game',      title: 'Landing Gear',    desc: 'Lead Screw Deploy // NEO 550 81:1 // Platform Balance Climb' },
  { id: '08', label: 'Chassis',       title: '30"×30" Frame',   desc: '1/8" Bellypan Pocketed // Battery Offset CG // Sparkmax on Pan' },
];

const details = [
  {
    img: '/projects/2023-robot/swervedrive.mp4',
    video: '/projects/2023-robot/swervedrive.mp4',
    alt: 'Swerve Drivetrain',
    label: 'Drivetrain',
    title: 'MK4i Swerve Drive',
    body: 'Four SDS MK4i modules running L2 gearing (6.75:1) with Falcon 500 drive and NEO steer motors give the robot full holonomic mobility at 17 ft/s. The 30" × 30" chassis uses an aggressively pocketed 1/8" bellypan with the battery offset to one side for CG balance. RoboRIO and Swerve Spark MAX controllers are mounted directly to the bellypan.',
    accent: 'border-orange-500',
  },
  {
    img: '/projects/2023-robot/rackpinionarm.mp4',
    video: '/projects/2023-robot/rackpinionarm.mp4',
    alt: 'Pivot Arm',
    label: 'Pivot Arm',
    title: 'Rack & Pinion Arm',
    body: 'A NEO 550 drives a 45:1 gearbox that meshes with a #25 chain bolted to an arc-shaped metal rack, rotating the arm through 80° of motion in 1.2 seconds. Six 10 lb constant-force springs mounted near the pivot serve as a passive counterbalance. Two PC side plates with standoffs provide impact resistance, and Igus chain routes wiring along the arm structure. A physical limit switch defines the home position.',
    accent: 'border-white/20',
  },
  {
    img: '/projects/2023-robot/groundintake.jpg',
    alt: 'Ground Intake',
    label: 'Ground Intake',
    title: 'Cone & Cube Intake',
    body: 'The ground intake mounts directly to the chassis perimeter and rotates outward to deploy. Two NEO 550 motors through a 9:1 gearbox direct-drive the pivot shaft to rotate the intake out. A separate NEO 550 powers two 2" rollers through a 3:1 reduction via pulley and gear, either grabbing the cone flange or passing a cube through into the grabber. A PC plate and standoff structure houses and protects the power transmission.',
    accent: 'border-orange-500',
  },
  {
    img: '/projects/2023-robot/rollergrabber.jpg',
    alt: 'Roller Grabber',
    label: 'End Effector',
    title: 'Roller Grabber',
    body: 'Eight staggered 3" flex wheels — 1" tall — grip both cones and cubes for intaking and outaking. Two NEO 550 motors through a 5:1 reduction drive the wheels via HTD 5M 9mm pulleys. A 1/4" polycarbonate plate and standoff structure houses the power transmission and wheel geometry. Current control triggers when a cone or cube is acquired, confirming capture without a dedicated sensor.',
    accent: 'border-white/20',
  },
  {
    img: '/projects/2023-robot/pistonextension.jpg',
    alt: 'Piston Extension',
    label: 'Arm Extension',
    title: 'Piston Inner Stage',
    body: 'An inner stage housed inside the pivot arm deploys via piston actuation to extend reach during scoring. This allows the arm to address all grid levels without repositioning the base. Igus chain routed through the arm enables smooth wire motion during both arm rotation and piston extension.',
    accent: 'border-orange-500',
  },
  {
    img: '/projects/2023-robot/detail-6.jpg',
    video: '/projects/2023-robot/climb.mp4',
    alt: 'Landing Gear Climb',
    label: 'End Game',
    title: 'Landing Gear Climb',
    body: 'A landing gear-style lead screw actuates downward to deploy, guided by a linear rail screwed onto a nylon block mounted to the chassis and truss. The robot drives onto the charge station ramp with half its frame hanging off the edge, leaving room for two alliance partners. A NEO 550 through an 81:1 reduction powers the lead screw, while a separate NEO through a 9:1 reduction powers wheels on the landing gear feet.',
    accent: 'border-white/20',
  },
];

export default function Robot2023() {
  return (
    <main className="relative bg-black min-h-screen">
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
              Mechatronics: Charged Up 2023 // 125 lbs // 30″ × 30″ × 54″
            </span>
            <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mix-blend-difference text-center">
              2023 <br />
              <span className="text-outline italic text-white text-7xl md:text-[8rem]">ROBOT</span>
            </h1>
          </motion.div>
        </section>

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

            {/* CENTER — CAD image */}
            <div className="flex items-center justify-center">
              <img
                src="/projects/2023-robot/2023-cad.jpg"
                alt="2023 Robot CAD"
                className="w-full h-full object-contain opacity-90"
              />
            </div>

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
            <Link href="/projects/2024-robot" className="font-mono text-base tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors">← 2024 Robot</Link>
            <Link href="/projects" className="px-14 py-5 border border-white/20 font-mono text-sm tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all">Index</Link>
            <Link href="/projects/darkslide" className="font-mono text-base tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors">Darkslide →</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
