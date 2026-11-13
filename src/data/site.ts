// Site-wide settings. Edit author details here. Only true information.
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
  // Google Analytics 4 measurement ID
  ga4: 'G-26F4V2JBS4',
  social: {
    instagram: 'https://www.instagram.com/zentafixit/',
    facebook: 'https://www.facebook.com/zentafixit/',
    linkedin: 'https://www.linkedin.com/company/zentafixit/',
    pinterest: 'https://www.pinterest.com/zentafixit/', // TODO: confirm your Pinterest username
  },
  // Pinterest site verification: paste the content="..." value from Pinterest here.
  pinterestVerify: '',
};

export const AUTHOR = {
  slug: 'santaji-gadepatil',
  name: 'Santaji Gadepatil',
  role: 'Founder & Editor',
  // Edit freely, but keep it true.
  bio: 'Electronics and Telecommunication engineer working in industrial instrumentation and automation. I write and review every ZentaFixit guide for technical accuracy and safety.',
  credentials: ['B.E. Electronics and Telecommunication Engineering'] as string[],
  linkedin: 'https://www.linkedin.com/in/santaji-gadepatil6680/',
  photo: '/images/santaji-gadepatil.jpg',
};
