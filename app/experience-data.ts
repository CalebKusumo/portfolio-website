export type ExperienceItem = {
  date: string;
  role: string;
  company: string;
  location: string;
  details?: string[];
};

export type ExperienceSection = {
  label: string;
  items: ExperienceItem[];
};

export const experienceSections: ExperienceSection[] = [
  {
    label: "Education",
    items: [
      {
        date: "Expected May 2029",
        role: "B.S. Mechanical Engineering; Minor: Electrical Engineering",
        company: "Boston University, College of Engineering",
        location: "Boston, MA",
        details: ["GPA: 3.81 | Dean’s List, Fall 2025"],
      },
    ],
  },
  {
    label: "Engineering Experience",
    items: [
      {
        date: "Sep 2025 - Present",
        role: "Steering Lead & Aero Team Member",
        company: "Terrier Motorsport Formula SAE",
        location: "",
        details: [
          "Lead 3+ designers developing TM02 steering: custom rack-and-pinion assembly and right-angle gearbox integration.",
          "Iterate Ackermann geometry and verify chassis fit in Fusion 360; size 4130 steering tubing for 100 N·m torque.",
          "Size tie-rod tubing using analytical buckling and SolidWorks Simulation; factor of safety 1.47 at 2,000 N.",
          "Fabricate fiberglass aerodynamic components and integrate bodywork into the team’s formula-style electric race car.",
          "Contribute to the team’s seventh-place finish in the Formula Hybrid + Electric EV class in 2026.",
        ],
      },
      {
        date: "Sep 2022 - Apr 2025",
        role: "Captain & Manufacturing Lead",
        company: "FIRST Robotics Team 6560 — Charging Champions",
        location: "",
        details: [
          "Led fabrication group of 15+ students in milling, turning, CNC machining, and laser cutting.",
          "Coordinated design, fabrication, and assembly across a 30+ member team to deliver a robot in under four weeks.",
          "Served on the drive team; earned Arizona North second place, OC Regional finalist honors, and Innovation in Control, Autonomous, and Creativity awards.",
        ],
      },
    ],
  },
  {
    label: "Projects & Entrepreneurship",
    items: [
      {
        date: "Sep 2023 - Present",
        role: "Founder & Lead Technician",
        company: "CalebColor Film",
        location: "",
        details: [
          "Founded and operate a film sales and processing business; developed 200+ rolls and sold 400+ rolls within one year.",
          "Diagnose and repair film/digital cameras: shutter timing, film advance, screens, mainboards, shutters, and light seals.",
        ],
      },
      {
        date: "Feb 2026",
        role: "Third Place",
        company: "Lutron Lighting Competition",
        location: "",
        details: [
          "Designed, built, wired, and presented a 1:100 modular gallery lighting model; placed third among 40 entries.",
          "Modeled components in Fusion 360 and fabricated them using 3D printing, waterjet cutting, and laser cutting.",
          "Integrated custom Hall-effect circuitry to trigger LED strips powered by an onboard battery.",
        ],
      },
      {
        date: "Sep 2026",
        role: "Personal Project",
        company: "4x5 Monorail Camera",
        location: "",
        details: [
          "Designed and fabricated a 4×5 monorail camera in SolidWorks with a Graflok film-back interface, spring-loaded retention, and dual-purpose bellows clamps to reduce part count.",
        ],
      },
    ],
  },
  {
    label: "Leadership & Service",
    items: [
      {
        date: "Sep 2026 - Present",
        role: "Member",
        company: "Engineering Product Innovation Center Student Advisory Board",
        location: "",
        details: ["Organize machine-shop workshops and community events."],
      },
      {
        date: "Sep 2026 - Present",
        role: "Darkroom Manager",
        company: "Boston University Photography Club",
        location: "",
        details: ["Manage darkroom facilities and chemical inventory; host public photography, film processing, and printing workshops."],
      },
      {
        date: "Sep 2026 - Present",
        role: "Mentor",
        company: "Boston University Technology Innovation Scholars Program",
        location: "",
        details: ['Design "Intro to MechE" course for middle school students to build on prior $25K revenue to double outreach capacity.'],
      },
    ],
  },
  {
    label: "Certifications",
    items: [
      {
        date: "Apr 2026",
        role: "Certified Professional in Design for Manufacturing",
        company: "Autodesk",
        location: "",
      },
    ],
  },
];
