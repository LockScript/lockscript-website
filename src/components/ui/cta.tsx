import React from "react";
import { Separator } from "./separator";

const CTASection = () => {
  return (
    <section className="mb-20 text-center">
      <p className="text-5xl mb-10 dark:text-white text-black">
        Join us and experience the next level of cybersecurity.
      </p>
      <button className="p-[3px] relative mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2 bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          Get Started
        </div>
      </button>

      <Separator className="bg-gray-800" />
    </section>
  );
};

export default CTASection;
