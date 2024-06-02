export async function sendMessageToDiscordWebhook(message: string, username: string, avatarUrl: string, email: string) {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
        throw new Error('DISCORD_WEBHOOK_URL is not set');
    }

    const data = {
        content: message,
        username: username,
        avatar_url: avatarUrl,
        embeds: [
            {
                title: 'Email',
                description: email,
            },
        ],
    };

    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
}