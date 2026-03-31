"use client";
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ModelViewer = dynamic(() => import('@/components/ModelViewer'), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-black">
      <ModelViewer modelPath="/model.glb" />

      <div className="relative z-10 w-full overflow-hidden">
        <section className="h-screen flex flex-col items-center justify-center px-6">
          <h1 className="text-8xl md:text-[14rem] font-[900] tracking-tighter uppercase leading-[0.8] mix-blend-difference text-center">
            CALEB <br /> KUSUMO
          </h1>
          <p className="mt-12 font-mono text-[10px] tracking-[0.5em] uppercase opacity-40 mix-blend-difference">
            System Architecture // Mechanical Design // 2026
          </p>
        </section>

        <section className="h-[55vh] flex items-center justify-start px-8 md:px-32">
          <Link href="/about" className="group max-w-md border-l-2 border-white/20 pl-10 hover:border-blue-600 transition-all">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 italic text-outline text-white group-hover:text-blue-600 transition-all">About</h2>
            <p className="text-gray-400 font-mono text-[10px] tracking-[0.3em] uppercase underline underline-offset-8">Technical Profile & Skills</p>
          </Link>
        </section>

        <section className="h-[55vh] flex items-center justify-end px-8 md:px-32">
          <Link href="/projects" className="group max-w-md border-r-2 border-white/20 pr-10 text-right hover:border-blue-600 transition-all">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 italic text-white group-hover:text-blue-600 transition-all">Projects</h2>
            <p className="text-gray-400 font-mono text-[10px] tracking-[0.3em] uppercase underline underline-offset-8">Browse Technical Archive</p>
          </Link>
        </section>

        <section className="h-[55vh] flex items-center justify-start px-8 md:px-32">
          <Link href="/experience" className="group max-w-md border-l-2 border-white/20 pl-10 hover:border-blue-600 transition-all">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 italic text-outline text-white group-hover:text-blue-600 transition-all">History</h2>
            <p className="text-gray-400 font-mono text-[10px] tracking-[0.3em] uppercase underline underline-offset-8">Engineering Timeline</p>
          </Link>
        </section>

        <section className="h-[55vh] flex items-center justify-end px-8 md:px-32">
          <Link href="/contact" className="group max-w-md border-r-2 border-blue-600 pr-10 text-right hover:border-white transition-all">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 italic text-white group-hover:text-outline transition-all">Contact</h2>
            <p className="text-gray-400 font-mono text-[10px] tracking-[0.3em] uppercase underline underline-offset-8">Get In Touch</p>
          </Link>
        </section>

        <footer className="w-full py-16 px-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center bg-black relative z-20">
          <div className="font-mono text-[9px] tracking-[0.8em] text-gray-600 uppercase">© 2026 Caleb Kusumo</div>
          <div className="font-mono text-[9px] tracking-[0.3em] text-gray-400 uppercase">Lat: 34.0522° N // Long: 118.2437° W</div>
        </footer>
      </div>
    </main>
  );
}
