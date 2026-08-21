import type {
  Metadata,
} from 'next';

import {
  Suspense,
} from 'react';

import {
  CalendarDays,
} from 'lucide-react';

import {
  InnerHero,
} from '@/components/sections/inner-hero';

import {
  DemoCalendar,
} from '@/components/forms/demo-calendar';

import {
  Container,
} from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'Select Demo Time',

  description:
    'Select a preferred SambhavPay demo date and time.',

  robots: {
    index: false,
    follow: false,
  },
};

export default function DemoCalendarPage() {
  return (
    <>
      <InnerHero
        eyebrow="Demo Calendar"
        title="Choose a time that works for you."
        description="Select a preferred business day and demo time. Your selection will be linked to the demo request you just submitted."
        icon={CalendarDays}
      />

      <section className="pb-24 lg:pb-36">
        <Container>
          <Suspense
            fallback={
              <div
                className="
                  min-h-[520px]
                  rounded-[2rem]
                  border
                  border-slate-200
                  bg-white/70

                  dark:border-white/10
                  dark:bg-white/[0.03]
                "
              />
            }
          >
            <DemoCalendar />
          </Suspense>
        </Container>
      </section>
    </>
  );
}