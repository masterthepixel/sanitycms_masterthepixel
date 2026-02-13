import React from 'react';
import ProjectsLayout from './_components/projects-layout';

export default async function ProjectsArchiveLayout({ children }: {
  children: React.ReactNode;
}) {
  
  return (
    <ProjectsLayout page={{}}>
      {children}
    </ProjectsLayout>
  )
}