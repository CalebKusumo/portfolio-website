import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PhotographyNav from "@/components/PhotographyNav";

const inter = Inter({ subsets: ["latin"], weight: ["400", "900"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://calebcolor.com"),
  title: "Photography | Caleb Kusumo",
  description: "Film and digital photography by Caleb Kusumo.",
  authors: [{ name: "Caleb Kusumo" }],
  creator: "Caleb Kusumo",
  openGraph: {
    title: "Photography | Caleb Kusumo",
    description: "A film and digital photography archive by Caleb Kusumo.",
    url: "https://calebcolor.com",
    siteName: "Caleb Kusumo Photography",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth bg-black">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <PhotographyNav />
        {children}
      </body>
    </html>
  );
}
