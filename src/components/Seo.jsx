import { Helmet } from 'react-helmet-async'
import {
  SITE_URL,
  SITE_NAME,
  SITE_EMAIL,
  SITE_PHONE,
  SITE_ADDRESS,
  DEFAULT_KEYWORDS,
} from '../config/site'

const OG_IMAGE = `${SITE_URL}/og-image.jpg`

function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: ['Sapphire Infotech', 'Sapphire Infotech Solutions'],
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    description:
      'Sapphire Infotech Solutions is a Mumbai-based software company offering web development, mobile apps, UI/UX design, cloud, and DevOps services.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE_ADDRESS.addressLocality,
      addressRegion: SITE_ADDRESS.addressRegion,
      addressCountry: SITE_ADDRESS.addressCountry,
    },
    areaServed: ['IN', 'Worldwide'],
    sameAs: [],
  }
}

function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/contact?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

function buildProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#business`,
    name: SITE_NAME,
    image: OG_IMAGE,
    url: SITE_URL,
    telephone: SITE_PHONE,
    email: SITE_EMAIL,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.076,
      longitude: 72.8777,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
    serviceType: [
      'Web Development',
      'Mobile App Development',
      'UI/UX Design',
      'Cloud Solutions',
      'DevOps',
      'Software Consulting',
    ],
  }
}

export default function Seo({
  title,
  description,
  keywords = DEFAULT_KEYWORDS,
  path = '/',
  noindex = false,
  includeBusinessSchema = false,
}) {
  const canonical = `${SITE_URL}${path === '/' ? '' : path}`

  const schemas = [
    buildOrganizationSchema(),
    buildWebSiteSchema(),
    ...(includeBusinessSchema ? [buildProfessionalServiceSchema()] : []),
  ]

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Mumbai" />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
