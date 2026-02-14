import { Metadata } from "next";
import ProjectGrid from './_components/project-grid';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Projects',
    description: 'Our projects'
  };
}

import projectsData from '../../../../content/projects.json';

export default async function ProjectsPage() {
  // Use migrated projects data from content/projects.json
  const projects: any[] = projectsData ?? [];

  // Page rendering uses ProjectGrid which expects an array of project objects
  return <ProjectGrid projects={projects} />
}