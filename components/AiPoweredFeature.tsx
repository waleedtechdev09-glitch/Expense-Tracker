"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Scan, Mic } from "lucide-react";

// Aap is data object ko filter ya props ke zariye bhi dynamic kar sakte hain
const data = {
  playStoreUrl: "#",
  playStoreBadge: "/assets/playstore.png", // Google play icon image path
  appStoreUrl: "#",
  appStoreBadge: "/assets/apple.png", // Apple icon image path
};

const AiPoweredFeature = () => {
  return (
    <section className="relative w-full min-h-screen text-white py-16  px-6 md:px-16 lg:px-24 bg-transparent overflow-hidden flex items-center">
      {/* Top Right Abstract Fluid Shape Asset */}
      <div className="absolute -right-[10%] -top-[10%] sm:-right-[15%] sm:-top-[15%] lg:-right-[23%] lg:-top-[7%] w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[550px] lg:h-[550px] pointer-events-none z-0 select-none opacity-90 mix-blend-screen">
        <Image
          src="/assets/fluid.png"
          alt="Abstract Decorative Fluid"
          width={347}
          height={392}
          className="object-contain"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="font-manrope text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-4 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
              AI-Powered
            </span>{" "}
            Features
          </h2>
          <p className="font-lato text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Let AI simplify expense tracking by instantly processing receipts
            and voice entries.
          </p>
        </div>

        {/* Main Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT SIDE: AI Description & Feature Points */}
          <div className="lg:col-span-5 flex flex-col gap-10 max-w-xl mx-auto lg:mx-0">
            {/* Feature 1: AI Receipt Scanner */}
            <div className="flex gap-4 items-start group">
              <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-all duration-300">
                <Scan size={20} className="stroke-[2]" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-manrope text-xl font-semibold mb-2 tracking-wide text-slate-200">
                  AI <span className="text-[#818CF8]">Receipt Scanner</span>
                </h3>
                <p className="font-lato text-slate-400 text-sm sm:text-[15px] leading-relaxed italic font-light">
                  Capture paper receipts with your camera. AI instantly extracts
                  the merchant, amount, date, and category, turning them into
                  ready-to-save expense entries.
                </p>
              </div>
            </div>

            {/* Feature 2: Voice Expense Entry */}
            <div className="flex gap-4 items-start group">
              <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-all duration-300">
                <Mic size={20} className="stroke-[2]" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-manrope text-xl font-semibold mb-2 tracking-wide text-slate-200">
                  Voice Expense <span className="text-[#818CF8]">Entry</span>
                </h3>
                <p className="font-lato text-slate-400 text-sm sm:text-[15px] leading-relaxed italic font-light">
                  Simply say, &quot;Spent Rs. 500 on groceries today.&quot; The
                  app understands your command, extracts the details, and
                  prepares the transaction for confirmation.
                </p>
              </div>
            </div>

            {/* App Badges Container - Exactly as requested */}
            <div className="flex flex-row flex-wrap lg:px-14 items-center justify-start gap-2.5 sm:gap-3 mb-10 md:mb-14 w-full">
              {/* Google Play Button */}
              <Link
                href={data.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5
                  w-full max-w-[160px]
                  sm:w-[150px] md:w-[160px]
                  h-[48px]
                  px-3
                  bg-black
                  border border-white
                  rounded-lg
                  hover:bg-neutral-900
                  transition-all duration-200
                  hover:scale-[1.03]
                  select-none"
              >
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 shrink-0">
                  <Image
                    src={data.playStoreBadge}
                    alt="Google Play"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col items-start leading-none">
                  <span className="text-[7px] sm:text-[8px] uppercase tracking-wider font-medium text-white">
                    Get it on
                  </span>
                  <span className="text-[11px] sm:text-[12px] md:text-[16px] font-medium font-manrope text-white mt-[2px]">
                    Google Play
                  </span>
                </div>
              </Link>

              {/* App Store Button */}
              <Link
                href={data.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5
                  w-full max-w-[160px]
                  sm:w-[150px] md:w-[160px]
                  h-[48px]
                  px-3
                  bg-black
                  border border-white
                  rounded-lg
                  hover:bg-neutral-900
                  transition-all duration-200
                  hover:scale-[1.03]
                  select-none"
              >
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 shrink-0">
                  <Image
                    src={data.appStoreBadge}
                    alt="App Store"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col items-start leading-none">
                  <span className="text-[7px] sm:text-[8px] tracking-wider font-medium text-white">
                    Download on the
                  </span>
                  <span className="text-[11px] sm:text-[12px] md:text-[16px] font-medium font-manrope text-white mt-[2px]">
                    App Store
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: Dynamic Double Tilt Phone Mockups */}
          <div className="lg:col-span-7 flex items-center justify-center relative mt-4 lg:mt-0">
            {/* Phone Mockup (Voice Feature UI) — single container, consistent aspect ratio at every breakpoint */}
            <div
              className="relative w-full
                max-w-[300px] sm:max-w-[440px] md:max-w-[600px] lg:max-w-[720px]
                aspect-[850/670]
                transition-all duration-500 hover:scale-[1.03] rotate-[-4deg]
                drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)]"
            >
              <Image
                src="/assets/phone-group.png"
                alt="Voice Entry Feature Showcase"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 300px, (max-width: 768px) 440px, (max-width: 1024px) 600px, 720px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiPoweredFeature;
