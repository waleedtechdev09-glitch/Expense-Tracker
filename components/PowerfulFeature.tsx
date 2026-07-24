"use client";

import React from "react";
import Image from "next/image";
import { Download, Play } from "lucide-react";

// ==================== LEFT SIDE FEATURES ====================
const LEFT_FEATURE_1_HEADING = "Total Balance";
const LEFT_FEATURE_1_DESCRIPTION =
  "Shows your complete financial overview, including available balance, total income, and total expenses in one place.";

const LEFT_FEATURE_2_HEADING = "Transaction History";
const LEFT_FEATURE_2_DESCRIPTION =
  "View your latest expenses, income, and transfers in one organized timeline. Search, review, and stay updated on every financial activity.";

const LEFT_FEATURE_3_HEADING = "Voice Expense Entry";
const LEFT_FEATURE_3_DESCRIPTION =
  'Simply say: "Spent Rs. 500 on groceries today." The app understands your voice, extracts the details, and prepares the expense for quick confirmation.';

// ==================== RIGHT SIDE FEATURES ====================
const RIGHT_FEATURE_1_HEADING = "Smart Budget Tracking";
const RIGHT_FEATURE_1_DESCRIPTION =
  "Monitor your weekly and monthly budgets in real time. Keep spending under control with clear progress tracking and timely reminders.";

const RIGHT_FEATURE_2_HEADING = "Scan Receipts with AI";
const RIGHT_FEATURE_2_DESCRIPTION =
  "Capture any paper receipt using your camera. AI automatically extracts the merchant, amount, date, and category to create an expense entry in seconds.";

