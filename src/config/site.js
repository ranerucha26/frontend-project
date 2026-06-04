/** Public site URL — set VITE_SITE_URL in .env when you deploy (e.g. https://www.sapphireinfotech.com) */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || 'https://sapphireinfotech.com'
).replace(/\/$/, '')

export const SITE_NAME = 'Sapphire Infotech Solutions'

export const SITE_TAGLINE =
  'Web development, mobile apps, UI/UX design, cloud & DevOps — software company in Mumbai, India.'

export const SITE_EMAIL = 'hello@sapphireinfotech.com'
export const SITE_PHONE = '+91 8080535352'
export const SITE_ADDRESS = {
  streetAddress: 'Mumbai',
  addressLocality: 'Mumbai',
  addressRegion: 'Maharashtra',
  addressCountry: 'IN',
}

export const DEFAULT_KEYWORDS = [
  'Sapphire Infotech Solutions',
  'Sapphire Infotech',
  'sapphire infotech solutions',
  'software company Mumbai',
  'web development company India',
  'mobile app development Mumbai',
  'UI UX design agency',
  'cloud solutions India',
  'IT company Mumbai',
  'custom software development',
].join(', ')
