import { SITE_NAME, SITE_TAGLINE } from './site'

/** Per-route SEO — titles & descriptions tuned for brand search + services */
export const SEO_PAGES = {
  '/': {
    title: `${SITE_NAME} | Web & Mobile App Development Company Mumbai`,
    description: `${SITE_NAME} — ${SITE_TAGLINE} Hire expert developers for websites, apps, cloud, and digital transformation.`,
    keywords: 'CRESCENT TECHWORKS INNOVATIONS LLP, Crescent TechWorks, digital solutions Mumbai',
  },
  '/about': {
    title: `About Us | ${SITE_NAME}`,
    description: `Learn about ${SITE_NAME} — our team, values, and mission. Trusted software partner for startups and enterprises in Mumbai and worldwide.`,
    keywords: 'about CRESCENT TECHWORKS INNOVATIONS LLP, software development team Mumbai',
  },
  '/services': {
    title: `Services | Web, Mobile, Cloud & Design | ${SITE_NAME}`,
    description: `Explore services from ${SITE_NAME}: web development, mobile apps, UI/UX, DevOps, APIs, analytics, security, and IT consulting.`,
    keywords: 'CRESCENT TECHWORKS services, web development services Mumbai, mobile app development company',
  },
  '/projects': {
    title: `Projects & Portfolio | ${SITE_NAME}`,
    description: `See projects delivered by ${SITE_NAME} — e-commerce, SaaS, fintech, and enterprise solutions built with modern technology.`,
    keywords: 'CRESCENT TECHWORKS projects, software portfolio Mumbai',
  },
  '/testimonials': {
    title: `Client Testimonials | ${SITE_NAME}`,
    description: `Read what clients say about ${SITE_NAME}. Real feedback from founders and businesses we helped grow digitally.`,
    keywords: 'CRESCENT TECHWORKS reviews, client testimonials',
  },
  '/contact': {
    title: `Contact Us | ${SITE_NAME}`,
    description: `Contact ${SITE_NAME} in Mumbai. Get a free consultation for your web, mobile, or cloud project. Email hello@sapphireinfotech.com or call +91 8080535352.`,
    keywords: 'contact CRESCENT TECHWORKS INNOVATIONS LLP, hire developers Mumbai',
  },
  '/privacy-policy': {
    title: `Privacy Policy | ${SITE_NAME}`,
    description: `Privacy policy for ${SITE_NAME} website and services. How we collect, use, and protect your data.`,
    keywords: 'CRESCENT TECHWORKS privacy policy',
    noindex: false,
  },
  '/terms': {
    title: `Terms of Service | ${SITE_NAME}`,
    description: `Terms of service for using ${SITE_NAME} website and engaging our software development services.`,
    keywords: 'CRESCENT TECHWORKS terms of service',
    noindex: false,
  },
}

export function getSeoForPath(pathname) {
  return SEO_PAGES[pathname] || SEO_PAGES['/']
}
