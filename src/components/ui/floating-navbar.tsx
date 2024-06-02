"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { currentUser, getAuth, redirectToSignIn } from "@clerk/nextjs/server";
import { useRouter } from "next/navigation";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
    authRequired?: boolean;
  }[];
  className?: string;
}) => {
  const router = useRouter();
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-30 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => {
          if (navItem.authRequired) {
            return (
              <SignedIn key={`navItem-${idx}`}>
                <Link
                  href={navItem.link}
                  className={cn(
                    "relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300"
                  )}
                >
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className="hidden sm:block text-sm">
                    {navItem.name}
                  </span>
                </Link>
              </SignedIn>
            );
          } else {
            return (
              <Link
                key={`navItem-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
              </Link>
            );
          }
        })}
ya
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <button
            className="border text-sm font-medium relative border-white/[0.2] text-white px-4 py-2 rounded-full"
            onClick={() => router.push("/sign-in")}
          >
            <span>Login</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          </button>
        </SignedOut>
      </motion.div>
    </AnimatePresence>
  );
};
