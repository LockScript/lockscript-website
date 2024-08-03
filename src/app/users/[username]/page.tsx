"use client"

import { FC } from "react";
import UserHero from "@/components/ui/user-hero";
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from "lucide-react";

interface PageProps {
    params: {
        username: string;
    };
}

const Page: FC<PageProps> = ({ params }) => {
    const router = useRouter();

    return (
        <div className="bg-black min-h-screen">
            <div className="bg-neutral-900 p-4 flex items-center">
                <button
                    onClick={() => router.back()}
                    className="text-white text-2xl mr-4"
                >
                    <ArrowLeftIcon />
                </button>
            </div>

            <div className="sm:px-10 md:px-10 lg:px-20 py-10">
                <UserHero userId={params.username} />
            </div>
        </div>
    );
}

export default Page;
