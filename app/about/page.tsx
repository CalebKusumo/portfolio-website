export default function About() {
  const skills = [
    { category: "Design & Software", items: ["SolidWorks", "Fusion 360", "Adobe Lightroom", "Photoshop", "Illustrator"] },
    { category: "Manufacturing", items: ["CNC Machining", "Lathe & Milling", "Waterjet", "Laser Cutting", "3D Printing (SLA/FDM)", "TIG Welding", "Vacuum Forming", "Vinyl Cutting"] },
    { category: "Electronics", items: ["Soldering", "Arduino", "Raspberry Pi", "Oscilloscope", "General Circuitry"] },
    { category: "Development", items: ["Python", "C++", "Java", "Next.js"] },
  ];

  return (
    <main className="min-h-screen pt-40 pb-20 bg-black text-white px-8">
      <div className="max-w-5xl mx-auto">

        {/* HEADER SECTION */}
        <div className="mb-20">
          <h1 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-none mb-8">
            ENGINEERING <br />
            <span className="text-outline italic text-white">PROFILE</span>
          </h1>
          <div className="mb-8">
            <img
              src="/about/profile.jpg"
              alt="Caleb Kusumo"
              className="float-right ml-10 mb-4 w-56 md:w-72 object-cover border border-white/10"
            />
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Hi there! My name is Caleb Kusumo and I am a first-year Mechanical Engineering student at Boston University with a deep interest in applying the creative process to the intersection of mechatronics, industrial design, and manufacturing systems. Covering numerous areas, I have a strong background in robotics, electronics, manufacturing, and mechanical systems that stem from my experiences as the founder of a film business, CalebColor, where I primarily focus on camera repair and film sale, the captain and manufacturing lead of FIRST Robotics team 6560, and the steering lead for Terrier Motorsport at Boston University. Outside of my work, you can find me with camera in-hand or amidst a new project along the lines of those displayed here.
            </p>
            <div className="clear-both" />
          </div>
          <p className="text-gray-500 font-mono text-xs tracking-[0.4em] uppercase mb-5">Continue reading about my experiences and skills below:</p>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 border border-white/30 font-mono text-xs tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all">
            View Resume
          </a>
        </div>

        {/* SKILLS MATRIX */}
        <div className="border-t border-white/10 pt-16">
          <p className="font-mono text-xs tracking-[0.5em] text-blue-600 uppercase mb-12">Technical Skills</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skills.map((group, i) => (
              <div key={i} className="flex flex-col gap-5">
                <h3 className="font-mono text-[10px] tracking-[0.4em] text-gray-400 uppercase font-bold border-b border-white/10 pb-3">
                  {group.category}
                </h3>
                <ul className="flex flex-col gap-3">
                  {group.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-300 font-mono hover:text-white transition-colors cursor-default">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
