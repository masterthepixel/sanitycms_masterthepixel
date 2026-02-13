import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/global/container';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // For now, return empty since we're migrating
  return [];
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

  // For now, show not found since we're migrating
  notFound();

  // Placeholder return
  return (
    <Container className="py-16">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>
        <h1 className="text-4xl font-bold mb-4">Service: {slug}</h1>
        <p>This service is being migrated.</p>
      </div>
    </Container>
  );
}