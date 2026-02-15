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

    // Check if page has actual markdown content or is component-based
    const hasMarkdownContent = page.content && page.content.trim().length > 0 && !page.content.trim().startsWith('import');

    // If pageBuilder exists and no markdown content, render PageBuilder
    if (page.pageBuilder && page.pageBuilder.length > 0 && !hasMarkdownContent) {
      const { PageBuilder } = await import('@/components/page-builder');
      const { normalizePageBuilder } = await import('@/lib/utils');
      
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
            <PageBuilder pageBuilder={normalizePageBuilder(page.pageBuilder)} id={page._id || slug} type={page._type || 'service'} />
          </div>
        </Container>
      );
    }

    // If MDX content present, render via the client MDX renderer
    if (hasMarkdownContent) {
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

    notFound();
  } catch (err) {
    notFound();
  }
}