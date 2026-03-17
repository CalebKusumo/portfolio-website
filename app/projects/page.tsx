"use client";
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      id: "001",
      title: "Darkslide Assembly",
      category: "Mechanical Design",
      tools: ["SolidWorks", "ANSYS", "GD&T"],
      slug: "darkslide",
      description: "High-precision linear motion sub-assembly utilizing specialized coatings for low-friction operation in vacuum environments."
    },
    {
      id: "002",
      title: "Robotic End-Effector",
      category: "Mechatronics",
      tools: ["Python", "C++", "3D Printing"],
      slug: "robotic-arm",
      description: "Custom gripper design featuring compliant mechanisms for handling delicate organic materials with feedback sensing."
    },
    {
      id: "003",
      title: "Thermal Management Unit",
      category: "Systems Engineering",
      tools: ["MATLAB", "CFD", "AutoCAD"],
      slug: "thermal-unit",
      description: "Active cooling solution for high-density compute modules, optimized for weight and power consumption."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-40 pb-20 px-8 md:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* PAGE HEADER */}
        <div className="mb-24 border-l-2 border-blue-600 pl-8">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-4">
            Project <br />
            <span className="text-outline italic text-white opacity-50">Archive</span>
          </h1>
          <p className="font-mono text-[10px] tracking-[0.5em] text-gray-500 uppercase">
            System Index // [Total Units: {projects.length}]
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-black p-10 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-blue-600/5 transition-all duration-500"
            >
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-[10px] text-blue-600 font-bold tracking-widest uppercase">
                    Ref_{project.id}
                  </span>
                  <div className="flex gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="text-[9px] border border-white/10 px-2 py-0.5 font-mono text-gray-500">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  {project.title}
                </h2>
                
                <p className="text-gray-500 text-sm font-light leading-relaxed mb-8 md:mb-0 max-w-lg">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col items-end gap-6">
                <span className="font-mono text-[10px] tracking-widest text-gray-600 uppercase">
                  {project.category}
                </span>
                
                {/* Link to the dynamic 3D page */}
                <Link 
                  href={`/projects/${project.slug}`}
                  className="px-8 py-4 border border-white/20 font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all group-hover:border-blue-600"
                >
                  View Technical Documentation →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER CALLOUT */}
        <div className="mt-24 text-center opacity-20 hover:opacity-100 transition-opacity">
          <p className="font-mono text-[9px] tracking-[1em] uppercase cursor-default">
            End of Current Active Directory
          </p>
        </div>

      </div>
    </main>
  );
}