import type { Metadata } from "next";
import { Inter } from "next/font/google"; // High-end clean font
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400', '900'], // We need thin for body and 'Black' for headers
});

export const metadata: Metadata = {
  title: "Caleb Kusumo | Systems Engineering",
  description: "Mechanical Systems & Design Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth bg-black">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}