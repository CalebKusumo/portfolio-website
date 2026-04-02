"use client";
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      id: "6560-25",
      title: "2025 Robot",
      category: "Mechatronics",
      tools: ["Solidworks", "CNC", "CAN Bus", "Laser Cutting"],
      slug: "2025-robot",
      description: "Reefscape: Advanced vision-tracking and specialized intake for high-precision coral manipulation."
    },
    {
      id: "6560-24",
      title: "2024 Robot",
      category: "Mechatronics",
      tools: ["SolidWorks", "Swerve", "CNC"],
      slug: "2024-robot",
      description: "Crescendo: High-speed swerve drivetrain with vision-aligned note delivery systems."
    },
    {
      id: "6560-23",
      title: "2023 Robot",
      category: "Mechatronics",
      tools: ["Java", "SolidWorks", "Pneumatics", "CNC"],
      slug: "2023-robot",
      description: "Charged Up: Features a piston-actuated arm and motorized gripper geometry capturing conical and square shapes."
    },
    {
      id: "CK-01",
      title: "Darkslide Assembly",
      category: "Mechanical Design",
      tools: ["SolidWorks", "Waterjet", "3D Printing"],
      slug: "darkslide",
      description: "High-precision linear motion sub-assembly utilizing specialized coatings for low-friction operation."
    },
    {
      id: "CK-04",
      title: "4x5 Rail Camera",
      category: "Optomechanical Design",
      tools: ["SolidWorks", "3D Printing", "Camera", "Laser Cutting"],
      slug: "rail-camera",
      description: "Large-format modular camera system featuring 4-axis standard movements and high-extension bellows."
    },
    {
      id: "CK-05",
      title: "Lutron Lighting",
      category: "Architectural Systems",
      tools: ["Fusion360", "Lighting Control", "Circuits", "Laser Cutting", "3D Printing", "Water Jet"],
      slug: "lutron-lighting",
      description: "Award-winning (3rd out of 40) lighting display for a 1:100 scale gallery space focusing on seamless design."
    },
    {
      id: "CK-06",
      title: "Waist Level Finder",
      category: "Optomechanical Design",
      tools: ["3d Printing", "Optics", "Solidworks"],
      slug: "directors-finder",
      description: "A custom EF mount 1:1 ground glass waist-level finder, designed for through-the-lens viewing."
    },
    {
      id: "CK-07",
      title: "Mamiya Lens Hood",
      category: "Industrial Design",
      tools: ["3D Printing", "Cameras", "CAD", "Solidworks"],
      slug: "mamiya-hood",
      description: "A specialized 3D printed hood for the C330 TLR system, optimized for the 80mm f/2.8 lens."
    },
    {
      id: "CK-08",
      title: "Camera Repair",
      category: "Mechanical Service",
      tools: ["Calibration", "Repair", "Optics", "Cameras"],
      slug: "camera-repair",
      description: "Shutter timing, film transport, light seal replacement, and lens service across a range of film and digital bodies."
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group bg-black flex flex-col hover:bg-blue-600/5 transition-all duration-500 border border-transparent hover:border-blue-600/30"
            >
              <div className="w-full aspect-video overflow-hidden bg-white/[0.03]">
                <img
                  src={`/projects/${project.slug}/header.jpg`}
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-95 group-hover:grayscale-0 transition-all duration-700"
                  alt={project.title}
                />
              </div>
              <div className="flex flex-col flex-1 p-6 gap-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] text-blue-600 font-bold tracking-widest uppercase">Ref_{project.id}</span>
                  <span className="font-mono text-[10px] tracking-widest text-gray-500 uppercase">{project.category}</span>
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-tighter group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap pt-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="text-[10px] border border-white/15 px-2 py-1 font-mono text-gray-500">{tool}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
