"use client";

import React from "react";
import Image from "next/image";
import { HERO_DATA, HeroConfig } from "../config/hero";

interface HeroProps {
  data?: HeroConfig;
}

const Hero: React.FC<HeroProps> = ({ data = HERO_DATA }) => {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#081B3A] text-white flex items-center overflow-hidden py-12 md:py-20 px-6 md:px-16 lg:px-24">
      {/* Background Image Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 select-none opacity-40">
        <Image
          src="/assets/bg-image.png"
          alt="Background Texture"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Background global radial glow */}
      <div className="absolute right-[-10%] top-[20%] w-[600px] h-[600px] bg-blue-900/15 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-4 items-center relative z-10">
        {/* Left Side: Content & Stats */}
        <div className="lg:col-span-6 flex flex-col justify-center items-start text-left">
          {/* Title with Manrope Font */}
          <h1 className="font-manrope text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-medium tracking-tight leading-[1.12] mb-6">
            Take Control
            <br />
            <span className="text-white">of </span>
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Every Expense.
            </span>
          </h1>

          {/* Description with Lato Font Family */}
          <p className="font-lato text-[#FFFFFFE5] text-[16px] md:text-[17px] font-normal leading-relaxed max-w-xl mb-10">
            {data.description}
          </p>

          {/* Download Buttons - Custom Crafted, Left-Aligned, and Exact Same Size */}
          <div className="flex flex-row items-center justify-start gap-3 mb-14 w-full">
            {/* Custom Google Play Button */}
            <a
              href={data.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 w-[150px] h-[45px] sm:w-[160px] sm:h-[48px] px-3 bg-black border border-white rounded-lg hover:bg-neutral-900 transition-all duration-200 hover:scale-[1.03] select-none shrink-0"
            >
              {/* Logo Container */}
              <div className="relative w-5 h-5 sm:w-6 sm:h-6 shrink-0">
                <Image
                  src={data.playStoreBadge}
                  alt="Google Play"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[8px] sm:text-[8px] text-white uppercase tracking-wider font-medium">
                  Get it on
                </span>
                <span className="text-[12px] sm:text-[16px] text-white font-medium font-manrope mt-[2px]">
                  Google Play
                </span>
              </div>
            </a>

            {/* Custom App Store Button */}
            <a
              href={data.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 w-[150px] h-[45px] sm:w-[160px] sm:h-[48px] px-3 bg-black border border-white rounded-lg hover:bg-neutral-900 transition-all duration-200 hover:scale-[1.03] select-none shrink-0"
            >
              {/* Logo Container */}
              <div className="relative w-5 h-5 sm:w-6 sm:h-6 shrink-0">
                <Image
                  src={data.appStoreBadge}
                  alt="App Store"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[8px] sm:text-[8px] text-white tracking-wider font-medium">
                  Download on the
                </span>
                <span className="text-[12px] sm:text-[16px] text-white font-medium font-manrope mt-[2px]">
                  App Store
                </span>
              </div>
            </a>
          </div>

          {/* Dynamic Stats Row */}
          <div className="grid grid-cols-3 gap-6 md:gap-34 max-w-lg font-manrope w-full">
            {data.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1 items-start">
                <span className="text-[#FFFFFF] text-[10px] uppercase font-normal tracking-wider">
                  {stat.label}
                </span>
                <span className="text-base md:text-[14px] font-semibold text-[#FFFFFF] whitespace-nowrap">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Aligned to Top with negative margin */}
        <div className="lg:col-span-6 relative w-full h-[400px] sm:h-[500px] md:h-[580px] lg:h-[700px] flex items-start justify-center lg:justify-end lg:-mt-10">
          {/* Custom Linear Gradient Glow - Shifted more right and up */}
          <div
            className="absolute w-[350px] h-[350px] sm:w-[480px] sm:h-[480px] lg:w-[480px] lg:h-[380px] rounded-full blur-[130px] opacity-[0.30] pointer-events-none z-0 right-[-15%] top-[4%] sm:right-[-10%] lg:right-[-22%] lg:top-[15%]"
            style={{
              background: "linear-gradient(135deg, #4FD1FF 0%, #6C63FE 100%)",
            }}
          />

          {/* Foreground Dynamic Mobiles Container */}
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
