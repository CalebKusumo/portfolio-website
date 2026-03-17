"use client";
import dynamic from 'next/dynamic';

const ModelViewer = dynamic(() => import('@/components/ModelViewer'), { ssr: false });

export default function DarkslideProject() {
  return (
    <main className="relative bg-black min-h-[400vh]">
      <ModelViewer />
      
      <div className="relative z-10">
        <section className="h-screen flex flex-col items-center justify-center">
          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mix-blend-difference">
            Darkslide <br/> <span className="text-blue-600">Assembly</span>
          </h1>
        </section>

        <section className="h-screen flex items-center justify-start px-12 md:px-32">
          <div className="max-w-md border-l-2 border-white/20 pl-10">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 italic text-outline text-white">Tolerancing</h2>
            <p className="text-gray-400 font-mono text-[10px] tracking-widest uppercase">
              H7/g6 Fitment <br/> Precision Ground Rails
            </p>
          </div>
        </section>
        
        {/* Add more sections as needed */}
      </div>
    </main>
  );
}