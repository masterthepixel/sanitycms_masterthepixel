import { Metadata } from 'next';
import PostGrid from './_components/post-grid';
import { getAllPosts } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  // TODO: Implement metadata from MDX frontmatter
  return {
    title: 'Blog',
    description: 'Latest blog posts'
  };
}

export default async function BlogArchivePage() {
  const posts = await getAllPosts();

  return (
    <PostGrid posts={posts ?? []} />
  )
}