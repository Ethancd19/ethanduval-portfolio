export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, message, company } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ok: false, error: "Missing required fields"}, { status: 400 });
        }

        const TO = process.env.CONTACT_TO!;
        const FROM = process.env.CONTACT_FROM!;

        await resend.emails.send({
            from: `Portfolio Contact <${FROM}>`,
            to: [TO],
            replyTo: email,
            subject: `New message from ${name} via Portfolio Contact Form`,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Company:</strong> ${company || 'N/A'}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, "<br/>")}</p>
            `,
        });

        await resend.emails.send({
            from: `Ethan Duval <${FROM}>`,
            to: [email],
            subject: `Thanks, ${name}! I got your message`,
            replyTo: TO,
            html: `
                <p>Hi ${name},</p>
                <p>Thank you for your message! I'll get back to you soon.</p>
                <p>Here's a copy of your message for your records:</p>
                <blockquote style="border-left: 4px solid var(--color-accent-border); padding-left: 1rem; margin-left: 0; color: var(--color-foreground); background: var(--color-card-bg);">
                    <p>${message.replace(/\n/g, "<br/>")}</p>
                </blockquote>
                <p>If you have any further questions or need assistance, feel free to reach out!</p>
                <p>Kind regards,</p>
                <p>Ethan Duval</p>
            `,
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ ok: false, error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
}