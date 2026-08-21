'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState, type FormEvent, type InputHTMLAttributes } from 'react';
import { ArrowRight, CheckCircle2, LoaderCircle, Send, Sparkles } from 'lucide-react';
import { productInterests } from '@/data/contact';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === 'success' || status === 'error') statusRef.current?.focus();
  }, [status]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error('Request failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        ref={statusRef}
        tabIndex={-1}
        className="relative flex min-h-[590px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-emerald-300/[0.35] bg-gradient-to-br from-emerald-50 to-white p-8 text-center shadow-soft dark:border-emerald-300/20 dark:from-emerald-300/10 dark:to-white/[0.035]"
      >
        <div className="absolute inset-0 bg-grid-light bg-[size:38px_38px] opacity-40 dark:bg-grid-dark dark:opacity-20" />
        <div className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="relative">
          <span className="mx-auto flex size-20 items-center justify-center rounded-[1.6rem] bg-emerald-500 text-white shadow-[0_24px_60px_rgba(16,185,129,.3)]">
            <CheckCircle2 className="size-10" />
          </span>
          <p className="mt-6 text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300">Request received</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.05em] text-ink dark:text-white">Your payment conversation starts here.</h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">
            Thank you. Our team will review your requirements and follow up with the right product specialist.
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="group mt-7 inline-flex min-h-12 items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white shadow-button-glow transition duration-500 hover:-translate-y-1 hover:bg-[#0d5bbb]"
          >
            Submit another request <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} aria-busy={status === 'loading'} className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-[0_32px_90px_rgba(6,30,87,.13)] backdrop-blur-xl sm:p-8 dark:border-white/10 dark:bg-white/[0.04]">
      <div className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
        <label htmlFor="companyWebsite">Leave this field empty</label>
        <input id="companyWebsite" name="companyWebsite" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="absolute -right-24 -top-24 size-72 rounded-full bg-brand/[0.09] blur-3xl dark:bg-cyan/[0.07]" />
      <div className="relative mb-7 flex items-center justify-between gap-4 border-b border-slate-200 pb-5 dark:border-white/10">
        <div>
          <p className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand dark:text-cyan"><Sparkles className="size-3.5" /> Demo request</p>
          <h2 className="mt-2 font-display text-2xl font-extrabold tracking-[-0.04em] text-ink dark:text-white">Tell us what you are building.</h2>
        </div>
        <span className="hidden font-mono text-[9px] text-slate-400 sm:block">STEP 01 / 01</span>
      </div>

      <div className="relative grid gap-5 sm:grid-cols-2">
        <Field label="First name" name="firstName" autoComplete="given-name" minLength={2} maxLength={80} required />
        <Field label="Last name" name="lastName" autoComplete="family-name" minLength={2} maxLength={80} required />
        <Field label="Work email" name="email" type="email" inputMode="email" autoComplete="email" maxLength={160} required />
        <Field label="Phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" minLength={7} maxLength={30} required />
        <Field label="Company" name="company" autoComplete="organization" minLength={2} maxLength={160} required className="sm:col-span-2" />
        <label htmlFor="interest" className="group sm:col-span-2">
          <span className="mb-2 block text-xs font-bold text-ink transition group-focus-within:text-brand dark:text-white dark:group-focus-within:text-cyan">Product interest<span className="ml-1 text-brand dark:text-cyan" aria-hidden="true">*</span></span>
          <select
            id="interest"
            name="interest"
            required
            defaultValue=""
            className="h-[52px] w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-ink outline-none transition duration-300 focus:border-brand focus:ring-4 focus:ring-brand/10 dark:border-white/10 dark:bg-[#071c3b] dark:text-white dark:focus:border-cyan"
          >
            <option value="" disabled>Select a product</option>
            {productInterests.map((interest) => <option key={interest}>{interest}</option>)}
          </select>
        </label>
        <label htmlFor="message" className="group sm:col-span-2">
          <span className="mb-2 block text-xs font-bold text-ink transition group-focus-within:text-brand dark:text-white dark:group-focus-within:text-cyan">What are you building?</span>
          <textarea
            id="message"
            name="message"
            rows={5}
            maxLength={4000}
            className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-ink outline-none transition duration-300 placeholder:text-slate-400 focus:border-brand focus:ring-4 focus:ring-brand/10 dark:border-white/10 dark:bg-[#071c3b] dark:text-white dark:focus:border-cyan"
            placeholder="Tell us about your payment flow, providers and timeline."
          />
        </label>
      </div>

      <AnimatePresence>
        {status === 'error' ? (
          <motion.div ref={statusRef} tabIndex={-1} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} role="alert" aria-live="assertive" className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm font-semibold text-rose-600 dark:border-rose-300/20 dark:bg-rose-300/10 dark:text-rose-300">
            We could not send your request. Please try again or email sales@sambhavpay.com.
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="group relative mt-7 inline-flex min-h-[52px] w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white shadow-button-glow transition duration-500 hover:-translate-y-1 hover:bg-[#0d5bbb] hover:shadow-[0_24px_64px_rgba(16,102,209,.4)] disabled:cursor-wait disabled:opacity-70"
      >
        <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-[18deg] bg-white/20 opacity-0 blur-sm transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
        {status === 'loading' ? <LoaderCircle className="relative size-4 animate-spin" /> : <Send className="relative size-4" />}
        <span className="relative">{status === 'loading' ? 'Submitting…' : 'Request a Demo'}</span>
      </button>
      <p className="relative mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">
        Your information will be used to respond to this request and discuss relevant Sambhav Pay products.
      </p>
    </form>
  );
}

function Field({ label, className, name, required, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string; className?: string }) {
  const id = String(name);
  return (
    <label htmlFor={id} className={`group ${className ?? ''}`}>
      <span className="mb-2 block text-xs font-bold text-ink transition group-focus-within:text-brand dark:text-white dark:group-focus-within:text-cyan">
        {label}{required ? <span className="ml-1 text-brand dark:text-cyan" aria-hidden="true">*</span> : null}
      </span>
      <input
        {...props}
        id={id}
        name={name}
        required={required}
        className="h-[52px] w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-ink outline-none transition duration-300 placeholder:text-slate-400 focus:border-brand focus:ring-4 focus:ring-brand/10 invalid:not-placeholder-shown:border-rose-300 dark:border-white/10 dark:bg-[#071c3b] dark:text-white dark:focus:border-cyan"
      />
    </label>
  );
}
