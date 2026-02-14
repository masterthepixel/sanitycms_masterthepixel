import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/global/container';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const servicesDir = './content/pages/services';
  try {
    const files = await import('fs').then((fs) => fs.promises.readdir(servicesDir));
    return files
      .filter((f) => f.endsWith('.mdx'))
      .map((f) => ({ slug: f.replace(/\.mdx$/, '') }));
  } catch (e) {
    return [];
  }
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Service: ${slug}`,
    description: `Service ${slug}`
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  try {
    const page = await import('@/lib/content').then((m) => m.getPageBySlug(slug));

    // If MDX content present, render via the client MDX renderer (serialize + MDX components)
    if (page.content && page.content.length > 0) {
      const MDXClientRenderer = (await import('@/components/mdx/MDXClientRenderer')).default;
      const { mdxComponents } = await import('@/components/MDXRenderer');
      return (
        <Container className="py-16">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            <MDXClientRenderer content={page.content} components={mdxComponents} frontmatter={page} />
          </div>
        </Container>
      );
    }

    // If pageBuilder exists, render that
    const { PageBuilder } = await import('@/components/page-builder');
    return (
      <Container className="py-16">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          <h1 className="text-4xl font-bold mb-4">{page.title}</h1>
          <PageBuilder pageBuilder={page.pageBuilder || []} id={page._id || slug} type={page._type || 'service'} />
        </div>
      </Container>
    );
  } catch (err) {
    notFound();
  }
}