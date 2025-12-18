import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { processMetadata } from "@/lib/utils";
import { sanityFetch } from "@/sanity/lib/live";
import Container from "@/components/global/container";
import { PageBuilder } from "@/components/page-builder";
import { projectsPageQuery } from "@/sanity/lib/queries/documents/project";

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const { data: projectsPage } = await sanityFetch({
    query: projectsPageQuery,
    stega: false,
  });

  if (!projectsPage) { return {} };

  return processMetadata({ data: projectsPage });
}

export default async function ProjectsPage() {
  const { data: projectsPage } = await sanityFetch({
    query: projectsPageQuery,
  });

  if (!projectsPage) {
    return (
      <Container className="py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground mb-8">
            No projects page found. Create a projects page in Sanity Studio.
          </p>
          <Link
            href="/studio"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Open Sanity Studio
          </Link>
        </div>
      </Container>
    );
  }

  // Show pageBuilder content first (if any), then always show projects listing
  return (
    <div id="projects">
      {/* Render pageBuilder content if it exists */}
      {projectsPage.pageBuilder && projectsPage.pageBuilder.length > 0 && (
        <PageBuilder
          id={projectsPage._id}
          type={projectsPage._type}
          pageBuilder={projectsPage.pageBuilder}
        />
      )}

      {/* Always show projects listing */}
      <Container className="py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">{projectsPage.title || "Projects"}</h1>

          {projectsPage.categories && projectsPage.categories.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Categories</h2>
              <div className="flex flex-wrap gap-2">
                {projectsPage.categories.map((category: any) => (
                  <Link
                    key={category._id}
                    href={`/projects/category/${category.slug}`}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {projectsPage.projects && projectsPage.projects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsPage.projects.map((project: any) => (
                <article key={project._id} className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <Link href={`/projects/${project.slug}`}>
                    {project.image && project.image.asset && project.image.asset.url && (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={project.image.asset.url}
                          alt={project.image.altText || project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h2>
                      {project.excerpt && (
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {project.excerpt}
                        </p>
                      )}
                      {project.category && (
                        <Link
                          href={`/projects/category/${project.category.slug}`}
                          className="text-sm text-primary hover:underline"
                        >
                          {project.category.title}
                        </Link>
                      )}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No projects found.</p>
          )}
        </div>
      </Container>
    </div>
  );
}