import { Metadata } from 'next';
import PostGrid from '../../_components/post-grid';
import { getAllPosts } from '@/lib/content';
import { CircleSlash } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // For now, return empty since we're migrating
  return [];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Category: ${slug}`,
    description: `Posts in category ${slug}`
  };
}

export default async function PostsByCategoryPage(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params;
  const { slug } = params;

  const allPosts = await getAllPosts();
  
  // Filter posts by category
  const posts = allPosts.filter(post => 
    post.categories?.some((cat: string) => cat.toLowerCase() === slug.toLowerCase())
  );

  if (posts.length === 0) {
    return (
      <div className="py-20 flex items-center justify-center gap-2 border border-dashed rounded-3xl text-center text-gray-600 bg-white">
        <CircleSlash size={20} className='text-red-500' /> <span className='font-medium antialiased'>No posts found in this category.</span>
      </div>
    )
  }

  return (
    <PostGrid posts={posts} />
  );
}