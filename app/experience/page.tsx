export default function Experience() {
  const sections = [
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

  return (
    <main className="min-h-screen pt-32 pb-20 bg-black text-white px-8 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-20">
          Experience <br />
          <span className="text-outline italic">& Background</span>
        </h1>

        {sections.map((section, si) => (
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
                    <p className="text-gray-300 text-sm leading-relaxed max-w-2xl border-l border-white/10 pl-6">
                      {item.details}
                    </p>
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
