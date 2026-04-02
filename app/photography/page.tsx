"use client";
import { useState, useEffect, useCallback } from "react";

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
    id: "portrait",
    label: "Portrait",
    photos: [
      // { src: "/photography/portrait/example.jpg", location: "Location", film: "Kodak Portra 400", camera: "Canon AE-1" },
    ],
  },
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
      // --- Black and White Photos ---
      { src: "/photography/street/IMG_0040-Pano.webp", location: "Newport Beach, CA", film: "Kentmere 400", camera: "Canononet QL17 III" },
      { src: "/photography/street/RB67Wolfman100_3.webp", location: "Laguna Beach, CA", film: "Wolfman 100", camera: "Mamiya RB67" },
      { src: "/photography/street/RB67_Delta400_10.webp", location: "Newport Beach, CA", film: "Delta 400", camera: "Mamiya RB68" },
      { src: "/photography/street/RB67_Delta400_5.webp", location: "Newport Beach, CA", film: "Delta 400", camera: "Mamiya RB69" },

      // --- Color & Digital Photos ---
      { src: "/photography/street/3-18-24_Newport_Portra160-233.webp", location: "Newport Beach, CA", film: "Portra 400", camera: "Canon AE-1" },
      { src: "/photography/street/billiards.webp", location: "Newport Beach, CA", film: "Portra 400", camera: "Canon AE-1" },
      { src: "/photography/street/hague-cig.webp", location: "Den Haag, NL", film: "Digital", camera: "Canon R6" },
      { src: "/photography/street/la-buildings.webp", location: "Los Angeles, CA", film: "Digital", camera: "Fuji X100V" },
      { src: "/photography/street/Shadows.webp", location: "Tokyo, JP", film: "Digital", camera: "Canon R6" },
      { src: "/photography/street/showing-off.webp", location: "Brussels, BE", film: "Digital", camera: "Canon R6" },
      { src: "/photography/street/toyko-cat.webp", location: "Tokyo, JP", film: "Digital", camera: "Canon R6" },
      { src: "/photography/street/Yashica24Ektar100_13.webp", location: "Tustin, CA", film: "Ektar 100", camera: "Yashica 24" },
    ],
  },
  {
    id: "landscape",
    label: "Landscape",
    photos: [
      // --- Black and White Photos ---
      { src: "/photography/landscape/flowerprint.webp", location: "Encinitas, CA", film: "Pan F 50", camera: "Pentax 67" },
      { src: "/photography/landscape/MamiyaRB67Pan400_7.webp", location: "San Diego, CA", film: "Kentmere 400", camera: "Pentax 67" },
      { src: "/photography/landscape/RB67Kentmere400_1.webp", location: "Laguna Beach, CA", film: "Kentmere 400", camera: "Mamiya RB67" },
      { src: "/photography/landscape/RB67Wolfman100_2.webp", location: "San Diego, CA", film: "Wolfman 100", camera: "Mamiya RB68" },
      { src: "/photography/landscape/RB67_Delta400_11.webp", location: "Newport Beach, CA", film: "Delta 400", camera: "Mamiya RB69" },
      { src: "/photography/landscape/rowing-RB67_Delta400_17.webp", location: "Newport Beach, CA", film: "Delta 400", camera: "Mamiya RB72" },
      { src: "/photography/landscape/shadycanyon.webp", location: "Irvine, CA", film: "Lucky 1023", camera: "Pentax 67" },

      // --- Color Photos ---
      { src: "/photography/landscape/big-bear-scars.webp", location: "Big Bear, CA", film: "Portra 400", camera: "Leica M3" },
      { src: "/photography/landscape/hoco-moon.webp", location: "Dana Point, CA", film: "Digital", camera: "Canon R6" },
      { src: "/photography/landscape/laguna-sunset.webp", location: "Laguna Beach, CA", film: "Fuji 200", camera: "Canon Rebel XS" },
      { src: "/photography/landscape/MamiyaRB67Portra400_3_Original.webp", location: "Wrightwood, CA", film: "Portra 400", camera: "Mamiya RB67" },
      { src: "/photography/landscape/netherlands.webp", location: "Kinderdijk, NL", film: "Ektachrome 100", camera: "Canon Rebel 2000" },
      { src: "/photography/landscape/newport-boat.webp", location: "Newport Beach, CA", film: "Portra 400", camera: "Canon AE-1" },
      { src: "/photography/landscape/newport-shoreline.webp", location: "Newport Beach, CA", film: "Portra 400", camera: "Canon AE-1" },
      { src: "/photography/landscape/RB67_Portra400_1-Edit-2.webp", location: "Salt Lake City, UT", film: "Portra 400", camera: "Mamiya RB70" },
      { src: "/photography/landscape/RB67_Portra400_6-Edit.webp", location: "Salt Lake City, UT", film: "Portra 400", camera: "Mamiya RB71" },

      // --- Special Selections at End ---
      { src: "/photography/landscape/RB67Pan400SprocketShots-LA+Newport.webp", location: "Los Angeles, CA", film: "Kentmere 400", camera: "Mamiya RB67" },
      { src: "/photography/landscape/rb67portra800scans--6.webp", location: "Irvine, CA", film: "Portra 800", camera: "Mamiya RB67" },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────

// Flat list of all photos for lightbox navigation
const allPhotos = sections.flatMap((s) => s.photos);

type Photo = (typeof allPhotos)[number];

function Lightbox({ photo, index, onClose, onPrev, onNext }: {
  photo: Photo;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  // Close on Escape, navigate with arrow keys
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-8 font-mono text-xs tracking-[0.4em] uppercase text-gray-500 hover:text-white transition-colors"
      >
        Close ✕
      </button>

      {/* Counter */}
      <p className="absolute top-6 left-8 font-mono text-[10px] tracking-[0.4em] text-gray-600 uppercase">
        {String(index + 1).padStart(2, "0")} / {String(allPhotos.length).padStart(2, "0")}
      </p>

      {/* Image */}
      <div
        className="relative max-h-[75vh] max-w-5xl w-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={photo.location}
          className="max-h-[75vh] max-w-full object-contain"
        />
      </div>

      {/* Caption */}
      <div className="mt-6 text-center" onClick={(e) => e.stopPropagation()}>
        <p className="font-mono text-sm text-white tracking-widest uppercase mb-1">{photo.location}</p>
        <p className="font-mono text-xs text-gray-400 tracking-widest uppercase">{photo.film} · {photo.camera}</p>
      </div>

      {/* Prev / Next */}
      <div className="flex gap-10 mt-8" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onPrev}
          className="font-mono text-sm tracking-[0.2em] uppercase text-gray-500 hover:text-white transition-colors"
        >
          ← Prev
        </button>
        <button
          onClick={onNext}
          className="font-mono text-sm tracking-[0.2em] uppercase text-gray-500 hover:text-white transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default function Photography() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (photo: Photo) => {
    const idx = allPhotos.indexOf(photo);
    setLightboxIndex(idx);
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + allPhotos.length) % allPhotos.length));
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % allPhotos.length));
  }, []);

  const populated = sections.filter((s) => s.photos.length > 0);

  return (
    <main className="min-h-screen bg-black text-white pt-40 pb-24 px-8 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* PAGE HEADER */}
        <div className="mb-24 border-l-2 border-blue-600 pl-8 flex items-start gap-12">
          <div className="flex-1">
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-4">
              Photo <br />
              <span className="text-outline italic text-white opacity-50">Archive</span>
            </h1>
            <p className="font-mono text-xs tracking-[0.5em] text-gray-400 uppercase">
              Film & Digital // {allPhotos.length} {allPhotos.length === 1 ? "Frame" : "Frames"}
            </p>
          </div>
          <img
            src="/photography/header.jpg"
            alt="Photography"
            className="hidden md:block w-64 lg:w-80 object-cover border border-white/10 self-center"
          />
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
              Add photos by dropping images into{" "}
              <code className="text-blue-600">public/photography/&lt;section&gt;/</code> and adding entries
              to the data array at the top of{" "}
              <code className="text-blue-600">app/photography/page.tsx</code>.
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
                    <div
                      key={i}
                      className="group relative aspect-[3/2] overflow-hidden bg-black cursor-pointer"
                      onClick={() => openLightbox(photo)}
                    >
                      {/* PHOTO */}
                      <img
                        src={photo.src}
                        alt={`${section.label} — ${photo.location}`}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                      {/* HOVER OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 gap-1">
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

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <Lightbox
          photo={allPhotos[lightboxIndex]}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </main>
  );
}
