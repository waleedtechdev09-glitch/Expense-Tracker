"use client";

import React from "react";
import Image from "next/image";
import { HERO_DATA, HeroConfig } from "../config/hero";
import Link from "next/dist/client/link";

interface HeroProps {
  data?: HeroConfig;
}

const Hero: React.FC<HeroProps> = ({ data = HERO_DATA }) => {
  return (
    // bg-transparent rakha hai taake parent ki image background me saaf nazar aaye
    <section className="relative w-full text-white flex items-center pt-16 pb-10 px-5 sm:pt-20 sm:pb-12 sm:px-6 md:px-16 lg:px-24 bg-transparent">
      {/* Background global radial glow */}
      <div className="absolute right-[-10%] top-[20%] w-[600px] h-[600px] bg-blue-900/15 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-4 items-center relative z-10">
        {/* Left Side: Content & Stats */}
        <div className="lg:col-span-6 flex flex-col justify-center items-start text-left">
          <h1 className="font-manrope text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-medium tracking-tight leading-[1.12] mb-6">
            Take Control
            <br />
            <span className="text-white">of </span>
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Every Expense.
            </span>
          </h1>

          <p className="font-lato text-[#FFFFFFE5] text-[15px] sm:text-[16px] md:text-[17px] font-normal leading-relaxed max-w-xl mb-8 md:mb-10">
            {data.description}
          </p>

          <div className="flex flex-row flex-wrap items-center justify-start gap-2.5 sm:gap-3 mb-10 md:mb-14 w-full">
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
          {/* Download Buttons */}

          {/* Dynamic Stats Row */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-10 lg:gap-16 max-w-lg font-manrope w-full">
            {data.stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-1 items-start min-w-0"
              >
                <span className="text-[#FFFFFF] text-[8px] sm:text-[9px] uppercase font-normal tracking-wider">
                  {stat.label}
                </span>
                <span className="text-[10px] sm:text-sm md:text-[12px] font-bold text-[#FFFFFF] leading-snug">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Mocks */}
        <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[420px] md:h-[580px] lg:h-[650px] flex items-start justify-center lg:justify-end">
          <div
            className="absolute w-[350px] h-[350px] sm:w-[480px] sm:h-[480px] lg:w-[480px] lg:h-[380px] rounded-full blur-[130px] opacity-[0.30] pointer-events-none z-0 right-[-15%] top-[4%] sm:right-[-10%] lg:right-[-22%] lg:top-[15%]"
            style={{
              background: "linear-gradient(135deg, #4FD1FF 0%, #6C63FE 100%)",
            }}
          />
          <div className="relative w-full h-full max-w-[550px] lg:max-w-none lg:w-[115%] lg:h-[115%] transition-transform duration-500 ease-out hover:scale-[1.01] z-10">
            <Image
              src={data.heroImage}
              alt="Expense Tracker Mobile Experience"
              fill
              priority
              className="object-contain lg:object-right-top"
              sizes="(max-width: 1024px) 100vw, 700px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
