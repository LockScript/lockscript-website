"use client";

import CTASection from "@/components/ui/cta";
import FeatureSection from "@/components/ui/features";
import { FlipWords } from "@/components/ui/flip-words";
import Footer from "@/components/ui/footer";
import Pricing from "@/components/ui/pricing";
import ProductsSection from "@/components/ui/products-section";
import { WavyBackground } from "@/components/ui/wavy-background";
import Workflow from "@/components/ui/workflow";
import Image from "next/image";

export default function Home() {
  const words = [
    "privacy",
    "security",
    "freedom",
    "equality",
    "accessibility",
    "transparency",
  ];

  return (
    <div className="bg-white dark:bg-black">
      <WavyBackground
        className="max-w-4xl mx-auto text-3xl p-2 lg:text-7xl font-bold text-black dark:text-white"
        speed="fast"
      >
        Empower your security with
        <span className="font-extrabold">LockScript</span>.
        <p className="text-base md:text-lg mt-4 text-black dark:text-white font-normal inter-var text-center">
          Leverage our cutting-edge security solutions to fortify your personal
          assets and business operations.
        </p>
      </WavyBackground>

      <CTASection />

      <div className="flex justify-center items-center px-4">
        <div className="lg:text-4xl md:text-3xl text-2xl mx-auto font-normal text-white dark:text-neutral-400">
          At LockScript we believe that
          <FlipWords words={words} />
          is a human right.
        </div>
      </div>

      <Workflow />
      <Pricing />
      <FeatureSection />
      <ProductsSection />

      <Footer />
    </div>
  );
}
