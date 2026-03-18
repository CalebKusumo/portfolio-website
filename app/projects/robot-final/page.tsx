"use client";
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ModelViewer = dynamic(() => import('@/components/ModelViewer'), { ssr: false });

export default function RobotProject() {
  return (
    <main className="relative bg-black">
      {/* 3D MODEL SETTINGS: 
          Kept at scale 3.5, moved slightly lower to [0, -2, 0] to avoid hero text overlap.
      */}
      <ModelViewer 
        modelPath="/2024robotfinalassm.glb" 
        modelScale={3.5} 
        modelPosition={[0, -2, 0]} 
      />

      <div className="relative z-10 w-full overflow-hidden pointer-events-none">
        
        {/* SECTION 1: HERO */}
        <section className="h-screen flex flex-col items-center justify-center text-center pointer-events-auto">
          <span className="font-mono text-[10px] tracking-[0.6em] text-blue-600 mb-4 uppercase">Project_Log: 2024_FIN</span>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mix-blend-difference">
            2024 <br /> <span className="text-outline italic text-white text-7xl md:text-[8rem]">ROBOT</span>
          </h1>
        </section>

        {/* SECTION 2: DENSE TECH SPECS (The "Matrix")
            We use a single container with tight spacing to fit more info in less scroll.
        */}
        <div className="flex flex-col gap-y-40 py-20 pointer-events-auto">
          
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-32 gap-20">
            <div className="max-w-sm border-l-2 border-blue-600 pl-8">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Drivetrain</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
                Swerve Drive Specialities Mk4i // L3 Gearing // Kraken X60 Powered
              </p>
            </div>
            <div className="max-w-sm border-r-2 border-white/20 pr-8 text-right md:mt-40">
              <h3 className="text-3xl font-black uppercase italic text-outline text-white mb-2">Chassis</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
                Waterjet 6061-T6 Aluminum // Pocketed Weight: 14.2 lbs // Rigid Box-Tube Frame
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-32 gap-20">
            <div className="max-w-sm border-l-2 border-white/20 pl-8 md:mt-20">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Intake</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
                Active Ground-Loading // 2-Inch Silicone Rollers // 0.3s Deployment
              </p>
            </div>
            <div className="max-w-sm border-r-2 border-blue-600 pr-8 text-right">
              <h3 className="text-3xl font-black uppercase italic text-outline text-white mb-2">Actuation</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
                Dual-Stage Telescoping Mast // Constant Force Spring Return // 100psi Pneumatics
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-32 gap-20">
            <div className="max-w-sm border-l-2 border-blue-600 pl-8">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Vision</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
                Limelight 3G // AprilTag Global Shutter // Multi-Target Pose Estimation
              </p>
            </div>
            <div className="max-w-sm border-r-2 border-white/20 pr-8 text-right md:mt-40">
              <h3 className="text-3xl font-black uppercase italic text-outline text-white mb-2">Control</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
                NI roboRIO 2.0 // CAN FD Architecture // 2ms Loop Cycle
              </p>
            </div>
          </div>

        </div>

        {/* SECTION 3: THE CURTAIN FOOTER
            We make this h-screen so that when you scroll to the bottom, 
            the black background completely covers the fixed 3D model.
        */}
        <footer className="h-screen flex flex-col items-center justify-center bg-black relative z-20 pointer-events-auto border-t border-white/10">
          <div className="text-center mb-12">
            <p className="font-mono text-[10px] tracking-[1em] text-blue-600 uppercase mb-4">End of Documentation</p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic text-white">Full System <br/> <span className="text-outline">Validated</span></h2>
          </div>
          
          <Link href="/projects" className="px-16 py-6 border border-white/20 font-mono text-[11px] tracking-[0.5em] uppercase hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95">
            Return to Index
          </Link>

          <div className="absolute bottom-12 flex gap-12 font-mono text-[8px] tracking-[0.4em] text-gray-700 uppercase">
             <span>Assembly_Ver: 2.0.4</span>
             <span>Status: Optimized</span>
          </div>
        </footer>

      </div>
    </main>
  );
}