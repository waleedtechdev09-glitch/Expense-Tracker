"use client";

import React from "react";
import Image from "next/image";
import { Download, Play } from "lucide-react";

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  side: "left" | "right";
}

const FEATURES_DATA: FeatureItem[] = [
  {
    id: "total-balance",
    title: "Total Balance",
    description:
      "Shows your complete financial overview, including available balance, total income, and total expenses in one place.",
    side: "left",
  },
  {
    id: "transaction-history",
    title: "Transaction History",
    description:
      "View your latest expenses, income, and transfers in one organized timeline. Search, review, and stay updated on every financial activity.",
    side: "left",
  },
  {
    id: "voice-entry",
    title: "Voice Expense Entry",
    description:
      'Simply say: "Spent Rs. 500 on groceries today." The app understands your voice, extracts the details, and prepares the expense for quick confirmation.',
    side: "left",
  },
  {
    id: "smart-budget",
    title: "Smart Budget Tracking",
    description:
      "Monitor your weekly and monthly budgets in real time. Keep spending under control with clear progress tracking and timely reminders.",
    side: "right",
  },
  {
    id: "scan-receipts",
    title: "Scan Receipts with AI",
    description:
      "Capture any paper receipt using your camera. AI automatically extracts the merchant, amount, date, and category to create an expense entry in seconds.",
    side: "right",
  },
];

