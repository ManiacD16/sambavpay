export const productInterests = [
  'Payment Orchestration',
  'Payment Gateway',
  'Payouts',
  'Payment Intelligence',
  'Risk & Fraud',
  'Sambhav Verify',
] as const;

export type ProductInterest = (typeof productInterests)[number];