"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import AnimatedUnderline from '@/components/shared/animated-underline';
import Date from '@/components/ui/date';
import Heading from '@/components/shared/heading';
import Author from '@/components/ui/author';
import { Post } from '@/types/content';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const { date, title, slug, excerpt, coverImage } = post;

  const router = useRouter();
  function handleClick() {
    router.push(`/blog/${slug}`);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }

  return (
    <article
      aria-label={title}
      className='relative group pb-8 border-b border-dashed cursor-pointer'
      role='link'
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className='relative'>
        <Thumbnail image={coverImage} />
        {/* category pill */}
        {post.categories && post.categories.length > 0 && (
          <div className='absolute left-6 top-6 z-10'>
            <span className='inline-flex items-center gap-2 bg-white/95 text-xs font-semibold px-3 py-1 rounded-full border border-gray-200 shadow-sm'>
              {post.categories[0]}
            </span>
          </div>
        )}

        <Heading tag="h2" size="md" className='mt-5 md:mt-6 text-balance'>
          {title}
        </Heading>
        <Excerpt>
          {excerpt}
        </Excerpt>
        <div className='mt-5 md:mt-6 flex items-center justify-between'>
          <div className='flex items-center gap-3.5'>
            <Author author={(post as any).author ?? null} />
            <Date date={date} />
          </div>
          <ChevronRight
            size={18}
            className='-translate-x-6 opacity-0 group-hover:-translate-x-0 group-hover:opacity-100 transition-all duration-300 text-gray-600'
          />
        </div>
      </div>
      <AnimatedUnderline className='-translate-y-0.5' />
    </article>
  )
}

function Thumbnail({ image }: { image: string | null }) {
  if (!image) return null;

  return (
    <div className='p-4 rounded-3xl border border-dashed backdrop-blur-md backdrop-opacity-50 pattern-bg--2'>
      <Image
        src={image}
        width={800}
        height={800}
        alt=""
        className='aspect-[3/2] rounded-2xl'
      />
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