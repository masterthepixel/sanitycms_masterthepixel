export interface PostFrontmatter {
  title: string
  slug: string
  date: string
  excerpt: string
  seo: {
    title: string
    description: string
  }
  coverImage: string
  draft?: boolean
}

export interface PageFrontmatter {
  title: string
  slug: string
  seo: {
    title: string
    description: string
  }
  draft?: boolean
}

export interface Post extends PostFrontmatter {
  content: string
}

export interface Page extends PageFrontmatter {
  content: string
}