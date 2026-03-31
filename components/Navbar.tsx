import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] flex justify-between items-center px-12 py-8 font-mono text-xs tracking-[0.3em] uppercase text-white bg-black/85 backdrop-blur-md border-b border-white/8">
      <Link href="/" className="font-black tracking-tighter text-xl hover:text-blue-500 transition-colors">
        Home
      </Link>
      <div className="flex gap-8 md:gap-12 text-gray-400">
        <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
        <Link href="/experience" className="hover:text-white transition-colors">Experience</Link>
        <Link href="/about" className="hover:text-white transition-colors">About</Link>
        <Link href="/contact" className="text-blue-500 hover:text-blue-400 transition-colors">Contact</Link>
      </div>
    </nav>
  );
}
