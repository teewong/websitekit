import { useEffect } from 'react'
import { siteData } from '../../data/site'

type SeoProps = {
  title: string
  description: string
  path: string
  canonical?: string
  image?: string
  noIndex?: boolean
  noFollow?: boolean
}

function upsertMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, name)
    document.head.appendChild(tag)
  }
  tag.content = content
}

function upsertLink(rel: string, href: string) {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!tag) {
    tag = document.createElement('link')
    tag.rel = rel
    document.head.appendChild(tag)
  }
  tag.href = href
}

function absoluteUrl(value: string) {
  if (/^https?:\/\//i.test(value)) {
    return value
  }

  return `${siteData.domain}${value.startsWith('/') ? value : `/${value}`}`
}

export default function Seo({ title, description, path, canonical, image, noIndex, noFollow }: SeoProps) {
  useEffect(() => {
    const appEnv = import.meta.env.VITE_APP_ENV as string | undefined
    const isStaging = appEnv === 'staging'
    const computedNoIndex = isStaging ? true : Boolean(noIndex)
    const computedNoFollow = isStaging ? true : Boolean(noFollow)
    const robots = `${computedNoIndex ? 'noindex' : 'index'},${computedNoFollow ? 'nofollow' : 'follow'}`
    const canonicalUrl = canonical ?? absoluteUrl(path)
    const imageUrl = absoluteUrl(image ?? siteData.socialShareImage)

    document.title = title
    upsertMeta('description', description)
    upsertMeta('robots', robots)

    upsertLink('canonical', canonicalUrl)

    upsertMeta('og:title', title, 'property')
    upsertMeta('og:description', description, 'property')
    upsertMeta('og:type', 'website', 'property')
    upsertMeta('og:url', canonicalUrl, 'property')
    upsertMeta('og:image', imageUrl, 'property')
    upsertMeta('og:site_name', siteData.businessName, 'property')

    upsertMeta('twitter:card', 'summary_large_image')
    upsertMeta('twitter:title', title)
    upsertMeta('twitter:description', description)
    upsertMeta('twitter:image', imageUrl)
  }, [canonical, description, image, noFollow, noIndex, path, title])

  return null
}
