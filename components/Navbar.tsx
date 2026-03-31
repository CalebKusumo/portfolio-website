import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] flex justify-between items-center px-12 py-10 mix-blend-difference font-mono text-[10px] tracking-[0.4em] uppercase text-white">
      <Link href="/" className="font-black tracking-tighter text-xl hover:text-blue-600 transition-colors">
        CK_SYS
      </Link>
      <div className="flex gap-8 md:gap-12 opacity-60">
        <Link href="/projects" className="hover:opacity-100 transition-opacity">Projects</Link>
        <Link href="/experience" className="hover:opacity-100 transition-opacity">Experience</Link>
        <Link href="/about" className="hover:opacity-100 transition-opacity">About</Link>
        <Link href="/contact" className="hover:opacity-100 transition-opacity text-blue-500">Contact</Link>
      </div>
    </nav>
  );
}