import { cn } from '@/lib/cn';

export type SecurityControlGraphicVariant =
  | 'api-auth'
  | 'api-keys'
  | 'oauth'
  | 'rate-limit'
  | 'request-validation'
  | 'ip-controls'
  | 'webhook'
  | 'idempotency'
  | 'rbac'
  | 'mfa'
  | 'privileged'
  | 'session'
  | 'permissions'
  | 'admin-tracking'
  | 'payment-request'
  | 'transaction-auth'
  | 'transaction-validation'
  | 'risk-rules'
  | 'smart-routing'
  | 'provider'
  | 'transaction-monitoring'
  | 'audit-trail'
  | 'secure-cloud'
  | 'network-segmentation'
  | 'waf'
  | 'ddos'
  | 'backup'
  | 'disaster-recovery'
  | 'high-availability'
  | 'continuous-monitoring';

export function SecurityControlGraphic({
  variant,
  className,
}: {
  variant: SecurityControlGraphicVariant;
  className?: string;
}) {
  const id = `scg-${variant}`;

  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute z-0 text-brand/25 opacity-55 transition-[transform,opacity,color] duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:scale-[1.13] group-hover:text-brand/55 group-hover:opacity-100 dark:text-cyan/18 dark:group-hover:text-cyan/60',
        className,
      )}
    >
      <svg viewBox="0 0 180 112" fill="none" className="h-full w-full">
        <defs>
          <linearGradient id={id} x1="10" y1="8" x2="170" y2="104" gradientUnits="userSpaceOnUse">
            <stop stopColor="currentColor" stopOpacity=".36" />
            <stop offset="1" stopColor="currentColor" stopOpacity=".025" />
          </linearGradient>
          <filter id={`${id}-glow`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {variant === 'api-auth' && (
            <>
              <rect x="18" y="31" width="58" height="34" rx="10" fill={`url(#${id})`} />
              <path d="M33 48h20M59 48h7" opacity=".55" />
              <circle cx="114" cy="49" r="24" fill={`url(#${id})`} />
              <path d="M114 30 100 36v12c0 11 6 17 14 22 8-5 14-11 14-22V36l-14-6Z" />
              <path d="m108 49 4 4 8-10" strokeWidth="2.4" />
              <path d="M76 48h14" strokeDasharray="4 4" />
              <circle cx="92" cy="48" r="3" fill="currentColor" />
            </>
          )}

          {variant === 'api-keys' && (
            <>
              <circle cx="48" cy="53" r="19" fill={`url(#${id})`} />
              <circle cx="48" cy="53" r="7" />
              <path d="M67 53h50l8 8 9-9 8 8" />
              <path d="M91 53v10M105 53v7" />
              <rect x="30" y="18" width="102" height="14" rx="7" opacity=".24" />
              <path d="M38 25h35M80 25h18" opacity=".5" />
            </>
          )}

          {variant === 'oauth' && (
            <>
              <circle cx="54" cy="55" r="24" fill={`url(#${id})`} />
              <circle cx="54" cy="55" r="11" />
              <path d="M51 55h6M54 52v6" />
              <rect x="101" y="28" width="47" height="22" rx="8" />
              <rect x="101" y="63" width="47" height="22" rx="8" />
              <path d="M78 46 101 39M78 64l23 10" />
              <path d="m127 37 3 3 6-7M127 72l3 3 6-7" />
            </>
          )}

          {variant === 'rate-limit' && (
            <>
              <path d="M37 79a42 42 0 1 1 84 0" />
              <path d="M48 79a31 31 0 1 1 62 0" opacity=".35" />
              <path d="m79 70 20-23" strokeWidth="2.4" />
              <circle cx="79" cy="70" r="5" fill="currentColor" />
              <path d="M41 83h76" opacity=".2" />
              <rect x="121" y="34" width="30" height="12" rx="6" fill={`url(#${id})`} />
              <path d="M128 40h16" />
            </>
          )}

          {variant === 'request-validation' && (
            <>
              <path d="M42 16h64l20 20v59H42V16Z" fill={`url(#${id})`} />
              <path d="M106 16v22h20" />
              <path d="M58 48h42M58 61h33M58 74h26" opacity=".45" />
              <circle cx="126" cy="78" r="21" fill="currentColor" fillOpacity=".05" />
              <path d="m116 78 7 7 14-18" strokeWidth="2.7" />
            </>
          )}

          {variant === 'ip-controls' && (
            <>
              <circle cx="78" cy="57" r="35" fill={`url(#${id})`} />
              <path d="M43 57h70M78 22c13 12 20 23 20 35s-7 23-20 35M78 22C65 34 58 45 58 57s7 23 20 35" />
              <path d="M51 40c18 8 36 8 54 0M51 74c18-8 36-8 54 0" opacity=".38" />
              <path d="M129 41c0-10 15-10 15 0 0 11-7.5 17-7.5 17S129 52 129 41Z" />
              <circle cx="136.5" cy="41" r="2.5" fill="currentColor" />
            </>
          )}

          {variant === 'webhook' && (
            <>
              <circle cx="44" cy="57" r="14" fill={`url(#${id})`} />
              <circle cx="136" cy="32" r="11" />
              <circle cx="136" cy="82" r="11" />
              <path d="M58 57h21c19 0 20-25 39-25h7M58 57h21c19 0 20 25 39 25h7" />
              <path d="m39 57 4 4 7-9" strokeWidth="2.2" />
              <path d="M129 32h14M136 25v14M129 82h14" opacity=".55" />
            </>
          )}

          {variant === 'idempotency' && (
            <>
              <path d="M50 36c10-15 32-21 48-12 9 5 15 13 18 23" />
              <path d="m116 47 4-11-11 3" />
              <path d="M120 76c-10 15-32 21-48 12-9-5-15-13-18-23" />
              <path d="m54 65-4 11 11-3" />
              <rect x="75" y="42" width="30" height="28" rx="8" fill={`url(#${id})`} />
              <path d="M84 51h12M84 58h12M84 65h12" />
            </>
          )}

          {variant === 'rbac' && (
            <>
              <circle cx="52" cy="42" r="13" fill={`url(#${id})`} />
              <circle cx="97" cy="32" r="10" />
              <circle cx="128" cy="61" r="10" />
              <path d="M32 88c3-18 11-28 20-28s17 10 20 28" />
              <path d="M65 42h18l8-10M72 58l45 3" opacity=".55" />
              <path d="M97 50v24M128 79v12" strokeDasharray="3 4" />
              <rect x="83" y="75" width="29" height="16" rx="6" />
              <rect x="116" y="88" width="29" height="16" rx="6" />
            </>
          )}

          {variant === 'mfa' && (
            <>
              <rect x="34" y="22" width="48" height="72" rx="12" fill={`url(#${id})`} />
              <path d="M49 31h18M49 83h18" opacity=".45" />
              <circle cx="112" cy="52" r="24" />
              <circle cx="104" cy="52" r="3" fill="currentColor" /><circle cx="112" cy="52" r="3" fill="currentColor" /><circle cx="120" cy="52" r="3" fill="currentColor" />
              <path d="m104 75 7 7 15-19" strokeWidth="2.5" />
            </>
          )}

          {variant === 'privileged' && (
            <>
              <path d="m48 55 9-20 14 13 16-21 14 21 14-13 9 20v21H48V55Z" fill={`url(#${id})`} />
              <path d="M55 66h62" />
              <circle cx="135" cy="75" r="18" />
              <path d="M135 67v16M127 75h16" />
              <path d="M31 82h49" strokeDasharray="4 5" opacity=".38" />
            </>
          )}

          {variant === 'session' && (
            <>
              <rect x="27" y="22" width="102" height="67" rx="11" fill={`url(#${id})`} />
              <path d="M27 38h102M39 30h1M47 30h1M55 30h1" />
              <circle cx="117" cy="76" r="25" fill="currentColor" fillOpacity=".04" />
              <path d="M117 62v14l9 6" strokeWidth="2.2" />
              <circle cx="117" cy="76" r="17" />
            </>
          )}

          {variant === 'permissions' && (
            <>
              {[0,1,2].map((r) => [0,1,2].map((c) => <rect key={`${r}-${c}`} x={37+c*33} y={20+r*27} width="22" height="18" rx="5" opacity={r===c?1:.35} fill={r===c?`url(#${id})`:'none'} />))}
              <path d="m42 29 4 4 8-9M75 56l4 4 8-9M108 83l4 4 8-9" strokeWidth="2" />
            </>
          )}

          {variant === 'admin-tracking' && (
            <>
              <path d="M42 25v62" opacity=".25" />
              <circle cx="42" cy="34" r="6" fill="currentColor" />
              <circle cx="42" cy="56" r="6" fill="currentColor" />
              <circle cx="42" cy="78" r="6" fill="currentColor" />
              <rect x="61" y="25" width="70" height="18" rx="7" fill={`url(#${id})`} />
              <rect x="61" y="47" width="52" height="18" rx="7" />
              <rect x="61" y="69" width="82" height="18" rx="7" />
              <path d="M71 34h31M71 56h22M71 78h38" opacity=".5" />
            </>
          )}

          {variant === 'payment-request' && (
            <>
              <rect x="28" y="26" width="72" height="50" rx="12" fill={`url(#${id})`} />
              <path d="M28 42h72M40 62h22" />
              <path d="M111 51h35" strokeWidth="2" />
              <path d="m139 44 8 7-8 7" strokeWidth="2" />
              <circle cx="118" cy="78" r="12" />
              <path d="M118 72v12M112 78h12" />
            </>
          )}

          {variant === 'transaction-auth' && (
            <>
              <path d="M82 18 48 32v25c0 24 14 37 34 48 20-11 34-24 34-48V32L82 18Z" fill={`url(#${id})`} />
              <rect x="66" y="49" width="32" height="25" rx="7" />
              <path d="M72 49v-7a10 10 0 0 1 20 0v7" />
              <path d="m76 62 4 4 8-9" strokeWidth="2.2" />
            </>
          )}

          {variant === 'transaction-validation' && (
            <>
              <rect x="39" y="16" width="74" height="82" rx="10" fill={`url(#${id})`} />
              <path d="M55 38h41M55 52h33M55 66h41" opacity=".45" />
              <circle cx="124" cy="76" r="20" />
              <path d="m115 76 6 6 12-15" strokeWidth="2.5" />
            </>
          )}

          {variant === 'risk-rules' && (
            <>
              <circle cx="79" cy="57" r="38" fill={`url(#${id})`} />
              <circle cx="79" cy="57" r="26" strokeDasharray="4 5" />
              <circle cx="79" cy="57" r="12" />
              <path d="M79 57 104 37" strokeWidth="2.2" />
              <circle cx="110" cy="33" r="5" fill="currentColor" />
              <path d="M128 62h27M128 71h18M128 80h23" opacity=".45" />
            </>
          )}

          {variant === 'smart-routing' && (
            <>
              <circle cx="36" cy="57" r="8" fill="currentColor" />
              <circle cx="140" cy="26" r="8" />
              <circle cx="140" cy="57" r="8" fill="currentColor" fillOpacity=".2" />
              <circle cx="140" cy="88" r="8" />
              <path d="M44 57h27c20 0 28-31 61-31M44 57h88M44 57h27c20 0 28 31 61 31" />
              <path d="m104 47 9 10-9 10" strokeWidth="2.2" />
            </>
          )}

          {variant === 'provider' && (
            <>
              <rect x="27" y="27" width="53" height="58" rx="10" fill={`url(#${id})`} />
              <path d="M40 42h27M40 54h18M40 66h24" opacity=".5" />
              <rect x="104" y="18" width="47" height="25" rx="8" />
              <rect x="104" y="52" width="47" height="25" rx="8" />
              <rect x="104" y="86" width="47" height="14" rx="7" opacity=".5" />
              <path d="M80 56h24M93 45l11 11-11 11" />
            </>
          )}

          {variant === 'transaction-monitoring' && (
            <>
              <rect x="22" y="20" width="136" height="75" rx="14" fill={`url(#${id})`} />
              <path d="M34 72 51 57l17 7 18-25 18 21 17-9 25 10" strokeWidth="2.5" />
              <path d="M34 81h112" opacity=".2" />
              <circle cx="86" cy="39" r="4" fill="currentColor" filter={`url(#${id}-glow)`} />
            </>
          )}

          {variant === 'audit-trail' && (
            <>
              <rect x="51" y="13" width="78" height="88" rx="11" fill={`url(#${id})`} />
              <path d="M67 35h43M67 50h43M67 65h34M67 80h28" opacity=".5" />
              <circle cx="47" cy="35" r="5" fill="currentColor" />
              <circle cx="47" cy="57" r="5" fill="currentColor" />
              <circle cx="47" cy="79" r="5" fill="currentColor" />
              <path d="M47 40v12M47 62v12" />
            </>
          )}

          {variant === 'secure-cloud' && (
            <>
              <path d="M44 74c-14 0-22-9-22-20 0-12 9-21 22-21 5-12 16-18 29-18 18 0 31 11 34 27 15 0 25 9 25 21 0 13-10 21-27 21H44Z" fill={`url(#${id})`} />
              <path d="M91 46 71 54v14c0 13 8 21 20 27 12-6 20-14 20-27V54l-20-8Z" />
              <path d="m84 67 5 5 10-13" strokeWidth="2.4" />
            </>
          )}

          {variant === 'network-segmentation' && (
            <>
              <rect x="20" y="18" width="57" height="34" rx="9" fill={`url(#${id})`} />
              <rect x="103" y="18" width="57" height="34" rx="9" />
              <rect x="20" y="70" width="57" height="24" rx="9" />
              <rect x="103" y="70" width="57" height="24" rx="9" fill={`url(#${id})`} />
              <path d="M77 35h26M77 82h26" strokeDasharray="4 4" />
              <path d="M90 17v78" opacity=".25" />
              <rect x="84" y="48" width="12" height="16" rx="4" fill="currentColor" fillOpacity=".18" />
            </>
          )}

          {variant === 'waf' && (
            <>
              <path d="M90 14 42 32v32c0 22 16 35 48 45 32-10 48-23 48-45V32L90 14Z" fill={`url(#${id})`} />
              <path d="M64 44h52M64 56h52M64 68h52" />
              <path d="M78 44v36M102 44v36" opacity=".35" />
              <circle cx="35" cy="43" r="4" fill="currentColor" /><circle cx="27" cy="61" r="4" fill="currentColor" /><circle cx="35" cy="79" r="4" fill="currentColor" />
              <path d="M39 43h15M31 61h23M39 79h15" opacity=".5" />
            </>
          )}

          {variant === 'ddos' && (
            <>
              {[26,42,58,74,90].map((y,i)=><circle key={y} cx={24+(i%2)*8} cy={y} r="4" fill="currentColor" opacity={.35+i*.1}/>) }
              <path d="M45 24 82 36v23c0 20-12 31-37 40V24Z" fill={`url(#${id})`} />
              <path d="M82 56h54" strokeWidth="2" />
              <rect x="109" y="43" width="38" height="26" rx="8" />
              <path d="M118 56h20" />
              <path d="M45 31v61" strokeWidth="2.2" />
            </>
          )}

          {variant === 'backup' && (
            <>
              <ellipse cx="67" cy="31" rx="31" ry="11" fill={`url(#${id})`} />
              <path d="M36 31v40c0 6 14 11 31 11s31-5 31-11V31" />
              <path d="M36 51c0 6 14 11 31 11s31-5 31-11" opacity=".4" />
              <path d="M119 36a26 26 0 1 1-5 39" />
              <path d="m112 76 4-12 10 7" />
            </>
          )}

          {variant === 'disaster-recovery' && (
            <>
              <rect x="23" y="31" width="48" height="47" rx="10" fill={`url(#${id})`} />
              <rect x="109" y="31" width="48" height="47" rx="10" />
              <path d="M35 45h24M35 56h17M121 45h24M121 56h17" opacity=".5" />
              <path d="M71 45h21l12 12M109 64H88L76 52" />
              <path d="m95 49 9 8-9 8M85 56l-9-8 9-8" />
              <circle cx="90" cy="92" r="7" fill="currentColor" fillOpacity=".18" />
            </>
          )}

          {variant === 'high-availability' && (
            <>
              <rect x="24" y="22" width="49" height="64" rx="10" fill={`url(#${id})`} />
              <rect x="107" y="22" width="49" height="64" rx="10" />
              <path d="M36 39h25M36 51h18M119 39h25M119 51h18" opacity=".5" />
              <circle cx="49" cy="71" r="4" fill="currentColor" /><circle cx="132" cy="71" r="4" fill="currentColor" />
              <path d="M73 56h34M82 47l-9 9 9 9M98 47l9 9-9 9" />
            </>
          )}

          {variant === 'continuous-monitoring' && (
            <>
              <rect x="24" y="20" width="132" height="69" rx="13" fill={`url(#${id})`} />
              <path d="M37 62h18l8-16 12 31 12-24 9 9h18l8-20 12 28h10" strokeWidth="2.4" />
              <circle cx="63" cy="46" r="4" fill="currentColor" filter={`url(#${id}-glow)`} />
              <path d="M73 99h34M90 89v10" />
            </>
          )}
        </g>
      </svg>
    </div>
  );
}