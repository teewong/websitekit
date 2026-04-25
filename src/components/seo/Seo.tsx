import { useEffect } from 'react'
import { siteData } from '../../data/site'

type SeoProps = {
  title: string
  description: string
  path: string
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

export default function Seo({ title, description, path }: SeoProps) {
  useEffect(() => {
    document.title = title
    upsertMeta('description', description)
    upsertMeta('og:title', title, 'property')
    upsertMeta('og:description', description, 'property')
    upsertMeta('og:type', 'website', 'property')
    upsertMeta('og:url', `${siteData.domain}${path}`, 'property')
  }, [description, path, title])

  return null
}
