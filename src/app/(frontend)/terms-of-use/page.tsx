import { Metadata } from 'next';
import { getPageBySlug } from '@/lib/content';
import MDXRenderer from '@/components/MDXRenderer';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('terms-of-use');
  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description,
  };
}

export default async function TermsOfUsePage() {
  const page = await getPageBySlug('terms-of-use');

  return (
    <div>
      <MDXRenderer>
        {page.content}
      </MDXRenderer>
    </div>
  );
}