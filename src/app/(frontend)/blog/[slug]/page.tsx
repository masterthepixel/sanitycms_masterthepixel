import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { processMetadata } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';
import Container from '@/components/global/container';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/components/portable-text/portable-text-components';
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

  return (
    <Container className="py-16">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Post header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            {post.author && (
              <div className="flex items-center gap-2">
                {post.author.avatar && post.author.avatar.asset && post.author.avatar.asset.url && (
                  <img
                    src={post.author.avatar.asset.url}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <span>By {post.author.name}</span>
              </div>
            )}
            {post.category && (
              <Link
                href={`/blog/category/${post.category.slug}`}
                className="hover:text-primary transition-colors"
              >
                {post.category.title}
              </Link>
            )}
            <time dateTime={post._createdAt}>
              {new Date(post._createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </header>

        {/* Featured image */}
        {post.image && post.image.asset && post.image.asset.url && (
          <div className="mb-8">
            <img
              src={post.image.asset.url}
              alt={post.image.altText || post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
            {post.image.caption && (
              <p className="text-sm text-muted-foreground mt-2 text-center">
                {post.image.caption}
              </p>
            )}
          </div>
        )}

        {/* Post content */}
        {post.content && (
          <div className="prose prose-lg max-w-none">
            <PortableText value={post.content} components={portableTextComponents} />
          </div>
        )}

        {/* Related posts */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <div className="mt-16 pt-8 border-t">
            <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {post.relatedPosts.map((relatedPost: any) => (
                <article key={relatedPost._id} className="border rounded-lg p-6">
                  <Link href={`/blog/${relatedPost.slug}`} className="group">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                  </Link>
                  {relatedPost.excerpt && (
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                  )}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    {relatedPost.category && (
                      <span>{relatedPost.category.title}</span>
                    )}
                    <time dateTime={relatedPost._createdAt}>
                      {new Date(relatedPost._createdAt).toLocaleDateString()}
                    </time>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}