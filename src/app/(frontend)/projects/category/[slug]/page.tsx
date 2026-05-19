import { Metadata } from "next";
import ProjectGrid from '../../_components/project-grid';
import projectsData from '../../../../../../content/projects.json';
import categoriesData from '../../../../../../content/project-categories.json';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = categoriesData.find(c => c.slug === slug);
  return {
    title: category?.title || 'Projects',
    description: `Projects in ${category?.title || 'this category'}`
  };
}

export async function generateStaticParams() {
  return categoriesData.map(category => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categoriesData.find(c => c.slug === slug);
  const filteredProjects = projectsData.filter(p => p.category?.slug === slug);

  return (
    <div className='space-y-8'>
      {category && (
        <div className='mb-8'>
          <h2 className='text-lg md:text-xl font-semibold text-gray-600'>
            {category.title}
          </h2>
        </div>
      )}
      <ProjectGrid projects={filteredProjects} />
    </div>
  );
}
