import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { processMetadata } from "@/lib/utils";
import { sanityFetch } from "@/sanity/lib/live";
import ProjectGrid from './_components/project-grid';
import { ProjectsPageQueryResult } from '../../../../sanity.types';
import { allProjectsQuery, projectsPageQuery } from '@/sanity/lib/queries/documents/project';
import { getPageBySlug } from '@/lib/content';
import { PageBuilder } from '@/components/page-builder';
import { normalizePageBuilder } from '@/components/page-builder';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const page = await getPageBySlug('projects');
    return processMetadata({ data: page as any });
  } catch {
    // Fallback to Sanity if file not found
    const { data: page } = await sanityFetch({
      query: projectsPageQuery,
      stega: false
    });
    if (!page) { return {} };
    return processMetadata({ data: page as ProjectsPageQueryResult });
  }
}

export default async function ProjectsPage() {
  let pageData;
  try {
    pageData = await getPageBySlug('projects');
  } catch {
    // Fallback to Sanity query
    const { data: page } = await sanityFetch({
      query: projectsPageQuery,
      stega: false
    });
    pageData = page;
  }

  const { data: projects } = await sanityFetch({
    query: allProjectsQuery,
  });

  if (!pageData) {
    return <ProjectGrid projects={projects} />
  }

  // If page has pageBuilder content, render it
  if (pageData.pageBuilder && pageData.pageBuilder.length > 0) {
    return (
      <div>
        <PageBuilder
          pageBuilder={normalizePageBuilder(pageData.pageBuilder)}
          id={pageData._id || 'projects'}
          type={pageData._type || 'page'}
        />
        <ProjectGrid projects={projects} />
      </div>
    );
  }

  // Fallback to just the grid
  return <ProjectGrid projects={projects} />
}