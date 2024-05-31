import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage } from "@tabler/icons-react";
import { Info, UserIcon } from "lucide-react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "react-query";
import { QueryProvider } from "@/providers/QueryClient";
const inter = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "LockScript",
  description:
    "LockScript is a Canadian based cybersecurity / privacy company with the focus of providing secure and private solutions for individuals and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "About",
      link: "/about-us",
      icon: <Info className="h-4 w-4 text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconMessage className="h-4 w-4 text-white" />,
    },
    {
      name: "User",
      link: "/me",
      icon: <UserIcon className="h-4 w-4 text-white" />,
    },
  ];
  return (
    <QueryProvider>
      <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>
            <div className="relative w-full">
              <FloatingNav navItems={navItems} />
            </div>
            <main>{children}</main>
          </body>
        </html>
      </ClerkProvider>
    </QueryProvider>
  );
}
