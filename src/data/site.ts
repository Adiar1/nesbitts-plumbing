export const site = {
  name: "Nesbitt's Plumbing",
  legalName: 'NPSCorp',
  tagline: 'Keeping water in-line with reliable plumbing solutions',
  est: 'EST 2004',
  founded: 2004,
  /** Assumes the current year is 2026 → 22 years in business. */
  yearsInBusiness: 22,
  values: ['Attitude', 'Courage', 'Training'],

  phone: '(828) 398-4700',
  phoneHref: 'tel:+18283984700',
  email: 'Nesbittsplumbing@gmail.com',
  emailHref: 'mailto:Nesbittsplumbing@gmail.com',

  address: {
    street: '9 Walden Dr., Unit I',
    city: 'Arden',
    state: 'NC',
    zip: '28704',
    mapsHref:
      'https://maps.google.com/maps?daddr=9+Walden+Dr.,+Unit+I,+Arden,+NC+28704',
  },

  serviceArea: 'Asheville & Hendersonville, NC and the surrounding areas',

  hours: [
    { day: 'Mon – Fri', time: '8:00 AM – 5:00 PM' },
    { day: 'Sat', time: 'By Appointment' },
    { day: 'Sun', time: 'Closed' },
  ],

  social: {
    facebook: 'http://www.facebook.com/Nesbitts-Plumbing-415475868573929/',
    tiktok: 'https://www.tiktok.com/@nplumbing_ash_nc?_r=1&_t=ZT-97qJVjSblXR',
    instagram: 'https://www.instagram.com/nplumbing_ash_nc?utm_source=qr',
  },

  /**
   * Custom brand assets: drop your files into the `public/` folder.
   * If your files use a different extension (e.g. .png), just update
   * these two paths to match (e.g. '/logo.png' and '/favicon.ico').
   */
  logo: '/logo.png',
  favicon: '/favicon.ico',
};

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export const nav: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Plumbing Services',
    href: '/plumbing-services',
    children: [
      { label: 'Pipe Replacement', href: '/pipe-replacement' },
      { label: 'Video Inspection', href: '/video-inspection' },
      { label: 'Leak Detection', href: '/leak-detection' },
      { label: 'Hot Water Heaters', href: '/hot-water-heaters' },
      { label: 'Sewer & Water Line Replacements', href: '/sewer-water-line-replacements' },
    ],
  },
  {
    label: 'Remodeling',
    href: '/kitchen-bathroom-remodels',
    children: [
      { label: 'Kitchen & Bathroom Remodels', href: '/kitchen-bathroom-remodels' },
      { label: 'Bathroom Remodeling', href: '/bathroom-remodeling' },
      { label: 'Kitchen Remodeling', href: '/kitchen-remodeling' },
    ],
  },
  {
    label: 'More Services',
    href: '/concrete-removal',
    children: [
      { label: 'Concrete Removal', href: '/concrete-removal' },
      { label: 'New Construction Plumbing', href: '/new-construction-plumbing' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact-us' },
];
