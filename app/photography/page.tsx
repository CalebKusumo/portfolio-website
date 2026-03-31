"use client";

// ─────────────────────────────────────────────────────────────────────────────
// PHOTOGRAPHY DATA — edit this file to add or remove photos
//
// To add a photo:
//   1. Drop the image into  public/photography/<section>/  (create folder if needed)
//   2. Add an entry to the matching section array below
//
// Fields:
//   src      — path from /public, e.g. "/photography/wildlife/deer.jpg"
//   location — where it was shot, e.g. "Yosemite, CA"
//   film     — film stock or sensor, e.g. "Kodak Portra 400"
//   camera   — body used, e.g. "Mamiya C330"
// ─────────────────────────────────────────────────────────────────────────────

const sections: {
  id: string;
  label: string;
  photos: { src: string; location: string; film: string; camera: string }[];
}[] = [
  {
    id: "wildlife",
    label: "Wildlife",
    photos: [
      // { src: "/photography/wildlife/example.jpg", location: "Location", film: "Kodak Portra 400", camera: "Mamiya C330" },
    ],
  },
  {
    id: "street",
    label: "Street",
    photos: [
      // { src: "/photography/street/example.jpg", location: "Location", film: "Ilford HP5", camera: "Canon AE-1" },
    ],
  },
  {
    id: "landscape",
    label: "Landscape",
    photos: [
	 { src: "/photography/landscape/big-bear-scars.jpg", location: "Big Bear, CA", film:  "Kodak Vision3 250D", camera: "Pentax 17" }
      // { src: "/photography/landscape/example.jpg", location: "Location", film: "Fuji Velvia 50", camera: "4x5 Rail" },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function Photography() {
  const populated = sections.filter((s) => s.photos.length > 0);

  return (
    <main className="min-h-screen bg-black text-white pt-40 pb-24 px-8 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* PAGE HEADER */}
        <div className="mb-24 border-l-2 border-blue-600 pl-8">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-4">
            Photo <br />
            <span className="text-outline italic text-white opacity-50">Archive</span>
          </h1>
          <p className="font-mono text-xs tracking-[0.5em] text-gray-400 uppercase">
            Film & Digital // {sections.reduce((n, s) => n + s.photos.length, 0)} Frames
          </p>
        </div>

        {/* SECTION NAV */}
        <div className="flex gap-8 mb-20 border-b border-white/10 pb-6">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="font-mono text-xs tracking-[0.4em] uppercase text-gray-500 hover:text-white transition-colors"
            >
              {section.label}
              <span className="ml-2 text-blue-600">[{section.photos.length}]</span>
            </a>
          ))}
        </div>

        {/* SECTIONS */}
        {populated.length === 0 ? (
          <div className="border border-white/10 p-16 text-center">
            <p className="font-mono text-xs tracking-[0.5em] text-gray-600 uppercase mb-4">No photos yet</p>
            <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
              Add photos by dropping images into <code className="text-blue-600">public/photography/&lt;section&gt;/</code> and
              adding entries to the data array at the top of <code className="text-blue-600">app/photography/page.tsx</code>.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-32">
            {populated.map((section) => (
              <div key={section.id} id={section.id}>
                <p className="font-mono text-xs tracking-[0.5em] text-blue-600 uppercase mb-10">
                  {section.label} // {section.photos.length} {section.photos.length === 1 ? "frame" : "frames"}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
                  {section.photos.map((photo, i) => (
                    <div key={i} className="group relative aspect-[3/2] overflow-hidden bg-black cursor-pointer">
                      {/* PHOTO */}
                      <img
                        src={photo.src}
                        alt={`${section.label} — ${photo.location}`}
                        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                      />
                      {/* HOVER OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 gap-1">
                        <p className="font-mono text-xs text-white tracking-widest uppercase leading-snug">
                          {photo.location}
                        </p>
                        <p className="font-mono text-[10px] text-gray-400 tracking-widest uppercase">
                          {photo.film}
                        </p>
                        <p className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">
                          {photo.camera}
                        </p>
                      </div>
                      {/* FRAME NUMBER */}
                      <div className="absolute top-3 right-3 font-mono text-[9px] text-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}
