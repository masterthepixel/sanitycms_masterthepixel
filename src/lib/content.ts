import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Post, Page, PostFrontmatter, PageFrontmatter } from '@/types/content'

const postsDirectory = path.join(process.cwd(), 'content', 'posts')
const pagesDirectory = path.join(process.cwd(), 'content', 'pages')

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
  const fullPath = path.join(pagesDirectory, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) throw new Error(`Page not found: ${slug}`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return {
    ...data as PageFrontmatter,
    content,
  }
}