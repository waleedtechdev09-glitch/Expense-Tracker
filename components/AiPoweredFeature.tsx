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
    <section
      id="features"
      className="relative w-full min-h-screen text-white lg:py-16 py-10 px-6 md:px-16 lg:px-24 overflow-visible flex items-center"
    >
      {/* Gradient glow behind the fluid shape */}
      <div className="hidden lg:block absolute lg:-right-[20%] lg:-top-[18%] w-[550px] h-[550px] rounded-full blur-3xl opacity-50 pointer-events-none select-none z-10 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.55)_0%,_rgba(99,102,241,0.45)_35%,_rgba(236,72,153,0.35)_65%,_transparent_75%)]" />

      {/* Top Right Abstract Fluid Shape Asset — large screens only, bleeds up into the section above */}
      <div className="hidden lg:block absolute lg:-right-[20%] lg:-top-[13%] w-[550px] h-[550px] pointer-events-none select-none z-30 opacity-90 mix-blend-screen">
        <Image
          src="/assets/fluid.png"
          alt="Abstract Decorative Fluid"
          width={420}
          height={442}
          className="object-contain"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-20">
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 md:mb-16 lg:mb-24">
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
              <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-all duration-300">
                <Image
                  src="/assets/scanner.png"
                  alt="Receipt Scanner"
                  width={25}
                  height={25}
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-manrope text-xl font-medium  mb-2 tracking-wide text-white">
                  AI <span className="text-[#818CF8]">Receipt Scanner</span>
                </h3>
                <p className="font-lato text-white/90 text-sm sm:text-[15px] leading-relaxed italic font-light">
                  Capture paper receipts with your camera. AI instantly extracts
                  the merchant, amount, date, and category, turning them into
                  ready-to-save expense entries.
                </p>
              </div>
            </div>

            {/* Feature 2: Voice Expense Entry */}
            <div className="flex gap-4 items-start group">
              <div className=" flex-shrink-0 w-10 h-10 rounded-lg  flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-all duration-300">
                <Image
                  src="/assets/voice.png"
                  alt="Voice Entry"
                  width={25}
                  height={25}
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-manrope text-xl font-medium mb-2 tracking-wide text-[#818CF8]">
                  Voice Expense <span className="text-white">Entry</span>
                </h3>
                <p className="font-lato text-white/90 text-sm sm:text-[15px] leading-relaxed italic font-light">
                  Simply say, &quot;Spent Rs. 500 on groceries today.&quot; The
                  app understands your command, extracts the details, and
                  prepares the transaction for confirmation.
                </p>
              </div>
            </div>

            {/* App Badges Container */}
            <div className="flex flex-row flex-nowrap lg:px-14 items-center justify-start gap-2 sm:gap-3 mb-10 md:mb-14 w-full">
              {/* Google Play Button */}
              <Link
                href={data.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 sm:gap-2.5
                  flex-1 min-w-0
                  sm:flex-none sm:w-[150px] md:w-[160px]
                  max-w-[160px]
                  h-[44px] sm:h-[48px]
                  px-2 sm:px-3
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

                <div className="flex flex-col items-start leading-none min-w-0">
                  <span className="text-[7px] sm:text-[8px] uppercase tracking-wider font-medium text-white">
                    Get it on
                  </span>
                  <span className="text-[10px] sm:text-[12px] md:text-[16px] font-medium font-manrope text-white mt-[2px] truncate">
                    Google Play
                  </span>
                </div>
              </Link>

              {/* App Store Button */}
              <Link
                href={data.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 sm:gap-2.5
                  flex-1 min-w-0
                  sm:flex-none sm:w-[150px] md:w-[160px]
                  max-w-[160px]
                  h-[44px] sm:h-[48px]
                  px-2 sm:px-3
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

                <div className="flex flex-col items-start leading-none min-w-0">
                  <span className="text-[7px] sm:text-[8px] tracking-wider font-medium text-white">
                    Download on the
                  </span>
                  <span className="text-[10px] sm:text-[12px] md:text-[16px] font-medium font-manrope text-white mt-[2px] truncate">
                    App Store
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: Dynamic Double Tilt Phone Mockups */}
          <div className="lg:col-span-7 flex items-center justify-center lg:justify-end relative mt-6 lg:mt-0">
            <div
              className="
      relative
      w-full
      max-w-[480px]
      sm:max-w-[600px]
      md:max-w-[700px]
      lg:max-w-[900px]
      xl:max-w-[980px]
      aspect-[900/700]
      transition-all
      duration-500
      hover:scale-[1.03]
      rotate-[-4deg]
      lg:-translate-y-10
      lg:translate-x-12
      
    "
            >
              <Image
                src="/assets/phone-groups.png"
                alt="Voice Entry Feature Showcase"
                fill
                priority
                className="object-contain"
                sizes="(max-width:640px) 480px,
             (max-width:768px) 600px,
             (max-width:1024px) 700px,
             980px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiPoweredFeature;
