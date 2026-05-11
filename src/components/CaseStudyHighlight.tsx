import { AlertCircle, Lightbulb, TrendingUp } from 'lucide-react';

interface CaseStudyHighlightProps {
  challenge: string;
  solution: string;
  results: string;
}

export default function CaseStudyHighlight({
  challenge,
  solution,
  results,
}: CaseStudyHighlightProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6 my-8">
      {/* Challenge */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-start gap-3 mb-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
          <h3 className="text-lg font-semibold">Challenge</h3>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">{challenge}</p>
      </div>

      {/* Solution */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-start gap-3 mb-3">
          <Lightbulb className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
          <h3 className="text-lg font-semibold">Solution</h3>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">{solution}</p>
      </div>

      {/* Results */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-start gap-3 mb-3">
          <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
          <h3 className="text-lg font-semibold">Results</h3>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">{results}</p>
      </div>
    </div>
  );
}
