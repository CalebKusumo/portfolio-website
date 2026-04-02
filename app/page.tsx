"use client";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const ModelViewer = dynamic(() => import('@/components/ModelViewer'), { ssr: false });

export default function Home() {
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

  const skills = [
    { category: "Design & Software", items: ["SolidWorks", "Fusion 360", "Adobe Lightroom", "Photoshop"] },
    { category: "Manufacturing", items: ["CNC Machining", "Lathe & Milling", "Waterjet", "Laser Cutting", "3D Printing (SLA/FDM)", "TIG Welding"] },
    { category: "Electronics", items: ["Soldering", "Arduino", "Raspberry Pi", "Oscilloscope", "General Circuitry"] },
    { category: "Development", items: ["Python", "C++", "Java", "Next.js"] },
  ];

  const experienceSections = [
    {
      label: "Education",
      items: [
        {
          date: "2025 — PRESENT",
          role: "B.S. Mechanical Engineering — Dean's List (Fall '25)",
          company: "Boston University",
          location: "Boston, MA",
          details: null,
        },
        {
          date: "2021 — 2025",
          role: "High School Diploma — Magna Cum Laude, Outstanding Engineer of the Year",
          company: "University High School",
          location: "Irvine, CA",
          details: "GPA 3.9 UW / 4.19 W",
        },
      ],
    },
    {
      label: "Engineering Experience",
      items: [
        {
          date: "SEPT 2025 — PRESENT",
          role: "Steering Lead / Aero & Bodywork Team Member",
          company: "Terrier Motorsport Formula SAE",
          location: "Boston, MA",
          details:
            "Management of steering assembly design and fabrication. Collaborating on aerodynamic component fabrication and bodywork integration for formula-style racing vehicles. Applying advanced composite and manufacturing techniques to optimize vehicle performance.",
        },
        {
          date: "SEPT 2022 — APRIL 2025",
          role: "Team Captain / Manufacturing & Assembly Lead",
          company: "FIRST Robotics Competition Team 6560 — Charging Champions",
          location: "Irvine, CA",
          details:
            "Managed the design-to-final product timeline, leading a team to produce a competitive robot in under 4 weeks. Operated as Technician/Drive Team for REEFSCAPE and CRESCENDO, securing 2nd Place at Arizona North Regional, OC Regional Finalists, and Innovation in Control, Autonomous, and Creativity awards.",
        },
        {
          date: "2024 — 2025",
          role: "Mechanical Team Member",
          company: "Hydrogen Grand Prix",
          location: "Irvine, CA",
          details:
            "Assembled mechanical systems for a hydrogen-powered RC racer, focusing on endurance and fuel efficiency.",
        },
      ],
    },
    {
      label: "Projects & Entrepreneurship",
      items: [
        {
          date: "FEB 2026",
          role: "Individual Competitor — Third Place",
          company: "Lutron Lighting Competition",
          location: "",
          details:
            "Designed, manufactured, wired, assembled, and presented a 1:100 scale lighting solution judged on creativity, engineering sophistication, and aesthetic appeal.",
        },
        {
          date: "2023 — PRESENT",
          role: "Founder / Lead Technician",
          company: "CalebColor Film",
          location: "",
          details:
            "Operated a high-volume film rolling and processing service, successfully developing 200+ rolls and selling 300+ rolls of film. Perform specialized mechanical repairs on film and digital cameras, including shutter timing, film advance, screen, sensor, and light seal replacement.",
        },
        {
          date: "2022 — PRESENT",
          role: "Freelance Photographer",
          company: "Photography",
          location: "",
          details:
            "100+ photo sessions for seniors, model digitals, events, and weddings. Lead photographer for high-profile community events including Irvine Talks, OC South Asian Student Association, and Multi-Cultural Awareness Fashion Show. Managed post-production workflows for K4U Dance Club and Replay Performing Arts.",
        },
      ],
    },
    {
      label: "Leadership & Volunteerism",
      items: [
        {
          date: "2025 — PRESENT",
          role: "Mentor — Electrical Systems, CNC, Milling & Lathe",
          company: "FIRST Robotics Competition Team 6560",
          location: "",
          details:
            "Mentored junior members on electrical systems, CNC operation, milling, and lathe turning to ensure high-precision assembly.",
        },
        {
          date: "2021 — 2025",
          role: "Structures Lead",
          company: "Student Council",
          location: "",
          details:
            "Led and managed a team of 20+ members in construction of themed Spirit Night builds, including a life-sized Mystery Machine, Las Vegas sign, and gingerbread house.",
        },
      ],
    },
  ];

  const sectionOrder = ['hero', 'about', 'projects', 'experience', 'contact'];
  const nextLabels: Record<string, string> = {
    hero: 'About',
    about: 'Projects',
    projects: 'Experience',
    experience: 'Contact',
  };
  const nextTargets: Record<string, string> = {
    hero: '#about',
    about: '#projects',
    projects: '#experience',
    experience: '#contact',
  };
  const prevLabels: Record<string, string> = {
    about: 'Top',
    projects: 'About',
    experience: 'Projects',
    contact: 'Experience',
  };
  const prevTargets: Record<string, string> = {
    about: '#hero',
    projects: '#about',
    experience: '#projects',
    contact: '#experience',
  };

  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const trigger = window.scrollY + window.innerHeight * 0.4;
      let current = sectionOrder[0];
      for (const id of sectionOrder) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= trigger) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextLabel = nextLabels[activeSection];
  const nextTarget = nextTargets[activeSection];
  const prevLabel = prevLabels[activeSection];
  const prevTarget = prevTargets[activeSection];

  return (
    <main className="relative bg-black">
      <ModelViewer modelPath="/model.glb" />

      <div className="fixed bottom-8 right-8 z-[150] flex flex-col gap-2">
        {prevTarget && (
          <a
            href={prevTarget}
            className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 font-mono text-[10px] tracking-[0.3em] uppercase text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
          >
            ↑ {prevLabel}
          </a>
        )}
        {nextTarget && (
          <a
            href={nextTarget}
            className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 font-mono text-[10px] tracking-[0.3em] uppercase text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
          >
            {nextLabel} ↓
          </a>
        )}
      </div>

      <div className="relative z-10 w-full">

        {/* HERO */}
        <section id="hero" className="h-screen flex flex-col items-center justify-center px-6">
          <h1 className="text-8xl md:text-[14rem] font-[900] tracking-tighter uppercase leading-[0.8] mix-blend-difference text-center">
            CALEB <br /> KUSUMO
          </h1>
          <p className="mt-12 font-mono text-[10px] tracking-[0.5em] uppercase opacity-40 mix-blend-difference">
            System Architecture // Mechanical Design // 2026
          </p>
        </section>

        <div className="border-t border-white/15 mx-8 md:mx-20" />

        {/* ABOUT */}
        <section id="about" className="min-h-screen bg-black text-white py-40 px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-20">
              <h2 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-none mb-8">
                ENGINEERING <br />
                <span className="text-outline italic text-white">PROFILE</span>
              </h2>
              <p className="text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed mb-8">
                Greetings! My name is Caleb Kusumo and I am a first-year Mechanical Engineering student at Boston University with a deep interest in applying the creative process to the intersection of mechatronics, industrial design, and manufacturing systems. Covering numerous areas, I have a strong background in robotics, electronics, manufacturing, and mechanical systems that stem from my experiences as the founder of a film business, CalebColor, where I primarily focus on camera repair and film sale, the captain and manufacturing lead of FIRST Robotics team 6560, and the steering lead for Terrier Motorsport at Boston University. Outside of my work, you can find me with camera in-hand or amidst a new project along the lines of those displayed here.
              </p>
              <p className="text-gray-500 font-mono text-xs tracking-[0.4em] uppercase mb-5">Continue reading about my experiences and skills below:</p>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 border border-white/30 font-mono text-xs tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all">
                View Resume
              </a>
            </div>
          </div>
        </section>

        <div className="border-t border-white/15 mx-8 md:mx-20" />

        {/* PROJECTS */}
        <section id="projects" className="min-h-screen bg-black text-white py-40 px-8 md:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 border-l-2 border-blue-600 pl-8">
              <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-4">
                Project <br />
                <span className="text-outline italic text-white opacity-50">Archive</span>
              </h2>
              <p className="font-mono text-xs tracking-[0.5em] text-gray-400 uppercase">
                System Index // [Total Units: {projects.length}]
              </p>
            </div>

            <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10">
              {projects.map((project) => (
                <div key={project.id} className="group bg-black p-8 md:p-12 flex flex-col md:flex-row justify-between items-start gap-8 hover:bg-blue-600/5 transition-all duration-500">
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
                      <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-3 group-hover:translate-x-2 transition-transform duration-300 hover:text-blue-600">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="text-gray-300 text-sm leading-relaxed max-w-lg">
                      {project.description}
                    </p>
                  </div>
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
        </section>

        <div className="border-t border-white/15 mx-8 md:mx-20" />

        {/* EXPERIENCE */}
        <section id="experience" className="min-h-screen bg-black text-white py-40 px-8 md:px-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-20">
              Experience <br />
              <span className="text-outline italic">& Background</span>
            </h2>

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
                      <h3 className="text-xl font-bold uppercase mt-2 mb-1 text-white">{item.role}</h3>
                      <p className="text-blue-500 font-mono text-xs tracking-widest uppercase mb-4">
                        {item.company}
                      </p>
                      {item.details && (
                        <p className="text-gray-300 text-sm leading-relaxed max-w-2xl border-l border-white/10 pl-6">
                          {item.details}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="border-t border-white/10 pt-16 mb-20">
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
        </section>

        <div className="border-t border-white/15 mx-8 md:mx-20" />

        {/* CONTACT */}
        <section id="contact" className="min-h-screen bg-black text-white py-40 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-20">
              <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-6">
                Contact <br />
                <span className="text-outline italic text-white">Me</span>
              </h2>
              <p className="font-mono text-[10px] tracking-[0.5em] text-blue-600 uppercase">
                Available for technical consultation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-16">
              <div className="group/email">
                <h3 className="font-mono text-[10px] tracking-widest text-gray-500 uppercase mb-4">Direct_Comm</h3>
                <a href="mailto:calebk@bu.edu" className="block">
                  <span className="text-2xl md:text-3xl font-bold group-hover/email:text-blue-600 transition-colors uppercase tracking-tight block">
                    Email Me →
                  </span>
                  <span className="font-mono text-sm text-blue-600 opacity-0 group-hover/email:opacity-100 transition-opacity mt-2 block tracking-wider lowercase">
                    calebk@bu.edu
                  </span>
                </a>
              </div>

              <div className="group">
                <h3 className="font-mono text-[10px] tracking-widest text-gray-500 uppercase mb-4">Network_Links</h3>
                <div className="flex flex-col gap-4">
                  <a href="https://www.linkedin.com/in/caleb-kusumo-79b6503bb/" target="_blank" rel="noopener noreferrer" className="text-xl font-bold uppercase hover:text-blue-600 transition-colors">LinkedIn</a>
                  <a href="https://github.com/CalebKusumo" target="_blank" rel="noopener noreferrer" className="text-xl font-bold uppercase hover:text-blue-600 transition-colors">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="w-full py-10 px-8 md:px-12 border-t border-white/10 bg-black relative z-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <nav className="flex flex-wrap gap-6 md:gap-10">
              {[
                { href: '#about', label: 'About' },
                { href: '#projects', label: 'Projects' },
                { href: '#experience', label: 'Experience' },
                { href: '#contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="font-mono text-[10px] tracking-[0.4em] text-gray-400 uppercase hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className="font-mono text-[9px] tracking-[0.4em] text-gray-500 uppercase">
              Boston&nbsp;//&nbsp;LA
            </div>
            <div className="font-mono text-[9px] tracking-[0.8em] text-gray-600 uppercase">
              © 2026 Caleb Kusumo
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}
