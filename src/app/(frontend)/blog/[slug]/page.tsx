import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { processMetadata } from '@/lib/utils';
import Container from '@/components/global/container';
import PostContent from '../_components/post-content';
import RelatedPosts from '../_components/related-posts';
import { getPostBySlug, getAllPosts } from '@/lib/content';
// TODO: Remove sanityFetch imports after migration
// import { sanityFetch } from '@/sanity/lib/live';
// import { postBySlugQuery, postSlugsQuery } from '@/sanity/lib/queries/documents/post';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
  } catch (error) {
    console.error('Error fetching post slugs:', error);
    return [];
  }
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    return {
      title: post.seo.title,
      description: post.seo.description,
      // TODO: Add openGraphImage from frontmatter
    };
  } catch (error) {
    console.error('Error fetching post metadata:', error);
    return {};
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    // TODO: Handle related posts - MDX doesn't have this data yet
    const showRelatedPosts = false; // post?.relatedPosts && post.relatedPosts.length > 0 && post.settings?.showRelatedPosts;

    return (
      <Container className="py-16">
        <div className="max-w-7xl mx-auto">
          <PostContent post={post} />
          {showRelatedPosts && (
            <RelatedPosts posts={[]} /> // TODO: Implement related posts
          )}
        </div>
      </Container>
    );
  } catch (error) {
    console.error('Error fetching post:', error);
    notFound();
  }
}