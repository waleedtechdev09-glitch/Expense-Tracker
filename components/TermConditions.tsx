"use client";
import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content:
      "By accessing or using the Expense Tracker application, you acknowledge that you have read, understood, and agreed to these Terms & Conditions. If you do not agree with any part of these terms, please discontinue using the service.",
  },
  {
    id: "accounts",
    title: "User Accounts",
    content:
      "To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.",
  },
  {
    id: "acceptable",
    title: "Acceptable Use",
    list: [
      "Violate applicable laws or regulations.",
      "Attempt unauthorized access to our systems.",
      "Distribute harmful software or malicious code.",
      "Interfere with the normal operation of the platform.",
      "Misuse or abuse any features or services.",
    ],
  },
  {
    id: "responsibilities",
    title: "User Responsibilities",
    content:
      "You are responsible for ensuring that the information you provide is accurate and up to date. You agree to use the application responsibly and protect your account credentials from unauthorized access.",
  },
  {
    id: "property",
    title: "Intellectual Property",
    content:
      "All content, software, branding, logos, graphics, and features available within the Expense Tracker application are the property of Elexoft or its licensors and are protected by applicable intellectual property laws.",
  },
  {
    id: "payments",
    title: "Payments & Subscriptions",
    content:
      "If you subscribe to a paid plan, you agree to pay all applicable fees. Subscription charges, renewals, cancellations, and refunds will be handled according to the selected subscription plan.",
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content:
      "While we strive to provide a reliable and secure service, Elexoft shall not be liable for any indirect, incidental, or consequential damages resulting from your use of the application.",
  },
  {
    id: "termination",
    title: "Termination",
    content:
      "We reserve the right to suspend or terminate your account if you violate these Terms & Conditions or misuse the application.",
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    content:
      "We may update these Terms & Conditions from time to time. Continued use of the application constitutes acceptance of the updated terms.",
  },
  {
    id: "contact",
    title: "Contact Information",
    content:
      "Questions about your data or these terms? Reach us anytime at info@elexoft.com.",
  },
];

// Sidebar apni jagah lock hone ke baad top se kitna gap rahega
const FIXED_TOP_OFFSET = 96; // 24 * 4px (top-24)

export default function TermConditions() {
  const [active, setActive] = useState("acceptance");
  const [open, setOpen] = useState(false);
  const [isSidebarFixed, setIsSidebarFixed] = useState(false);
  const [sidebarBox, setSidebarBox] = useState({ left: 0, width: 260 });

  const heroRef = useRef<HTMLDivElement>(null); // heading + desc + date wrapper
  const asideRef = useRef<HTMLDivElement>(null); // sidebar column (grid cell)

  // Section active-link tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { threshold: 0.3 },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Measure the sidebar column's left position + width so the
  // "fixed" version lines up exactly with the grid column.
  useEffect(() => {
    const measure = () => {
      if (asideRef.current) {
        const rect = asideRef.current.getBoundingClientRect();
        setSidebarBox({ left: rect.left, width: rect.width });
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Scroll-driven lock: sidebar becomes fixed only after the hero
  // (heading + description + date) has fully scrolled past.
  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const heroBottom = heroRef.current.getBoundingClientRect().bottom;
      setIsSidebarFixed(heroBottom <= FIXED_TOP_OFFSET);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const gotoSection = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="bg-[#071B3B] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-5 py-16">
        {/* Hero: heading + description + date. Sidebar unlocks right after this. */}
        <div ref={heroRef}>
          <h1 className="text-4xl md:text-5xl font-manrope lg:mt-15 font-medium">
            Terms & Conditions
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-4xl leading-8">
            Please read these Terms & Conditions carefully before using the
            Expense Tracker application. By accessing or using our services, you
            agree to be bound by these terms.
          </p>

          <p className="mt-5 text-xl text-gray-400">
            Effective as of: June 2, 2026
          </p>
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden mt-10 bg-white/10 rounded-lg p-3"
        >
          {open ? <X /> : <Menu />}
        </button>

        <div className="grid lg:grid-cols-[260px_1fr] gap-10 mt-12">
          {/* Sidebar */}
          <aside
            ref={asideRef}
            className={`${open ? "block" : "hidden"} lg:block`}
          >
            <div
              className="space-y-2"
              style={
                isSidebarFixed
                  ? {
                      position: "fixed",
                      top: FIXED_TOP_OFFSET,
                      left: sidebarBox.left,
                      width: sidebarBox.width,
                    }
                  : undefined
              }
            >
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

                {section.content && (
                  <p className="text-gray-300 leading-8 text-lg">
                    {section.content}
                  </p>
                )}

                {section.list && (
                  <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-300 text-lg">
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
