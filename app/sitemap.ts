import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://calebcolor.com';
  return [
    { url: base,                                    lastModified: new Date(), priority: 1.0 },
    { url: `${base}/projects`,                      lastModified: new Date(), priority: 0.9 },
    { url: `${base}/projects/2025-robot`,           lastModified: new Date(), priority: 0.8 },
    { url: `${base}/projects/2024-robot`,           lastModified: new Date(), priority: 0.8 },
    { url: `${base}/projects/2023-robot`,           lastModified: new Date(), priority: 0.8 },
    { url: `${base}/projects/darkslide`,            lastModified: new Date(), priority: 0.7 },
    { url: `${base}/projects/rail-camera`,          lastModified: new Date(), priority: 0.7 },
    { url: `${base}/projects/lutron-lighting`,      lastModified: new Date(), priority: 0.7 },
    { url: `${base}/projects/directors-finder`,     lastModified: new Date(), priority: 0.7 },
    { url: `${base}/projects/mamiya-hood`,          lastModified: new Date(), priority: 0.7 },
    { url: `${base}/projects/camera-repair`,        lastModified: new Date(), priority: 0.7 },
    { url: `${base}/about`,                         lastModified: new Date(), priority: 0.6 },
    { url: `${base}/experience`,                    lastModified: new Date(), priority: 0.6 },
    { url: `${base}/contact`,                       lastModified: new Date(), priority: 0.6 },
  ];
}
