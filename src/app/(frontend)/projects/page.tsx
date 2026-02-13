import { Metadata } from "next";
import ProjectGrid from './_components/project-grid';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Projects',
    description: 'Our projects'
  };
}

export default async function ProjectsPage() {
  // For now, use empty projects since we're migrating
  const projects: any[] = [];

  // TODO: Re-enable pageBuilder rendering after migration is complete
  return <ProjectGrid projects={projects} />
}