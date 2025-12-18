import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { processMetadata } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';
import Container from '@/components/global/container';
import { PageBuilder } from '@/components/page-builder';
import { serviceBySlugQuery, serviceSlugsQuery } from '@/sanity/lib/queries/documents/service';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const { data: services } = await sanityFetch({
      query: serviceSlugsQuery,
      perspective: "published",
      stega: false,
    });
    return services || [];
  } catch (error) {
    console.error('Error fetching service slugs:', error);
    return [];
  }
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { data: service } = await sanityFetch({
    query: serviceBySlugQuery,
    params: await params,
    stega: false,
  });

  if (!service) { return {} };

  return processMetadata({ data: service });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { data: service } = await sanityFetch({
    query: serviceBySlugQuery,
    params: await params,
  });

  if (!service) notFound();

  // If the service has pageBuilder content, use it
  if (service.pageBuilder && service.pageBuilder.length > 0) {
    return (
      <div id={`service-${service.slug}`}>
        <PageBuilder
          id={service._id}
          type={service._type}
          pageBuilder={service.pageBuilder}
        />
      </div>
    );
  }

  // Otherwise, show a default service layout
  return (
    <Container className="py-16">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>

        {/* Service header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
        </header>

        {/* Service content via PageBuilder if available */}
        {service.pageBuilder && service.pageBuilder.length > 0 && (
          <div className="mt-12">
            <PageBuilder
              id={service._id}
              type={service._type}
              pageBuilder={service.pageBuilder}
            />
          </div>
        )}
      </div>
    </Container>
  );
}