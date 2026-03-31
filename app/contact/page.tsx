"use client";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white pt-40 pb-20 px-8">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="mb-20">
          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-6">
            Contact <br />
            <span className="text-outline italic text-white">Me</span>
          </h1>
          <p className="font-mono text-[10px] tracking-[0.5em] text-blue-600 uppercase">
            Available for technical consultation
          </p>
        </div>

        {/* CONTACT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-16">

          {/* EMAIL BLOCK */}
          <div className="group">
            <h3 className="font-mono text-[10px] tracking-widest text-gray-500 uppercase mb-4">Direct_Comm</h3>
            <a href="mailto:calebk@bu.edu" className="text-2xl md:text-3xl font-bold hover:text-blue-600 transition-colors uppercase tracking-tight">
              Email Me →
            </a>
          </div>

          {/* SOCIALS BLOCK */}
          <div className="group">
            <h3 className="font-mono text-[10px] tracking-widest text-gray-500 uppercase mb-4">Network_Links</h3>
            <div className="flex flex-col gap-4">
              <a href="https://www.linkedin.com/in/caleb-kusumo-79b6503bb/" target="_blank" rel="noopener noreferrer" className="text-xl font-bold uppercase hover:text-blue-600 transition-colors">LinkedIn</a>
              <a href="https://github.com/CalebKusumo" target="_blank" rel="noopener noreferrer" className="text-xl font-bold uppercase hover:text-blue-600 transition-colors">GitHub</a>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
