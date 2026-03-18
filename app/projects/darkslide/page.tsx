"use client";
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ModelViewer = dynamic(() => import('@/components/ModelViewer'), { ssr: false });

export default function DarkslideProject() {
  return (
    <main className="relative bg-black min-h-[500vh]">
      <ModelViewer modelPath="/model.glb" />
      
      <div className="relative z-10">
        <section className="h-screen flex flex-col items-center justify-center text-center">
          <span className="font-mono text-[10px] tracking-[0.6em] text-blue-600 mb-4 uppercase">Spec_Sheet: 001</span>
          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mix-blend-difference">
            Darkslide <br/> <span className="text-blue-600">Assembly</span>
          </h1>
        </section>

        <section className="h-screen flex items-center justify-start px-8 md:px-32">
          <div className="max-w-md border-l-2 border-white/20 pl-10">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 italic text-outline text-white">Tolerancing</h2>
            <p className="text-gray-400 font-mono text-[10px] tracking-widest uppercase leading-relaxed">
              H7/g6 Fitment Standards <br/> 
              Precision Ground Rails <br/>
              Surface Finish: 0.8 Ra
            </p>
          </div>
        </section>

        <footer className="h-screen flex flex-col items-center justify-center bg-black border-t border-white/5">
          <Link href="/projects" className="px-12 py-5 border border-white/20 font-mono text-[10px] tracking-[0.5em] uppercase hover:bg-white hover:text-black transition-all">
            Return to Index
          </Link>
        </footer>
      </div>
    </main>
  );
}