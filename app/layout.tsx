// import React from "react";
// import { Manrope, Lato } from "next/font/google";
// import Navbar from "@/components/Navbar";
// import "@/app/globals.css";

// // Load Manrope for Titles/Headings
// const manrope = Manrope({
//   subsets: ["latin"],
//   weight: ["700", "800"], // Bold levels for headings
//   variable: "--font-manrope", // Custom CSS variable name
// });

// // Load Lato for Body/Descriptions
// const lato = Lato({
//   subsets: ["latin"],
//   weight: ["400", "700"], // Regular and Bold weights for text
//   variable: "--font-lato", // Custom CSS variable name
// });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={`${manrope.variable} ${lato.variable}`}>
//       <body className="min-h-screen bg-[#020813] text-slate-100 flex flex-col font-sans">
//         <Navbar />
//         <main className="flex-grow">{children}</main>
//       </body>
//     </html>
//   );
// }

import React from "react";
import Image from "next/image";
import { Manrope, Lato } from "next/font/google";
import Navbar from "@/components/Navbar";
import "@/app/globals.css";
import Footer from "@/components/Footer";

// Load Manrope for Titles/Headings
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"], // Added 500 & 600 weights for precise font styling
  variable: "--font-manrope",
});

// Load Lato for Body/Descriptions
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${lato.variable}`}>
      <body className="min-h-screen bg-[#020813] text-slate-100 flex flex-col font-sans relative overflow-x-hidden">
        {/* 
          Global Background Image Layer:
          Ye image ab pure layout ke background me stretch hogi, jisse Hero aur Powerful Feature 
          dono sections ke peeche background pattern lagatar (seamlessly) flow karega.
        */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 select-none opacity-40">
          <Image
            src="/assets/bg-image.png"
            alt="Seamless Background Texture"
            fill
            className="object-cover object-top" // starts perfectly from the top of Hero down to Features
            priority
          />
        </div>

        {/* Header/Navbar Section */}
        <Navbar />

        {/* Main Content (Hero & Powerful Feature will render here with transparent backgrounds) */}
        <main className="grow relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
