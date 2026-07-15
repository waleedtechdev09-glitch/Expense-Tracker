"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

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
    <section className="py-20 px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Frequently Asked <span className="text-cyan-400">Questions</span>
          </h2>

          <p className="text-gray-300 mt-5 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
            Find answers to your questions right here, and don't hesitate to
            Contact us if you couldn't find what you're looking for.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#6C63FF] hover:bg-[#5d54ff] transition px-8 py-3 text-white font-medium">
            Contact us
            <ArrowRight size={18} />
          </button>
        </div>

        {/* FAQs */}
        <div className="mt-16">
          {faqData.map((item, index) => {
            const open = active === index;

            return (
              <div key={index} className="border-b border-white/10">
                <button
                  onClick={() => setActive(open ? -1 : index)}
                  className="w-full flex items-center justify-between gap-5 py-7 text-left"
                >
                  <h3 className="text-white text-base md:text-xl font-medium pr-5">
                    {index + 1}. {item.question}
                  </h3>

                  <div className="text-white shrink-0">
                    {open ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    open ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-300 text-sm md:text-lg leading-8 max-w-4xl">
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
