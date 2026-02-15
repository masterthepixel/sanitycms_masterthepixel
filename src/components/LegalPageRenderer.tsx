import Link from 'next/link';

interface Restriction {
  [key: string]: string | string[];
}

interface Section {
  heading: string;
  type: 'intro' | 'section';
  content: string;
  restrictions?: string[];
}

interface LegalPageData {
  title: string;
  slug: string;
  seo: {
    title: string;
    description: string;
  };
  sections: Section[];
  cta?: {
    heading: string;
    content: string;
    buttons: Array<{
      text: string;
      href: string;
      variant: string;
    }>;
  };
}

export default function LegalPageRenderer({ page }: { page: LegalPageData }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16 sm:px-8 sm:py-20">
        {/* Main content */}
        <article className="prose prose-lg max-w-none">
          {page.sections.map((section, idx) => (
            <section key={idx} className="mb-12">
              {section.type === 'intro' ? (
                <>
                  <h1 className="text-4xl font-bold mb-6">{section.heading}</h1>
                  <p className="text-lg text-gray-700 mb-8">{section.content}</p>
                </>
              ) : (
                <>
                  <h2 className="text-3xl font-semibold mb-4 mt-8">{section.heading}</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">{section.content}</p>
                  {section.restrictions && section.restrictions.length > 0 && (
                    <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                      {section.restrictions.map((restriction, ridx) => (
                        <li key={ridx} className="mb-2">
                          {restriction}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </section>
          ))}
        </article>

        {/* CTA Section */}
        {page.cta && (
          <section className="mt-16 pt-12 border-t border-gray-200">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-3">{page.cta.heading}</h2>
              <p className="text-gray-700 mb-6">{page.cta.content}</p>
              <div className="flex flex-wrap gap-4">
                {page.cta.buttons.map((button, idx) => (
                  <Link
                    key={idx}
                    href={button.href}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      button.variant === 'primary'
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {button.text}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
