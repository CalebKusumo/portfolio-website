export default function About() {
  const skills = [
    { category: "Design", items: ["SolidWorks", "Blender", "AutoCAD"] },
    { category: "Analysis", items: ["ANSYS", "MATLAB", "FEA/CFD"] },
    { category: "Development", items: ["Python", "C++", "Next.js"] },
    { category: "Prototyping", items: ["3D Printing", "CNC", "Arduino"] }
  ];

  return (
    <main className="min-h-screen pt-40 pb-20 bg-black text-white px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="mb-32">
          <h1 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-none mb-6">
            ENGINEERING <br />
            <span className="text-outline italic text-white">PROFILE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light">
            Focusing on the intersection of <span className="text-white font-medium">high-fidelity simulation</span> and 
            functional mechanical prototyping.
          </p>
        </div>

        {/* SKILLS MATRIX */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 border-t border-white/10 pt-16">
          {skills.map((group, i) => (
            <div key={i} className="flex flex-col gap-8">
              <h3 className="font-mono text-[10px] tracking-[0.4em] text-blue-600 uppercase font-bold">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-4 text-sm text-gray-500 font-mono">
                {group.items.map((item, j) => (
                  <li key={j} className="hover:text-white transition-colors cursor-default">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
      </div>
    </main>
  );
}