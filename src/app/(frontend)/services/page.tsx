import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { processMetadata, normalizePageBuilder } from '@/lib/utils';
import Container from '@/components/global/container';
import { PageBuilder } from '@/components/page-builder';
import { getPageBySlug } from '@/lib/content';

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
  // TODO: Re-enable pageBuilder rendering after migration is complete
  return (
    <Container className="py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Services</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Our services are being migrated.
        </p>
      </div>
    </Container>
  );
}