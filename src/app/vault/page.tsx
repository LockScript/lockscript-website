"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { Separator } from "@/components/ui/separator";
import { SparklesCore } from "@/components/ui/sparkles";
import { Database, Layout, Lock, RefreshCcw, Shield, Zap } from "lucide-react";

export const projects = [
  {
    icon: Lock,
    title: "Full Encryption",
    description:
      "Our password manager employs full encryption, guaranteeing the highest level of data security.",
    link: "",
  },
  {
    icon: Zap,
    title: "Fast Support",
    description:
      "Experiencing any issues? Reach out to our lightning-fast support team for immediate assistance.",
    link: "",
  },
  {
    icon: Database,
    title: "Variety of Data Types",
    description:
      "LockScript has support for different types of credentials, such as secure notes, credit cards, pins, and just plain old passwords.",
    link: "",
  },
  {
    icon: Layout,
    title: "Sleek UI",
    description:
      "Manage your passwords in style. Our solution provides a sleek and intuitive user interface to ensure that managing your security is simple, but effective.",
    link: "",
  },
  {
    icon: Shield,
    title: "Weekly Security Audits",
    description:
      "At LockScript, we conduct weekly security audits to address and resolve any identified security concerns. Additionally, we proactively search for potential new issues to ensure our systems remain robust and secure.",
    link: "",
  },
  {
    icon: RefreshCcw,
    title: "Cross-Platform Sync",
    description:
      "Access your passwords seamlessly across all your devices. LockScript ensures that your data is synchronized and accessible, no matter where you are.",
    link: "",
  },
];

export default function Home() {
  const words = [
    "privacy",
    "anonymity",
    "accessibility",
    "transparency",
    "security",
  ];

  return (
    <div className="w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-6xl lg:text-9xl font-bold text-center text-white relative z-20 mt-40">
        Vault
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

      <p className="text-white text-xl lg:text-2xl text-center mb-[20rem] lg:w-[45rem]">
        Unlock the future of digital security with <span className="bg-gradient-to-r from-sky-500 via-purple-400 to-purple-600 text-transparent bg-clip-text">LockScript Vault</span>.
        Effortlessly manage all your accounts with a single, secure tool,
        ensuring your datas safety while simplifying your digital life.
      </p>

      <Separator className="bg-gray-800" />

      <div className="flex justify-center items-center px-4 mt-10">
        <div className="text-center lg:text-4xl md:text-3xl text-2xl mx-auto font-normal bg-gradient-to-r from-sky-500 via-purple-400 to-purple-600 text-transparent bg-clip-text dark:text-neutral-400">
          Switch to a password manager that prioritizes
          <FlipWords words={words} />.
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-white font-extrabold">
          <span className="bg-gradient-to-r from-sky-500 via-purple-400 to-purple-600 text-transparent bg-clip-text">
            Features
          </span>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
