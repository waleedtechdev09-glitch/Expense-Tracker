"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqData = [
  {
    question:
      "What makes Smart Expense Tracker different from other expense tracking apps?",
    answer:
      "Smart Expense Tracker combines AI-powered receipt scanning, voice expense entry, offline-first functionality, and intelligent budgeting in one seamless experience.",
  },
  {
    question: "Why should I choose Smart Expense Tracker?",
    answer:
      "It helps you track expenses effortlessly using AI insights, smart categorization, budgeting tools, and detailed financial reports while keeping your data secure.",
  },
  {
    question: "Can I use the app without an internet connection?",
    answer:
      "Yes. You can add and manage your expenses offline. Your data automatically syncs when you're connected to the internet again.",
  },
  {
    question: "How does AI help manage my expenses?",
    answer:
      "AI automatically categorizes your spending, detects recurring expenses, predicts budgets, and provides personalized financial insights.",
  },
  {
    question: "Is my financial data safe?",
    answer:
      "Absolutely. We use end-to-end encryption, secure cloud storage, and industry-standard security practices to keep your financial information protected.",
  },
];

const FAQs = () => {
  const [active, setActive] = useState(0);

  return (
    // px-20 → responsive px-5 sm:px-8 md:px-12 lg:px-20 (mobile pe content ka saans lene ki jagah)
    <section className="md:py-10 lg:py-0 py-0 px-5 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className=" font-manrope text-2xl sm:text-3xl md:text-5xl font-semibold text-white leading-tight">
            Frequently Asked <span className="text-cyan-400">Questions</span>
          </h2>

          <p className="font-lato text-gray-300 mt-4 sm:mt-5 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed px-2 sm:px-0">
            Find answers to your questions right here, and don't hesitate to
            <Link href="/contact-us" className="text-cyan-400 hover:underline">
              Contact us
            </Link>
            if you couldn't find what you're looking for.
          </p>

          <button className="mt-6 sm:mt-8 cursor-pointer inline-flex items-center gap-2 rounded-full bg-[#6C63FF] hover:bg-[#5d54ff] transition px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base text-white font-medium">
            <Link href="/contact-us">
              <span>Contact us</span>
            </Link>
            <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
        </div>

        {/* FAQs */}
        <div className="mt-6 md:mt-3 sm:mt-16">
          {faqData.map((item, index) => {
            const open = active === index;
            const isLast = index === faqData.length - 1;

            return (
              <div
                key={index}
                className={isLast ? "" : "border-b border-white/10"}
              >
                <button
                  onClick={() => setActive(open ? -1 : index)}
                  className="w-full flex items-center justify-between gap-3 sm:gap-5 py-4 sm:py-7 text-left"
                >
                  <h3 className="text-white text-sm sm:text-base md:text-xl font-medium pr-2 sm:pr-5 leading-snug">
                    {index + 1}. {item.question}
                  </h3>

                  <div className="text-white shrink-0">
                    {open ? (
                      <ChevronUp
                        size={18}
                        className="sm:w-[22px] sm:h-[22px]"
                      />
                    ) : (
                      <ChevronDown
                        size={18}
                        className="sm:w-[22px] sm:h-[22px]"
                      />
                    )}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    open ? "grid-rows-[1fr] pb-4 sm:pb-7" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-300 text-[13px] sm:text-sm md:text-lg leading-6 sm:leading-8 max-w-4xl">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
