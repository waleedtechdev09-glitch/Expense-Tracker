"use client";

import React from "react";

const STATS_DATA = [
  {
    id: "transactions",
    value: "25K+",
    label: "Transactions Logged",
  },
  {
    id: "accuracy",
    value: "99.9%",
    label: "Sync Accuracy",
  },
  {
    id: "rating",
    value: "4.9★",
    label: "App Rating",
  },
  {
    id: "offline",
    value: "Offline",
    label: "Works Anywhere",
  },
];

const Rating = () => {
  return (
    <section className="w-full bg-transparent py-10 px-6 sm:px-16 lg:px-24 flex justify-center items-center">
      <div className="relative w-full max-w-7xl overflow-hidden rounded-2xl md:rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#132C55] via-[#132C55] to-[#132C55] p-6 md:p-10 lg:py-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 items-center text-center">
          {STATS_DATA.map((stat, index) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center justify-center px-4 relative ${
                // Mobile dynamic borders: Right border for odd items on small screens
                index % 2 === 0
                  ? "border-r border-white/[0.08] md:border-r-0"
                  : ""
              } ${
                // Desktop dynamic borders: Add left border starting from second column
                index > 0 ? "md:border-l md:border-white/[0.08]" : ""
              }`}
            >
              <h3 className="font-manrope text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
                {stat.value}
              </h3>
              <p className="font-lato text-xs sm:text-sm text-slate-300 font-light tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rating;
