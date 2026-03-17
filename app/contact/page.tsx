"use client";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white pt-40 pb-20 px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-20">
          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-6">
            Contact <br />
            <span className="text-outline italic text-white">Signal</span>
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
            <a href="mailto:your-email@example.com" className="text-2xl md:text-3xl font-bold hover:text-blue-600 transition-colors uppercase tracking-tight">
              Email Me →
            </a>
          </div>

          {/* SOCIALS BLOCK */}
          <div className="group">
            <h3 className="font-mono text-[10px] tracking-widest text-gray-500 uppercase mb-4">Network_Links</h3>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-xl font-bold uppercase hover:text-blue-600 transition-colors">LinkedIn</a>
              <a href="#" className="text-xl font-bold uppercase hover:text-blue-600 transition-colors">GitHub</a>
            </div>
          </div>

          {/* FORM AREA (Optional Visual Placeholder) */}
          <div className="md:col-span-2 mt-12 p-8 border border-white/10 bg-white/[0.02]">
            <p className="font-mono text-[10px] text-gray-600 uppercase mb-8">Quick_Inquiry_Form</p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input type="text" placeholder="NAME" className="bg-transparent border-b border-white/20 py-4 font-mono text-xs focus:border-blue-600 outline-none transition-all" />
              <input type="email" placeholder="EMAIL" className="bg-transparent border-b border-white/20 py-4 font-mono text-xs focus:border-blue-600 outline-none transition-all" />
              <textarea placeholder="MESSAGE_DATA" className="md:col-span-2 bg-transparent border-b border-white/20 py-8 font-mono text-xs focus:border-blue-600 outline-none transition-all resize-none" rows={4} />
              <button className="w-full md:w-max px-12 py-4 bg-white text-black font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                Transmit
              </button>
            </form>
          </div>

        </div>

      </div>
    </main>
  );
}