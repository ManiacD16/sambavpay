import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sambhav Pay',
    short_name: 'Sambhav Pay',
    description: 'Intelligent payment infrastructure for orchestration, payments, payouts and financial APIs.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fbfdff',
    theme_color: '#1066d1',
    icons: [
      {
        src: '/brand/logo-mark.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
