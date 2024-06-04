import { error } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';
import { Resend } from "resend"

const resend: any = new Resend(process.env.RESEND_API_KEY)

export async function POST(
    req: Request,
) {
    console.log(req.body)
    const { message, username, avatarUrl, email } = await req.json();

    const webhook = process.env.DISCORD_WEBHOOK_URL;

    if (!webhook) {
        return new NextResponse("Webhook not found", { status: 500 })
    }

    try {
        const resendEmail = await resend.emails.send({
            from: 'contact@lockscript.dev',
            to: `${email}`,
            subject: "Your Message Has Been Received - LockScript Support",
            text: "Dear User,\n\nThank you for reaching out to us. We have successfully received your message and our support team is currently reviewing it. We aim to respond to all inquiries within 24-48 business hours. We appreciate your patience and understanding.\n\nBest Regards,\nLockScript Support Team"
        })

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