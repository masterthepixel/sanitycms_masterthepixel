import { Metadata } from 'next';
import Container from '@/components/global/container';
import CaseStudyGrid from './_components/case-study-grid';
import { getAllCaseStudies } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Explore our case studies and client success stories',
};

export default async function CaseStudiesPage() {
  const caseStudies = await getAllCaseStudies();
  const sortedCaseStudies = caseStudies.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Container className="py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-lg text-gray-600">
            Real-world projects and success stories from our clients
          </p>
        </div>

        <CaseStudyGrid caseStudies={sortedCaseStudies} />
      </div>
    </Container>
  );
}
