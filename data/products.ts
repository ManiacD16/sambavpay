import {
  BadgeIndianRupee,
  BarChart3,
  CreditCard,
  Network,
  ScanSearch,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  hero: string;
  eyebrow: string;
  icon: LucideIcon;
  capabilities: string[];
  outcomes: string[];
  flow: {
    title: string;
    description: string;
  }[];
};

export const products: Product[] = [
  {
    slug: 'payment-orchestration',
    name: 'Payment Orchestration',
    shortName: 'Orchestration',
    eyebrow: 'Intelligent payment control',
    hero: 'Control every payment path from one intelligent orchestration layer.',
    description:
      'Intelligent routing, retry, failover and provider optimization.',
    icon: Network,

    capabilities: [
      'Intelligent provider routing',
      'Rule-based payment orchestration',
      'Automatic retry for eligible failures',
      'Real-time provider failover',
      'Provider health and performance signals',
      'Centralized transaction visibility',
    ],

    outcomes: [
      'Improve payment resilience',
      'Reduce provider dependency',
      'Recover eligible failed transactions',
      'Centralize payment operations',
    ],

    flow: [
      {
        title: 'Receive',
        description:
          'A payment request enters Sambhav Pay through one unified integration.',
      },
      {
        title: 'Evaluate',
        description:
          'Routing rules, provider availability and performance signals are evaluated.',
      },
      {
        title: 'Route',
        description:
          'The transaction is sent through the most appropriate configured payment path.',
      },
      {
        title: 'Recover',
        description:
          'Eligible failures can automatically trigger retry or provider failover.',
      },
    ],
  },

  {
    slug: 'payment-gateway',
    name: 'Payment Gateway',
    shortName: 'Gateway',
    eyebrow: 'Accept digital payments',
    hero: 'Accept every supported payment method through one secure gateway.',
    description:
      'Accept UPI, cards, net banking, wallets, BNPL and supported payment methods.',
    icon: CreditCard,

    capabilities: [
      'UPI payment acceptance',
      'Credit and debit card payments',
      'Net banking support',
      'Wallet payment support',
      'BNPL payment methods',
      'Unified payment status and webhooks',
    ],

    outcomes: [
      'Offer more payment choices',
      'Simplify merchant integration',
      'Centralize transaction visibility',
      'Create a consistent payment experience',
    ],

    flow: [
      {
        title: 'Create',
        description:
          'Create a payment request from your application through Sambhav Pay.',
      },
      {
        title: 'Collect',
        description:
          'Present UPI, cards, net banking, wallets, BNPL and other supported methods.',
      },
      {
        title: 'Process',
        description:
          'The transaction is processed through the configured payment infrastructure.',
      },
      {
        title: 'Confirm',
        description:
          'Receive normalized transaction status and webhook events.',
      },
    ],
  },

  {
    slug: 'payouts',
    name: 'Payouts',
    shortName: 'Payouts',
    eyebrow: 'Automated disbursements',
    hero: 'Automate disbursements across UPI and bank-transfer rails.',
    description:
      'Automated UPI and bank-transfer disbursements.',
    icon: BadgeIndianRupee,

    capabilities: [
      'UPI payouts',
      'Bank-transfer payouts',
      'Single and bulk disbursements',
      'Beneficiary management',
      'Transaction status monitoring',
      'Reconciliation-ready payout reporting',
    ],

    outcomes: [
      'Automate payout operations',
      'Reduce manual processing',
      'Improve transaction visibility',
      'Centralize disbursement controls',
    ],

    flow: [
      {
        title: 'Create',
        description:
          'Create a payout request for a customer, vendor, employee or partner.',
      },
      {
        title: 'Validate',
        description:
          'Validate beneficiary information and configured payout controls.',
      },
      {
        title: 'Disburse',
        description:
          'Send funds through the supported UPI or bank-transfer rail.',
      },
      {
        title: 'Track',
        description:
          'Monitor final payout status and reconciliation information.',
      },
    ],
  },

  {
    slug: 'payment-intelligence',
    name: 'Payment Intelligence',
    shortName: 'Intelligence',
    eyebrow: 'Payment visibility & analytics',
    hero: 'Turn payment data into operational decisions.',
    description:
      'Analytics, reconciliation and operational controls.',
    icon: BarChart3,

    capabilities: [
      'Unified payment analytics',
      'Transaction performance insights',
      'Provider performance visibility',
      'Reconciliation workflows',
      'Exception and failure monitoring',
      'Operational reporting and controls',
    ],

    outcomes: [
      'Understand payment performance',
      'Reduce reconciliation complexity',
      'Identify transaction exceptions faster',
      'Improve operational decision-making',
    ],

    flow: [
      {
        title: 'Collect',
        description:
          'Transaction and provider events are collected across the payment stack.',
      },
      {
        title: 'Normalize',
        description:
          'Payment information is normalized into a consistent operational model.',
      },
      {
        title: 'Analyze',
        description:
          'Performance, failures, reconciliation and operational signals are analyzed.',
      },
      {
        title: 'Act',
        description:
          'Teams use clear intelligence to investigate issues and optimize payment operations.',
      },
    ],
  },

  {
    slug: 'risk-fraud',
    name: 'Risk & Fraud',
    shortName: 'Risk & Fraud',
    eyebrow: 'Transaction protection',
    hero: 'Apply intelligent controls before risky transactions become costly.',
    description:
      'Risk signals, rules and transaction controls.',
    icon: ShieldCheck,

    capabilities: [
      'Real-time transaction risk signals',
      'Configurable fraud rules',
      'Transaction velocity controls',
      'Suspicious activity indicators',
      'Allow and block decision controls',
      'Risk event and decision history',
    ],

    outcomes: [
      'Strengthen transaction controls',
      'Identify suspicious activity earlier',
      'Apply consistent payment rules',
      'Improve operational oversight',
    ],

    flow: [
      {
        title: 'Observe',
        description:
          'Transaction attributes and available risk signals enter the decision layer.',
      },
      {
        title: 'Evaluate',
        description:
          'Configured rules and transaction controls evaluate the request.',
      },
      {
        title: 'Decide',
        description:
          'The transaction receives the configured allow, review or block decision.',
      },
      {
        title: 'Record',
        description:
          'Risk decisions and operational context remain available for review.',
      },
    ],
  },

  {
    slug: 'sambhav-verify',
    name: 'Sambhav Verify',
    shortName: 'Verify',
    eyebrow: 'Unified verification infrastructure',
    hero: 'One API. Every Verification.',
    description:
      'One API. Every Verification. Bring supported identity, customer, account and business verification workflows into one integration layer.',
    icon: ScanSearch,

    capabilities: [
      'One verification API layer',
      'Customer and identity verification workflows',
      'Bank-account verification workflows',
      'Business verification workflows',
      'Normalized verification responses',
      'Centralized verification status and audit visibility',
    ],

    outcomes: [
      'Reduce verification integration complexity',
      'Standardize verification responses',
      'Launch verification workflows faster',
      'Centralize operational visibility',
    ],

    flow: [
      {
        title: 'Request',
        description:
          'Submit a supported verification request through one Sambhav Verify API.',
      },
      {
        title: 'Validate',
        description:
          'The request is validated before being sent through the configured verification workflow.',
      },
      {
        title: 'Verify',
        description:
          'The appropriate connected verification service processes the request.',
      },
      {
        title: 'Normalize',
        description:
          'Sambhav Verify returns a consistent response and verification status.',
      },
    ],
  },
];

export const getProduct = (slug: string) =>
  products.find((product) => product.slug === slug);