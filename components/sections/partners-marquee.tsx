import { Building2, Network } from 'lucide-react';
import { Container } from '@/components/ui/container';

const providers = [
  'PayU',
  'SabPaisa',
  'IDFC Bank',
  'RBL Bank',
  'iServeU',
  'NPST',
  'Cashfree',
  'Razorpay',
  'Easebuzz',
  'NPCI',
  'MobiKwik',
  'Unlimit',
  'and more',
];

function ProviderRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-3 pr-3 sm:gap-4 sm:pr-4"
    >
      {providers.map((provider) => (
        <div
          key={provider}
          className="
            group/provider
            inline-flex h-11 shrink-0 items-center gap-2.5
            rounded-full
            border border-slate-200/80
            bg-white/70
            px-4
            text-xs font-bold tracking-[-0.01em] text-slate-600
            shadow-[0_8px_24px_rgba(6,30,87,.055)]
            backdrop-blur-xl
            transition duration-300
            hover:-translate-y-0.5
            hover:border-brand/25
            hover:text-brand

            dark:border-white/[0.08]
            dark:bg-white/[0.045]
            dark:text-slate-300
            dark:shadow-none
            dark:hover:border-cyan/25
            dark:hover:text-cyan

            sm:h-12
            sm:px-5
            sm:text-sm
          "
        >
          <span
            className="
              size-1.5 rounded-full
              bg-brand/55
              transition
              group-hover/provider:bg-brand

              dark:bg-cyan/55
              dark:group-hover/provider:bg-cyan
            "
          />

          {provider}
        </div>
      ))}
    </div>
  );
}

export function PartnersMarquee() {
  return (
    <section
      aria-labelledby="payment-network-title"
      className="
        relative z-10
        -mt-10
        overflow-hidden
        pb-14

        sm:-mt-8

        lg:-mt-14
        lg:pb-20
      "
    >
      <Container>
        <div
          className="
            relative
            overflow-hidden
            rounded-[1.6rem]
            border border-slate-200/75
            bg-white/55
            px-4 py-5
            shadow-[0_24px_70px_rgba(6,30,87,.07)]
            backdrop-blur-2xl

            dark:border-white/[0.075]
            dark:bg-white/[0.025]
            dark:shadow-[0_24px_70px_rgba(0,0,0,.14)]

            sm:px-5
            sm:py-6

            lg:px-6
          "
        >
          {/* subtle background glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute inset-0
              bg-gradient-to-r
              from-brand/[0.035]
              via-transparent
              to-cyan/[0.04]

              dark:from-brand/[0.06]
              dark:to-cyan/[0.055]
            "
          />

          {/* heading */}
          <div
            className="
              relative
              mb-5
              flex flex-col gap-3
              border-b border-slate-200/70
              pb-5

              dark:border-white/[0.07]

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div className="flex items-start gap-3">
              <span
                className="
                  flex size-10 shrink-0
                  items-center justify-center
                  rounded-xl
                  bg-brand/[0.08]
                  text-brand

                  dark:bg-cyan/10
                  dark:text-cyan
                "
              >
                <Network className="size-[18px]" />
              </span>

              <div>
                <p
                  id="payment-network-title"
                  className="
                    text-sm
                    font-extrabold
                    tracking-[-0.02em]
                    text-ink

                    dark:text-white

                    sm:text-[15px]
                  "
                >
                  Connected with leading banks, PSPs and payment
                  infrastructure providers.
                </p>

                <p
                  className="
                    mt-1
                    text-[11px]
                    leading-5
                    text-slate-500

                    dark:text-slate-400

                    sm:text-xs
                  "
                >
                  One ecosystem across banking, payment processing and
                  digital payment rails.
                </p>
              </div>
            </div>

            <div
              className="
                hidden shrink-0
                items-center gap-2
                rounded-full
                border border-emerald-500/15
                bg-emerald-500/[0.06]
                px-3 py-1.5
                text-[9px]
                font-extrabold
                uppercase
                tracking-[0.16em]
                text-emerald-600

                dark:border-emerald-300/15
                dark:bg-emerald-300/[0.07]
                dark:text-emerald-300

                sm:inline-flex
              "
            >
              <Building2 className="size-3.5" />
              Connected ecosystem
            </div>
          </div>

          {/* marquee */}
          <div
            className="
              mask-fade-x
              relative
              -mx-4
              overflow-hidden

              sm:-mx-5

              lg:-mx-6
            "
          >
            <div
              className="
                flex w-max
                animate-marquee
                [animation-duration:34s]
                motion-reduce:animate-none
              "
            >
              <ProviderRow />

              {/* duplicate row creates seamless infinite animation */}
              <ProviderRow hidden />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}