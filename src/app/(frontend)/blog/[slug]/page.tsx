import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { processMetadata } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';
import Container from '@/components/global/container';
import PostContent from '../_components/post-content';
import RelatedPosts from '../_components/related-posts';
import { postBySlugQuery, postSlugsQuery } from '@/sanity/lib/queries/documents/post';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const { data: posts } = await sanityFetch({
      query: postSlugsQuery,
      perspective: "published",
      stega: false,
    });
    return posts || [];
  } catch (error) {
    console.error('Error fetching post slugs:', error);
    return [];
  }
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { data: post } = await sanityFetch({
    query: postBySlugQuery,
    params: await params,
    stega: false,
  });

  if (!post) { return {} };

  return processMetadata({ data: post });
}

export default async function PostPage({ params }: PostPageProps) {
  const { data: post } = await sanityFetch({
    query: postBySlugQuery,
    params: await params,
  });

  if (!post) notFound();

  const showRelatedPosts = post?.relatedPosts && post.relatedPosts.length > 0 && post.settings?.showRelatedPosts;

  return (
    <Container className="py-16">
      <div className="max-w-7xl mx-auto">
        <PostContent post={post} />
        {showRelatedPosts && (
          <RelatedPosts posts={post.relatedPosts} />
        )}
      </div>
    </Container>
  );
}