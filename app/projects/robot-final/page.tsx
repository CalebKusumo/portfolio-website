"use client";
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ModelViewer = dynamic(() => import('@/components/ModelViewer'), { ssr: false });

export default function RobotProject() {
  return (
    <main className="relative bg-black">
      {/* SHRUNK AND MOVED DOWN */}
      <ModelViewer 
        modelPath="/2024robotfinalassm.glb" 
        modelScale={4} 
        modelPosition={[0, -2, 0]} 
      />

      <div className="relative z-10 w-full overflow-hidden">
        <section className="h-screen flex flex-col items-center justify-center text-center">
          <span className="font-mono text-[10px] tracking-[0.6em] text-blue-600 mb-4 uppercase">Project_Log: 2024_FIN</span>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mix-blend-difference">
            2024 <br /> <span className="text-outline italic text-white text-7xl md:text-[8rem]">ROBOT</span>
          </h1>
        </section>

        <section className="h-screen flex items-center justify-end px-8 md:px-32">
          <div className="max-w-md border-r-2 border-blue-600 pr-10 text-right">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 italic text-outline text-white">Drivetrain</h2>
            <p className="text-gray-400 font-mono text-[10px] tracking-[0.3em] leading-relaxed uppercase">
              4-Wheel Swerve Drive <br/> 
              Independent steering modules <br/>
              Peak Velocity: 4.5 m/s
            </p>
          </div>
        </section>

        <section className="h-screen flex items-center justify-start px-8 md:px-32">
          <div className="max-w-md border-l-2 border-white/20 pl-10">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 italic text-white">Chassis</h2>
            <p className="text-gray-400 font-mono text-[10px] tracking-[0.3em] leading-relaxed uppercase">
              Pocketed 6061-T6 Frame <br/> 
              Stress Analysis: 2.5n safety <br/>
              FEA Optimized Geometry
            </p>
          </div>
        </section>

        {/* FOOTER - Now acts as a hard stop */}
        <footer className="py-20 flex flex-col items-center justify-center bg-black border-t border-white/5 relative z-20">
          <Link href="/projects" className="px-12 py-5 border border-white/20 font-mono text-[10px] tracking-[0.5em] uppercase hover:bg-white hover:text-black transition-all">
            Return to Index
          </Link>
        </footer>
      </div>
    </main>
  );
}