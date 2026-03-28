"use client";
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ModelViewer = dynamic(() => import('@/components/ModelViewer'), { ssr: false });

export default function RailCamera() {
  return (
    <main className="relative bg-black">
      {/* 3D MODEL: Adjust scale/position based on your specific GLB size */}
      <ModelViewer 
        modelPath="/rail-camera.glb" 
        modelScale={12} 
        modelPosition={[0, 0, 0]} 
      />

      <div className="relative z-10 w-full overflow-hidden pointer-events-none">
        
        <section className="h-screen flex flex-col items-center justify-center text-center pointer-events-auto">
          <span className="font-mono text-[10px] tracking-[0.6em] text-blue-600 mb-4 uppercase">Spec_Sheet: OPT_04</span>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mix-blend-difference">
            4X5 RAIL <br /> <span className="text-outline italic text-white text-7xl md:text-[8rem]">CAMERA</span>
          </h1>
        </section>

        <div className="flex flex-col gap-y-40 py-20 pointer-events-auto">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-32 gap-20">
            <div className="max-w-sm border-l-2 border-blue-600 pl-8">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Monorail</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">300mm Extruded Aluminum // Dovetail Profile // Micrometer Focus Drive</p>
            </div>
            <div className="max-w-sm border-r-2 border-white/20 pr-8 text-right md:mt-40">
              <h3 className="text-3xl font-black uppercase italic text-outline text-white mb-2">Bellows</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">Synthetic Light-Tight Polymer // 450mm Max Extension // Tapered Geometry</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-32 gap-20">
            <div className="max-w-sm border-l-2 border-white/20 pl-8 md:mt-20">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Front Standard</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">±30° Tilt & Swing // 50mm Rise/Fall // Independent Axis Locking</p>
            </div>
            <div className="max-w-sm border-r-2 border-blue-600 pr-8 text-right">
              <h3 className="text-3xl font-black uppercase italic text-outline text-white mb-2">Film Plane</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">Graflok Compatible Back // Ground Glass Focusing // Spring-Loaded Loading</p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-32 gap-20">
            <div className="max-w-sm border-l-2 border-blue-600 pl-8">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Materials</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">6061-T6 Bead-Blasted Aluminum // 316 Stainless Fasteners // Carbon Fiber Inlays</p>
            </div>
            <div className="max-w-sm border-r-2 border-white/20 pr-8 text-right md:mt-40">
              <h3 className="text-3xl font-black uppercase italic text-outline text-white mb-2">Optics</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">Interchangeable Lens Boards // Copal #0 & #1 Support // Zero-Vignette Path</p>
            </div>
          </div>
        </div>

        {/* CURTAIN FOOTER */}
        <footer className="h-screen flex flex-col items-center justify-center bg-black relative z-20 pointer-events-auto border-t border-white/10">
          <div className="text-center mb-12">
            <p className="font-mono text-[10px] tracking-[1em] text-blue-600 uppercase mb-4">End of Documentation</p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic text-white">Precision <br/> <span className="text-outline">Optics</span></h2>
          </div>
          
          <Link href="/projects" className="px-16 py-6 border border-white/20 font-mono text-[11px] tracking-[0.5em] uppercase hover:bg-white hover:text-black transition-all">
            Return to Index
          </Link>
        </footer>

      </div>
    </main>
  );
}