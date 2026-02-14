import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Heading from '@/components/shared/heading';
import AnimatedUnderline from '@/components/shared/animated-underline';

export default function ProjectCard({ project }: { project: any; }) {

  const { title, category, slug, excerpt, image } = project;

  return (
    <article aria-label={title ?? ''} className='relative group pb-10 border-b border-dashed'>
      <Link href={`/projects/${slug}`} className='relative'>
        <Category>
          {category?.title}
        </Category>
        <Thumbnail image={image} />
        <Heading tag="h2" size="md" className='mt-5 md:mt-6 text-balance'>
          {title}   
        </Heading>
        <Excerpt>
          {excerpt}
        </Excerpt>
      </Link>
      <AnimatedUnderline className='-translate-y-0.5' />
    </article>
  )
}

function Thumbnail({ image }: { image?: { asset?: { url?: string | null } | null; url?: string | null; altText?: string | null; } | null; }) {
  const imageUrl = image?.asset?.url || image?.url || null;
  
  // Only render Image if there's a valid URL
  if (!imageUrl) {
    return (
      <div className='p-4 rounded-3xl border border-dashed backdrop-blur-md backdrop-opacity-50 pattern-bg--2'>
        <div className='aspect-[3/2] rounded-2xl bg-gray-300 flex items-center justify-center'>
          <span className='text-gray-500'>No image</span>
        </div>
      </div>
    );
  }

  return (
    <div className='p-4 rounded-3xl border border-dashed backdrop-blur-md backdrop-opacity-50 pattern-bg--2'>
      <Image
        src={imageUrl}
        width={800}
        height={800}
        alt={image?.altText ?? 'Project image'}
        className='aspect-[3/2] rounded-2xl'
      />
    </div>
  )
}

function Category({ children }: { children: React.ReactNode }) {
  return (
    <div className='z-10 absolute top-10 left-10 px-1.5 rounded-md text-sm font-medium text-nowrap bg-white'>
      {children}
    </div>
  )
}

function Excerpt({ children }: { children: React.ReactNode }) {
  return (
    <p className='mt-4 text-balance text-neutral-500'>
      {children}
    </p>
  )
}