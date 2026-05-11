'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ChevronRight, Award } from 'lucide-react';
import AnimatedUnderline from '@/components/shared/animated-underline';
import { CaseStudy } from '@/types/content';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  featured?: boolean;
}

export default function CaseStudyCard({ caseStudy, featured }: CaseStudyCardProps) {
  const { title, slug, excerpt, coverImage, client, metrics } = caseStudy;
  const router = useRouter();

  function handleClick() {
    router.push(`/case-studies/${slug}`);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }

  const topMetric = metrics?.[0];

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
          <div className="absolute left-6 top-6 z-10 flex items-center gap-2 bg-blue-50 text-blue-900 text-xs font-semibold px-3 py-1 rounded-full border border-blue-200 shadow-sm">
            <Award className="w-3 h-3" />
            Featured
          </div>
        )}
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-500">{client}</p>
        <h3 className="text-lg font-semibold group-hover:underline">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{excerpt}</p>

        {topMetric && (
          <div className="pt-2 border-t border-dashed border-gray-200">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Key Result</p>
            <p className="text-base font-bold text-gray-900">{topMetric.value}</p>
            <p className="text-xs text-gray-600">{topMetric.label}</p>
          </div>
        )}
      </div>

      <div className="mt-4 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
        View case study
        <ChevronRight className="w-4 h-4" />
        <AnimatedUnderline className="-translate-y-0.5" />
      </div>
    </article>
  );
}
