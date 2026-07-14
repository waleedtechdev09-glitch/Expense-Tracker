import React from "react";
import Hero from "../components/Hero";
import PowerfulFeature from "@/components/PowerfulFeature";
import AiPoweredFeature from "@/components/AiPoweredFeature";
import Rating from "@/components/Rating";

const Home = () => {
  return (
    <div className="bg-[linear-gradient(180deg,_#081B3A_0%,_#0E2A5E_44.37%,_#081B3A_100%)] min-h-screen w-full">
      <Hero />
      <PowerfulFeature />
      <Rating />
      <AiPoweredFeature />
    </div>
  );
};

export default Home;
