"use client";
import ContactUs from "@/components/ContactUs";
import React, { useState, useEffect } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#081B3A]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"></div>
          <p className="text-white/80 text-sm font-lato">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <ContactUs />
    </div>
  );
};

export default Contact;
