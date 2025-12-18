import { Metadata } from "next";
import Link from "next/link";
import { processMetadata } from "@/lib/utils";
import { sanityFetch } from "@/sanity/lib/live";
import Container from "@/components/global/container";
import { PageBuilder } from "@/components/page-builder";
import { PageBySlugQueryResult } from "sanity.types";
import { pageBySlugQuery } from "@/sanity/lib/queries/documents/page";
import { generalSettingsQuery } from "@/sanity/lib/queries/singletons/settings";

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const { data: settings } = await sanityFetch({
    query: generalSettingsQuery,
    stega: false,
  });

  const page = settings?.homePage;

  if (!page) { return {} };

  return processMetadata({ data: page as PageBySlugQueryResult });
}

export default async function Home() {

  const { data: settings } = await sanityFetch({
    query: generalSettingsQuery,
  });

  if (!settings?.homePage?.slug) return (
    <Container className="py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Site</h1>
        <p className="text-lg text-muted-foreground mb-8">
          This is a fresh Sanity CMS installation. Set up your homepage in the Sanity Studio.
        </p>
        <Link 
          href="/studio" 
          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          Open Sanity Studio
        </Link>
      </div>
    </Container>
  )

  const { data: page } = await sanityFetch({ 
    query: pageBySlugQuery, 
    params: { slug: settings.homePage.slug },
  });

  return(
    <div id="home">
      <PageBuilder 
        id={page?._id ?? ""} 
        type={page?._type ?? ""} 
        pageBuilder={page?.pageBuilder ?? []} 
      />
    </div>
  )
}