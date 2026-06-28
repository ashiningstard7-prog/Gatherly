export const brand = {
  name: 'Gatherly',
  tagline: 'Discover Real-Life Experiences',
  description:
    'Book unique experiences with creators, professionals, experts, and local hosts. From farm weekends to fitness bootcamps — find your next adventure.',
  url: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000',
  social: {
    twitter: 'https://twitter.com/gatherly',
    instagram: 'https://instagram.com/gatherly',
    linkedin: 'https://linkedin.com/company/gatherly',
  },
  support: 'support@gatherly.app',
} as const;

export type Brand = typeof brand;
