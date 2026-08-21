import { NextResponse } from 'next/server';

import {
  escapeHtml,
  sendSalesMail,
} from '@/lib/mail';

export const runtime = 'nodejs';

const NO_STORE_HEADERS = {
  'Cache-Control': 'no-store, max-age=0',
};

function clean(
  value: unknown,
  maxLength = 250,
) {
  return typeof value === 'string'
    ? value.trim().slice(0, maxLength)
    : '';
}

function json(
  body: Record<string, unknown>,
  status: number,
) {
  return NextResponse.json(body, {
    status,
    headers: NO_STORE_HEADERS,
  });
}

export async function POST(
  request: Request,
) {
  try {
    const body =
      await request.json();

    const leadId = clean(
      body.leadId,
      40,
    );

    const date = clean(
      body.date,
      30,
    );

    const time = clean(
      body.time,
      30,
    );

    const timezone =
      clean(
        body.timezone,
        60,
      ) ||
      'Asia/Kolkata';

    if (
      !leadId ||
      !date ||
      !time
    ) {
      return json(
        {
          success: false,
          error:
            'Select a demo date and time',
        },
        400,
      );
    }

    const html = `
      <div
        style="
          font-family:Inter,Arial,sans-serif;
          background:#f5f8fc;
          padding:28px;
          color:#0f172a;
        "
      >
        <div
          style="
            max-width:680px;
            margin:0 auto;
            background:#fff;
            border:1px solid #e3eaf4;
            border-radius:18px;
            overflow:hidden;
          "
        >
          <div
            style="
              background:#061e57;
              padding:24px 28px;
              color:#fff;
            "
          >
            <div
              style="
                font-size:12px;
                letter-spacing:.14em;
                text-transform:uppercase;
                color:#54d9ff;
                font-weight:700;
              "
            >
              Demo Time Selected
            </div>

            <h1
              style="
                margin:8px 0 0;
                font-size:24px;
              "
            >
              ${escapeHtml(
                leadId,
              )}
            </h1>
          </div>

          <div
            style="
              padding:28px;
            "
          >
            <p>
              <strong>
                Requested date:
              </strong>

              ${escapeHtml(
                date,
              )}
            </p>

            <p>
              <strong>
                Requested time:
              </strong>

              ${escapeHtml(
                time,
              )}
            </p>

            <p>
              <strong>
                Timezone:
              </strong>

              ${escapeHtml(
                timezone,
              )}
            </p>
          </div>
        </div>
      </div>
    `;

    await sendSalesMail({
      subject:
        `[SambhavPay] Demo time selected — ` +
        `${leadId} — ${date} ${time}`,

      html,
    });

    return json(
      {
        success: true,
      },
      200,
    );
  } catch (error) {
    console.error(
      'Demo scheduling failed',
      error,
    );

    return json(
      {
        success: false,
        error:
          'Unable to save the selected time right now',
      },
      500,
    );
  }
}