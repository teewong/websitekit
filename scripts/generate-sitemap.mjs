import fs from 'node:fs'
import path from 'node:path'

const siteSource = fs.readFileSync(path.resolve('src/data/site.ts'), 'utf8')
const servicesSource = fs.readFileSync(path.resolve('src/data/services.ts'), 'utf8')

const domainMatch = siteSource.match(/domain:\s*['"`]([^'"`]+)['"`]/)
const siteUrl = domainMatch?.[1]?.replace(/\/$/, '')

if (!siteUrl) {
  throw new Error('Unable to read siteData.domain from src/data/site.ts')
}

const serviceSlugs = [...servicesSource.matchAll(/slug:\s*['"`]([^'"`]+)['"`]/g)].map((match) => match[1])
const today = new Date().toISOString().split('T')[0]

const routes = [
  '/',
  '/about',
  '/services',
  ...serviceSlugs.map((slug) => `/services/${slug}`),
  '/gallery',
  '/contact',
  '/privacy',
]

function toAbsoluteUrl(route) {
  return route === '/' ? `${siteUrl}/` : `${siteUrl}${route}`
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${toAbsoluteUrl(route)}</loc>
    <lastmod>${today}</lastmod>
  </url>`,
  )
  .join('\n')}
</urlset>
`

const publicDir = path.resolve('public')
const outputPath = path.join(publicDir, 'sitemap.xml')

fs.mkdirSync(publicDir, { recursive: true })
fs.writeFileSync(outputPath, xml, 'utf8')

console.log(`sitemap.xml generated at ${outputPath}`)
console.log(`Included ${routes.length} URLs`)