const PowerfulFeature = () => {
  return (
    <section
      id="features"
      className="relative w-full min-h-screen text-white pb-16 md:pb-10 pt-0 md:pt-8 px-6 md:px-16 lg:px-24"
    >
      {/* 3D Sphere Orb Asset */}
      <div className="hidden lg:block absolute left-[-40px] sm:left-[-30px] lg:left-[-180px] -top-[8%] sm:-top-[15%] md:-top-[10%] md:left-[-10%] lg:-top-[14%] xl:-top-[20%] w-[240px] h-[240px] sm:w-[380px] sm:h-[380px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] pointer-events-none z-20">
        {/* Radial Glow */}
        <div
          className="
      absolute
      inset-0
      scale-[1.4]
      rounded-full
      bg-[radial-gradient(circle_at_center,rgba(98,184,255,0.35)_0%,rgba(66,133,244,0.25)_30%,rgba(21,52,108,0.12)_60%,transparent_100%)]
      blur-[60px]
      -z-10
    "
        />

        {/* 3D Shape */}
        <Image
          src="/assets/3d-shape.png"
          alt="3D Shape"
          fill
          priority
          className="object-contain relative z-10"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 mt-8 md:mt-0 lg:mt-0 xl:mt-0">
        {/* Header Section - Left aligned on mobile, center on larger screens */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-0 md:mb-2 lg:mb-8 xl:mb-8">
          <h2 className="font-manrope text-4xl sm:text-4xl md:text-4xl font-extra-bold tracking-tight mb-3 leading-tight">
            Powerful{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
              Features
            </span>
            . Intuitive Experience.
          </h2>
          <p className="font-lato text-slate-300 text-[15px] sm:text-[17px] font-normal leading-relaxed max-w-2xl mx-auto md:text-center">
            Explore every feature designed to simplify your financial life—from
            tracking daily expenses to AI-powered automation.
          </p>
        </div>

        {/* Features Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 lg:gap-4 items-center min-h-fit md:min-h-[520px] lg:min-h-[650px] relative">
          {/* LEFT SIDE FEATURES */}
          <div className="md:col-span-4 flex flex-col gap-8 md:gap-0 md:justify-between md:h-[85%] lg:h-[90%] md:py-3 lg:py-4 order-2 md:order-1 md:text-right md:items-end">
            {FEATURES_DATA.filter((item) => item.side === "left").map(
              (feat) => (
                <div
                  key={feat.id}
                  className="flex flex-col items-start md:items-end group relative z-30 max-w-sm"
                >
                  <h3 className="text-[#22D3EE] font-manrope text-lg md:text-base lg:text-lg xl:text-xl font-semibold mb-1 group-hover:text-cyan-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-slate-300 font-lato text-sm md:text-xs lg:text-xs xl:text-sm leading-snug">
                    {feat.description}
                  </p>
                </div>
              ),
            )}
          </div>

          {/* CENTER MOBILE MOCKUP + RESPONSIVE SVG LINES */}
          <div className="md:col-span-4 flex justify-center relative order-1 md:order-2 md:my-0">
            {/* SVG Connector Lines - Tablet & Desktop */}
            <div className="hidden md:block absolute inset-0 -mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 w-[calc(100%+48px)] md:w-[calc(100%+64px)] lg:w-[calc(100%+96px)] xl:w-[calc(100%+128px)] h-full pointer-events-none z-0">
              <svg
                className="w-full h-full"
                viewBox="0 0 520 630"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* --- LEFT SIDE CONNECTOR LINES --- */}

                {/* 1. Total Balance Pointer (Top Left) - Extended upward */}
                <path d="M 60 45 L 60 135" stroke="#22D3EE" strokeWidth="1.5" />
                <circle
                  cx="60"
                  cy="45"
                  r="3.5"
                  fill="#020813"
                  stroke="#22D3EE"
                  strokeWidth="2"
                />
                <circle
                  cx="60"
                  cy="135"
                  r="3.5"
                  fill="#020813"
                  stroke="#22D3EE"
                  strokeWidth="2"
                />
                <path
                  d="M 60 90 L 120 90"
                  stroke="#22D3EE"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* 2. Transaction History Pointer (Middle Left) - Extended upward */}
                <path
                  d="M 60 225 L 60 315"
                  stroke="#22D3EE"
                  strokeWidth="1.5"
                />
                <circle
                  cx="60"
                  cy="225"
                  r="3.5"
                  fill="#020813"
                  stroke="#22D3EE"
                  strokeWidth="2"
                />
                <circle
                  cx="60"
                  cy="315"
                  r="3.5"
                  fill="#020813"
                  stroke="#22D3EE"
                  strokeWidth="2"
                />
                <path
                  d="M 60 270 L 120 270"
                  stroke="#22D3EE"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* 3. Voice Expense Entry Pointer (Bottom Left) - Extended upward */}
                <path
                  d="M 60 405 L 60 495"
                  stroke="#22D3EE"
                  strokeWidth="1.5"
                />
                <circle
                  cx="60"
                  cy="405"
                  r="3.5"
                  fill="#020813"
                  stroke="#22D3EE"
                  strokeWidth="2"
                />
                <circle
                  cx="60"
                  cy="495"
                  r="3.5"
                  fill="#020813"
                  stroke="#22D3EE"
                  strokeWidth="2"
                />
                <path
                  d="M 60 450 L 120 450"
                  stroke="#22D3EE"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* --- RIGHT SIDE CONNECTOR LINES --- */}

                {/* 4. Smart Budget Tracking Pointer (Top Right) - Extended upward */}
                <path
                  d="M 460 130 L 460 220"
                  stroke="#22D3EE"
                  strokeWidth="1.5"
                />
                <circle
                  cx="460"
                  cy="130"
                  r="3.5"
                  fill="#020813"
                  stroke="#22D3EE"
                  strokeWidth="2"
                />
                <circle
                  cx="460"
                  cy="220"
                  r="3.5"
                  fill="#020813"
                  stroke="#22D3EE"
                  strokeWidth="2"
                />
                <path
                  d="M 460 175 L 400 175"
                  stroke="#22D3EE"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* 5. Scan Receipts with AI Pointer (Bottom Right) - Extended upward */}
                <path
                  d="M 460 350 L 460 440"
                  stroke="#22D3EE"
                  strokeWidth="1.5"
                />
                <circle
                  cx="460"
                  cy="350"
                  r="3.5"
                  fill="#020813"
                  stroke="#22D3EE"
                  strokeWidth="2"
                />
                <circle
                  cx="460"
                  cy="440"
                  r="3.5"
                  fill="#020813"
                  stroke="#22D3EE"
                  strokeWidth="2"
                />
                <path
                  d="M 460 395 L 400 395"
                  stroke="#22D3EE"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>

            {/* Mobile Device Mockup Frame */}
            <div className="relative w-[200px] h-[410px] md:w-[190px] md:h-[390px] lg:w-[260px] lg:h-[530px] xl:w-[310px] xl:h-[630px] transition-transform duration-500 ease-out hover:scale-[1.01] z-10 hidden md:flex">
              <Image
                src="/assets/phone.png"
                alt="Expense Tracker App UI"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 190px, (max-width: 1280px) 260px, 310px"
              />
            </div>
          </div>

          {/* RIGHT SIDE FEATURES */}
          <div className="md:col-span-4 flex flex-col gap-8 md:gap-0 md:justify-around md:h-[65%] md:py-3 lg:py-4 order-3 md:items-start text-left">
            {FEATURES_DATA.filter((item) => item.side === "right").map(
              (feat) => (
                <div
                  key={feat.id}
                  className="flex flex-col items-start group relative z-30 max-w-sm"
                >
                  <h3 className="text-[#22D3EE] xl:-mt-8 font-manrope text-lg md:text-base lg:text-base xl:text-xl font-semibold mb-1 group-hover:text-cyan-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-slate-300 font-lato text-sm md:text-xs lg:text-xs xl:text-sm leading-snug">
                    {feat.description}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Bottom CTA Buttons Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-10 w-full relative z-30">
          <button className="flex items-center justify-center gap-2 px-8 h-12 rounded-full cursor-pointer bg-white text-[#081B3A] text-sm font-medium font-lato hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto">
            <span>Download App</span>
            <Download size={15} strokeWidth={2.5} />
          </button>

          <button className="flex items-center justify-center gap-2 px-8 h-12 rounded-full bg-[#6C63FF] cursor-pointer text-white text-sm font-medium font-lato hover:bg-[#5B54E8] transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto">
            <span>Watch Demo</span>
            <Play size={13} fill="currentColor" strokeWidth={0} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PowerfulFeature;
