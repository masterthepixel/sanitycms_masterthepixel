import { getAllPosts, getPostBySlug, getPageBySlug } from '@/lib/content'
import type { Post, Page } from '@/types/content'

describe('content', () => {
  describe('getAllPosts', () => {
    it('returns an array of posts', async () => {
      const posts = await getAllPosts()
      expect(Array.isArray(posts)).toBe(true)
      if (posts.length > 0) {
        expect(posts[0]).toHaveProperty('title')
        expect(posts[0]).toHaveProperty('slug')
        expect(posts[0]).toHaveProperty('content')
      }
    })
  })

  describe('getPostBySlug', () => {
    it('returns a post with parsed frontmatter and content', async () => {
      const post = await getPostBySlug('sample-post')
      expect(post).toHaveProperty('title', 'Sample Post')
      expect(post).toHaveProperty('slug', 'sample-post')
      expect(post).toHaveProperty('content')
      expect(typeof post.content).toBe('string')
      expect(post.content).toContain('# Sample Post')
    })

    it('throws error for non-existent post', async () => {
      await expect(getPostBySlug('non-existent')).rejects.toThrow('Post not found')
    })
  })

  describe('getPageBySlug', () => {
    it('returns a page with parsed frontmatter and content', async () => {
      const page = await getPageBySlug('sample-page')
      expect(page).toHaveProperty('title', 'Sample Page')
      expect(page).toHaveProperty('slug', 'sample-page')
      expect(page).toHaveProperty('content')
      expect(typeof page.content).toBe('string')
      expect(page.content).toContain('# Sample Page')
    })

    it('throws error for non-existent page', async () => {
      await expect(getPageBySlug('non-existent')).rejects.toThrow('Page not found')
    })

    describe('pilot pages', () => {
      const pilotPages = ['home', 'about', 'services']

      pilotPages.forEach((slug) => {
        it(`loads pilot page: ${slug}`, async () => {
          const page = await getPageBySlug(slug)
          expect(page).toHaveProperty('title')
          expect(page).toHaveProperty('slug', slug)
          expect(page).toHaveProperty('content')
          expect(typeof page.content).toBe('string')
          // Check that it contains MDX component imports
          expect(page.content).toContain('import')
          expect(page.content).toContain('@/components/mdx')
        })
      })
    })
  })
})