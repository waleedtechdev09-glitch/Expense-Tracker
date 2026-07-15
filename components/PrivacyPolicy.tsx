"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  {
    id: "information",
    title: "Information We Collect",
    content: (
      <>
        <h3 className="text-cyan-400 text-xl font-semibold mb-2">
          Account Information
        </h3>

        <p className="text-gray-300 mb-3">
          When you create an account, we collect your full name and email
          address. Authentication credentials are managed through:
        </p>

        <ul className="list-disc ml-6 text-gray-300 space-y-1">
          <li>Email and password</li>
          <li>Google Sign-In</li>
          <li>Sign in with Apple</li>
        </ul>

        <p className="text-gray-300 mt-3">
          Authentication is securely managed using Supabase Authentication.
        </p>

        <h3 className="text-cyan-400 text-xl font-semibold mt-8 mb-2">
          Financial Information
        </h3>

        <ul className="list-disc ml-6 text-gray-300 space-y-1">
          <li>Expense records</li>
          <li>Income records</li>
          <li>Categories</li>
          <li>Budgets</li>
          <li>Bills</li>
          <li>Notes</li>
          <li>Receipt images</li>
        </ul>

        <p className="text-gray-300 mt-3">
          This information is securely stored in our cloud database.
        </p>

        <h3 className="text-cyan-400 text-xl font-semibold mt-8 mb-2">
          Voice Input
        </h3>

        <p className="text-gray-300">
          If enabled, voice recordings are converted into structured expense
          entries using AI-powered speech recognition.
        </p>

        <h3 className="text-cyan-400 text-xl font-semibold mt-8 mb-2">
          Receipt Scanning
        </h3>

        <p className="text-gray-300">
          Receipt images are processed to extract financial information before
          being saved to your account.
        </p>
      </>
    ),
  },

  {
    id: "usage",
    title: "How We Use Your Information",
    list: [
      "Create and manage your account",
      "Authenticate your identity",
      "Synchronize data across your devices",
      "Store expenses, budgets and notes",
      "Convert voice input into structured records",
      "Extract expense information from receipt images",
      "Improve application reliability",
      "Respond to customer support requests",
    ],
  },

  {
    id: "permissions",
    title: "Permissions We Request",
    content: (
      <>
        <h3 className="text-cyan-400 font-semibold text-xl">Camera</h3>
        <p className="text-gray-300 mb-4">Used to capture receipt images.</p>

        <h3 className="text-cyan-400 font-semibold text-xl">Microphone</h3>
        <p className="text-gray-300 mb-4">Used for voice expense recording.</p>

        <h3 className="text-cyan-400 font-semibold text-xl">
          Speech Recognition
        </h3>
        <p className="text-gray-300 mb-4">Converts speech into text.</p>

        <h3 className="text-cyan-400 font-semibold text-xl">Photo Library</h3>
        <p className="text-gray-300 mb-4">Allows selecting receipt images.</p>

        <h3 className="text-cyan-400 font-semibold text-xl">Internet Access</h3>
        <p className="text-gray-300 mb-4">
          Required for syncing and AI features.
        </p>

        <h3 className="text-cyan-400 font-semibold text-xl">
          Biometric Authentication
        </h3>
        <p className="text-gray-300">Face ID or Fingerprint unlock.</p>
      </>
    ),
  },

  {
    id: "services",
    title: "Third-Party Services",
    content:
      "We use trusted third-party services including Supabase, OpenAI, Google Sign-In and Sign in with Apple for authentication, AI processing and secure cloud storage.",
  },

  {
    id: "storage",
    title: "Data Storage",
    content:
      "Your account information and financial records are securely stored using Supabase cloud services. We implement industry-standard safeguards to protect your information.",
  },

  {
    id: "retention",
    title: "Data Retention",
    content:
      "Your information is retained while your account remains active or as required by law. Deleted accounts are removed according to our deletion policy.",
  },

  {
    id: "rights",
    title: "Your Rights",
    list: [
      "Access your information",
      "Update profile information",
      "Modify financial records",
      "Delete expenses and receipts",
      "Delete your account",
    ],
  },

  {
    id: "children",
    title: "Children's Privacy",
    content:
      "Expense Tracker is not directed toward children. We do not knowingly collect information from children.",
  },

  {
    id: "ads",
    title: "Advertising, Analytics & In-App Purchases",
    list: [
      "No advertisements",
      "No analytics or ad tracking",
      "No subscriptions or in-app purchases",
    ],
  },

  {
    id: "changes",
    title: "Changes to This Privacy Policy",
    content:
      "We may update this Privacy Policy periodically. Continued use of the application indicates acceptance of the latest version.",
  },

  {
    id: "contact",
    title: "Contact Information",
    content: "Questions? Contact us at info@elexoft.com.",
  },
];

export default function PrivacyPolicy() {
  const [active, setActive] = useState("acceptance");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);

        if (visible) {
          setActive(visible.target.id);
        }
      },
      {
        threshold: 0.3,
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const gotoSection = (id: any) => {
    setOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="bg-[#071B3B] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-5 py-16">
        {/* Heading */}

        <h1 className="text-4xl md:text-[54px] font-semibold font-manrope">
          Privacy Policy
        </h1>

        <p className="mt-6 text-gray-300 text-lg max-w-5xl leading-8 font-lato">
          We value your privacy and are committed to protecting your personal
          information. Your privacy matters to us. Learn how we collect, use,
          and protect your information while using our Expense Tracker
          application.
        </p>

        <p className="mt-5 text-lg text-[rgba(144,165,202,1)]">
          Effective as of: June 2, 2026
        </p>
        {/* Mobile Menu */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden mt-10 bg-white/10 rounded-lg p-3"
        >
          {open ? <X /> : <Menu />}
        </button>

        <div className="grid lg:grid-cols-[260px_1fr] gap-10 mt-12">
          {/* Sidebar */}

          <aside className={`${open ? "block" : "hidden"} lg:block`}>
            <div className="lg:sticky lg:top-24 space-y-2">
              {sections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => gotoSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition

                  ${
                    active === item.id
                      ? "bg-white/10 border-l-4 border-white text-white"
                      : "text-gray-400 hover:bg-white/5"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </aside>

          {/* Content */}

          <div>
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 border-b border-white/10 pb-10 mb-10"
              >
                <h2 className="text-3xl font-semibold mb-6">{section.title}</h2>

                {section.content && typeof section.content === "string" && (
                  <p className="text-gray-300 text-lg leading-8">
                    {section.content}
                  </p>
                )}

                {React.isValidElement(section.content) && section.content}

                {section.list && (
                  <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-300">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
