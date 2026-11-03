// Site-wide settings. Edit author details here — only true information.
export const SITE = {
  name: 'ZentaFixit',
  url: 'https://zentafixit.com',
  tagline: 'Fix-it guides for your home and tech',
  description:
    'Clear, tested how-to guides for home electrical, smart home, HVAC, appliances, PCs and gadgets.',
  email: 'contact@zentafixit.com', // TODO: confirm contact email
  // Posts go live only when they have a reviewedDate (keeps "Reviewed by" honest).
  requireReview: true,
  // AdSense publisher ID, e.g. 'ca-pub-1234567890123456'. Leave empty until approved.
  adsenseClient: '',
};

export const AUTHOR = {
  slug: 'santaji-gadepatil',
  name: 'Santaji Gadepatil',
  role: 'Founder & Editor',
  // Edit freely — keep it true.
  bio: 'Electronics and Telecommunication engineer working in industrial instrumentation and automation. I write and review every ZentaFixit guide for technical accuracy and safety.',
  credentials: ['B.E. Electronics and Telecommunication Engineering'] as string[],
  linkedin: 'https://www.linkedin.com/in/santaji-gadepatil6680/',
  photo: '/images/santaji-gadepatil.jpg',
};
