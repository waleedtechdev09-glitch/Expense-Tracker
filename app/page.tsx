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
      <div
        className="bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/bg-image.png')",
          backgroundSize: "104% auto",
          backgroundPosition: "center -160px", // image 80px niche se start hogi
        }}
      >
        <Hero />
        <PowerfulFeature />
      </div>
      <Rating />
      <div
        className="bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/dotted.png')",
          backgroundSize: "100% auto",
          backgroundPosition: "center ", // image 80px niche se start hogi
        }}
      >
        <AiPoweredFeature />
      </div>

      <Pricing />
      <TrustedPeople />
      <FAQs />
      <Finances />
    </div>
  );
};

export default Home;
