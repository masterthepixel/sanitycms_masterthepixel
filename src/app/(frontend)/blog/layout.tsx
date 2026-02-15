import React from 'react';
import BlogLayout from './_components/blog-layout';
import postsData from '../../../../content/posts.json';

export default async function BlogArchiveLayout({ children }: {
  children: React.ReactNode;
}) {
  // derive categories from content/posts.json (unique)
  const raw = (postsData || []) as any[];
  const categorySet = new Map<string, { _id: string; slug: string; title: string }>();
  raw.forEach((p) => {
    (p.categories || []).forEach((c: string) => {
      const slug = String(c).toLowerCase().replace(/[^a-z0-9]+/gi, '-');
      if (!categorySet.has(slug)) categorySet.set(slug, { _id: slug, slug, title: c });
    });
  });

  const page = {
    title: 'Blog',
    slug: 'blog',
    categories: Array.from(categorySet.values())
  };

  return (
    <BlogLayout page={page}>
      {children}
    </BlogLayout>
  )
}