import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Post, Page, PostFrontmatter, PageFrontmatter, SiteSettings } from '@/types/content'

const postsDirectory = path.join(process.cwd(), 'content', 'posts')
const pagesDirectory = path.join(process.cwd(), 'content', 'pages')
const siteConfigPath = path.join(process.cwd(), 'content', 'site.json')

export async function getAllPosts(): Promise<Post[]> {
  if (!fs.existsSync(postsDirectory)) return []
  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.mdx'))
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '')
    return getPostBySlug(slug)
  })
  return Promise.all(posts)
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) throw new Error(`Post not found: ${slug}`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return {
    ...data as PostFrontmatter,
    content,
  }
}

export async function getPageBySlug(slug: string): Promise<Page> {
  const mdxPath = path.join(pagesDirectory, `${slug}.mdx`);
  const jsonPath = path.join(pagesDirectory, `${slug}.json`);

  // Try MDX first
  if (fs.existsSync(mdxPath)) {
    console.log('[getPageBySlug] mdxPath:', mdxPath);
    const fileContents = fs.readFileSync(mdxPath, 'utf8');
    console.log('[getPageBySlug] raw file contents length:', fileContents.length);
    console.log('[getPageBySlug] raw file contents preview:', fileContents.slice(0, 500));
    const { data, content } = matter(fileContents);
    console.log('[getPageBySlug] parsed frontmatter:', JSON.stringify(data, null, 2));
    console.log('[getPageBySlug] parsed content length:', content.length);
    console.log('[getPageBySlug] serving MDX for', slug, 'content preview:', (content || '').slice(0,200));
    return {
      ...data as PageFrontmatter,
      content,
    };
  }

  // Try JSON fallback
  if (fs.existsSync(jsonPath)) {
    const fileContents = fs.readFileSync(jsonPath, 'utf8');
    const data = JSON.parse(fileContents);
    return {
      title: data.title,
      slug: data.slug?.current || slug,
      seo: data.seo || {},
      content: '', // JSON pages don't have markdown content
      pageBuilder: data.pageBuilder || [],
      _type: data._type,
      _id: data._id,
    };
  }

  throw new Error(`Page not found: ${slug}`);
}

export async function getSiteSettings(): Promise<SiteSettings> {
  if (!fs.existsSync(siteConfigPath)) {
    throw new Error('Site configuration not found')
  }
  const fileContents = fs.readFileSync(siteConfigPath, 'utf8')
  return JSON.parse(fileContents)
}