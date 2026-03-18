"use client";

import dynamic from 'next/dynamic';
import Link from 'next/link';

const ModelViewer = dynamic(() => import('@/components/ModelViewer'), { 
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <p className="font-mono text-[10px] tracking-[1em] text-white animate-pulse uppercase">Initializing_System...</p>
    </div>
  )
});

export default function Home() {
  return (
    <main className="relative bg-black">
      <ModelViewer />

      <div className="relative z-10 w-full overflow-hidden">
        
        {/* 01. HERO */}
        <section className="h-screen flex flex-col items-center justify-center px-6">
          <h1 className="text-8xl md:text-[14rem] font-[900] tracking-tighter uppercase leading-[0.8] mix-blend-difference text-center">
            CALEB <br /> KUSUMO
          </h1>
          <p className="mt-12 font-mono text-[10px] tracking-[0.5em] uppercase opacity-40 mix-blend-difference">
            Mechanical Design // 2026
          </p>
        </section>

        {/* 02. PROJECTS */}
        <section className="h-screen flex items-center justify-start px-8 md:px-32">
          <Link href="/projects" className="group max-w-md border-l-2 border-white/20 pl-10 hover:border-blue-600 transition-all duration-500">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 italic text-outline text-white group-hover:text-blue-600 transition-all">Projects</h2>
            <p className="text-gray-400 font-mono text-[10px] tracking-[0.3em] uppercase">Physical Systems & Assemblies</p>
          </Link>
        </section>

        {/* 03. HISTORY */}
        <section className="h-screen flex items-center justify-end px-8 md:px-32">
          <Link href="/experience" className="group max-w-md border-r-2 border-white/20 pr-10 text-right hover:border-blue-600 transition-all duration-500">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 italic text-white group-hover:text-blue-600 transition-all">History</h2>
            <p className="text-gray-400 font-mono text-[10px] tracking-[0.3em] uppercase">Engineering Timeline</p>
          </Link>
        </section>

        {/* 04. ABOUT */}
        <section className="h-screen flex items-center justify-start px-8 md:px-32">
          <Link href="/about" className="group max-w-md border-l-2 border-white/20 pl-10 hover:border-blue-600 transition-all duration-500">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 italic text-outline text-white group-hover:text-blue-600 transition-all">About</h2>
            <p className="text-gray-400 font-mono text-[10px] tracking-[0.3em] uppercase">Technical Profile & Skills</p>
          </Link>
        </section>

        {/* 05. CONNECT (LAST CONTENT BLOCK) */}
        <section className="h-screen flex items-center justify-end px-8 md:px-32">
          <Link href="/contact" className="group max-w-md border-r-2 border-blue-600 pr-10 text-right hover:border-white transition-all duration-500">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 italic text-white group-hover:text-outline transition-all">Connect</h2>
            <p className="text-gray-400 font-mono text-[10px] tracking-[0.3em] uppercase">Signal Established // Click to Transmit</p>
          </Link>
        </section>

        {/* FOOTER - THE ABSOLUTE END */}
        <footer className="w-full py-16 px-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 bg-black relative z-20">
          <div className="font-mono text-[9px] tracking-[0.8em] text-gray-600 uppercase">
            © 2026 Caleb Kusumo // All Rights Reserved
          </div>
          <div className="flex gap-8 font-mono text-[9px] tracking-[0.3em] text-gray-400 uppercase">
            <span>Boston, MA</span>
            <span>Irvine, CA</span>
          </div>
        </footer>

      </div>
    </main>
  );
}