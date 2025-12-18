import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { processMetadata } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';
import Container from '@/components/global/container';
import { PageBuilder } from '@/components/page-builder';
import { servicesPageQuery } from '@/sanity/lib/queries/documents/service';

export async function generateMetadata(): Promise<Metadata> {
  const { data: servicesPage } = await sanityFetch({
    query: servicesPageQuery,
    stega: false,
  });

  if (!servicesPage) { return {} };

  return processMetadata({ data: servicesPage });
}

export default async function ServicesPage() {
  const { data: servicesPage } = await sanityFetch({
    query: servicesPageQuery,
  });

  if (!servicesPage) {
    return (
      <Container className="py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Services</h1>
          <p className="text-lg text-muted-foreground mb-8">
            No services page found. Create a services page in Sanity Studio.
          </p>
          <a
            href="/studio"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Open Sanity Studio
          </a>
        </div>
      </Container>
    );
  }

  // If the services page has pageBuilder content, use it
  if (servicesPage.pageBuilder && servicesPage.pageBuilder.length > 0) {
    return (
      <div id="services">
        <PageBuilder
          id={servicesPage._id}
          type={servicesPage._type}
          pageBuilder={servicesPage.pageBuilder}
        />

        {/* Always show services listing */}
        <Container className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>

            {servicesPage.services && servicesPage.services.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesPage.services.map((service: any) => (
                  <article key={service._id} className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <Link href={`/services/${service.slug}`}>
                      {service.image && service.image.asset && service.image.asset.url && (
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={service.image.asset.url}
                            alt={service.image.altText || service.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        {service.excerpt && (
                          <p className="text-muted-foreground mb-4 line-clamp-3">
                            {service.excerpt}
                          </p>
                        )}
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No services found.</p>
            )}
          </div>
        </Container>
      </div>
    );
  }

  // Otherwise, show a default services listing
  return (
    <Container className="py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{servicesPage.title || "Services"}</h1>

        {servicesPage.services && servicesPage.services.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesPage.services.map((service: any) => (
              <article key={service._id} className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/services/${service.slug}`}>
                  {service.image && service.image.asset && service.image.asset.url && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={service.image.asset.url}
                        alt={service.image.altText || service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                    {service.excerpt && (
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {service.excerpt}
                      </p>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No services found.</p>
        )}
      </div>
    </Container>
  );
}