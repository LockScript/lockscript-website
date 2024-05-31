"use client";

type User = {
  id: string;
  passwordEnabled: boolean;
  totpEnabled: boolean;
  backupCodeEnabled: boolean;
  twoFactorEnabled: boolean;
  banned: boolean;
  createOrganizationEnabled: boolean;
  createdAt: number;
  emailAddresses: Array<any>; // replace 'any' with the actual type if known
  externalAccounts: Array<any>; // replace 'any' with the actual type if known
  externalId: string | null;
  firstName: string;
  hasImage: boolean;
  imageUrl: string;
  lastActiveAt: number;
  lastName: string;
  lastSignInAt: number;
  phoneNumbers: Array<any>; // replace 'any' with the actual type if known
  primaryEmailAddressId: string;
  primaryPhoneNumberId: string | null;
  primaryWeb3WalletId: string | null;
  privateMetadata: any; // replace 'any' with the actual type if known
  publicMetadata: any; // replace 'any' with the actual type if known
  samlAccounts: Array<any>; // replace 'any' with the actual type if known
  unsafeMetadata: any; // replace 'any' with the actual type if known
  updatedAt: number;
  username: string | null;
  web3Wallets: Array<any>; // replace 'any' with the actual type if known
};

import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { currentUser } from "@clerk/nextjs/server";
import { Link } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Page = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("/api/user")
      .then((response) => response.text())
      .then((data) => {
        const userData = JSON.parse(data);
        setUser(userData);
        console.log(userData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <BackgroundBeams />
      <CardContainer className="inter-var mt-10">
        <BackgroundBeams />
        <CardBody className="bg-neutral-950 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-2xl font-extrabold text-white"
          >
            <span className="text-emerald-500">$</span> {user?.username}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-sm max-w-sm mt-2 text-neutral-300"
          >
            {user?.id}
          </CardItem>
        <CardItem
            as="p"
            translateZ="60"
            className=" text-sm max-w-sm mt-2 text-neutral-300"
        >
            {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
        </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={user?.imageUrl || ""}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
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
