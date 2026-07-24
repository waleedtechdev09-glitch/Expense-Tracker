"use client";
import React, { useEffect, useRef, useState } from "react";

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

        <h3 className="text-cyan-400 text-xl font-medium font-lato mt-8 mb-2">
          Voice Input
        </h3>

        <p className="text-gray-300 font-normal font-lato">
          you choose to use voice input, the application accesses your device's
          microphone to capture your spoken expense or income details. The
          recorded voice is processed to convert speech into text and generate a
          structured entry using AI-powered processing
          <br />
          <br />
          <span className="text-[#92E3FF] text-sm font-normal font-lato">
            Note🎙This processing may involve securely transmitting the audio or
            transcribed content to OpenAI for the purpose of interpreting and
            organizing the information you provide. Voice input is only used
            when you explicitly initiate this feature.
          </span>
        </p>

        <h3 className="text-cyan-400 text-xl font-medium font-lato mt-8 mb-2">
          Receipt Scanning
        </h3>

        <>
          <p className="text-gray-300 font-normal font-lato">
            If you choose to scan a receipt, you may:
          </p>

          <ul className="list-disc ml-6 mt-3  text-gray-300 space-y-1 font-normal font-lato">
            <li>Capture a receipt using your device's camera</li>
            <li>Select an existing receipt image from your photo library</li>
          </ul>

          <p className="text-gray-300 mt-3 font-normal font-lato">
            Receipt images are processed using AI-powered services to extract
            expense information and generate a structured record for your review
            before it is saved.
          </p>
        </>
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
        <h3 className="text-cyan-400 font-medium font-lato text-xl">Camera</h3>
        <p className="text-gray-300 mb-4 font-normal font-lato">
          Used to capture receipt images for expense recording.
        </p>

        <h3 className="text-cyan-400 font-medium font-lato text-xl">
          Microphone
        </h3>
        <p className="text-gray-300 mb-4 font-normal font-lato">
          Used only when you choose voice input to record spoken expense or
          income information.
        </p>

        <h3 className="text-cyan-400 font-medium font-lato text-xl">
          Speech Recognition
        </h3>
        <p className="text-gray-300 mb-4 font-normal font-lato">
          Used to convert your speech into text for creating financial records.
        </p>

        <h3 className="text-cyan-400 font-medium font-lato text-xl">
          Photo Library
        </h3>
        <p className="text-gray-300 mb-4 font-normal font-lato">
          Used to allow you to select receipt images stored on your device.
        </p>

        <h3 className="text-cyan-400 font-medium font-lato text-xl">
          Internet Access
        </h3>
        <p className="text-gray-300 mb-4 font-normal font-lato">
          Required to authenticate users, synchronize data with Supabase, and
          process AI-powered voice and receipt recognition.
        </p>

        <h3 className="text-cyan-400 font-medium font-lato text-xl">
          Biometric Authentication
        </h3>
        <p className="text-gray-300 font-normal font-lato">
          If enabled by you, Face ID or Fingerprint can be used to unlock the
          app securely.
        </p>
      </>
    ),
  },

  {
    id: "services",
    title: "Third-Party Services",
    content: (
      <div className="space-y-8">
        <p className="text-gray-300">
          We use trusted third-party services to provide essential
          functionality.
        </p>

        <div className="space-y-6">
          <div className="  ">
            <h3 className="text-cyan-400 text-xl font-lato font-medium mb-1">
              Supabase
            </h3>

            <p className="text-gray-300 leading-8">
              Provides user authentication, secure cloud database, and encrypted
              data storage. Your account information and financial records are
              securely stored using Supabase infrastructure.
            </p>
          </div>

          <div className="">
            <h3 className="text-cyan-400 text-xl font-lato font-medium mb-1">
              OpenAI
            </h3>

            <p className="text-gray-300 leading-8">
              When you use voice input or receipt scanning, your audio,
              transcribed text, or receipt image may be securely processed by
              OpenAI solely to generate structured expense information. This
              data is never used for advertising or marketing purposes.
            </p>
          </div>

          <div className="">
            <h3 className="text-cyan-400 text-xl font-lato font-medium mb-1">
              Google Sign-In
            </h3>

            <p className="text-gray-300 leading-8">
              If you choose Google Sign-In, Google securely authenticates your
              identity and provides basic account information such as your name
              and email address.
            </p>
          </div>

          <div className="">
            <h3 className="text-cyan-400 text-xl font-lato font-medium mb-1">
              Sign in with Apple
            </h3>

            <p className="text-gray-300 leading-8">
              If you choose Sign in with Apple, Apple securely authenticates
              your identity and may provide your name and email address
              depending on your Apple account settings.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "storage",
    title: "Data Storage",
    content:
      "Your account information and financial records are securely stored using Supabase cloud services. We take reasonable administrative, technical, and organizational measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of electronic storage or internet transmission can be guaranteed to be completely secure.",
  },

  {
    id: "retention",
    title: "Data Retention",
    content:
      "We retain your information for as long as your account remains active or as needed to provide the application's services.If you delete your account, your personal information and associated financial records will be removed in accordance with our data deletion processes, except where retention is required by applicable law.",
  },

  {
    id: "rights",
    title: "Your Rights",
    list: [
      "You may",
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
      "Smart Expense Tracker is not specifically directed toward children. We do not knowingly collect personal information from children in violation of applicable laws. If we become aware that personal information has been collected from a child where prohibited, we will take appropriate steps to delete it.",
  },

  {
    id: "ads",
    title: "Advertising, Analytics & Purchases",
    list: [
      "No advertisements",
      "No analytics or ad tracking",
      "No subscriptions or in-app purchases",
    ],
  },

  {
    id: "changes",
    title: " Policy Changes",
    content:
      "We may update this Privacy Policy from time to time. Any updates will be posted within the application or on our official website, and the revised Effective Date will reflect the latest version.",
  },

  {
    id: "contact",
    title: "Contact Information",
    content: (
      <div className="space-y-2">
        <p className="text-gray-300 text-normal font-normal font-lato">
          Questions about your data?
        </p>

        <p className="text-gray-300 leading-8 max-w-3xl text-normal font-normal font-lato">
          Have questions about how we collect, use, or protect your personal
          information? Our team is here to help. Reach out to us, and we'll
          respond as soon as possible.
        </p>

        <p className="text-gray-300">
          Email:{" "}
          <a
            href="mailto:info@elexoft.com"
            className="  underline-offset-2 hover:text-cyan-300 transition"
          >
            info@elexoft.com
          </a>
        </p>
      </div>
    ),
  },
];

// Sidebar apni jagah lock hone ke baad top se kitna gap rahega
const FIXED_TOP_OFFSET = 96; // 24 * 4px (top-24)
// Footer se thora pehle unlock karna ho to yahan extra gap de sakte ho
const BOTTOM_SAFE_GAP = 24;

type SidebarMode = "static" | "fixed" | "absolute-bottom";

export default function PrivacyPolicy() {
  const [active, setActive] = useState("information");
  const [mode, setMode] = useState<SidebarMode>("static");
  const [sidebarBox, setSidebarBox] = useState({ left: 0, width: 260 });

  const heroRef = useRef<HTMLDivElement>(null);
  const asideRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

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

  // Measure sidebar column's left/width for the fixed variant
  useEffect(() => {
    const measure = () => {
      if (asideRef.current) {
        const rect = asideRef.current.getBoundingClientRect();
        setSidebarBox({ left: rect.left, width: rect.width });
      }
    };

    // Use setTimeout to ensure layout is complete
    const timeoutId = setTimeout(measure, 100);
    measure(); // First measurement
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(timeoutId);
    };
  }, []);

  // Decide sidebar mode: static -> fixed -> absolute-bottom (unlocks before footer)
  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current || !wrapperRef.current || !innerRef.current) return;

      const heroBottom = heroRef.current.getBoundingClientRect().bottom;
      const wrapperBottom = wrapperRef.current.getBoundingClientRect().bottom;
      const sidebarHeight = innerRef.current.offsetHeight;

      const notPastHero = heroBottom > FIXED_TOP_OFFSET;
      const spaceLeftBelow = wrapperBottom - FIXED_TOP_OFFSET;
      const wouldOverflowIntoFooter =
        spaceLeftBelow - BOTTOM_SAFE_GAP <= sidebarHeight;

      if (notPastHero) {
        setMode("static");
      } else if (wouldOverflowIntoFooter) {
        setMode("absolute-bottom");
      } else {
        setMode("fixed");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const gotoSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const innerStyle: React.CSSProperties =
    mode === "fixed"
      ? {
          position: "fixed",
          top: FIXED_TOP_OFFSET,
          left: sidebarBox.left,
          width: sidebarBox.width,
        }
      : mode === "absolute-bottom"
        ? {
            position: "absolute",
            bottom: BOTTOM_SAFE_GAP,
            left: 0,
            width: sidebarBox.width, // Changed from "100%" to sidebarBox.width
          }
        : {};

  return (
    <section className="bg-[#071B3B] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 py-8 sm:py-16">
        {/* Hero: heading + description + date */}
        <div ref={heroRef}>
          <h1 className="text-3xl sm:text-4xl mt-20 sm:mt-14 md:text-[54px] font-medium font-manrope">
            Privacy Policy
          </h1>

          <p className="mt-4 sm:mt-6 text-gray-300 text-sm sm:text-base max-w-5xl leading-7 sm:leading-8 font-lato">
            We value your privacy and are committed to protecting your personal
            information. Your privacy matters to us. Learn how we collect, use,
            and protect your information while using our Expense Tracker
            application.
          </p>

          <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-[rgba(144,165,202,1)]">
            Effective as of: June 2, 2026
          </p>
        </div>

        {/* Grid layout - sidebar hidden on mobile/tablet, visible on desktop */}
        <div
          ref={wrapperRef}
          className="relative grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6 sm:gap-10 mt-8 sm:mt-12"
        >
          {/* Sidebar - Hidden on small and medium devices, shown on large screens */}
          <aside ref={asideRef} className="hidden lg:block">
            <div ref={innerRef} className="space-y-2" style={innerStyle}>
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

          {/* Content - Full width on mobile/tablet */}
          <div className="min-w-0 lg:col-span-1">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className={`scroll-mt-24 sm:scroll-mt-28 pb-6 sm:pb-10 ${
                  section.id !== "contact"
                    ? "border-b border-white/10 mb-6 sm:mb-10"
                    : ""
                }`}
              >
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
                  {section.title}
                </h2>

                {section.content && typeof section.content === "string" && (
                  <p className="text-gray-300 text-sm sm:text-lg leading-7 sm:leading-8">
                    {section.content}
                  </p>
                )}

                {React.isValidElement(section.content) && section.content}

                {section.list && (
                  <ul className="list-disc ml-4 sm:ml-6 mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-gray-300 text-sm sm:text-base">
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
