"use client";
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      id: "25",
      title: "2025 Robot",
      category: "Mechatronics",
      tools: ["C++", "Edge AI", "OpenCV"],
      slug: "2025-robot",
      description: "Reefscape: Advanced vision-tracking and specialized intake for high-precision coral manipulation."
    },
    {
      id: "24",
      title: "2024 Robot",
      category: "Mechatronics",
      tools: ["Java", "SolidWorks", "Swerve"],
      slug: "2024-robot",
      description: "Crescendo: High-speed swerve drivetrain with vision-aligned note delivery systems."
    },
    {
      id: "23",
      title: "2023 Robot",
      category: "Mechatronics",
      tools: ["Java", "SolidWorks", "Pneumatics"],
      slug: "2023-robot",
      description: "Charged Up: Features a custom double-jointed arm and high-torque pneumatic gripper system."
    },
    {
      id: "01",
      title: "Darkslide Assembly",
      category: "Mechanical Design",
      tools: ["SolidWorks", "ANSYS", "GD&T"],
      slug: "darkslide",
      description: "High-precision linear motion sub-assembly utilizing specialized coatings for low-friction operation."
    },
    {
      id: "04",
      title: "4x5 Rail Camera",
      category: "Optomechanical Design",
      tools: ["SolidWorks", "CNC", "Anodizing"],
      slug: "rail-camera",
      description: "Large-format modular camera system featuring 4-axis standard movements and high-extension bellows."
    },
    {
      id: "05",
      title: "Lutron Lighting",
      category: "Architectural Systems",
      tools: ["AGI32", "Revit", "Lighting Control"],
      slug: "lutron-lighting",
      description: "Award-winning lighting design for a multi-use gallery space focusing on high CRI and automated dimming."
    },
    {
      id: "06",
      title: "Waist Level Finder",
      category: "Optomechanical Design",
      tools: ["CNC", "Optics", "Ergonomics"],
      slug: "directors-finder",
      description: "A custom 1:1 ground glass finder for directors, designed for high-contrast viewing in bright daylight."
    },
    {
      id: "07",
      title: "Mamiya Lens Hood",
      category: "Industrial Design",
      tools: ["3D Printing", "Stray Light", "CAD"],
      slug: "mamiya-hood",
      description: "A specialized bayonet-mount hood for the C330 system, optimized for the 80mm f/2.8 lens."
    },
    {
      id: "08",
      title: "Camera Repair",
      category: "Mechanical Service",
      tools: ["CLA", "Calibration", "Optics"],
      slug: "camera-repair",
      description: "CalebColor: Shutter timing, film transport, light seal replacement, and lens service across a range of film and digital bodies."
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
          <p className="font-mono text-xs tracking-[0.5em] text-gray-400 uppercase">
            System Index // [Total Units: {projects.length}]
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10">
          {projects.map((project) => (
            <div key={project.id} className="group bg-black p-8 md:p-12 flex flex-col md:flex-row justify-between items-start gap-8 hover:bg-blue-600/5 transition-all duration-500">

              {/* LEFT: metadata + title + description */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-[10px] text-blue-600 font-bold tracking-widest uppercase">Ref_{project.id}</span>
                  <div className="flex gap-2 flex-wrap">
                    {project.tools.map((tool) => (
                      <span key={tool} className="text-xs border border-white/20 px-3 py-1 font-mono text-gray-400">{tool}</span>
                    ))}
                  </div>
                </div>
                <Link href={`/projects/${project.slug}`}>
                  <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-3 group-hover:translate-x-2 transition-transform duration-300 hover:text-blue-600">
                    {project.title}
                  </h2>
                </Link>
                <p className="text-gray-300 text-sm leading-relaxed max-w-lg">
                  {project.description}
                </p>
              </div>

              {/* RIGHT: category + photo + button */}
              <div className="flex flex-col items-stretch gap-4 w-full md:w-64 shrink-0">
                <span className="font-mono text-[10px] tracking-widest text-gray-500 uppercase text-right">{project.category}</span>
                <div className="w-full aspect-video overflow-hidden border border-white/10 group-hover:border-blue-600/40 transition-colors duration-500 bg-white/[0.03]">
                  <img
                    src={`/projects/${project.slug}/header.jpg`}
                    className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-95 group-hover:grayscale-0 transition-all duration-700"
                    alt={project.title}
                  />
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-center px-6 py-3 border border-white/20 font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all group-hover:border-blue-600"
                >
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
