/** Public site URL — set VITE_SITE_URL in .env when you deploy (e.g. https://www.sapphireinfotech.com) */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || 'https://sapphireinfotech.com'
).replace(/\/$/, '')

export const SITE_NAME = 'CRESCENT TECHWORKS INNOVATIONS LLP'

export const SITE_TAGLINE =
  'Innovative digital solutions for the modern era — web, mobile, cloud, and AI.'

export const SITE_EMAIL = 'hello@crescentechworks.com'
export const SITE_PHONE = '+91 98765 43210'
export const SITE_ADDRESS = {
  streetAddress: 'Mumbai',
  addressLocality: 'Mumbai',
  addressRegion: 'Maharashtra',
  addressCountry: 'IN',
}

export const DEFAULT_KEYWORDS = [
  'CRESCENT TECHWORKS INNOVATIONS LLP',
  'Crescent TechWorks',
  'crescent techworks innovations LLP',
  'digital solutions Mumbai',
  'web development company India',
  'mobile app development Mumbai',
  'UI UX design agency',
  'cloud solutions India',
  'IT company Mumbai',
  'custom software development',
].join(', ')