const PowerfulFeature = () => {
  return (
    <section
      id="features"
      className="relative w-full min-h-screen text-white pb-16 md:pb-10 pt-0 md:pt-8 px-6 md:px-16 lg:px-24"
    >
      {/* 3D Sphere Orb Asset */}
      <div className="hidden lg:block absolute left-[-40px] sm:left-[-30px] lg:left-[-180px] -top-[8%] sm:-top-[15%] md:-top-[10%] md:left-[-10%] lg:-top-[14%] xl:-top-[20%] w-[240px] h-[240px] sm:w-[380px] sm:h-[380px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] pointer-events-none z-20">
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
        <Image
          src="/assets/3d-shape.png"
          alt="3D Shape"
          fill
          priority
          className="object-contain relative z-10"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 mt-8 md:mt-0 lg:mt-0 xl:mt-0">
        {/* Header Section */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-8 md:mb-2 lg:mb-8 xl:mb-8">
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4 lg:gap-4 items-center min-h-fit md:min-h-[520px] lg:min-h-[650px] relative">
          {/* ==================== LEFT SIDE FEATURES ==================== */}
          <div className="md:col-span-4 pr-0 md:pr-6 lg:pr-10 relative order-2 md:order-1 flex flex-col gap-8 md:gap-0 md:text-right md:items-end min-h-0 md:min-h-[500px] lg:min-h-[600px]">
            {/* ===== LEFT FEATURE 1 - Total Balance (Top) ===== */}
            <div className="md:absolute xl:mt-7 lg:mt-25 md:mt-26 md:top-0 md:right-0 flex flex-col items-start md:items-end z-30 w-full">
              <h3 className="text-[#22D3EE] font-manrope text-lg md:text-sm lg:text-base xl:text-xl font-semibold mb-1 md:max-w-[280px] lg:max-w-[340px] text-left md:text-right">
                {LEFT_FEATURE_1_HEADING}
              </h3>
              <p className="text-slate-300 font-lato text-sm md:text-xs lg:text-xs xl:text-sm leading-snug md:max-w-[280px] lg:max-w-[340px] text-left md:text-right">
                {LEFT_FEATURE_1_DESCRIPTION}
              </p>
            </div>

            {/* ===== LEFT FEATURE 2 - Transaction History (Middle) ===== */}
            <div className="md:absolute xl:-mt-12 lg:-mt-8 md:-mt-1 md:top-1/2 md:right-0 md:-translate-y-1/2 flex flex-col items-start md:items-end z-30 w-full">
              <h3 className="text-[#22D3EE] font-manrope text-lg md:text-sm lg:text-base xl:text-xl font-semibold mb-1 md:max-w-[280px] lg:max-w-[340px] text-left md:text-right">
                {LEFT_FEATURE_2_HEADING}
              </h3>
              <p className="text-slate-300 font-lato text-sm md:text-xs lg:text-xs xl:text-sm leading-snug md:max-w-[280px] lg:max-w-[340px] text-left md:text-right">
                {LEFT_FEATURE_2_DESCRIPTION}
              </p>
            </div>

            {/* ===== LEFT FEATURE 3 - Voice Expense Entry (Bottom) ===== */}
            <div className="md:absolute xl:mb-31 lg:mb-38 md:mb-24 md:bottom-0 md:right-0 flex flex-col items-start md:items-end z-30 w-full">
              <h3 className="text-[#22D3EE] font-manrope text-lg md:text-sm lg:text-base xl:text-xl font-semibold mb-1 md:max-w-[280px] lg:max-w-[340px] text-left md:text-right">
                {LEFT_FEATURE_3_HEADING}
              </h3>
              <p className="text-slate-300 font-lato text-sm md:text-xs lg:text-xs xl:text-sm leading-snug md:max-w-[280px] lg:max-w-[340px] text-left md:text-right">
                {LEFT_FEATURE_3_DESCRIPTION}
              </p>
            </div>
          </div>

          {/* ==================== CENTER MOBILE MOCKUP (desktop/tablet only) ==================== */}
          <div className="hidden md:col-span-4 md:flex justify-center relative order-1 md:order-2 md:my-0">
            {/* SVG Connector Lines */}
            <div className="hidden md:block absolute inset-0 -mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 w-[calc(100%+48px)] md:w-[calc(100%+64px)] lg:w-[calc(100%+96px)] xl:w-[calc(100%+128px)] h-full pointer-events-none z-0">
              <svg
                className="w-full h-full"
                viewBox="0 0 520 630"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
              >
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
            <div className="relative w-[190px] h-[390px] lg:w-[260px] lg:h-[530px] xl:w-[310px] xl:h-[630px] transition-transform duration-500 ease-out hover:scale-[1.01] z-10 flex">
              <Image
                src="/assets/phone.png"
                alt="Expense Tracker App UI"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 190px, (max-width: 1280px) 260px, 310px"
              />
            </div>
          </div>

          {/* ==================== RIGHT SIDE FEATURES (INDEPENDENT) ==================== */}
          <div className="md:col-span-4 relative order-3 flex flex-col gap-8 md:gap-0 min-h-0 md:min-h-[500px] lg:min-h-[600px]">
            {/* ===== RIGHT FEATURE 1 - Smart Budget Tracking (Top) ===== */}
            <div className="md:absolute xl:mt-28 lg:mt-41 md:mt-38 md:top-0 md:left-0 flex flex-col items-start z-30 w-full">
              <h3 className="text-[#22D3EE] font-manrope text-lg md:text-sm lg:text-sm xl:text-xl font-semibold mb-1 md:max-w-[280px] lg:max-w-[340px] text-left">
                {RIGHT_FEATURE_1_HEADING}
              </h3>
              <p className="text-slate-300 font-lato text-sm md:text-xs lg:text-xs xl:text-sm leading-snug md:max-w-[280px] lg:max-w-[340px] text-left">
                {RIGHT_FEATURE_1_DESCRIPTION}
              </p>
            </div>

            {/* ===== RIGHT FEATURE 2 - Scan Receipts with AI (Middle) ===== */}
            <div className="md:absolute xl:mt-19 lg:mt-16 md:mt-17 md:top-1/2 md:left-0 md:-translate-y-1/2 flex flex-col items-start z-30 w-full">
              <h3 className="text-[#22D3EE] font-manrope text-lg md:text-sm lg:text-sm xl:text-xl font-semibold mb-1 md:max-w-[280px] lg:max-w-[340px] text-left">
                {RIGHT_FEATURE_2_HEADING}
              </h3>
              <p className="text-slate-300 font-lato text-sm md:text-xs lg:text-xs xl:text-sm leading-snug md:max-w-[280px] lg:max-w-[340px] text-left">
                {RIGHT_FEATURE_2_DESCRIPTION}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Buttons Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4 mt-8 md:mt-10 w-full relative z-30">
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
