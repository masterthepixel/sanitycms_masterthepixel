import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { getAllPosts, getAllCaseStudies, getAllNews } from '@/lib/content'

// Required for `output: "export"`: this sitemap has no per-request data, so
// it is safe to bake into the static build.
export const dynamic = 'force-static'

// Slugify function matching the one used in blog/category/[slug]/page.tsx
function slugifyCategory(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/gi, '-')
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.masterthepixel.io'

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/services',
    '/projects',
    '/blog',
    '/news',
    '/case-studies',
    '/privacy-policy',
    '/terms-of-use',
    '/credits'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Load projects from projects.json
  const projectsPath = path.join(process.cwd(), 'content', 'projects.json')
  const projectsData = JSON.parse(fs.readFileSync(projectsPath, 'utf8'))
  const projects = projectsData.map((p: any) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Load project categories from project-categories.json
  const projectCategoriesPath = path.join(process.cwd(), 'content', 'project-categories.json')
  const projectCategoriesData = JSON.parse(fs.readFileSync(projectCategoriesPath, 'utf8'))
  const projectCategories = projectCategoriesData.map((cat: any) => ({
    url: `${baseUrl}/projects/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Load all services from content/pages/services/
  const servicesDir = path.join(process.cwd(), 'content', 'pages', 'services')
  const serviceFiles = fs.readdirSync(servicesDir).filter((f) => f.endsWith('.mdx'))
  const services = serviceFiles.map((file) => {
    const slug = file.replace(/\.mdx$/, '')
    return {
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }
  })

  // Load blog posts
  const allPosts = await getAllPosts()
  const blogPosts = allPosts
    .filter((post) => post.slug)
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date || new Date()),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))

  // Extract unique blog categories from posts
  const blogCategories = new Set<string>()
  allPosts.forEach((post) => {
    post.categories?.forEach((category) => {
      blogCategories.add(slugifyCategory(category))
    })
  })
  const blogCategoryPages = Array.from(blogCategories).map((slug) => ({
    url: `${baseUrl}/blog/category/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Load case studies
  const caseStudies = await getAllCaseStudies()
  const caseStudyPages = caseStudies
    .filter((cs) => cs.slug)
    .map((cs) => ({
      url: `${baseUrl}/case-studies/${cs.slug}`,
      lastModified: new Date(cs.date || new Date()),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  // Load news items
  const newsItems = await getAllNews()
  const newsPages = newsItems
    .filter((news) => news.slug)
    .map((news) => ({
      url: `${baseUrl}/news/${news.slug}`,
      lastModified: new Date(news.date || new Date()),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))

  return [
    ...staticPages,
    ...projects,
    ...projectCategories,
    ...services,
    ...blogPosts,
    ...blogCategoryPages,
    ...caseStudyPages,
    ...newsPages,
  ]
}