'use client';

import {
  useMemo,
  useState,
} from 'react';

import {
  useSearchParams,
} from 'next/navigation';

import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  LoaderCircle,
  Send,
} from 'lucide-react';

import {
  sendWebsiteMail,
} from '@/lib/mail';

const timeSlots = [
  '10:00 AM',
  '11:30 AM',
  '2:00 PM',
  '3:30 PM',
  '5:00 PM',
];

function nextBusinessDays(
  count: number,
) {
  const result: Date[] = [];

  const cursor =
    new Date();

  cursor.setHours(
    12,
    0,
    0,
    0,
  );

  cursor.setDate(
    cursor.getDate() + 1,
  );

  while (
    result.length < count
  ) {
    const day =
      cursor.getDay();

    if (
      day !== 0 &&
      day !== 6
    ) {
      result.push(
        new Date(cursor),
      );
    }

    cursor.setDate(
      cursor.getDate() + 1,
    );
  }

  return result;
}

export function DemoCalendar() {
  const searchParams =
    useSearchParams();

  const leadId =
    searchParams.get('lead') ??
    '';

  const dates = useMemo(
    () =>
      nextBusinessDays(10),
    [],
  );

  const [
    selectedDate,
    setSelectedDate,
  ] = useState('');

  const [
    selectedTime,
    setSelectedTime,
  ] = useState('');

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

async function submit() {
  if (
    !leadId ||
    !selectedDate ||
    !selectedTime
  ) {
    setStatus('error');

    setError(
      'Select both a demo date and time.',
    );

    return;
  }

  setStatus('loading');
  setError('');

  try {
    const details = [
      `Lead ID: ${leadId}`,
      '',
      `Requested Date: ${selectedDate}`,
      `Requested Time: ${selectedTime}`,
      'Timezone: Asia/Kolkata (IST)',
    ].join('\n');

    await sendWebsiteMail({
      subject:
        `[SambhavPay] Demo time selected — ` +
        `${leadId} — ` +
        `${selectedDate} ${selectedTime}`,

      formTitle:
        'Demo Time Selected',

      leadId,

      replyTo:
        'Support@sambhavpay.com',

      details,
    });

    setStatus('success');
  } catch (err) {
    console.error(
      'Demo scheduling EmailJS error:',
      err,
    );

    setStatus('error');

    setError(
      'Unable to submit selected time. Please try again.',
    );
  }
}

  if (!leadId) {
    return (
      <div
        className="
          rounded-[2rem]
          border
          border-amber-300/30
          bg-amber-50
          p-8
          text-center

          dark:border-amber-300/20
          dark:bg-amber-300/10
        "
      >
        <CalendarDays
          className="
            mx-auto
            size-9
            text-amber-600

            dark:text-amber-300
          "
        />

        <h2
          className="
            mt-4
            font-display
            text-2xl
            font-extrabold
            tracking-[-0.04em]
            text-ink

            dark:text-white
          "
        >
          Complete the demo
          form first.
        </h2>

        <p
          className="
            mx-auto
            mt-3
            max-w-md
            text-sm
            leading-7
            text-slate-600

            dark:text-slate-300
          "
        >
          The calendar is linked
          to your demo request so
          our team can match your
          selected time with the
          form details.
        </p>

        <a
          href="/book-demo"
          className="
            mt-6
            inline-flex
            min-h-12
            items-center
            rounded-xl
            bg-brand
            px-5 py-3
            text-sm
            font-extrabold
            text-white
          "
        >
          Go to Book a Demo
        </a>
      </div>
    );
  }

  if (
    status === 'success'
  ) {
    return (
      <div
        className="
          relative
          overflow-hidden
          rounded-[2rem]
          border
          border-emerald-300/30
          bg-gradient-to-br
          from-emerald-50
          to-white
          p-8
          text-center

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

        <div className="relative">
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
            Demo time submitted
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
            Your preferred slot
            is on its way to our
            team.
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-7
              text-slate-600

              dark:text-slate-300
            "
          >
            Requested:{' '}
            <strong>
              {selectedDate}
            </strong>{' '}
            at{' '}
            <strong>
              {selectedTime} IST
            </strong>
            . The sales team will
            confirm the meeting
            after checking
            availability.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
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

      <div className="relative">
        <div
          className="
            border-b
            border-slate-200
            pb-5

            dark:border-white/10
          "
        >
          <p
            className="
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.18em]
              text-brand

              dark:text-cyan
            "
          >
            Lead {leadId}
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
            Select your preferred
            demo time.
          </h2>

          <p
            className="
              mt-2
              text-sm
              leading-7
              text-slate-500

              dark:text-slate-400
            "
          >
            Available selections
            below are shown in
            India Standard Time
            (IST).
          </p>
        </div>

        <div className="mt-7">
          <div
            className="
              flex
              items-center gap-2
              text-sm
              font-extrabold
              text-ink

              dark:text-white
            "
          >
            <CalendarDays
              className="
                size-4
                text-brand

                dark:text-cyan
              "
            />

            Choose a date
          </div>

          <div
            className="
              mt-4
              grid gap-2

              sm:grid-cols-2

              lg:grid-cols-5
            "
          >
            {dates.map(
              (date) => {
                const value =
                  new Intl.DateTimeFormat(
                    'en-IN',
                    {
                      weekday:
                        'short',
                      day: '2-digit',
                      month:
                        'short',
                      year:
                        'numeric',
                    },
                  ).format(date);

                const active =
                  selectedDate ===
                  value;

                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => {
                      setSelectedDate(
                        value,
                      );

                      setSelectedTime(
                        '',
                      );

                      setStatus(
                        'idle',
                      );
                    }}
                    className={`
                      rounded-xl
                      border
                      p-3
                      text-left
                      transition

                      ${
                        active
                          ? `
                            border-brand
                            bg-brand
                            text-white
                            shadow-button-glow

                            dark:border-cyan
                            dark:bg-cyan
                            dark:text-navy
                          `
                          : `
                            border-slate-200
                            bg-slate-50/70
                            text-ink

                            hover:border-brand/25
                            hover:bg-brand/[0.04]

                            dark:border-white/10
                            dark:bg-white/[0.03]
                            dark:text-white
                            dark:hover:border-cyan/25
                          `
                      }
                    `}
                  >
                    <span
                      className="
                        block
                        text-[10px]
                        font-extrabold
                        uppercase
                        tracking-[0.12em]
                        opacity-70
                      "
                    >
                      {
                        value.split(
                          ',',
                        )[0]
                      }
                    </span>

                    <span
                      className="
                        mt-1
                        block
                        text-sm
                        font-extrabold
                      "
                    >
                      {value.replace(
                        `${
                          value.split(
                            ',',
                          )[0]
                        }, `,
                        '',
                      )}
                    </span>
                  </button>
                );
              },
            )}
          </div>
        </div>

        <div className="mt-8">
          <div
            className="
              flex
              items-center gap-2
              text-sm
              font-extrabold
              text-ink

              dark:text-white
            "
          >
            <Clock3
              className="
                size-4
                text-brand

                dark:text-cyan
              "
            />

            Choose a time
          </div>

          <div
            className="
              mt-4
              grid
              grid-cols-2
              gap-2

              sm:grid-cols-3

              lg:grid-cols-5
            "
          >
            {timeSlots.map(
              (slot) => {
                const active =
                  selectedTime ===
                  slot;

                return (
                  <button
                    key={slot}
                    type="button"
                    disabled={
                      !selectedDate
                    }
                    onClick={() => {
                      setSelectedTime(
                        slot,
                      );

                      setStatus(
                        'idle',
                      );
                    }}
                    className={`
                      rounded-xl
                      border
                      px-3 py-3
                      text-sm
                      font-extrabold
                      transition

                      disabled:cursor-not-allowed
                      disabled:opacity-40

                      ${
                        active
                          ? `
                            border-brand
                            bg-brand
                            text-white

                            dark:border-cyan
                            dark:bg-cyan
                            dark:text-navy
                          `
                          : `
                            border-slate-200
                            bg-white
                            text-slate-700

                            hover:border-brand/25

                            dark:border-white/10
                            dark:bg-white/[0.03]
                            dark:text-slate-300
                            dark:hover:border-cyan/25
                          `
                      }
                    `}
                  >
                    {slot}
                  </button>
                );
              },
            )}
          </div>
        </div>

        {status ===
        'error' ? (
          <div
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
            {error}
          </div>
        ) : null}

        <button
          type="button"
          onClick={submit}
          disabled={
            status ===
              'loading' ||
            !selectedDate ||
            !selectedTime
          }
          className="
            mt-8
            inline-flex
            min-h-[52px]
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-brand
            px-5 py-3
            text-sm
            font-extrabold
            text-white
            shadow-button-glow
            transition

            hover:-translate-y-1
            hover:bg-[#0d5bbb]

            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          {status ===
          'loading' ? (
            <LoaderCircle className="size-4 animate-spin" />
          ) : (
            <Send className="size-4" />
          )}

          {status ===
          'loading'
            ? 'Submitting…'
            : 'Confirm Preferred Time'}
        </button>

        <p
          className="
            mt-4
            text-xs
            leading-5
            text-slate-500

            dark:text-slate-400
          "
        >
          This page submits your
          preferred demo slot. The
          meeting is confirmed
          after the SambhavPay team
          verifies availability.
        </p>
      </div>
    </div>
  );
}