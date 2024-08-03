"use client";

import { useEffect, useState } from "react";
import { Avatar } from "./avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import Image from 'next/image';

interface UserHeroProps {
    userId: string;
}

interface FetchUserProfileResponse {
    profilePictureUrl: string;
    username: string;
    createdAt: string;
}

async function fetchUserProfile(username: string): Promise<FetchUserProfileResponse> {
    const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch user profile');
    }

    return response.json();
}

const UserHero: React.FC<UserHeroProps> = ({ userId }) => {
    const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const [createdAt, setCreatedAt] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProfilePicture = async () => {
            try {
                const data = await fetchUserProfile(userId);
                setProfilePictureUrl(data.profilePictureUrl);
                setUsername(data.username);
                setCreatedAt(new Date(data.createdAt).toLocaleDateString());
            } catch (err) {
                setError('Error fetching profile picture');
            } finally {
                setLoading(false);
            }
        };

        fetchProfilePicture();
    }, [userId]);

    return (
        <div className="relative">
            <div className="bg-neutral-700 h-44 relative">
                {loading ? (
                    <div className="flex items-center justify-center h-full text-white">Loading...</div>
                ) : error ? (
                    <div className="flex items-center justify-center h-full text-white">Error loading image</div>
                ) : (
                    <Image
                        src={profilePictureUrl ?? "/default-cover.jpg"}
                        alt="Cover Image"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                )}
                <div className="absolute -bottom-16 left-4">
                    <Avatar className="border-4 border-black h-32 w-32">
                        <AvatarImage
                            src={profilePictureUrl ?? "/default-avatar.jpg"}
                            alt="Profile Image"
                        />
                    </Avatar>

                </div>
            </div>

            <div className='border-b-[1px] border-neutral-800 pb-10 pl-[130px]'>
                <div className='mt-2 px-4'>
                    <div className='flex flex-col'>
                        <p className='text-white text-2xl font-semibold'>
                            {username}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHero;
