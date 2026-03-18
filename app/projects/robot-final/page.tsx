"use client";
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ModelViewer = dynamic(() => import('@/components/ModelViewer'), { ssr: false });

export default function RobotProject() {
  return (
    <main className="relative bg-black">
      {/* Adjusted Scale to 3.5 (slightly smaller) 
        and Position to -1.5 (raised it up closer to center)
      */}
      <ModelViewer 
        modelPath="/2024robotfinalassm.glb" 
        modelScale={3.5} 
        modelPosition={[0, -1.5, 0]} 
      />

      {/* Added pointer-events-none to the wrapper so it doesn't block 3D interactions,
          and pointer-events-auto specifically to the text/buttons */}
      <div className="relative z-10 w-full overflow-hidden pointer-events-none">
        
        {/* HERO SECTION - Still takes up the first full screen */}
        <section className="h-screen flex flex-col items-center justify-center text-center pointer-events-auto">
          <span className="font-mono text-[10px] tracking-[0.6em] text-blue-600 mb-4 uppercase">Project_Log: 2024_FIN</span>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mix-blend-difference">
            2024 <br /> <span className="text-outline italic text-white text-7xl md:text-[8rem]">ROBOT</span>
          </h1>
        </section>

        {/* CALLOUTS CONTAINER 
          Instead of 1 item per screen height, they are tightly packed with 25vh gaps.
          This takes up way less scroll space.
        */}
        <div className="flex flex-col gap-y-[25vh] py-[15vh]">
          
          {/* CALLOUT 1 - RIGHT */}
          <section className="flex items-center justify-end px-8 md:px-32 pointer-events-auto">
            <div className="max-w-md border-r-2 border-blue-600 pr-10 text-right">
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 italic text-outline text-white">Drivetrain</h2>
              <p className="text-gray-400 font-mono text-[10px] tracking-[0.3em] leading-relaxed uppercase">
                4-Wheel Swerve Drive <br/> 
                Independent steering modules <br/>
                Peak Velocity: 4.5 m/s
              </p>
            </div>
          </section>

          {/* CALLOUT 2 - LEFT */}
          <section className="flex items-center justify-start px-8 md:px-32 pointer-events-auto">
            <div className="max-w-md border-l-2 border-white/20 pl-10">
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 italic text-white">Chassis</h2>
              <p className="text-gray-400 font-mono text-[10px] tracking-[0.3em] leading-relaxed uppercase">
                Pocketed 6061-T6 Frame <br/> 
                Stress Analysis: 2.5n safety <br/>
                FEA Optimized Geometry
              </p>
            </div>
          </section>

          {/* CALLOUT 3 - RIGHT */}
          <section className="flex items-center justify-end px-8 md:px-32 pointer-events-auto">
            <div className="max-w-md border-r-2 border-blue-600 pr-10 text-right">
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 italic text-outline text-white">Intake</h2>
              <p className="text-gray-400 font-mono text-[10px] tracking-[0.3em] leading-relaxed uppercase">
                Over-the-bumper geometry <br/> 
                Compliant silicone rollers <br/>
                Deployment time: 0.4s
              </p>
            </div>
          </section>

          {/* CALLOUT 4 - LEFT */}
          <section className="flex items-center justify-start px-8 md:px-32 pointer-events-auto">
            <div className="max-w-md border-l-2 border-white/20 pl-10">
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 italic text-white">Avionics</h2>
              <p className="text-gray-400 font-mono text-[10px] tracking-[0.3em] leading-relaxed uppercase">
                Custom Power Distribution <br/> 
                CAN FD Bus Architecture <br/>
                Real-time telemetry logging
              </p>
            </div>
          </section>

        </div>

        {/* BUFFER SPACE 
          This gives the user a little extra scrolling room so the last text block 
          clears the model before the footer appears.
        */}
        <div className="h-[20vh]"></div>

        {/* FOOTER - FIXED OVERLAP
          Made it taller (40vh) with a solid black background.
          When you scroll down, this covers the bottom half of the screen,
          cleanly hiding the model behind it so it doesn't overlap your button.
        */}
        <footer className="min-h-[40vh] flex flex-col items-center justify-center bg-black border-t border-white/10 relative z-20 pointer-events-auto">
          <Link href="/projects" className="px-12 py-5 border border-white/20 font-mono text-[10px] tracking-[0.5em] uppercase hover:bg-white hover:text-black transition-all">
            Return to Index
          </Link>
        </footer>

      </div>
    </main>
  );
}