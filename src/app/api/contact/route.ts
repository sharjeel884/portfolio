import { NextResponse } from "next/server";

// Simple in-memory rate limiter per IP/session
const rateLimitMap = new Map<string, { count: number; firstRequestTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "local-client";
    const now = Date.now();

    // Check rate limit
    const clientRate = rateLimitMap.get(ip);
    if (clientRate) {
      if (now - clientRate.firstRequestTime < RATE_LIMIT_WINDOW) {
        if (clientRate.count >= MAX_REQUESTS) {
          return NextResponse.json(
            { error: "Too many messages sent. Please wait a minute before trying again." },
            { status: 429 }
          );
        }
        clientRate.count += 1;
      } else {
        rateLimitMap.set(ip, { count: 1, firstRequestTime: now });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, firstRequestTime: now });
    }

    const body = await request.json();
    const { name, email, subject, message } = body;

    // Field validations
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please write a message with at least 10 characters." },
        { status: 400 }
      );
    }

    // In real production, this integrates with Resend, Postmark, or SendGrid
    console.log(`[Contact Ingestion] From: ${name} <${email}> | Subject: ${subject || "General"} | Msg: ${message}`);

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully. I will get back to you within 24-48 hours.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error while processing your request." },
      { status: 500 }
    );
  }
}
