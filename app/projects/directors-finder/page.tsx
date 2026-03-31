"use client";
import dynamic from 'next/dynamic';
import Link from 'next/link';
const ModelViewer = dynamic(() => import('@/components/ModelViewer'), { ssr: false });

export default function FinderProject() {
  return (
    <main className="relative bg-black">
      <ModelViewer modelPath="/finder.glb" modelScale={15} modelPosition={[0, -0.5, 0]} />
      <div className="relative z-10 w-full overflow-hidden pointer-events-none">
        <section className="h-screen flex flex-col items-center justify-center text-center pointer-events-auto">
          <span className="font-mono text-[10px] tracking-[0.6em] text-blue-600 mb-4 uppercase">Prototype_Log: OPT_06</span>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mix-blend-difference">WAIST <br /> <span className="text-outline italic text-white text-7xl md:text-[8rem]">FINDER</span></h1>
        </section>

        <div className="flex flex-col gap-y-40 py-20 pointer-events-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-32 gap-20">
            <div className="max-w-sm border-l-2 border-blue-600 pl-8">
              <h3 className="text-3xl font-black uppercase italic text-white mb-2">Ground Glass</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">Acid-Etched 1200 Grit // Integral Fresnel // 1:1 Scale Viewing</p>
            </div>
            <div className="max-w-sm border-r-2 border-white/20 pr-8 text-right md:mt-40">
              <h3 className="text-3xl font-black uppercase italic text-outline text-white mb-2">Sun Hood</h3>
              <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">Spring-Steel Origami // 4-Leaf Design // Zero-Leak Light Baffles</p>
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