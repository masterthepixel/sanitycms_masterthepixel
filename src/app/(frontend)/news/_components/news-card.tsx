'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ChevronRight, Star } from 'lucide-react';
import AnimatedUnderline from '@/components/shared/animated-underline';
import Date from '@/components/ui/date';
import { News } from '@/types/content';

interface NewsCardProps {
  news: News;
  featured?: boolean;
}

export default function NewsCard({ news, featured }: NewsCardProps) {
  const { date, title, slug, excerpt, coverImage } = news;
  const router = useRouter();

  function handleClick() {
    router.push(`/news/${slug}`);
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
      className="relative group pb-8 border-b border-dashed cursor-pointer"
      role="link"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className="relative">
        {coverImage && (
          <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {featured && (
          <div className="absolute left-6 top-6 z-10 flex items-center gap-2 bg-yellow-50 text-yellow-900 text-xs font-semibold px-3 py-1 rounded-full border border-yellow-200 shadow-sm">
            <Star className="w-3 h-3" />
            Featured
          </div>
        )}
      </div>

      <div className="space-y-2">
        <Date date={date} />
        <h3 className="text-lg font-semibold group-hover:underline">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{excerpt}</p>
      </div>

      <div className="mt-4 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
        Read more
        <ChevronRight className="w-4 h-4" />
        <AnimatedUnderline className="-translate-y-0.5" />
      </div>
    </article>
  );
}
