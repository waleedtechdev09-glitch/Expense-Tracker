"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NavItem, NAV_ITEMS, BRAND_INFO } from "../config/navigation";
import Button from "./Button";

interface NavbarProps {
  brandName?: string;
  logoSrc?: string;
  logoAlt?: string;
  navItems?: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({
  brandName = BRAND_INFO.name,
  logoSrc = BRAND_INFO.logoSrc,
  logoAlt = BRAND_INFO.altText || "Brand Logo",
  navItems = NAV_ITEMS,
}) => {
  const [imageError, setImageError] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("");

  // 1. Scroll Spy Logic (Intersection Observer)
  useEffect(() => {
    // Sirf un targets ko observe karenge jo humare nav items mein defined hain
    const targets = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    const observerOptions = {
      root: null, // Viewport ko use karega
      rootMargin: "-40% 0px -50% 0px", // Screen ke center area ko target karega taake accurate active tab mile
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            setActiveTab(`#${id}`);
          }
        }
      });
    }, observerOptions);

    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, [navItems]);

  // 2. Click Navigation Prevent Handler
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Kisi bhi qism ki page navigation ya jump ko block kar dega
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#081B3A] backdrop-blur-md border-b border-slate-800 text-white px-6 py-4 flex items-center justify-between transition-all duration-200">
      {/* Left: Dynamic Brand Logo & Name */}
      <div className="flex items-center gap-3 cursor-pointer">
        {logoSrc && !imageError ? (
          <div className="relative w-8 h-8">
            <Image
              src={logoSrc}
              alt={logoAlt}
              fill
              className="object-contain"
              sizes="32px"
              priority
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className="w-8 h-8 text-cyan-400">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
            </svg>
          </div>
        )}
        <span className="font-semibold text-lg tracking-wide">{brandName}</span>
      </div>

      {/* Center: Scroll-Active Navigation Links */}
      <ul className="hidden md:flex items-center gap-8">
        {navItems.map((item, index) => {
          // Check if this item is currently active on scroll
          const isActive = activeTab === item.href;

          return (
            <li key={index}>
              <a
                href={item.href}
                onClick={handleLinkClick} // Click navigation bilkul block ho gayi
                className={`transition-colors duration-200 text-sm font-medium cursor-default ${
                  isActive
                    ? "text-cyan-400 font-semibold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Right: Custom Reusable Button */}
      <div>
        <Button
          variant="primary"
          showArrow={true}
          onClick={() => console.log("Contact us clicked!")}
        >
          Contact us
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
