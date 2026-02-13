import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { processMetadata } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';
import { PageBuilder } from '@/components/page-builder';
import { pageBySlugQuery, pageSlugsQuery } from '@/sanity/lib/queries/documents/page';
import { getPageBySlug } from '@/lib/content';
import MDXRenderer from '@/components/MDXRenderer';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Pilot pages that should use MDX instead of Sanity
const PILOT_SLUGS = ['home', 'about', 'services'];

export async function generateStaticParams() {
  try {
    const { data: pages } = await sanityFetch({
      query: pageSlugsQuery,
      perspective: "published",
      stega: false,
    });
    return pages || [];
  } catch (error) {
    console.error('Error fetching page slugs:', error);
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  // For pilot pages, try MDX first
  if (PILOT_SLUGS.includes(slug)) {
    try {
      const page = await getPageBySlug(slug);
      return {
        title: page.seo?.title || page.title,
        description: page.seo?.description,
      };
    } catch (error) {
      // Fall back to Sanity
    }
  }

  const { data: page } = await sanityFetch({
    query: pageBySlugQuery,
    params: { slug },
    stega: false,
  });

  if (!page) { return {} };

  return processMetadata({ data: page });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  // For pilot pages, try MDX first
  if (PILOT_SLUGS.includes(slug)) {
    try {
      const page = await getPageBySlug(slug);
      return (
        <div>
          <MDXRenderer>
            {page.content}
          </MDXRenderer>
        </div>
      );
    } catch (error) {
      // Fall back to Sanity
      console.log(`MDX not found for pilot page ${slug}, falling back to Sanity`);
    }
  }

  const { data: page } = await sanityFetch({
    query: pageBySlugQuery,
    params: { slug },
  });

  if (page === null) notFound();

  return (
    <PageBuilder
      id={page?._id ?? ''}
      type="page"
      pageBuilder={page?.pageBuilder ?? []}
    />
  )
}