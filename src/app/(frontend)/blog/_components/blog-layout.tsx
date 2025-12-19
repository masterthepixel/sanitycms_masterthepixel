"use client"
import React from 'react';
import BlogToolbar from './blog-toolbar';
import { usePathname } from 'next/navigation';
import Heading from '@/components/shared/heading';
import Container from '@/components/global/container';
import { PageBuilder } from '@/components/page-builder';
import { BlogPageQueryResult } from '../../../../../sanity.types';

export default function BlogLayout({ children, page }: Readonly<{
  children: React.ReactNode;
  page: BlogPageQueryResult;
}>) {

  const pathname = usePathname();

  const pageData = (page ?? {}) as any;
  const { categories, posts, title } = pageData;

  if (pathname === '/blog' || pathname.includes('/blog/category/')) return (
    <main className='overflow-hidden md:overflow-auto'>
      <div className='px-4 xl:px-10 pattern-bg'>
        <Container className='px-4 pt-32 md:pt-40 pb-14 md:pb-28 border-x border-dashed'>
          <Heading tag="h1" size="xxxl" className='w-fit'>
            {title}
          </Heading>
          {(pathname === '/blog' || pathname.includes('/blog/category/')) && (
            <BlogToolbar categories={categories as any} posts={posts as any} />
          )}
          {children}
        </Container>
      </div>
      <PageBuilder
        id={pageData?._id ?? ''}
        type={pageData?._type ?? ''}
        pageBuilder={pageData?.pageBuilder ?? []}
      />
    </main>
  )

  return (
    <main className='pt-32 md:pt-40 pb-10 xl:pb-16 pattern-bg'>
      <Container>
        {children}
      </Container>
    </main>
  )
}