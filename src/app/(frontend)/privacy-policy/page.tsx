import { Metadata } from 'next';
import { processMetadata } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';
import { pageBySlugQuery } from '@/sanity/lib/queries/documents/page';
import Container from '@/components/global/container';
import { PageBuilder } from '@/components/page-builder';

export async function generateMetadata(): Promise<Metadata> {
  const { data: page } = await sanityFetch({ query: pageBySlugQuery, params: { slug: 'privacy-policy' }, stega: false });
  if (!page) return {};
  return processMetadata({ data: page });
}

export default async function PrivacyPolicyPage() {
  const { data: page } = await sanityFetch({ query: pageBySlugQuery, params: { slug: 'privacy-policy' } });

  if (!page) {
    return (
      <Container className="py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>
          <div className="prose prose-lg">
            <p>This Privacy Policy describes how we collect, use, and disclose your personal information when you use the SiteEngine sample site.</p>
            <h2>Information We Collect</h2>
            <p>We may collect information you provide directly, such as contact form submissions, and automatically via cookies and analytics.</p>
            <h2>Use of Information</h2>
            <p>We use the information to operate and improve our services, respond to inquiries, and for analytics.</p>
            <h2>Third-Party Services</h2>
            <p>We may use third-party services (e.g., analytics, hosting) that process data on our behalf.</p>
            <h2>Contact</h2>
            <p>If you have questions about this policy, contact: privacy@siteengine.org</p>
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