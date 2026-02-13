import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPageBySlug } from '@/lib/content';
import { mdxComponents } from '@/components/MDXRenderer';
import MDXClientRenderer from '@/components/mdx/MDXClientRenderer';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // For now, return static slugs since we're migrating
  return [
    { slug: 'about' },
    { slug: 'services' },
    { slug: 'contact' },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const page = await getPageBySlug(slug);
    return {
      title: page.seo?.title || page.title,
      description: page.seo?.description,
    };
  } catch (error) {
    return {
      title: slug,
    };
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  try {
    const page = await getPageBySlug(slug);
    return (
      <div>
        <MDXClientRenderer 
          content={page.content} 
          components={mdxComponents} 
          frontmatter={page}
        />
      </div>
    );
  } catch (error) {
    notFound();
  }
}