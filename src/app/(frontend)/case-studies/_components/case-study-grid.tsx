import React from 'react';
import CaseStudyCard from './case-study-card';
import { CaseStudy } from '@/types/content';

interface CaseStudyGridProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudyGrid({ caseStudies }: CaseStudyGridProps) {
  const featured = caseStudies.filter((cs) => cs.featured);
  const regular = caseStudies.filter((cs) => !cs.featured);

  return (
    <div className="space-y-8">
      {featured.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Featured Case Studies</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {featured.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} featured />
            ))}
          </div>
        </div>
      )}

      {regular.length > 0 && (
        <div>
          {featured.length > 0 && <h2 className="text-2xl font-bold mb-4">More Case Studies</h2>}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {regular.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      )}

      {caseStudies.length === 0 && (
        <p className="text-center py-12 text-gray-500">No case studies yet.</p>
      )}
    </div>
  );
}
