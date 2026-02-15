import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPageBySlug } from '@/lib/content';
import { mdxComponents } from '@/components/MDXRenderer';
import MDXClientRenderer from '@/components/mdx/MDXClientRenderer';
import { PageBuilder } from '@/components/page-builder';
import { normalizePageBuilder } from '@/lib/utils';

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
    
    // Check if we have actual MDX content to render
    const hasMdxContent = page.content && page.content.trim().length > 0;
    
    if (hasMdxContent) {
      return (
        <div>
          <MDXClientRenderer 
            content={page.content} 
            components={mdxComponents} 
            frontmatter={page}
          />
        </div>
      );
    }
    
    // Fallback to rendering pageBuilder JSON if no MDX content
    if (page.pageBuilder && page.pageBuilder.length > 0) {
      return (
        <div>
          <PageBuilder pageBuilder={normalizePageBuilder(page.pageBuilder)} id={page._id || slug} type={page._type || 'page'} />
        </div>
      );
    }
    
    // If neither MDX nor pageBuilder exists, show 404
    notFound();
  } catch (error) {
    notFound();
  }
}