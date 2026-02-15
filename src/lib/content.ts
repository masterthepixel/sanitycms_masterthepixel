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
  const nestedMdxPath = path.join(pagesDirectory, 'projects', `${slug}.mdx`);
  const nestedServicesMdxPath = path.join(pagesDirectory, 'services', `${slug}.mdx`);
  const jsonPath = path.join(pagesDirectory, `${slug}.json`);
  const nestedJsonPath = path.join(pagesDirectory, 'projects', `${slug}.json`);

  // Special-case: if a JSON version exists for the Services page prefer it (JSON contains pageBuilder with references resolved)
  if (slug === 'services' && fs.existsSync(jsonPath)) {
    const fileContents = fs.readFileSync(jsonPath, 'utf8');
    const data = JSON.parse(fileContents);

    // reuse the JSON-resolution logic below to return a fully resolved pageBuilder
    if (Array.isArray(data.pageBuilder)) {
      const servicesDir = path.join(pagesDirectory, 'services');
      let serviceFrontmatterMap: Record<string, any> = {};

      if (fs.existsSync(servicesDir)) {
        const serviceFiles = fs.readdirSync(servicesDir).filter((f) => f.endsWith('.mdx'));
        serviceFiles.forEach((file) => {
          try {
            const fm = matter(fs.readFileSync(path.join(servicesDir, file), 'utf8')).data as any;
            if (fm?._id) serviceFrontmatterMap[fm._id] = fm;
            if (fm?.slug) serviceFrontmatterMap[fm.slug] = fm;
          } catch (e) {
            // ignore malformed files
          }
        });
      }

      data.pageBuilder = data.pageBuilder.map((block: any) => {
        if (block._type === 'servicesBlock' && Array.isArray(block.services)) {
          const resolved = block.services.map((svc: any) => {
            if (svc._ref && serviceFrontmatterMap[svc._ref]) {
              const fm = serviceFrontmatterMap[svc._ref];
              return {
                _id: fm._id,
                title: fm.title,
                slug: fm.slug,
                shortDescription: fm.shortDescription || fm.excerpt || '',
                image: { url: fm.coverImage || (fm.image && fm.image.url) || '/assets/placeholder-cover.jpg' }
              };
            }
            return svc;
          });
          return { ...block, services: resolved };
        }
        return block;
      });
    }

    return {
      title: data.title,
      slug: data.slug?.current || slug,
      seo: data.seo || {},
      content: '',
      pageBuilder: data.pageBuilder || [],
      _type: data._type,
      _id: data._id,
    };
  }

  // Try MDX in top-level pages
  if (fs.existsSync(mdxPath)) {
    console.log('[getPageBySlug] mdxPath:', mdxPath);
    const fileContents = fs.readFileSync(mdxPath, 'utf8');
    console.log('[getPageBySlug] raw file contents length:', fileContents.length);
    console.log('[getPageBySlug] raw file contents preview:', fileContents.slice(0, 500));
    const { data, content } = matter(fileContents);
    console.log('[getPageBySlug] parsed frontmatter:', JSON.stringify(data, null, 2));
    console.log('[getPageBySlug] parsed content length:', content.length);
    console.log('[getPageBySlug] serving MDX for', slug, 'content preview:', (content || '').slice(0,200));
    
    // For top-level pages: extract pageBuilder array from the JSX content if present
    let pageBuilder: any[] = [];
    if (content && content.includes('<PageBuilder pageBuilder=')) {
      try {
        const match = content.match(/<PageBuilder\s+pageBuilder=\{(\[[\s\S]*?\])\}\s*\/>/);
        if (match && match[1]) {
          const jsonStr = match[1];
          pageBuilder = eval('(' + jsonStr + ')'); // Using eval since it's valid JavaScript
        }
      } catch (e) {
        console.warn('[getPageBySlug] Failed to extract pageBuilder from top-level page:', slug, e);
      }
    }
    
    return {
      ...data as PageFrontmatter,
      content: pageBuilder.length > 0 ? '' : content, // Clear content if pageBuilder was extracted
      pageBuilder,
    };
  }

  // Try MDX in nested `pages/projects/` (projects now live under pages/projects)
  if (fs.existsSync(nestedMdxPath)) {
    console.log('[getPageBySlug] nestedMdxPath:', nestedMdxPath);
    const fileContents = fs.readFileSync(nestedMdxPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // For project pages: extract pageBuilder array from the JSX content if present
    let pageBuilder: any[] = [];
    if (content && content.includes('<PageBuilder pageBuilder=')) {
      try {
        const match = content.match(/<PageBuilder\s+pageBuilder=\{(\[[\s\S]*?\])\}\s*\/>/);
        if (match && match[1]) {
          // Note: This is a simplified extraction. JSON.parse should work for valid JS objects as JSON
          const jsonStr = match[1];
          pageBuilder = eval('(' + jsonStr + ')'); // Using eval since it's valid JavaScript
        }
      } catch (e) {
        console.warn('[getPageBySlug] Failed to extract pageBuilder from project page:', slug, e);
      }
    }
    
    return {
      ...data as PageFrontmatter,
      content: '', // Clear content for project pages that use PageBuilder
      pageBuilder,
    };
  }

  // Try MDX in nested `pages/services/` (new per-service MDX files)
  if (fs.existsSync(nestedServicesMdxPath)) {
    const fileContents = fs.readFileSync(nestedServicesMdxPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // For service pages: extract pageBuilder array from the JSX content if present
    let pageBuilder: any[] = [];
    if (content && content.includes('<PageBuilder pageBuilder=')) {
      try {
        const match = content.match(/<PageBuilder\s+pageBuilder=\{(\[[\s\S]*?\])\}\s*\/>/);
        if (match && match[1]) {
          const jsonStr = match[1];
          pageBuilder = eval('(' + jsonStr + ')');
        }
      } catch (e) {
        console.warn('[getPageBySlug] Failed to extract pageBuilder from service page:', slug, e);
      }
    }
    
    return {
      ...data as PageFrontmatter,
      content: '', // Clear content for service pages that use PageBuilder
      pageBuilder,
    };
  }

  // Try JSON fallback in top-level pages
  if (fs.existsSync(jsonPath)) {
    const fileContents = fs.readFileSync(jsonPath, 'utf8');
    const data = JSON.parse(fileContents);

    // Resolve any service references inside servicesBlock(s) by loading local MDX frontmatter
    if (Array.isArray(data.pageBuilder)) {
      const servicesDir = path.join(pagesDirectory, 'services');
      let serviceFrontmatterMap: Record<string, any> = {};

      if (fs.existsSync(servicesDir)) {
        const serviceFiles = fs.readdirSync(servicesDir).filter((f) => f.endsWith('.mdx'));
        serviceFiles.forEach((file) => {
          try {
            const fm = matter(fs.readFileSync(path.join(servicesDir, file), 'utf8')).data as any;
            if (fm?._id) serviceFrontmatterMap[fm._id] = fm;
            if (fm?.slug) serviceFrontmatterMap[fm.slug] = fm;
          } catch (e) {
            // ignore malformed files
          }
        });
      }

      // Replace references in servicesBlock entries
      data.pageBuilder = data.pageBuilder.map((block: any) => {
        if (block._type === 'servicesBlock' && Array.isArray(block.services)) {
          const resolved = block.services.map((svc: any) => {
            if (svc._ref && serviceFrontmatterMap[svc._ref]) {
              const fm = serviceFrontmatterMap[svc._ref];
              return {
                _id: fm._id,
                title: fm.title,
                slug: fm.slug,
                shortDescription: fm.shortDescription || fm.excerpt || '',
                image: { url: fm.coverImage || (fm.image && fm.image.url) || '/assets/placeholder-cover.jpg' }
              };
            }
            // already resolved or missing -> return as-is
            return svc;
          });
          return { ...block, services: resolved };
        }
        return block;
      });
    }

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

  // Try JSON fallback in nested `pages/projects/`
  if (fs.existsSync(nestedJsonPath)) {
    const fileContents = fs.readFileSync(nestedJsonPath, 'utf8');
    const data = JSON.parse(fileContents);
    return {
      title: data.title,
      slug: data.slug?.current || slug,
      seo: data.seo || {},
      content: '',
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