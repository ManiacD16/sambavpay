'use client';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';

import {
  useRouter,
} from 'next/navigation';

import {
  useState,
  type FormEvent,
  type InputHTMLAttributes,
} from 'react';

import {
  CheckCircle2,
  LoaderCircle,
  Send,
  Sparkles,
} from 'lucide-react';

import {
  sendWebsiteMail,
} from '@/lib/mail';

const businessTypes = [
  'E-Commerce / Retail',
  'Fintech / Financial Services',
  'Marketplace',
  'Travel / Hospitality',
  'SaaS / Subscription',
  'Education / EdTech',
  'Healthcare / HealthTech',
  'Logistics / Mobility',
  'BFSI / Enterprise',
  'Government / Public Services',
  'Utility / Bill Payments',
  'NBFC',
  'Other',
];

const paymentVolumes = [
  'Below ₹10 Lakh / month',
  '₹10 Lakh – ₹1 Crore / month',
  '₹1 Crore – ₹10 Crore / month',
  '₹10 Crore – ₹50 Crore / month',
  '₹50 Crore+ / month',
];

const services = [
  'Payment Orchestration',
  'Payment Gateway',
  'Payouts',
  'Payment Intelligence',
  'Risk & Fraud',
  'Sambhav Verify',
];

type Variant =
  | 'get-started'
  | 'book-demo';

