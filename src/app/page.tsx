import CTASection from "@/components/ui/cta";
import FeatureSection from "@/components/ui/features";
import { FlipWords } from "@/components/ui/flip-words";
import Footer from "@/components/ui/footer";
import Pricing from "@/components/ui/pricing";
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

  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Running out of content
        </div>
      ),
    },
  ];

  return (
    <div className="bg-black">
      <WavyBackground
        className="max-w-4xl mx-auto text-3xl p-2 lg:text-7xl font-bold text-white"
        speed="fast"
      >
        Empower your security with{" "}
        <span className="font-extrabold">LockScript</span>.
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
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
      <Footer />
    </div>
  );
}
