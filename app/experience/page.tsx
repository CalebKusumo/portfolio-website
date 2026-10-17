import { experienceSections } from "../experience-data";

export default function Experience() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-black text-white px-8 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-20">
          Experience <br />
          <span className="text-outline italic">& Background</span>
        </h1>

        {experienceSections.map((section, si) => (
          <div key={si} className="mb-20">
            <p className="font-mono text-xs tracking-[0.5em] text-blue-600 uppercase mb-8 pb-3 border-b border-white/8">
              {section.label}
            </p>

            <div className="relative border-l border-white/10 ml-4 md:ml-0">
              {section.items.map((item, i) => (
                <div key={i} className="mb-12 ml-10 relative">
                  <div className="absolute -left-[45px] top-1.5 w-2 h-2 bg-blue-600 rounded-full ring-8 ring-black" />

                  <span className="font-mono text-xs tracking-[0.2em] text-gray-400 uppercase">
                    {item.date}{item.location ? ` — ${item.location}` : ""}
                  </span>

                  <h2 className="text-xl font-bold uppercase mt-2 mb-1 text-white">{item.role}</h2>
                  <h3 className="text-blue-500 font-mono text-xs tracking-widest uppercase mb-4">
                    {item.company}
                  </h3>

                  {item.details && (
                    <ul className="text-gray-300 text-sm leading-relaxed max-w-2xl border-l border-white/10 pl-10 list-disc space-y-2">
                      {item.details.map((detail, di) => <li key={di}>{detail}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
