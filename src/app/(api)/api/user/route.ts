import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(
    req: Request
) {
    try {
        const user = await currentUser()

        if (!user) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        return new NextResponse(
            JSON.stringify(user),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Error fetching current user:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}