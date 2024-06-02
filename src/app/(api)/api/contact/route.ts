import { error } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';

export async function POST(
    req: Request,
) {
    console.log(req.body)
    const { message, username, avatarUrl, email } = await req.json();

    const webhook = process.env.DISCORD_WEBHOOK_URL;

    console.log(webhook)

    if (!webhook) {
        return new NextResponse("Webhook not found", { status: 500 })
    }

    const data = {
        content: message,
        username: username,
        avatar_url: avatarUrl,
        embeds: [
            {
                title: 'New Message from ' + username,
                color: 3447003,
                fields: [
                    {
                        name: 'Email',
                        value: email,
                        inline: true
                    },
                    {
                        name: 'Message',
                        value: message,
                        inline: true
                    }
                ],
                thumbnail: {
                    url: avatarUrl,
                },
                timestamp: new Date(),
            },
        ],
    };

    try {
        const response = await fetch(webhook, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        return NextResponse.json(response)
    } catch (error: any) {
        return new NextResponse("Internal Error", { status: 500 })
    }
}