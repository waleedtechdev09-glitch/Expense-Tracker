"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const Pricing = () => {
  const [yearly, setYearly] = useState(true);

  return (
    <section className="relative overflow-hidden  lg:py-10 py-0 ">
      {/* Decorative Blur */}
      {/* <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 blur-3xl opacity-70"></div> */}

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
          <div className="relative overflow-hidden rounded-3xl bg-white/10 border border-white/10 p-8">
            <h3 className="text-3xl font-semibold text-white">
              Try Smart Expense Tracker For{" "}
              <span className="text-cyan-400">Free</span>
            </h3>

            <p className="mt-4 max-w-lg text-gray-300 leading-7">
              Discover a smarter way to manage your money. Track expenses, set
              budgets, explore AI-powered features with a free trial.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#6C63FF] px-8 py-3 font-medium text-white transition hover:bg-[#5b54ff]">
              Get Started
              <ArrowRight size={18} />
            </button>

            {/* Mobile Preview */}
            <div className="mt-10 w-full max-w-sm rounded-3xl bg-[#e8e8ea] p-3 shadow-2xl">
              <div className="rounded-2xl bg-white p-5">
                <div className="mb-5 text-center text-sm font-medium text-gray-700">
                  Settings
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-300"></div>

                  <div>
                    <h4 className="font-medium text-gray-800">John Doe</h4>

                    <p className="text-xs text-gray-500">johndoe12@gmail.com</p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-[#101827] p-5 text-white">
                  <h4 className="font-semibold">Smart Expense Tracker Pro</h4>

                  <p className="mt-2 text-xs text-gray-400">
                    Unlock AI insights, budgeting, unlimited analytics, premium
                    sync and cloud backup.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 flex flex-col items-center justify-center text-center">
            <h2 className="text-6xl font-bold text-white">
              ${yearly ? "49.99" : "5.99"}
            </h2>

            <p className="mt-4 text-lg text-gray-300">
              Billed {yearly ? "annually" : "monthly"}{" "}
              <span className="text-cyan-400">(Save 17%)</span>
            </p>

            {/* Toggle */}
            <div className="mt-10 flex items-center gap-5">
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

            <h4 className="mt-12 text-2xl font-medium text-white">
              No ads. No hidden fees.
            </h4>

            <p className="mt-5 max-w-md text-gray-300 leading-8">
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
