"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Pricing = () => {
  const [yearly, setYearly] = useState(true);

  return (
    <section className="relative overflow-hidden lg:py-0 py-0">
      <div className="relative mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Honest and Thoughtful <span className="text-cyan-400">Pricing</span>
          </h2>

          <p className="mt-4 text-gray-300 text-base md:text-xl">
            Pay only for what you need, with no surprises.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Card */}

          <div className="relative overflow-hidden rounded-3xl bg-white/10 border border-white/10 p-8 pb-0 min-h-[330px] sm:min-h-[370px]">
            <h3 className="text-2xl font-manrope sm:text-3xl font-medium text-white">
              Try Smart Expense Tracker For{" "}
              <span className="text-cyan-400">Free</span>
            </h3>

            <p className="mt-4 max-w-lg font-lato text-gray-300 leading-7 text-sm sm:text-base">
              Discover a smarter way to manage your money. Track expenses, set
              budgets, explore AI-powered features with a free trial.
            </p>

            <button className="mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-[#6C63FF] px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white transition hover:bg-[#5b54ff]">
              Get Started
              <ArrowRight size={18} />
            </button>

            {/* Mobile Preview Image — bottom-left se card ke bahar bleed karti hui,
                jaisa screenshot mein hai. Card ka overflow-hidden isay neeche se crop kar deta hai */}
            <div
              className="absolute lg:-mt-36 left-4 sm:left-6 md:left-8
                w-[200px] h-[230px] sm:w-[260px] sm:h-[300px] md:w-[300px] md:h-[345px] lg:w-[320px] lg:h-[368px]
                pointer-events-none select-none"
            >
              <Image
                src="/assets/pricing-phone.png"
                alt="Smart Expense Tracker Pro Settings Preview"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* Right Card */}
          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 flex flex-col items-center justify-center text-center">
            <h2 className="text-5xl font-manrope sm:text-5xl font-medium text-white">
              ${yearly ? "49.99" : "5.99"}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-300">
              Billed {yearly ? "annually" : "monthly"}{" "}
              <span className="text-cyan-400">(Save 17%)</span>
            </p>

            {/* Toggle */}
            <div className="mt-8 sm:mt-10 flex items-center gap-4 sm:gap-5">
              <span className={`${!yearly ? "text-white" : "text-gray-400"}`}>
                Monthly
              </span>

              <button
                onClick={() => setYearly(!yearly)}
                className={`relative h-9 w-16 rounded-full transition ${
                  yearly ? "bg-[#111D42]" : "bg-[#6C63FF]"
                }`}
              >
                <span
                  className={`absolute top-1 h-7 w-7 rounded-full bg-cyan-400 transition-all ${
                    yearly ? "right-1" : "left-1"
                  }`}
                />
              </button>

              <span className={`${yearly ? "text-white" : "text-gray-400"}`}>
                Yearly
              </span>
            </div>

            <h4 className="mt-10 sm:mt-12 text-xl manrope sm:text-xl font-medium text-[#9DB5E0]">
              No ads. No hidden fees.
            </h4>

            <p className="mt-3 max-w-md font-lato text-sm sm:text-base text-[#9DB5E0] leading-7 sm:leading-8">
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
