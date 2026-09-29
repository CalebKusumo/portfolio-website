export default function PhotographyNav() {
  return (
    <nav className="fixed top-0 z-[100] flex w-full items-center justify-between border-b border-white/10 bg-black/85 px-6 py-6 font-mono text-[10px] uppercase tracking-[0.28em] text-white backdrop-blur-md md:px-12">
      <a href="/" className="text-sm font-black tracking-tight transition-colors hover:text-blue-500">
        Caleb Kusumo
      </a>
      <div className="flex items-center gap-5 text-gray-400 md:gap-10">
        <a href="#portrait" className="hidden transition-colors hover:text-white sm:block">Portrait</a>
        <a href="#wildlife" className="hidden transition-colors hover:text-white md:block">Wildlife</a>
        <a href="#street" className="hidden transition-colors hover:text-white sm:block">Street</a>
        <a href="#landscape" className="transition-colors hover:text-white">Landscape</a>
        <a href="https://kusumo.design" className="hidden text-blue-500 transition-colors hover:text-blue-400 sm:block">Portfolio ↗</a>
      </div>
    </nav>
  );
}
