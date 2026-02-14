import React from 'react';
import ProjectsLayout from './_components/projects-layout';

import pageData from '../../../../content/pages/projects.json';
import projectsData from '../../../../content/projects.json';
import categoriesData from '../../../../content/project-categories.json';

export default async function ProjectsArchiveLayout({ children }: {
  children: React.ReactNode;
}) {
  const page = {
    ...pageData,
    title: pageData?.title ?? 'Projects',
    pageBuilder: pageData?.pageBuilder ?? [],
    _id: pageData?._id ?? 'projectsPage',
    _type: pageData?._type ?? 'projectsPage',
    categories: categoriesData ?? [],
    projects: projectsData ?? []
  };

  return (
    <ProjectsLayout page={page}>
      {children}
    </ProjectsLayout>
  )
}