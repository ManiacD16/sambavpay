import { NextResponse } from 'next/server';
import { productInterests } from '@/data/contact';

const required = ['firstName', 'lastName', 'email', 'phone', 'company', 'interest'] as const;
const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 4000;
const MAX_BODY_BYTES = 12_000;
const NO_STORE_HEADERS = { 'Cache-Control': 'no-store, max-age=0' };

function clean(value: unknown, maxLength = MAX_FIELD_LENGTH) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function json(body: Record<string, unknown>, status: number) {
  return NextResponse.json(body, { status, headers: NO_STORE_HEADERS });
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get('content-length') ?? 0);
  if (contentLength > MAX_BODY_BYTES) return json({ success: false, error: 'Request body is too large' }, 413);

  try {
    const body = await request.json();

    // Quietly accept bot submissions without forwarding them.
    if (clean(body.companyWebsite)) return json({ success: true }, 200);

    const payload = {
      firstName: clean(body.firstName, 80),
      lastName: clean(body.lastName, 80),
      email: clean(body.email, 160).toLowerCase(),
      phone: clean(body.phone, 30),
      company: clean(body.company, 160),
      interest: clean(body.interest, 80),
      message: clean(body.message, MAX_MESSAGE_LENGTH),
      source: 'sambhavpay-website',
      submittedAt: new Date().toISOString(),
    };

    const missing = required.filter((field) => payload[field] === '');
    if (missing.length > 0) return json({ success: false, error: 'Missing required fields', fields: missing }, 400);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      return json({ success: false, error: 'Invalid email address' }, 400);
    }

    if (!/^[+()\d\s.-]{7,30}$/.test(payload.phone)) {
      return json({ success: false, error: 'Invalid phone number' }, 400);
    }

    if (!productInterests.includes(payload.interest as (typeof productInterests)[number])) {
      return json({ success: false, error: 'Invalid product interest' }, 400);
    }

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (!webhookUrl) return json({ success: false, error: 'Contact service is not configured' }, 503);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(process.env.CONTACT_WEBHOOK_TOKEN
            ? { Authorization: `Bearer ${process.env.CONTACT_WEBHOOK_TOKEN}` }
            : {}),
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
        cache: 'no-store',
      });

      if (!response.ok) return json({ success: false, error: 'Contact service rejected the request' }, 502);
    } finally {
      clearTimeout(timeout);
    }

    return json({ success: true }, 200);
  } catch {
    return json({ success: false, error: 'Invalid request body' }, 400);
  }
}
