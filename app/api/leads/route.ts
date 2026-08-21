import { randomUUID } from 'node:crypto';
import { NextResponse } from 'next/server';

import {
  escapeHtml,
  sendSalesMail,
} from '@/lib/mail';

export const runtime = 'nodejs';

const NO_STORE_HEADERS = {
  'Cache-Control': 'no-store, max-age=0',
};

const MAX_BODY_BYTES = 20_000;

function clean(
  value: unknown,
  maxLength = 500,
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

function validEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email,
  );
}

function validPhone(phone: string) {
  return /^[+()\d\s.-]{7,30}$/.test(
    phone,
  );
}

function row(
  label: string,
  value: string,
) {
  if (!value) {
    return '';
  }

  return `
    <tr>
      <td
        style="
          padding:10px 14px;
          border-bottom:1px solid #e8eef7;
          color:#64748b;
          font-size:13px;
          width:34%;
          vertical-align:top;
        "
      >
        ${escapeHtml(label)}
      </td>

      <td
        style="
          padding:10px 14px;
          border-bottom:1px solid #e8eef7;
          color:#0f172a;
          font-size:13px;
          font-weight:600;
          vertical-align:top;
        "
      >
        ${escapeHtml(value)}
      </td>
    </tr>
  `;
}

export async function POST(
  request: Request,
) {
  const contentLength = Number(
    request.headers.get(
      'content-length',
    ) ?? 0,
  );

  if (
    contentLength >
    MAX_BODY_BYTES
  ) {
    return json(
      {
        success: false,
        error:
          'Request body is too large',
      },
      413,
    );
  }

  try {
    const body =
      await request.json();

    /*
     * Honeypot for basic bot
     * protection.
     */
    if (
      clean(body.companyWebsite)
    ) {
      return json(
        {
          success: true,
        },
        200,
      );
    }

    const formType = clean(
      body.formType,
      30,
    );

    if (
      formType !==
        'get-started' &&
      formType !== 'book-demo'
    ) {
      return json(
        {
          success: false,
          error:
            'Invalid form type',
        },
        400,
      );
    }

    const name = clean(
      body.name,
      100,
    );

    const workEmail = clean(
      body.workEmail,
      160,
    ).toLowerCase();

    const mobile = clean(
      body.mobile,
      30,
    );

    const companyName = clean(
      body.companyName,
      160,
    );

    if (
      !name ||
      !workEmail ||
      !mobile ||
      !companyName
    ) {
      return json(
        {
          success: false,
          error:
            'Please complete all required fields',
        },
        400,
      );
    }

    if (
      !validEmail(workEmail)
    ) {
      return json(
        {
          success: false,
          error:
            'Enter a valid work email',
        },
        400,
      );
    }

    if (
      !validPhone(mobile)
    ) {
      return json(
        {
          success: false,
          error:
            'Enter a valid mobile number',
        },
        400,
      );
    }

    const servicesRequired =
      Array.isArray(
        body.servicesRequired,
      )
        ? body.servicesRequired
            .map(
              (item: unknown) =>
                clean(item, 100),
            )
            .filter(Boolean)
            .slice(0, 12)
        : [];

    const leadId = `SP-${randomUUID()
      .split('-')[0]
      .toUpperCase()}`;

    const submittedAt =
      new Date().toISOString();

    const details = {
      website: clean(
        body.website,
        220,
      ),

      businessType: clean(
        body.businessType,
        120,
      ),

      paymentVolume: clean(
        body.paymentVolume,
        120,
      ),

      currentProvider: clean(
        body.currentProvider,
        160,
      ),

      message: clean(
        body.message,
        4000,
      ),

      jobRole: clean(
        body.jobRole,
        120,
      ),

      monthlyPaymentVolume:
        clean(
          body.monthlyPaymentVolume,
          120,
        ),

      currentPaymentProvider:
        clean(
          body.currentPaymentProvider,
          160,
        ),

      requirement: clean(
        body.requirement,
        4000,
      ),
    };

    const title =
      formType === 'book-demo'
        ? 'Book a Demo'
        : 'Get Started';

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
            max-width:720px;
            margin:0 auto;
            background:#ffffff;
            border:1px solid #e3eaf4;
            border-radius:18px;
            overflow:hidden;
          "
        >
          <div
            style="
              background:#061e57;
              padding:24px 28px;
              color:#ffffff;
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
              SambhavPay Website Lead
            </div>

            <h1
              style="
                margin:8px 0 0;
                font-size:24px;
              "
            >
              ${escapeHtml(
                title,
              )} — ${escapeHtml(
                leadId,
              )}
            </h1>
          </div>

          <div
            style="
              padding:18px 18px 8px;
            "
          >
            <table
              style="
                border-collapse:collapse;
                width:100%;
              "
            >
              ${row(
                'Lead ID',
                leadId,
              )}

              ${row(
                'Name',
                name,
              )}

              ${row(
                'Work Email',
                workEmail,
              )}

              ${row(
                'Mobile',
                mobile,
              )}

              ${row(
                'Company Name',
                companyName,
              )}

              ${
                formType ===
                'get-started'
                  ? row(
                      'Website',
                      details.website,
                    )
                  : ''
              }

              ${
                formType ===
                'get-started'
                  ? row(
                      'Business Type',
                      details.businessType,
                    )
                  : ''
              }

              ${
                formType ===
                'get-started'
                  ? row(
                      'Payment Volume',
                      details.paymentVolume,
                    )
                  : ''
              }

              ${
                formType ===
                'get-started'
                  ? row(
                      'Services Required',
                      servicesRequired.join(
                        ', ',
                      ),
                    )
                  : ''
              }

              ${
                formType ===
                'get-started'
                  ? row(
                      'Current Payment Gateway / PSP',
                      details.currentProvider,
                    )
                  : ''
              }

              ${
                formType ===
                'get-started'
                  ? row(
                      'Message / Requirement',
                      details.message,
                    )
                  : ''
              }

              ${
                formType ===
                'book-demo'
                  ? row(
                      'Job Role',
                      details.jobRole,
                    )
                  : ''
              }

              ${
                formType ===
                'book-demo'
                  ? row(
                      'Monthly Payment Volume',
                      details.monthlyPaymentVolume,
                    )
                  : ''
              }

              ${
                formType ===
                'book-demo'
                  ? row(
                      'Current Payment Provider',
                      details.currentPaymentProvider,
                    )
                  : ''
              }

              ${
                formType ===
                'book-demo'
                  ? row(
                      'Requirement / Challenge',
                      details.requirement,
                    )
                  : ''
              }

              ${row(
                'Submitted At',
                submittedAt,
              )}
            </table>
          </div>
        </div>
      </div>
    `;

    await sendSalesMail({
      subject: `[SambhavPay] ${title} — ${companyName} — ${leadId}`,
      html,
      replyTo: workEmail,
    });

    return json(
      {
        success: true,
        leadId,
      },
      200,
    );
  } catch (error) {
    console.error(
      'Lead submission failed',
      error,
    );

    return json(
      {
        success: false,
        error:
          'Unable to submit your request right now',
      },
      500,
    );
  }
}