"use client"

import { pricingOptions } from "@/constants";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

async function fetchUser() {
  const response = await fetch('/api/user');
  if (response.ok) {
    return await response.json();
  }
  return null;
}

export default function Pricing() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser().then(setUser);
  }, []);

  console.log(user)

  return (
    <div className="mt-20">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-white font-extrabold">
          <span className="bg-gradient-to-r from-sky-500 via-purple-400 to-purple-600 text-transparent bg-clip-text">
            Pricing
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className={cn("p-10 border rounded-xl", ((option.title == "Free" && user !== null) ? 'border-white' : "border-neutral-700"))}>
              <p className="text-4xl mb-8 text-white">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-sky-500 via-purple-400 to-purple-600  text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8 text-white font-extrabold">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center text-blue-500">
                    <CheckCircle2 />
                    <span className="ml-2 text-white">{feature}</span>
                  </li>
                ))}
              </ul>

              <SignedIn>
                <a
                  href={option.title === "Free" ? "#" : "/subscribe"}
                  className={cn("inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl border border-white rounded-lg transition duration-200",
                    option.title === "Free" ? "bg-neutral-500 text-neutral-400 cursor-not-allowed" : "hover:bg-accent hover:text-black text-white"
                  )}
                >
                  {option.title === "Free" ? "Subscribed" : "Subscribe"}
                </a>
              </SignedIn>


              <SignedOut>
                <a
                  href="/sign-in"
                  className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-accent hover:text-black border border-white rounded-lg transition duration-200 text-white"
                >
                  Sign in
                </a>
              </SignedOut>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};