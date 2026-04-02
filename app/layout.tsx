import type { Metadata } from "next";
import { Inter } from "next/font/google"; // High-end clean font
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400', '900'], // We need thin for body and 'Black' for headers
});

export const metadata: Metadata = {
  title: "Caleb Kusumo | Portfolio",
  description: "Portfolio of Caleb Kusumo — Mechanical Systems & Design Engineer specializing in robotics, mechatronics, and precision mechanical design.",
  keywords: ["Caleb Kusumo", "Kusumo", "Caleb Kusumo Portfolio", "Mechanical Engineer", "Mechatronics", "Robotics Engineer", "Design Engineer", "FRC Robotics"],
  authors: [{ name: "Caleb Kusumo" }],
  creator: "Caleb Kusumo",
  openGraph: {
    title: "Caleb Kusumo | Portfolio",
    description: "Portfolio of Caleb Kusumo — Mechanical Systems & Design Engineer specializing in robotics, mechatronics, and precision mechanical design.",
    url: "https://calebcolor.com",
    siteName: "Caleb Kusumo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caleb Kusumo | Portfolio",
    description: "Portfolio of Caleb Kusumo — Mechanical Systems & Design Engineer specializing in robotics, mechatronics, and precision mechanical design.",
    creator: "@calebkusumo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Caleb Kusumo",
    url: "https://calebcolor.com",
    jobTitle: "Mechanical Systems & Design Engineer",
    description: "Mechanical Systems & Design Engineer specializing in robotics, mechatronics, and precision mechanical design.",
    sameAs: [
      "https://github.com/CalebKusumo",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth bg-black">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}