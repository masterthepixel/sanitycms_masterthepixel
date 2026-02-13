import { Metadata } from 'next';
import { processMetadata } from '@/lib/utils';
import PostGrid from './_components/post-grid';
import { getAllPosts } from '@/lib/content';
// TODO: Remove sanityFetch import after migration
// import { sanityFetch } from '@/sanity/lib/live';
// import { BlogPageQueryResult } from "sanity.types";
// import { allPostsQuery, blogPageQuery } from '@/sanity/lib/queries/documents/post';

export async function generateMetadata(): Promise<Metadata> {
  // TODO: Implement metadata from MDX frontmatter
  // const { data: page } = await sanityFetch({
  //   query: blogPageQuery,
  //   stega: false
  // });

  // if (!page) { return {} };

  // return processMetadata({ data: page as BlogPageQueryResult });

  // Temporary fallback
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