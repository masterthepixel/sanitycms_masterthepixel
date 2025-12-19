import { Metadata } from 'next';
import { processMetadata } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';
import { pageBySlugQuery } from '@/sanity/lib/queries/documents/page';
import Container from '@/components/global/container';
import { PageBuilder } from '@/components/page-builder';

export async function generateMetadata(): Promise<Metadata> {
  const { data: page } = await sanityFetch({ query: pageBySlugQuery, params: { slug: 'terms-of-use' }, stega: false });
  if (!page) return {};
  return processMetadata({ data: page });
}

export default async function TermsOfUsePage() {
  const { data: page } = await sanityFetch({ query: pageBySlugQuery, params: { slug: 'terms-of-use' } });

  if (!page) {
    return (
      <Container className="py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold mb-6">Terms of Use</h1>
          <p>Effective 4th July 2024</p>
          <div className="prose prose-lg mt-4">
            <p>SiteEngine Copyright ©️ 2025 - James Rea.</p>
            <p>
              Permission is hereby granted, free of charge, to any person obtaining a copy of the SiteEngine
              Next.js template and associated documentation files (the "Software"), to deal in the Software
              without restriction, including without limitation the rights to use, copy, modify, merge, publish,
              distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the
              Software is furnished to do so, subject to the following conditions.
            </p>
            <p>
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
              NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
              DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
              OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </p>
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