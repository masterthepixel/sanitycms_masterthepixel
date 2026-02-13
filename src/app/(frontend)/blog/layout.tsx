import React from 'react';
import BlogLayout from './_components/blog-layout';

export default async function BlogArchiveLayout({ children }: {
  children: React.ReactNode;
}) {
  
  return (
    <BlogLayout page={{}}>
      {children}
    </BlogLayout>
  )
}