'use client';

import emailjs from '@emailjs/browser';

export type WebsiteMailParams = {
  subject: string;
  formTitle: string;
  leadId: string;
  replyTo?: string;
  details: string;
};

function getEmailJsConfig() {
  const serviceId =
    process.env
      .NEXT_PUBLIC_EMAILJS_SERVICE_ID;

  const templateId =
    process.env
      .NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

  const publicKey =
    process.env
      .NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (
    !serviceId ||
    !templateId ||
    !publicKey
  ) {
    throw new Error(
      'Email service is not configured.',
    );
  }

  return {
    serviceId,
    templateId,
    publicKey,
  };
}

export async function sendWebsiteMail({
  subject,
  formTitle,
  leadId,
  replyTo = '',
  details,
}: WebsiteMailParams) {
  const {
    serviceId,
    templateId,
    publicKey,
  } = getEmailJsConfig();

  const submittedAt =
    new Date().toLocaleString(
      'en-IN',
      {
        timeZone:
          'Asia/Kolkata',
        dateStyle: 'medium',
        timeStyle: 'short',
      },
    );

  return emailjs.send(
    serviceId,
    templateId,
    {
      subject,

      form_title:
        formTitle,

      lead_id:
        leadId,

      reply_to:
        replyTo,

      details,

      submitted_at:
        `${submittedAt} IST`,
    },
    {
      publicKey,
    },
  );
}