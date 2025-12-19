import { Metadata } from 'next';
import { processMetadata } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';
import { pageBySlugQuery } from '@/sanity/lib/queries/documents/page';
import Container from '@/components/global/container';
import { PageBuilder } from '@/components/page-builder';

export async function generateMetadata(): Promise<Metadata> {
  const { data: page } = await sanityFetch({ query: pageBySlugQuery, params: { slug: 'acknowledgements' }, stega: false });
  if (!page) return {};
  return processMetadata({ data: page });
}

export default async function AcknowledgementsPage() {
  const { data: page } = await sanityFetch({ query: pageBySlugQuery, params: { slug: 'acknowledgements' } });

  if (!page) {
    // Fallback static content
    return (
      <Container className="py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold mb-6">Acknowledgements</h1>
          <div className="prose prose-lg">
            <p>Special thanks to the creators and maintainers of libraries and assets used throughout this open source template.</p>
            <p>Milad Fakurian - Images</p>
            <p>Shadcn - Component Library</p>
            <p>Radix - Component Library</p>
          </div>
        </div>
      </Container>
    )
  }

  return (
    <div>
      <PageBuilder id={page?._id ?? ''} type={page?._type ?? ''} pageBuilder={page?.pageBuilder ?? []} />
    </div>
  )
}