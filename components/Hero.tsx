"use client";

import React from "react";
import Image from "next/image";
import { HERO_DATA, HeroConfig } from "../config/hero";

interface HeroProps {
  data?: HeroConfig;
}

const Hero: React.FC<HeroProps> = ({ data = HERO_DATA }) => {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#020813] text-white flex items-center overflow-hidden py-12 md:py-20 px-6 md:px-16 lg:px-24">
      {/* Background global radial glow */}
      <div className="absolute right-[-10%] top-[20%] w-[600px] h-[600px] bg-blue-900/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-4 items-center relative z-10">
        {/* Left Side: Content & Stats */}
        <div className="lg:col-span-6 flex flex-col justify-center">
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

          {/* Download Buttons - Perfect Big Size & Small Gap */}
          <div className="flex flex-row items-center justify-start gap-1 mb-14 w-full max-w-md">
            {/* Google Play Button */}
            <a
              href={data.playStoreUrl}
              target="_blank"
               rel="noopener noreferrer"
               className="relative w-[180px] h-[54px] sm:w-[210px] sm:h-[62px] md:w-[240px] md:h-[72px] transition-transform duration-200 hover:scale-[1.03] block shrink-0"
             >
               <Image
                 src={data.playStoreBadge}
                alt="Get it on Google Play"
                fill
                className="object-contain object-left"
                sizes="(max-width: 768px) 150px, 180px"
                priority
              />
            </a>

            {/* App Store Button */}
            <a
              href={data.appStoreUrl}
              target="_blank"
               rel="noopener noreferrer"
               className="relative w-[180px] h-[54px] sm:w-[210px] sm:h-[62px] md:w-[240px] md:h-[72px] transition-transform duration-200 hover:scale-[1.03] block shrink-0"
             >
               <Image
                 src={data.appStoreBadge}
                alt="Download on the App Store"
                fill
                className="object-contain object-left"
                sizes="(max-width: 768px) 150px, 180px"
                priority
              />
            </a>
          </div>

          {/* Dynamic Stats Row */}
          <div className="grid grid-cols-3 gap-30 max-w-lg font-manrope">
            {data.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className=" text-[#FFFFFF] text-[10px] uppercase font-normal tracking-wider">
                  {stat.label}
                </span>
                <span className="text-base md:text-[14px] font-semibold text-[#FFFFFF]">
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
            className="absolute w-[350px] h-[350px] sm:w-[480px] sm:h-[480px] lg:w-[480px] lg:h-[380px] rounded-full blur-[130px] opacity-[0.55] pointer-events-none z-0 right-[-15%] top-[4%] sm:right-[-10%] lg:right-[-22%] lg:top-[3%]"
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
