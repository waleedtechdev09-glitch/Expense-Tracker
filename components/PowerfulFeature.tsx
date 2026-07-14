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
      className="relative w-full min-h-screen text-white pb-16 md:pb-24 pt-8 md:pt-12 px-6 md:px-16 lg:px-24 bg-transparent font-sans"
    >
      {/* 3D Sphere Orb Asset */}
      <div className="absolute left-[-175px] sm:left-[-120px] lg:left-[-160px] -top-[4%] sm:-top-[15%] md:-top-[8%] md:left-[-30%] lg:-top-[15%] w-[240px] h-[240px] sm:w-[380px] sm:h-[380px] lg:w-[500px] lg:h-[500px] pointer-events-none z-20 select-none opacity-90">
        <Image
          src="/assets/3d-shape.png"
          alt="Decorative 3D Sphere"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20">
          <h2 className="font-manrope text-3xl font-manrope sm:text-4xl md:text-4xl font-semibold tracking-tight mb-3 leading-tight">
            Powerful{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
              Features
            </span>
            . Intuitive Experience.
          </h2>
          <p className="font-lato text-slate-300 text-[15px] sm:text-[17px] font-normal leading-relaxed max-w-2xl mx-auto">
            Explore every feature designed to simplify your financial life—from
            tracking daily expenses to AI-powered automation.
          </p>
        </div>

        {/* Features Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-fit lg:min-h-[650px] relative">
          {/* LEFT SIDE FEATURES */}
          {/* Mobile par gap ko kam (gap-8) rakha hai, desktop par full height aur justify-between space activate hogi */}
          <div className="lg:col-span-4 flex flex-col gap-8 lg:gap-0 lg:justify-between lg:h-[90%] lg:py-4 order-2 lg:order-1 lg:text-right lg:items-end">
            {FEATURES_DATA.filter((item) => item.side === "left").map(
              (feat) => (
                <div
                  key={feat.id}
                  className="flex flex-col items-start lg:items-end group relative z-30 max-w-sm"
                >
                  <h3 className="text-[#22D3EE] font-manrope text-lg lg:text-xl font-semibold mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-slate-300 font-lato text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ),
            )}
          </div>

          {/* CENTER MOBILE MOCKUP + THE PERFECTED SVG LINES */}
          <div className="lg:col-span-4 flex justify-center relative order-1 lg:order-2 my-4 lg:my-0">
            {/* SVG Connector Lines - Desktop Only */}
            <div className="hidden lg:block absolute inset-0 -mx-16 w-[calc(100%+128px)] h-full pointer-events-none z-0">
              <svg
                className="w-full h-full"
                viewBox="0 0 520 630"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* --- LEFT SIDE CONNECTOR LINES --- */}

                {/* 1. Total Balance Pointer (Top Left) */}
                <path d="M 60 75 L 60 135" stroke="#22D3EE" strokeWidth="1.5" />
                <circle
                  cx="60"
                  cy="75"
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
                  d="M 60 105 L 120 105"
                  stroke="#22D3EE"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* 2. Transaction History Pointer (Middle Left) */}
                <path
                  d="M 60 255 L 60 315"
                  stroke="#22D3EE"
                  strokeWidth="1.5"
                />
                <circle
                  cx="60"
                  cy="255"
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
                  d="M 60 285 L 120 285"
                  stroke="#22D3EE"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* 3. Voice Expense Entry Pointer (Bottom Left) */}
                <path
                  d="M 60 435 L 60 495"
                  stroke="#22D3EE"
                  strokeWidth="1.5"
                />
                <circle
                  cx="60"
                  cy="435"
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
                  d="M 60 465 L 120 465"
                  stroke="#22D3EE"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* --- RIGHT SIDE CONNECTOR LINES --- */}

                {/* 4. Smart Budget Tracking Pointer (Top Right) */}
                <path
                  d="M 460 160 L 460 220"
                  stroke="#22D3EE"
                  strokeWidth="1.5"
                />
                <circle
                  cx="460"
                  cy="160"
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
                  d="M 460 190 L 400 190"
                  stroke="#22D3EE"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* 5. Scan Receipts with AI Pointer (Bottom Right) */}
                <path
                  d="M 460 380 L 460 440"
                  stroke="#22D3EE"
                  strokeWidth="1.5"
                />
                <circle
                  cx="460"
                  cy="380"
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
                  d="M 460 410 L 400 410"
                  stroke="#22D3EE"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>

            {/* Mobile Device Mockup Frame */}
            <div className="relative w-[260px] h-[530px] sm:w-[310px] sm:h-[630px] transition-transform duration-500 ease-out hover:scale-[1.01] z-10">
              <Image
                src="/assets/phone.png"
                alt="Expense Tracker App UI"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 260px, 310px"
              />
            </div>
          </div>

          {/* RIGHT SIDE FEATURES */}
          {/* Mobile par elements tight clean display honge, desktop par matching height space dynamic ho jayegi */}
          <div className="lg:col-span-4 flex flex-col gap-8 lg:gap-0 lg:justify-around lg:h-[65%] lg:py-4 order-3 lg:items-start text-left">
            {FEATURES_DATA.filter((item) => item.side === "right").map(
              (feat) => (
                <div
                  key={feat.id}
                  className="flex flex-col items-start group relative z-30 max-w-sm"
                >
                  <h3 className="text-[#22D3EE] font-manrope text-lg lg:text-xl font-semibold mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-slate-300 font-lato text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Bottom CTA Buttons Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 md:mt-20 w-full relative z-30">
          <button className="flex items-center justify-center gap-2 px-8 h-12 rounded-full bg-white text-[#081B3A] text-sm font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto">
            <span>Download App</span>
            <Download size={15} strokeWidth={2.5} />
          </button>

          <button className="flex items-center justify-center gap-2 px-8 h-12 rounded-full bg-[#6C63FF] text-white text-sm font-semibold hover:bg-[#5B54E8] transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto">
            <span>Watch Demo</span>
            <Play size={13} fill="currentColor" strokeWidth={0} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PowerfulFeature;
