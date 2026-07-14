import React from "react";
import { Manrope, Lato } from "next/font/google";
import Navbar from "@/components/Navbar";
import "@/app/globals.css";

// Load Manrope for Titles/Headings
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["700", "800"], // Bold levels for headings
  variable: "--font-manrope", // Custom CSS variable name
});

// Load Lato for Body/Descriptions
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and Bold weights for text
  variable: "--font-lato", // Custom CSS variable name
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${lato.variable}`}>
      <body className="min-h-screen bg-[#020813] text-slate-100 flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
