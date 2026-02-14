import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { processMetadata, normalizePageBuilder } from '@/lib/utils';
import Container from '@/components/global/container';
import { PageBuilder } from '@/components/page-builder';
import { getPageBySlug } from '@/lib/content';
import MDXRenderer from '@/components/MDXRenderer';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const servicesPage = await getPageBySlug('services');
    return processMetadata({ data: servicesPage });
  } catch {
    return {
      title: 'Services',
      description: 'Our services'
    };
  }
}

export default async function ServicesPage() {
  const page = await getPageBySlug('services');

  // If the page has MDX content, render it (contains Hero + Services MDX components)
  if (page.content && page.content.length > 0) {
    return (
      <div>
        <MDXRenderer>{page.content}</MDXRenderer>
      </div>
    );
  }

  // Fallback to rendering pageBuilder JSON
  return (
    <div>
      <PageBuilder pageBuilder={normalizePageBuilder(page.pageBuilder || [])} id={page._id || 'services'} type={page._type || 'page'} />
    </div>
  );
}