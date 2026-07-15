import React from "react";
import Hero from "../components/Hero";
import PowerfulFeature from "@/components/PowerfulFeature";
import AiPoweredFeature from "@/components/AiPoweredFeature";
import Rating from "@/components/Rating";
import FAQs from "@/components/FAQs";
import TrustedPeople from "@/components/TrustedPeople";
import Pricing from "@/components/Pricing";
import Finances from "@/components/Finances";

const Home = () => {
  return (
    <div className="bg-[linear-gradient(180deg,#081B3A_0%,#0E2A5E_44.37%,#081B3A_100%)] min-h-screen w-full">
      <Hero />
      <PowerfulFeature />
      <Rating />
      <AiPoweredFeature />
      <Pricing />
      <TrustedPeople />
      <FAQs />
      <Finances />
    </div>
  );
};

export default Home;
