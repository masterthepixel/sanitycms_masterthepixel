import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.masterthepixel.io'

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/services',
    '/projects',
    '/blog',
    '/privacy-policy',
    '/terms-of-use',
    '/credits'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Dynamic project pages
  const projects = [
    'horizon-systems',
    'orbital-wireless',
    'apex-dynamics'
  ].map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic service pages
  const services = [
    'app-portal-development',
    'custom-web-development',
    'digital-marketing-services',
    'it-consulting',
    'custom-ai-applications',
    'cybersecurity'
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic blog posts
  const blogPosts = [
    'how-we-increased-revenue-by-300-with-one-simple-hack',
    'the-ultimate-guide-to-scaling-your-startup-in-90-days',
    '5-proven-strategies-to-skyrocket-your-conversion-rates'
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [
    ...staticPages,
    ...projects,
    ...services,
    ...blogPosts,
  ]
}