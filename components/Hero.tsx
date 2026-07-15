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
    <section className="relative w-full text-white flex items-center pt-10 sm:pt-16 md:pt-20 pb-10 px-5 sm:px-6 md:px-12 lg:px-24 bg-transparent">
      {/* Background global radial glow */}
      <div className="absolute right-[-5%] top-[20%] w-[600px] h-[600px] bg-blue-900/15 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 items-center relative z-10">
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

          {/* Download Buttons */}
          <div className="flex flex-nowrap justify-center sm:justify-start mb-8 items-center gap-2 sm:gap-3">
            {/* Google Play */}
            <Link
              href={data.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
      flex items-center justify-center gap-2
      w-[124px] sm:w-[155px] md:w-[170px]
      h-[44px] sm:h-[48px] md:h-[54px]
      px-2.5 sm:px-3
      bg-black
      border border-white
      rounded-lg
      hover:bg-neutral-900
      transition-all duration-200
      hover:scale-[1.03]
      flex-shrink-0
    "
            >
              <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 shrink-0">
                <Image
                  src={data.playStoreBadge}
                  alt="Google Play"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="leading-none">
                <p className="text-[7px] sm:text-[8px] text-white uppercase tracking-wider">
                  Get it on
                </p>
                <p className="text-[10px] sm:text-[12px] md:text-[16px] font-medium text-white">
                  Google Play
                </p>
              </div>
            </Link>

            {/* App Store */}
            <Link
              href={data.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
      flex items-center justify-center gap-2
      w-[124px] sm:w-[155px] md:w-[170px]
      h-[44px] sm:h-[48px] md:h-[54px]
      px-2.5 sm:px-3
      bg-black
      border border-white
      rounded-lg
      hover:bg-neutral-900
      transition-all duration-200
      hover:scale-[1.03]
      flex-shrink-0
    "
            >
              <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 shrink-0">
                <Image
                  src={data.appStoreBadge}
                  alt="App Store"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="leading-none">
                <p className="text-[7px] sm:text-[8px] text-white tracking-wider">
                  Download on the
                </p>
                <p className="text-[10px] sm:text-[12px] md:text-[16px] font-medium text-white">
                  App Store
                </p>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-5 md:gap-8 w-full">
            {data.stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center sm:items-start text-center sm:text-left"
              >
                <span className="text-[8px] sm:text-[10px] uppercase text-white/70">
                  {stat.label}
                </span>

                <span className="text-[11px] sm:text-base font-bold text-white break-words">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Mocks */}
        <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[420px] md:h-[580px] lg:h-[650px] flex items-start justify-center lg:justify-end">
          <div
            className="absolute w-[350px] h-[350px] sm:w-[480px] sm:h-[480px] lg:w-[480px] lg:h-[380px] rounded-full blur-[130px] opacity-[0.30] pointer-events-none z-0 right-[-5%] top-[4%] sm:right-[-3%] lg:right-[-22%] lg:top-[15%]"
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
