# Google par rank karne ke liye — Sapphire Infotech Solutions

Website par technical SEO add ho chuka hai. Google mein **"Sapphire Infotech Solutions"** search par dikhne ke liye ye steps zaroor karein.

## 1. Live domain + HTTPS

- Site ko **https://sapphireinfotech.com** (ya apna domain) par deploy karein
- `.env` mein set karein: `VITE_SITE_URL=https://www.sapphireinfotech.com`
- `public/sitemap.xml` aur `public/robots.txt` mein domain update karein agar URL alag ho

## 2. Google Search Console

1. [Google Search Console](https://search.google.com/search-console) → **Add property**
2. Domain verify karein (DNS TXT record sabse best)
3. **Sitemaps** → submit: `https://aapka-domain.com/sitemap.xml`
4. **URL Inspection** → homepage → **Request indexing**

## 3. Google Business Profile (local SEO)

Mumbai business ke liye bahut important:

1. [Google Business](https://business.google.com) par listing banao
2. Name exactly: **Sapphire Infotech Solutions**
3. Website, phone **+91 8080535352**, email **hello@sapphireinfotech.com** same rakhein jo site par hai
4. Category: Software company / Website designer / IT consultant

## 4. OG image (social + search preview)

`public/og-image.jpg` add karein — size **1200×630 px**, logo + tagline. Ab code is path ko use karta hai.

## 5. Backlinks & content (ranking ke liye main factor)

- LinkedIn company page par site link
- Client emails / proposals mein domain
- Directories: Clutch, GoodFirms (optional)
- Blog posts: "web development company Mumbai" jaisi topics (future)

## 6. Speed check

- [PageSpeed Insights](https://pagespeed.web.dev/) par homepage test karein
- Images compress karein, lazy load rakhein

## Kya code mein already hai

- Har page ka unique **title** & **meta description** (brand name included)
- **Canonical URLs**, Open Graph, Twitter cards
- **JSON-LD**: Organization, WebSite, ProfessionalService (homepage)
- **robots.txt** + **sitemap.xml**
- **site.webmanifest**
- Hero par visible brand name **Sapphire Infotech Solutions**

Indexing 1–4 weeks lag sakti hai nayi site par. Search Console se coverage monitor karein.
