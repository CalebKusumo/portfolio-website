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
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed font-light mb-8">
            Greetings! My name is Caleb Kusumo and I am a first-year Mechanical Engineering student at Boston University with a deep interest in applying the creative process to the intersection of mechatronics, industrial design, and manufacturing systems. Covering numerous areas, I have a strong background in robotics, electronics, manufacturing, and mechanical systems that stem from my experiences as the founder of a film business, CalebColor, where I primarily focus on camera repair and film sale, the captain and manufacturing lead of FIRST Robotics team 6560, and the steering lead for Terrier Motorsport at Boston University. Outside of my work, you can find me with camera in-hand or amidst a new project along the lines of those displayed here.
          </p>
          <p className="text-gray-600 font-mono text-[10px] tracking-[0.4em] uppercase mb-4">Continue reading about my experiences and skills below:</p>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 border border-white/20 font-mono text-[11px] tracking-[0.5em] uppercase hover:bg-white hover:text-black transition-all">
            View Resume
          </a>
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