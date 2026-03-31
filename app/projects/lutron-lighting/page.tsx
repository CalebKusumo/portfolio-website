"use client";
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ModelViewer = dynamic(() => import('@/components/ModelViewer'), { ssr: false });

export default function LutronProject() {
  return (
    <main className="relative bg-black">
      <ModelViewer modelPath="/lutron-model.glb" modelScale={8} modelPosition={[0, -1, 0]} />
      
      <div className="relative z-10 w-full overflow-hidden pointer-events-none">
        <section className="h-screen flex flex-col items-center justify-center text-center pointer-events-auto">
          <span className="font-mono text-[10px] tracking-[0.6em] text-blue-600 mb-4 uppercase">Competition_Entry: 2025</span>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mix-blend-difference">
            LUTRON <br /> <span className="text-outline italic text-white text-7xl md:text-[8rem]">LIGHTING</span>
          </h1>
        </section>

        <div className="flex flex-col gap-y-32 py-20 pointer-events-auto">
          {/* ROW 1: Photometrics & Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-32 gap-20">
            <div className="max-w-sm border-l-2 border-blue-600 pl-8 group">
              <div className="w-full h-32 bg-white/5 mb-6 overflow-hidden border border-white/10">
                <img src="/projects/lutron/photometrics.jpg" alt="Photometric Map" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Photometrics</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">AGI32 Simulation // 98 CRI // R9 Red Rendering Optimization</p>
            </div>
            <div className="max-w-sm border-r-2 border-white/20 pr-8 text-right md:mt-40 group">
              <div className="w-full h-32 bg-white/5 mb-6 overflow-hidden border border-white/10">
                <img src="/projects/lutron/controls.jpg" alt="Control Schematic" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-3xl font-black uppercase italic text-outline text-white mb-2">Controls</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">Athena Wireless Hub // Daylight Harvesting // Timeclock Scheduling</p>
            </div>
          </div>

          {/* ROW 2: Luminaires & Daylighting */}
          <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-32 gap-20">
            <div className="max-w-sm border-l-2 border-white/20 pl-8 md:mt-20 group">
              <div className="w-full h-32 bg-white/5 mb-6 overflow-hidden border border-white/10">
                <img src="/projects/lutron/fixtures.jpg" alt="Fixture Detail" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Luminaires</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">Recessed Linear Flangeless // Custom 2700K-5000K Tunable White</p>
            </div>
            <div className="max-w-sm border-r-2 border-blue-600 pr-8 text-right group">
              <div className="w-full h-32 bg-white/5 mb-6 overflow-hidden border border-white/10">
                <img src="/projects/lutron/daylight.jpg" alt="Daylight Study" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-3xl font-black uppercase italic text-outline text-white mb-2">Daylighting</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">Automated Sivoia QS Shades // Glare Analysis // Solar Tracking</p>
            </div>
          </div>

          {/* ROW 3: Energy & Integration */}
          <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-32 gap-20">
            <div className="max-w-sm border-l-2 border-blue-600 pl-8 group">
              <div className="w-full h-32 bg-white/5 mb-6 overflow-hidden border border-white/10">
                <img src="/projects/lutron/energy.jpg" alt="Energy Report" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Efficiency</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">LPD: 0.45 W/sqft // IECC 2021 Compliant // LEED Platinum Target</p>
            </div>
            <div className="max-w-sm border-r-2 border-white/20 pr-8 text-right md:mt-40 group">
              <div className="w-full h-32 bg-white/5 mb-6 overflow-hidden border border-white/10">
                <img src="/projects/lutron/details.jpg" alt="Mounting Detail" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-3xl font-black uppercase italic text-outline text-white mb-2">Detailing</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">Seismic Bracing // Thermal Bridging Mitigation // Zero-Sightline Trim</p>
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