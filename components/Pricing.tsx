"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Pricing = () => {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative overflow-visible py-16 lg:py-4 ">
      {/* 
        Highlighted Fluid Background Image 
        Positioned absolutely relative to the section, keeping it BEHIND the cards (z-0)
      */}
      <div
        className=" hidden lg:block absolute left-[-5%] bottom-[-10%] sm:left-[-2%] sm:bottom-[-8%] md:left-[2%] md:bottom-[-5%] lg:-left-[10%] lg:bottom-[-40%]
          w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[500px] lg:h-[500px]
          pointer-events-none select-none z-0 opacity-90"
      >
        <Image
          src="/assets/pricing.png" // Reuses the iridescent fluid asset
          alt="Abstract decorative fluid background"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-medium text-white font-manrope">
            Honest and Thoughtful <span className="text-cyan-400">Pricing</span>
          </h2>

          <p className="mt-4 text-gray-300 text-base md:text-xl font-lato">
            Pay only for what you need, with no surprises.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-2 items-stretch">
          {/* Left Card */}
          <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 pb-0 min-h-[480px] sm:min-h-[520px] md:min-h-[460px] flex flex-col justify-between z-10 backdrop-blur-sm">
            <div>
              <h3 className="text-2xl font-manrope sm:text-3xl font-medium text-white">
                Try Smart Expense Tracker For{" "}
                <span className="text-cyan-400 font-semibold">Free</span>
              </h3>

              <p className="mt-4 max-w-lg font-lato text-gray-300 leading-relaxed text-sm sm:text-base">
                Discover a smarter way to manage your money. Track expenses, set
                budgets, explore AI-powered features with a free trial.
              </p>

              <button className="mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-[#6C63FF] px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white transition hover:bg-[#5b54ff]">
                Get Started
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Mobile Preview Image — clipped perfectly by the card's rounded bottom border */}
            <div className="relative w-[240px] h-[180px] sm:w-[300px] sm:h-[220px] md:w-[340px] md:h-[250px]  shrink-0">
              <Image
                src="/assets/pricing-phone.png"
                alt="Smart Expense Tracker Pro Settings Preview"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* Right Card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col items-center justify-center text-center z-10 backdrop-blur-sm">
            <h2 className="text-5xl font-manrope sm:text-6xl font-semibold text-white">
              ${yearly ? "49.99" : "5.99"}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-300 font-lato">
              Billed {yearly ? "annually" : "monthly"}{" "}
              <span className="text-cyan-400 font-semibold">(Save 17%)</span>
            </p>

            {/* Toggle */}
            <div className="mt-8 sm:mt-10 flex items-center gap-4 sm:gap-5">
              <span
                className={`font-medium ${!yearly ? "text-white" : "text-gray-400"}`}
              >
                Monthly
              </span>

              <button
                onClick={() => setYearly(!yearly)}
                className={`relative h-9 w-16 rounded-full transition duration-250 ease-in-out ${
                  yearly ? "bg-[#111D42]" : "bg-[#6C63FF]"
                }`}
              >
                <span
                  className={`absolute top-1 h-7 w-7 rounded-full bg-cyan-400 transition-all duration-250 ease-in-out ${
                    yearly ? "left-8" : "left-1"
                  }`}
                />
              </button>

              <span
                className={`font-medium ${yearly ? "text-white" : "text-gray-400"}`}
              >
                Yearly
              </span>
            </div>

            <h4 className="mt-10 sm:mt-12 text-xl font-manrope font-medium text-[#9DB5E0]">
              No ads. No hidden fees.
            </h4>

            <p className="mt-3 max-w-md font-lato text-sm sm:text-base text-[#9DB5E0] leading-relaxed">
              Enjoy a distraction-free experience with full access to AI-powered
              expense tracking, smart budgeting, cloud sync, premium analytics,
              and intelligent insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