export function LeadForm({
  variant,
}: {
  variant: Variant;
}) {
  const router = useRouter();

  const [
    status,
    setStatus,
  ] = useState<
    | 'idle'
    | 'loading'
    | 'success'
    | 'error'
  >('idle');

  const [
    error,
    setError,
  ] = useState('');

  const isDemo =
    variant === 'book-demo';

async function submit(
  event: FormEvent<HTMLFormElement>,
) {
  event.preventDefault();

  setStatus('loading');
  setError('');

  const form =
    event.currentTarget;

  const formData =
    new FormData(form);

  const value = (
    fieldName: string,
  ) =>
    String(
      formData.get(
        fieldName,
      ) ?? '',
    ).trim();

  /*
   * Honeypot bot protection.
   */
  if (
    value('companyWebsite')
  ) {
    form.reset();
    setStatus('success');
    return;
  }

  const name =
    value('name');

  const workEmail =
    value('workEmail');

  const mobile =
    value('mobile');

  const companyName =
    value('companyName');

  const leadId =
    `SP-${crypto
      .randomUUID()
      .split('-')[0]
      .toUpperCase()}`;

  const formTitle =
    isDemo
      ? 'Book a Demo'
      : 'Get Started';

  const servicesRequired =
    formData
      .getAll(
        'servicesRequired',
      )
      .map((item) =>
        String(item).trim(),
      )
      .filter(Boolean);

  const details = isDemo
    ? [
        `Name: ${name}`,
        `Work Email: ${workEmail}`,
        `Mobile: ${mobile}`,
        `Company Name: ${companyName}`,
        '',
        `Job Role: ${
          value('jobRole') ||
          'Not provided'
        }`,
        `Monthly Payment Volume: ${
          value(
            'monthlyPaymentVolume',
          ) ||
          'Not provided'
        }`,
        `Current Payment Provider: ${
          value(
            'currentPaymentProvider',
          ) ||
          'Not provided'
        }`,
        '',
        'Requirement / Challenge:',
        value('requirement') ||
          'Not provided',
      ].join('\n')
    : [
        `Name: ${name}`,
        `Work Email: ${workEmail}`,
        `Mobile: ${mobile}`,
        `Company Name: ${companyName}`,
        '',
        `Website: ${
          value('website') ||
          'Not provided'
        }`,
        `Business Type: ${
          value(
            'businessType',
          ) ||
          'Not provided'
        }`,
        `Payment Volume: ${
          value(
            'paymentVolume',
          ) ||
          'Not provided'
        }`,
        `Services Required: ${
          servicesRequired.length >
          0
            ? servicesRequired.join(
                ', ',
              )
            : 'Not provided'
        }`,
        `Current Payment Gateway / PSP: ${
          value(
            'currentProvider',
          ) ||
          'Not provided'
        }`,
        '',
        'Message / Requirement:',
        value('message') ||
          'Not provided',
      ].join('\n');

  try {
    await sendWebsiteMail({
      subject:
        `[SambhavPay] ${formTitle} — ` +
        `${companyName} — ${leadId}`,

      formTitle,

      leadId,

      replyTo:
        workEmail,

      details,
    });

    form.reset();

    if (isDemo) {
      router.push(
        `/book-demo/calendar?lead=${encodeURIComponent(
          leadId,
        )}`,
      );

      return;
    }

    setStatus('success');
  } catch (err) {
    console.error(
      'EmailJS submission failed:',
      err,
    );

    setStatus('error');

    setError(
      'Unable to submit your request right now. Please try again.',
    );
  }
}

  if (
    status === 'success'
  ) {
    return (
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.98,
          y: 14,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        className="
          relative
          flex
          min-h-[620px]
          flex-col
          items-center
          justify-center
          overflow-hidden
          rounded-[2rem]
          border
          border-emerald-300/30
          bg-gradient-to-br
          from-emerald-50
          to-white
          p-8
          text-center
          shadow-[0_28px_90px_rgba(6,30,87,.10)]

          dark:border-emerald-300/20
          dark:from-emerald-300/10
          dark:to-white/[0.035]
        "
      >
        <div
          className="
            absolute inset-0
            bg-grid-light
            bg-[size:40px_40px]
            opacity-40

            dark:bg-grid-dark
            dark:opacity-20
          "
        />

        <div className="relative max-w-lg">
          <span
            className="
              mx-auto
              flex size-20
              items-center
              justify-center
              rounded-[1.6rem]
              bg-emerald-500
              text-white
              shadow-[0_22px_60px_rgba(16,185,129,.28)]
            "
          >
            <CheckCircle2 className="size-10" />
          </span>

          <p
            className="
              mt-6
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.2em]
              text-emerald-600

              dark:text-emerald-300
            "
          >
            Request received
          </p>

          <h2
            className="
              mt-3
              font-display
              text-3xl
              font-extrabold
              tracking-[-0.05em]
              text-ink

              dark:text-white
            "
          >
            You&apos;re ready for
            the next step.
          </h2>

          <p
            className="
              mt-4
              text-sm
              leading-7
              text-slate-600

              dark:text-slate-300
            "
          >
            Your details have been
            sent to
            {' '}
            sales@sambhavpay.com.
            Our team will review the
            requirement and follow
            up with you.
          </p>

          <button
            type="button"
            onClick={() =>
              setStatus('idle')
            }
            className="
              mt-7
              rounded-xl
              bg-brand
              px-5 py-3
              text-sm
              font-extrabold
              text-white
              transition

              hover:-translate-y-1
              hover:bg-[#0d5bbb]
            "
          >
            Submit another request
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={submit}
      aria-busy={
        status === 'loading'
      }
      className="
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-slate-200
        bg-white/90
        p-5
        shadow-[0_32px_90px_rgba(6,30,87,.13)]
        backdrop-blur-xl

        sm:p-8

        dark:border-white/10
        dark:bg-white/[0.04]
      "
    >
      {/* Honeypot */}
      <div
        className="
          pointer-events-none
          absolute
          h-0 w-0
          overflow-hidden
          opacity-0
        "
        aria-hidden="true"
      >
        <label
          htmlFor={`${variant}-companyWebsite`}
        >
          Leave this field empty
        </label>

        <input
          id={`${variant}-companyWebsite`}
          name="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div
        className="
          absolute
          -right-24 -top-24
          size-72
          rounded-full
          bg-brand/[0.09]
          blur-3xl

          dark:bg-cyan/[0.07]
        "
      />

      <div
        className="
          relative
          mb-7
          border-b
          border-slate-200
          pb-5

          dark:border-white/10
        "
      >
        <p
          className="
            flex
            items-center gap-2
            text-[10px]
            font-extrabold
            uppercase
            tracking-[0.18em]
            text-brand

            dark:text-cyan
          "
        >
          <Sparkles className="size-3.5" />

          {isDemo
            ? 'Book a Demo'
            : 'Get Started'}
        </p>

        <h2
          className="
            mt-2
            font-display
            text-2xl
            font-extrabold
            tracking-[-0.04em]
            text-ink

            dark:text-white
          "
        >
          {isDemo
            ? 'Tell us what you want to solve.'
            : 'Tell us about your payment stack.'}
        </h2>
      </div>

      <div
        className="
          relative
          grid gap-5

          sm:grid-cols-2
        "
      >
        <Field
          label="Name"
          name="name"
          autoComplete="name"
          minLength={2}
          maxLength={100}
          required
        />

        <Field
          label="Work Email"
          name="workEmail"
          type="email"
          inputMode="email"
          autoComplete="email"
          maxLength={160}
          required
        />

        <Field
          label="Mobile"
          name="mobile"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          minLength={7}
          maxLength={30}
          required
        />

        <Field
          label="Company Name"
          name="companyName"
          autoComplete="organization"
          minLength={2}
          maxLength={160}
          required
        />

        {isDemo ? (
          <>
            <Field
              label="Job Role"
              name="jobRole"
              autoComplete="organization-title"
              maxLength={120}
            />

            <SelectField
              label="Monthly Payment Volume"
              name="monthlyPaymentVolume"
              options={
                paymentVolumes
              }
              placeholder="Select monthly volume"
            />

            <Field
              label="Current Payment Provider"
              name="currentPaymentProvider"
              maxLength={160}
              className="sm:col-span-2"
            />

            <TextAreaField
              label="Requirement / Challenge"
              name="requirement"
              placeholder="Tell us about your current payment setup, challenges and what you want to improve."
            />
          </>
        ) : (
          <>
            <Field
              label="Website"
              name="website"
              type="url"
              inputMode="url"
              autoComplete="url"
              placeholder="https://"
            />

            <SelectField
              label="Business Type"
              name="businessType"
              options={
                businessTypes
              }
              placeholder="Select business type"
            />

            <SelectField
              label="Payment Volume"
              name="paymentVolume"
              options={
                paymentVolumes
              }
              placeholder="Select payment volume"
              className="sm:col-span-2"
            />

            <fieldset className="sm:col-span-2">
              <legend
                className="
                  mb-3
                  text-xs
                  font-bold
                  text-ink

                  dark:text-white
                "
              >
                Services Required
              </legend>

              <div
                className="
                  grid gap-2

                  sm:grid-cols-2
                "
              >
                {services.map(
                  (service) => (
                    <label
                      key={service}
                      className="
                        flex
                        cursor-pointer
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50/60
                        p-3
                        text-sm
                        font-semibold
                        text-slate-700
                        transition

                        hover:border-brand/25
                        hover:bg-brand/[0.04]

                        dark:border-white/10
                        dark:bg-white/[0.03]
                        dark:text-slate-300
                        dark:hover:border-cyan/25
                      "
                    >
                      <input
                        type="checkbox"
                        name="servicesRequired"
                        value={
                          service
                        }
                        className="
                          size-4
                          rounded
                          border-slate-300
                          accent-brand
                        "
                      />

                      {service}
                    </label>
                  ),
                )}
              </div>
            </fieldset>

            <Field
              label="Current Payment Gateway / PSP"
              name="currentProvider"
              maxLength={160}
              className="sm:col-span-2"
            />

            <TextAreaField
              label="Message / Requirement"
              name="message"
              placeholder="Share your payment, orchestration, payout, verification or operational requirements."
            />
          </>
        )}
      </div>

      <AnimatePresence>
        {status === 'error' ? (
          <motion.div
            initial={{
              opacity: 0,
              y: -5,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
            }}
            role="alert"
            className="
              mt-5
              rounded-xl
              border
              border-rose-200
              bg-rose-50
              p-3
              text-sm
              font-semibold
              text-rose-600

              dark:border-rose-300/20
              dark:bg-rose-300/10
              dark:text-rose-300
            "
          >
            {error ||
              'We could not submit your request. Please try again.'}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="submit"
        disabled={
          status === 'loading'
        }
        className="
          group
          relative
          mt-7
          inline-flex
          min-h-[52px]
          w-full
          items-center
          justify-center
          gap-2
          overflow-hidden
          rounded-xl
          bg-brand
          px-5 py-3
          text-sm
          font-extrabold
          text-white
          shadow-button-glow
          transition
          duration-500

          hover:-translate-y-1
          hover:bg-[#0d5bbb]

          disabled:cursor-wait
          disabled:opacity-70
        "
      >
        {status === 'loading' ? (
          <LoaderCircle className="size-4 animate-spin" />
        ) : (
          <Send className="size-4" />
        )}

        {status === 'loading'
          ? 'Submitting…'
          : isDemo
            ? 'Book My Demo'
            : 'Get Started'}
      </button>

      <p
        className="
          relative
          mt-4
          text-xs
          leading-5
          text-slate-500

          dark:text-slate-400
        "
      >
        Your information is sent
        securely to the SambhavPay
        sales team for this request.
      </p>
    </form>
  );
}

function Field({
  label,
  className,
  name,
  required,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
}) {
  const id = String(name);

  return (
    <label
      htmlFor={id}
      className={`group ${
        className ?? ''
      }`}
    >
      <span
        className="
          mb-2
          block
          text-xs
          font-bold
          text-ink

          dark:text-white
        "
      >
        {label}

        {required ? (
          <span
            className="
              ml-1
              text-brand

              dark:text-cyan
            "
          >
            *
          </span>
        ) : null}
      </span>

      <input
        {...props}
        id={id}
        name={name}
        required={required}
        className="
          h-[52px]
          w-full
          rounded-xl
          border
          border-slate-200
          bg-white
          px-3.5
          text-sm
          text-ink
          outline-none
          transition

          placeholder:text-slate-400

          focus:border-brand
          focus:ring-4
          focus:ring-brand/10

          dark:border-white/10
          dark:bg-[#071c3b]
          dark:text-white
          dark:focus:border-cyan
        "
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  placeholder,
  className,
}: {
  label: string;
  name: string;
  options: string[];
  placeholder: string;
  className?: string;
}) {
  return (
    <label
      htmlFor={name}
      className={`group ${
        className ?? ''
      }`}
    >
      <span
        className="
          mb-2
          block
          text-xs
          font-bold
          text-ink

          dark:text-white
        "
      >
        {label}
      </span>

      <select
        id={name}
        name={name}
        defaultValue=""
        className="
          h-[52px]
          w-full
          rounded-xl
          border
          border-slate-200
          bg-white
          px-3.5
          text-sm
          text-ink
          outline-none
          transition

          focus:border-brand
          focus:ring-4
          focus:ring-brand/10

          dark:border-white/10
          dark:bg-[#071c3b]
          dark:text-white
          dark:focus:border-cyan
        "
      >
        <option value="">
          {placeholder}
        </option>

        {options.map(
          (option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ),
        )}
      </select>
    </label>
  );
}

function TextAreaField({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder: string;
}) {
  return (
    <label
      htmlFor={name}
      className="
        group
        sm:col-span-2
      "
    >
      <span
        className="
          mb-2
          block
          text-xs
          font-bold
          text-ink

          dark:text-white
        "
      >
        {label}
      </span>

      <textarea
        id={name}
        name={name}
        rows={5}
        maxLength={4000}
        placeholder={placeholder}
        className="
          w-full
          resize-none
          rounded-xl
          border
          border-slate-200
          bg-white
          px-3.5 py-3
          text-sm
          text-ink
          outline-none
          transition

          placeholder:text-slate-400

          focus:border-brand
          focus:ring-4
          focus:ring-brand/10

          dark:border-white/10
          dark:bg-[#071c3b]
          dark:text-white
          dark:focus:border-cyan
        "
      />
    </label>
  );
}