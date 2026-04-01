"use client";
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ModelViewer = dynamic(() => import('@/components/ModelViewer'), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-black">
      <ModelViewer modelPath="/model.glb" />

      <div className="relative z-10 w-full">
        <section className="h-screen flex flex-col items-center justify-center px-6">
          <h1 className="text-8xl md:text-[14rem] font-[900] tracking-tighter uppercase leading-[0.8] mix-blend-difference text-center">
            CALEB <br /> KUSUMO
          </h1>
          <p className="mt-12 font-mono text-[10px] tracking-[0.5em] uppercase opacity-40 mix-blend-difference">
            System Architecture // Mechanical Design // 2026
          </p>
        </section>

        <footer className="w-full py-10 px-8 md:px-12 border-t border-white/10 bg-black relative z-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Nav links */}
            <nav className="flex flex-wrap gap-6 md:gap-10">
              {[
                { href: '/about', label: 'About' },
                { href: '/projects', label: 'Projects' },
                { href: '/experience', label: 'History' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-mono text-[10px] tracking-[0.4em] text-gray-400 uppercase hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Location */}
            <div className="font-mono text-[9px] tracking-[0.4em] text-gray-500 uppercase">
              Boston&nbsp;//&nbsp;LA
            </div>

            {/* Copyright */}
            <div className="font-mono text-[9px] tracking-[0.8em] text-gray-600 uppercase">
              © 2026 Caleb Kusumo
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
