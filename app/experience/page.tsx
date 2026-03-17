export default function Experience() {
  const history = [
    {
      date: "2024 — PRESENT",
      role: "Mechanical Design Lead",
      company: "University Robotics Team",
      details: "Leading a team of 12 in the development of an autonomous rover chassis using SolidWorks and FEA optimization."
    },
    {
      date: "2023 — 2024",
      role: "Systems Engineering Intern",
      company: "Precision Dynamics Inc.",
      details: "Developed automated testing rigs for mechatronic actuators; reduced cycle testing time by 15% through Python scripting."
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 bg-black text-white px-8 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-20">
          Career <br />
          <span className="text-outline italic">Timeline</span>
        </h1>

        <div className="relative border-l border-white/10 ml-4 md:ml-0">
          {history.map((item, i) => (
            <div key={i} className="mb-20 ml-10 relative">
              {/* Timeline Node */}
              <div className="absolute -left-[45px] top-1.5 w-2 h-2 bg-blue-600 rounded-full ring-8 ring-black" />
              
              <span className="font-mono text-[10px] tracking-[0.3em] text-gray-500 uppercase">
                {item.date}
              </span>
              
              <h2 className="text-2xl font-bold uppercase mt-2">{item.role}</h2>
              <h3 className="text-blue-500 font-mono text-xs tracking-widest uppercase mt-1 mb-6">
                {item.company}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed max-w-2xl border-l border-white/5 pl-6">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}