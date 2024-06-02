"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Skeleton } from "@/components/ui/skeleton";
import { RedirectToSignIn, SignedOut } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import Image from "next/image";
import { useQuery } from "react-query";

const fetchUser = async () => {
  const res = await fetch("/api/user");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

const Page = () => {
  const { data: user, isLoading, isError } = useQuery<User>("user", fetchUser);

  return (
    <div className="bg-black min-h-screen">
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      
      <BackgroundBeams />
      <CardContainer className="inter-var mt-10">
        <BackgroundBeams />
        <CardBody className="bg-neutral-950 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-2xl font-extrabold text-white"
          >
            <span className="text-emerald-500">$</span>{" "}
            {isLoading ? (
              <Skeleton className="h-4 w-[200px] inline-block" />
            ) : (
              user?.username
            )}
          </CardItem>
          <CardItem
            translateZ="60"
            className="text-sm max-w-sm mt-2 text-neutral-300"
          >
            {isLoading ? <Skeleton className="h-4 w-[250px]" /> : user?.id}
          </CardItem>
          <CardItem
            translateZ="60"
            className=" text-sm max-w-sm mt-2 text-neutral-300"
          >
            {isLoading ? (
              <Skeleton className="h-4 w-[250px]" />
            ) : user?.createdAt ? (
              new Date(user.createdAt).toLocaleDateString()
            ) : (
              "N/A"
            )}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            {isLoading ? (
              <Skeleton className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" />
            ) : (
              <Image
                src={user?.imageUrl || ""}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            )}
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-white font-bold w-full text-4xl"
            >
              <span className="bg-gradient-to-r from-sky-500 via-purple-400 to-purple-600 text-transparent bg-clip-text">
                LockScript ID
              </span>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default Page;
