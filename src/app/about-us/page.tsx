"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Socials } from "@/components/ui/socials";
import { SparklesCore } from "@/components/ui/sparkles";
import { TracingBeam } from "@/components/ui/tracing-beam";

const people = [
  {
    id: 1,
    name: "cvs0",
    designation: "Owner | Lead-Developer",
    image: "https://5skn.xyz/images/Headshot.png",
  },
  {
    id: 2,
    name: "5skn",
    designation: "Co-Owner | Quality Assurance",
    image: "https://5skn.xyz/images/0.png",
  },
];

const AboutUsPage = () => {
  return (
    <div className="w-full bg-black flex flex-col items-center justify-center overflow-hidden min-h-screen">
      <h1 className="md:text-7xl text-6xl lg:text-9xl font-bold text-center text-white relative z-20 mt-40">
        About Us
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
      <TracingBeam>
        <div className="text-center max-w-4xl w-full mt-10">
          <h1 className="font-extrabold text-5xl mb-2 bg-gradient-to-r from-sky-500 via-purple-400 to-purple-600 text-transparent bg-clip-text p-2 rounded">
            Meet The Developers
          </h1>
        </div>
        <div className="flex flex-row items-center justify-center mb-10 w-full mt-10">
          <AnimatedTooltip items={people} />
        </div>

        <div className="flex flex-row justify-center items-center mb-[2rem] gap-5">
          <a href="https://cvs0.xyz">
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                cvs0.xyz
              </div>
            </button>
          </a>

          <a href="https://5skn.xyz">
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                5skn.xyz
              </div>
            </button>
          </a>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 justify-center items-center mb-[20rem]">
          <Socials
            username="cvs0"
            github="cvs0"
            x="cvs0_"
            discord="1147380185893716068"
          />

          <Socials
            username="5skn"
            github="kander927"
            instagram="16rt____"
            discord="710533612486787104"
          />
        </div>
      </TracingBeam>
    </div>
  );
};

export default AboutUsPage;
