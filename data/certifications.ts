export type Certification = {
  name: string;
  category: string;
  description: string;
  documentUrl: string | null;
  logoUrl?: string | null;
  logoAlt?: string;
};

export const certifications: Certification[] = [
  {
    name: 'PCI DSS',
    category: 'Payment Security',
    description:
      'PCI DSS compliance documentation for SambhavPay as a service provider. Certificate reference 20220510-01; valid through 17 November 2026.',
    documentUrl: '/certifications/pci-dss.pdf',
    logoUrl: '/brand/compliance/pci-dss.svg',
    logoAlt: 'PCI DSS',
  },
  {
    name: 'ISO 27001',
    category: 'Information Security',
    description:
      'ISO 27001 information-security management standard. Supporting certification documentation is published only after verification.',
    documentUrl: null,
    logoUrl: '/brand/compliance/iso-27001.png',
    logoAlt: 'ISO 27001',
  },
  {
    name: 'DPIIT / DIPP Recognition',
    category: 'Government Recognition',
    description:
      'Government of India startup recognition for SambhavPay Payments Solutions Private Limited in Finance Technology / Payment Platforms. Certificate no. DIPP104228.',
    documentUrl: '/certifications/dpiit-dipp.pdf',
    logoUrl: null,
  },
  {
    name: 'MSME / Udyam',
    category: 'Enterprise Registration',
    description:
      'MSME / Udyam registration documentation for SambhavPay.',
    documentUrl: null,
    logoUrl: null,
  },
];