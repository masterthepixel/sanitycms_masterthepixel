import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { processMetadata } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';
import Container from '@/components/global/container';
import { PageBuilder } from '@/components/page-builder';
import { projectBySlugQuery, projectSlugsQuery } from '@/sanity/lib/queries/documents/project';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const { data: projects } = await sanityFetch({
      query: projectSlugsQuery,
      perspective: "published",
      stega: false,
    });
    return projects || [];
  } catch (error) {
    console.error('Error fetching project slugs:', error);
    return [];
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { data: project } = await sanityFetch({
    query: projectBySlugQuery,
    params: await params,
    stega: false,
  });

  if (!project) { return {} };

  return processMetadata({ data: project });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { data: project } = await sanityFetch({
    query: projectBySlugQuery,
    params: await params,
  });

  if (!project) notFound();

  // If the project has pageBuilder content, use it
  if (project.pageBuilder && project.pageBuilder.length > 0) {
    return (
      <div id={`project-${project.slug}`}>
        <PageBuilder
          id={project._id}
          type={project._type}
          pageBuilder={project.pageBuilder}
        />
      </div>
    );
  }

  // Otherwise, show a default project layout
  return (
    <Container className="py-16">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Project header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {project.category && (
              <Link
                href={`/projects/category/${project.category.slug}`}
                className="hover:text-primary transition-colors"
              >
                {project.category.title}
              </Link>
            )}
          </div>
        </header>

        {/* Featured image */}
        {project.image && project.image.asset && project.image.asset.url && (
          <div className="mb-8">
            <img
              src={project.image.asset.url}
              alt={project.image.altText || project.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>
        )}

        {/* Project excerpt */}
        {project.excerpt && (
          <div className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {project.excerpt}
          </div>
        )}

        {/* Project content via PageBuilder if available */}
        {project.pageBuilder && project.pageBuilder.length > 0 && (
          <div className="mt-12">
            <PageBuilder
              id={project._id}
              type={project._type}
              pageBuilder={project.pageBuilder}
            />
          </div>
        )}
      </div>
    </Container>
  );
}