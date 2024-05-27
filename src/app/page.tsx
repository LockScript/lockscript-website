import { BackgroundGradient } from "@/components/ui/background-gradient";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { WavyBackground } from "@/components/ui/wavy-background";
import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";

export default function Home() {
  const words = [
    {
      text: "Secure",
      className: "text-white",
    },
    {
      text: "your",
      className: "text-white",
    },
    {
      text: "assets",
      className: "text-white",
    },
    {
      text: "with",
      className: "text-white",
    },
    {
      text: "LockScript.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
  return (
    <>
      <div className="bg-black">
        <div className="">
          <WavyBackground className="max-w-4xl mx-auto">
            <TypewriterEffectSmooth words={words} />
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
              Use our advanced security solutions to secure your personal assets
              and business.
            </p>
          </WavyBackground>
          <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-white dark:text-white">
                  Unleash the power of <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    Military grade{" "}
                    <span className="text-blue-500">security.</span>
                  </span>
                </h1>
              </>
            }
          >
            <Image
              src={`/linear.webp`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
              className=""
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Gippity AI powers the entire universe
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  With over 100,000 mothly active bot users, Gippity AI is the
                  most popular AI platform for developers.
                </p>
              </div>
              <Image
                src="/linear.webp"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
              <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                No shirt, no shoes, no weapons.
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                If someone yells “stop!”, goes limp, or taps out, the fight is
                over.
              </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
              <div className="max-w-sm">
                <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Signup for blazing-fast cutting-edge state of the art Gippity
                  AI wrapper today!
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                  With over 100,000 mothly active bot users, Gippity AI is the
                  most popular AI platform for developers.
                </p>
              </div>
              <Image
                src="/linear.webp"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
              />
            </WobbleCard>
          </div>
        </div>

        <div className="mt-10 flex flex-col lg:flex-row">
          <div className="border border-white/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] mb-4 lg:mb-0 lg:mr-4">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />

            <EvervaultCard text="hover" />

            <h2 className="dark:text-white text-white mt-4 text-sm font-light">
              Hover over this card to reveal an awesome effect. Running out of
              copy here.
            </h2>
          </div>

          <div className="border border-white/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />

            <EvervaultCard text="hover" />

            <h2 className="dark:text-white text-white mt-4 text-sm font-light">
              Hover over this card to reveal an awesome effect. Running out of
              copy here.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
