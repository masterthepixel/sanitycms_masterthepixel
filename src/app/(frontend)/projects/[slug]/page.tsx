import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/global/container';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

import projectsData from '../../../../../content/projects.json';
import { getPageBySlug } from '@/lib/content';
import { mdxComponents } from '@/components/MDXRenderer';
import MDXClientRenderer from '@/components/mdx/MDXClientRenderer';
import { PageBuilder } from '@/components/page-builder';
import { normalizePageBuilder } from '@/lib/utils';

export async function generateStaticParams() {
  const items = projectsData ?? [];
  return items.map((p: any) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Project: ${slug}`,
    description: `Project ${slug}`
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  // Try to resolve an MDX page for this project (supports content/pages/projects/<slug>.mdx)
  let page: any = null;
  try {
    page = await getPageBySlug(slug);
  } catch (err) {
    // fallback: find from projects.json and render a basic placeholder
    const project = (projectsData ?? []).find((p: any) => p.slug === slug);
    if (!project) return notFound();

    return (
      <Container className="py-16">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

          <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
            {project.client && (
              project.clientUrl ? (
                <a href={project.clientUrl} target="_blank" rel="noopener noreferrer" className="font-medium underline">
                  {project.client}
                </a>
              ) : (
                <span className="font-medium">{project.client}</span>
              )
            )}
            {project.year && (
              <span className="px-2 py-1 rounded bg-gray-100 text-xs">{project.year}</span>
            )}
            {project.tags?.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap">
                {project.tags.map((t: string) => (
                  <span key={t} className="text-xs bg-gray-100 px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            )}
          </div>

          <p className="text-muted-foreground mt-4">{project.excerpt}</p>
        </div>
      </Container>
    );
  }

  // Check if MDX page has actual markdown content or is component-based
  const hasMarkdownContent = page.content && page.content.trim().length > 0 && !page.content.trim().startsWith('import');

  // If page has pageBuilder blocks in frontmatter, render those instead of MDX
  if (page.pageBuilder && page.pageBuilder.length > 0 && !hasMarkdownContent) {
    return (
      <Container className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              {page.client && (
                page.clientUrl ? (
                  <a href={page.clientUrl} target="_blank" rel="noopener noreferrer" className="font-medium underline">
                    {page.client}
                  </a>
                ) : (
                  <span className="font-medium">{page.client}</span>
                )
              )}
              {page.year && (
                <span className="px-2 py-1 rounded bg-gray-100 text-xs">{page.year}</span>
              )}
            </div>
            {page.tags?.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap">
                {page.tags.map((t: string) => (
                  <span key={t} className="text-xs bg-gray-100 px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            )}
          </div>

          <PageBuilder pageBuilder={normalizePageBuilder(page.pageBuilder)} id={page._id || slug} type={page._type || 'page'} />
        </div>
      </Container>
    );
  }

  // If MDX page has actual markdown content, render via MDXClientRenderer
  if (hasMarkdownContent) {
    return (
      <Container className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              {page.client && (
                page.clientUrl ? (
                  <a href={page.clientUrl} target="_blank" rel="noopener noreferrer" className="font-medium underline">
                    {page.client}
                  </a>
                ) : (
                  <span className="font-medium">{page.client}</span>
                )
              )}
              {page.year && (
                <span className="px-2 py-1 rounded bg-gray-100 text-xs">{page.year}</span>
              )}
            </div>
            {page.tags?.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap">
                {page.tags.map((t: string) => (
                  <span key={t} className="text-xs bg-gray-100 px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            )}
          </div>

          <MDXClientRenderer content={page.content} components={mdxComponents} frontmatter={page} />
        </div>
      </Container>
    );
  }

  notFound();
}