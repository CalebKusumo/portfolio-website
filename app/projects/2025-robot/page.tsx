"use client";
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ModelViewer = dynamic(() => import('@/components/ModelViewer'), { ssr: false });

export default function Robot2025() {
  return (
    <main className="relative bg-black">
      <ModelViewer modelPath="/2025robot.glb" modelScale={3.8} modelPosition={[0, -2, 0]} />
      <div className="relative z-10 w-full overflow-hidden pointer-events-none">
        
        <section className="h-screen flex flex-col items-center justify-center text-center pointer-events-auto">
          <span className="font-mono text-[10px] tracking-[0.6em] text-blue-600 mb-4 uppercase">Project_Log: 2025_PRE</span>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mix-blend-difference">
            2025 <br /> <span className="text-outline italic text-white text-7xl md:text-[8rem]">ROBOT</span>
          </h1>
        </section>

        <div className="flex flex-col gap-y-40 py-20 pointer-events-auto">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-32 gap-20">
            <div className="max-w-sm border-l-2 border-blue-600 pl-8">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Vision AI</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">Edge Object Detection // Coral Pose Estimation // Real-time ID</p>
            </div>
            <div className="max-w-sm border-r-2 border-white/20 pr-8 text-right md:mt-40">
              <h3 className="text-3xl font-black uppercase italic text-outline text-white mb-2">Manipulator</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">4-Bar Precision Linkage // Carbon Fiber Inlay // 0.1mm Error</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-32 gap-20">
            <div className="max-w-sm border-l-2 border-white/20 pl-8 md:mt-20">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Climber</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">Reaction Arm Geometry // High-Torque Neo // 1.5s Pull Time</p>
            </div>
            <div className="max-w-sm border-r-2 border-blue-600 pr-8 text-right">
              <h3 className="text-3xl font-black uppercase italic text-outline text-white mb-2">Systems</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">Shielded Avionics // Isolated Signal Bus // IP65 Connectors</p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-32 gap-20">
            <div className="max-w-sm border-l-2 border-blue-600 pl-8">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Telemetry</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">Live Dashboard Streaming // 50Hz Data Rate // Failure Log</p>
            </div>
            <div className="max-w-sm border-r-2 border-white/20 pr-8 text-right md:mt-40">
              <h3 className="text-3xl font-black uppercase italic text-outline text-white mb-2">Cooling</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">Active Motor Heat Sinks // Thermal Paste Pads // CFD Optimized</p>
            </div>
          </div>
        </div>

        <footer className="h-screen flex flex-col items-center justify-center bg-black relative z-20 pointer-events-auto border-t border-white/10">
          <Link href="/projects" className="px-16 py-6 border border-white/20 font-mono text-[11px] tracking-[0.5em] uppercase hover:bg-white hover:text-black transition-all">Return to Index</Link>
        </footer>
      </div>
    </main>
  );
}