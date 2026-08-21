import { cn } from '@/lib/cn';

export type ContextGraphicVariant =
  | 'clarity'
  | 'infrastructure'
  | 'connected'
  | 'operators'
  | 'api'
  | 'data'
  | 'access'
  | 'transaction'
  | 'monitoring'
  | 'audit'
  | 'resilience'
  | 'compliance'
  | 'security';

export function ContextGraphic({
  variant,
  className,
}: {
  variant: ContextGraphicVariant;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute z-0 text-brand/25 transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.08] group-hover:text-brand/45 dark:text-cyan/15 dark:group-hover:text-cyan/40',
        className,
      )}
    >
      <svg viewBox="0 0 180 120" className="h-full w-full" fill="none">
        <defs>
          <linearGradient id={`cg-${variant}`} x1="0" y1="0" x2="180" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="currentColor" stopOpacity="0.72" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {variant === 'clarity' && (
            <>
              <rect x="20" y="18" width="52" height="30" rx="8" opacity=".35" />
              <rect x="108" y="72" width="52" height="30" rx="8" opacity=".35" />
              <path d="M72 33h22c12 0 12 54 24 54h-10" />
              <circle cx="94" cy="33" r="5" fill="currentColor" fillOpacity=".18" />
              <path d="m89 86 7 7 14-17" strokeWidth="3" />
              <path d="M20 62h52M20 72h35M125 22h35M125 32h20" opacity=".25" />
            </>
          )}
          {variant === 'infrastructure' && (
            <>
              <path d="M26 34 90 12l64 22-64 22-64-22Z" fill={`url(#cg-${variant})`} fillOpacity=".12" />
              <path d="m26 53 64 22 64-22M26 73l64 22 64-22" />
              <path d="M42 89h30M108 89h30" opacity=".35" />
              <circle cx="90" cy="95" r="7" fill="currentColor" fillOpacity=".12" />
            </>
          )}
          {variant === 'connected' && (
            <>
              <circle cx="90" cy="60" r="18" fill="currentColor" fillOpacity=".1" />
              <circle cx="28" cy="28" r="9" />
              <circle cx="152" cy="28" r="9" />
              <circle cx="28" cy="92" r="9" />
              <circle cx="152" cy="92" r="9" />
              <path d="M37 33 74 52M143 33l-37 19M37 87l37-19M143 87l-37-19" />
              <path d="M82 60h16M90 52v16" strokeWidth="2.5" />
            </>
          )}
          {variant === 'operators' && (
            <>
              <circle cx="55" cy="45" r="14" />
              <circle cx="125" cy="45" r="14" />
              <path d="M32 96c5-20 17-30 35-30s30 10 35 30" />
              <path d="M78 96c5-20 17-30 35-30s30 10 35 30" opacity=".45" />
              <rect x="76" y="18" width="28" height="18" rx="6" fill="currentColor" fillOpacity=".08" />
              <path d="M84 27h12" />
            </>
          )}
          {variant === 'api' && (
            <>
              <rect x="24" y="25" width="46" height="22" rx="7" />
              <rect x="110" y="25" width="46" height="22" rx="7" />
              <rect x="67" y="75" width="46" height="22" rx="7" />
              <path d="M70 36h40M90 47v28" />
              <circle cx="90" cy="36" r="9" fill="currentColor" fillOpacity=".12" />
              <path d="m86 36 3 3 6-7" strokeWidth="2" />
              <path d="M35 58h34M111 58h34" strokeDasharray="4 5" opacity=".35" />
            </>
          )}
          {variant === 'data' && (
            <>
              <ellipse cx="90" cy="27" rx="43" ry="13" />
              <path d="M47 27v42c0 7 19 13 43 13s43-6 43-13V27" />
              <path d="M47 48c0 7 19 13 43 13s43-6 43-13" opacity=".4" />
              <rect x="72" y="70" width="36" height="30" rx="8" fill="currentColor" fillOpacity=".08" />
              <path d="M80 70v-8a10 10 0 0 1 20 0v8" />
              <circle cx="90" cy="84" r="3" fill="currentColor" />
            </>
          )}
          {variant === 'access' && (
            <>
              <circle cx="64" cy="46" r="18" />
              <path d="M34 100c4-22 16-34 30-34s26 12 30 34" />
              <rect x="104" y="31" width="50" height="58" rx="12" />
              <circle cx="129" cy="54" r="8" />
              <path d="M116 74h26M116 80h17" opacity=".45" />
              <path d="m121 54 5 5 11-14" strokeWidth="2.5" />
            </>
          )}
          {variant === 'transaction' && (
            <>
              <path d="M18 60h30M67 60h30M116 60h46" />
              <circle cx="57" cy="60" r="10" fill="currentColor" fillOpacity=".09" />
              <circle cx="106" cy="60" r="10" fill="currentColor" fillOpacity=".09" />
              <path d="m52 60 4 4 7-9M101 60l4 4 7-9" />
              <path d="M162 60l-9-7M162 60l-9 7" />
              <rect x="39" y="24" width="38" height="14" rx="7" opacity=".32" />
              <rect x="88" y="83" width="38" height="14" rx="7" opacity=".32" />
            </>
          )}
          {variant === 'monitoring' && (
            <>
              <rect x="22" y="20" width="136" height="80" rx="14" />
              <path d="M34 78h112" opacity=".2" />
              <path d="M34 68 52 55l18 8 18-27 18 23 17-10 23 11" strokeWidth="2.5" />
              <circle cx="88" cy="36" r="4" fill="currentColor" />
              <path d="M37 33h25M37 40h14" opacity=".35" />
            </>
          )}
          {variant === 'audit' && (
            <>
              <rect x="50" y="15" width="80" height="92" rx="12" />
              <path d="M68 39h44M68 55h44M68 71h44M68 87h29" opacity=".5" />
              <path d="m58 38 3 3 6-7M58 54l3 3 6-7M58 70l3 3 6-7" />
              <circle cx="132" cy="88" r="18" fill="currentColor" fillOpacity=".08" />
              <path d="m124 88 5 5 11-14" strokeWidth="2.5" />
            </>
          )}
          {variant === 'resilience' && (
            <>
              <path d="M90 12 34 34v33c0 24 20 37 56 45 36-8 56-21 56-45V34L90 12Z" fill="currentColor" fillOpacity=".06" />
              <path d="M54 63h24l8-17 12 33 9-18h19" strokeWidth="2.4" />
              <circle cx="90" cy="63" r="34" opacity=".22" />
            </>
          )}
          {variant === 'compliance' && (
            <>
              <path d="M55 16h57l18 18v70H55V16Z" />
              <path d="M112 16v20h18" />
              <path d="M70 50h43M70 63h43M70 76h25" opacity=".45" />
              <circle cx="119" cy="88" r="20" fill="currentColor" fillOpacity=".08" />
              <path d="m109 88 7 7 14-18" strokeWidth="2.7" />
            </>
          )}
          {variant === 'security' && (
            <>
              <circle cx="90" cy="60" r="43" opacity=".2" />
              <circle cx="90" cy="60" r="29" opacity=".35" strokeDasharray="4 5" />
              <path d="M90 25 65 35v21c0 19 11 30 25 38 14-8 25-19 25-38V35L90 25Z" fill="currentColor" fillOpacity=".08" />
              <path d="m80 58 7 7 15-19" strokeWidth="3" />
              <path d="M27 60h20M133 60h20M90 8v17M90 95v17" opacity=".45" />
            </>
          )}
        </g>
      </svg>
    </div>
  );
}