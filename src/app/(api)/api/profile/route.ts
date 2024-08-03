import { clerkClient, User } from "@clerk/nextjs/server";
import { NextResponse, NextRequest } from "next/server";

interface RequestBody {
  username: string;
}

interface FetchUserProfileResponse {
  profilePictureUrl: string;
  username: string;
  createdAt: Number;
}

export async function POST(req: NextRequest) {
  try {
    const { username }: RequestBody = await req.json();

    if (!username) {
      return new NextResponse("Username is required", { status: 400 });
    }

    const user: User | null = await clerkClient.users.getUser(username);

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const profilePictureUrl = user.imageUrl;
    const userUsername = user.username;
    const createdAt = user.createdAt;

    const response: FetchUserProfileResponse = {
      profilePictureUrl,
      username: userUsername ?? "",
      createdAt,
    };

    return new NextResponse(
      JSON.stringify(response),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
