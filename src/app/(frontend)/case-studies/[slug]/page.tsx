import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/global/container';
import CaseStudyHighlight from '@/components/CaseStudyHighlight';
import CaseStudyContent from '../_components/case-study-content';
import { getCaseStudyBySlug, getAllCaseStudies } from '@/lib/content';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Date from '@/components/ui/date';
import { serialize } from 'next-mdx-remote/serialize';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

// Temporarily disable static params to debug build issue
// export async function generateStaticParams() {
//   try {
//     const caseStudies = await getAllCaseStudies();
//     return caseStudies.map((cs) => ({ slug: cs.slug }));
//   } catch (error) {
//     console.error('Error fetching case study slugs:', error);
//     return [];
//   }
// }

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const caseStudy = await getCaseStudyBySlug(slug);
    return {
      title: caseStudy.seo?.title || caseStudy.title,
      description: caseStudy.seo?.description || caseStudy.excerpt,
    };
  } catch (error) {
    console.error('Error fetching case study metadata:', error);
    return {};
  }
}

interface MetricDisplayProps {
  metrics?: Array<{ label: string; value: string | number }>;
}

function MetricsDisplay({ metrics }: MetricDisplayProps) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 my-8">
      <h2 className="text-2xl font-bold mb-6">Key Metrics</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <p className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</p>
            <p className="text-sm text-gray-700 font-medium">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function CaseStudyDetailPage({
  params,
}: CaseStudyPageProps) {
  const { slug } = await params;
  try {
    const caseStudy = await getCaseStudyBySlug(slug);
    const mdxSource = await serialize(caseStudy.content);

    return (
      <Container className="py-16">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <header className="mb-8">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
              {caseStudy.category}
            </p>
            <h1 className="text-4xl font-bold mb-4">{caseStudy.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 flex-wrap">
              <span className="font-semibold text-gray-900">{caseStudy.client}</span>
              <span className="text-gray-400">•</span>
              <Date date={caseStudy.date} />
              {caseStudy.services && caseStudy.services.length > 0 && (
                <>
                  <span className="text-gray-400">•</span>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.services.map((service, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </header>

          {caseStudy.coverImage && (
            <div className="relative w-full h-96 rounded-lg overflow-hidden mb-8">
              <Image
                src={caseStudy.coverImage}
                alt={caseStudy.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <CaseStudyHighlight
            challenge={caseStudy.challenge}
            solution={caseStudy.solution}
            results={caseStudy.results}
          />

          <MetricsDisplay metrics={caseStudy.metrics} />

          <CaseStudyContent mdxSource={mdxSource} />
        </div>
      </Container>
    );
  } catch (error) {
    console.error('Error fetching case study:', error);
    notFound();
  }
}
