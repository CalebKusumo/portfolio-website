"use client";
import Link from 'next/link';

export default function Projects() {
 const projects = [
  {
    id: "23",
    title: "2023 Robot",
    category: "Mechatronics",
    slug: "2023-robot",
    description: "Charged Up: Features a custom double-jointed arm and pneumatic gripper system."
  },
  {
    id: "24",
    title: "2024 Robot",
    category: "Mechatronics",
    slug: "2024-robot",
    description: "Crescendo: Optimized swerve drivetrain with high-speed note delivery systems."
  },
  {
    id: "25",
    title: "2025 Robot",
    category: "Mechatronics",
    slug: "2025-robot",
    description: "Reefscape: Advanced vision-tracking and specialized intake for coral manipulation."
  }
];

  return (
    <main className="min-h-screen bg-black text-white pt-40 pb-20 px-8 md:px-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 border-l-2 border-blue-600 pl-8">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-4">
            Project <br />
            <span className="text-outline italic text-white opacity-50">Archive</span>
          </h1>
          <p className="font-mono text-[10px] tracking-[0.5em] text-gray-500 uppercase">
            System Index // [Total Units: {projects.length}]
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10">
          {projects.map((project) => (
            <div key={project.id} className="group bg-black p-10 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-blue-600/5 transition-all duration-500">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-[10px] text-blue-600 font-bold tracking-widest uppercase">Ref_{project.id}</span>
                  <div className="flex gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="text-[9px] border border-white/10 px-2 py-0.5 font-mono text-gray-500">{tool}</span>
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
                <span className="font-mono text-[10px] tracking-widest text-gray-600 uppercase">{project.category}</span>
                <Link href={`/projects/${project.slug}`} className="px-8 py-4 border border-white/20 font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all group-hover:border-blue-600">
                  View Technical Documentation →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}