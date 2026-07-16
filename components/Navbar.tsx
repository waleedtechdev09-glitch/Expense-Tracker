"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { NavItem, NAV_ITEMS, BRAND_INFO } from "../config/navigation";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
  const [activeTab, setActiveTab] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const targets = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveTab(`#${id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, [navItems]);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const offset = navRef.current.getBoundingClientRect().top;
        setIsScrolled(offset <= 0);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
  };

  const navBgClass = isScrolled
    ? "fixed top-0 left-0 right-0 z-50 bg-[#081B3A]/90 backdrop-blur-md shadow-lg"
    : "sticky top-0 z-50 bg-transparent";

  return (
    <nav
      ref={navRef}
      className={`p-3 w-full border-b border-[#374151] text-white transition-all duration-300 ${navBgClass}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
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
              >
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
              </svg>
            </div>
          )}

          <span className="font-semibold text-base sm:text-lg">
            {brandName}
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.href;
            const linkClass = isActive
              ? "text-cyan-400 font-semibold"
              : "text-slate-300 hover:text-white";

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`transition duration-200 ${linkClass}`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="inline-flex items-center justify-center gap-2 px-8 h-10 cursor-pointer rounded-full bg-[#6C63FF] text-white text-sm font-medium transition-all duration-300 hover:bg-[#5B54E8] hover:scale-105 active:scale-95">
            <span>
              <Link href="/contact-us">Contact us</Link>
            </span>
            <ArrowRight size={12} strokeWidth={2.5} />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-[#081B3A] border-t border-slate-700 px-5 py-4 space-y-4">
          {navItems.map((item) => {
            const isActive = activeTab === item.href;
            const mobileLinkClass = isActive
              ? "text-cyan-400 font-semibold"
              : "text-slate-300";

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className={`block text-base ${mobileLinkClass}`}
              >
                {item.label}
              </a>
            );
          })}

          <div className="pt-2">
            <Button
              variant="primary"
              showArrow
              onClick={() => console.log("Contact")}
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
