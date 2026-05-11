import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/global/container';
import NewsContent from '../_components/news-content';
import { getNewsBySlug, getAllNews } from '@/lib/content';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Date from '@/components/ui/date';
import { serialize } from 'next-mdx-remote/serialize';

interface NewsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const news = await getAllNews();
    return news.map((item) => ({ slug: item.slug }));
  } catch (error) {
    console.error('Error fetching news slugs:', error);
    return [];
  }
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const newsItem = await getNewsBySlug(slug);
    return {
      title: newsItem.seo?.title || newsItem.title,
      description: newsItem.seo?.description || newsItem.excerpt,
    };
  } catch (error) {
    console.error('Error fetching news metadata:', error);
    return {};
  }
}

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const { slug } = await params;
  try {
    const newsItem = await getNewsBySlug(slug);
    const mdxSource = await serialize(newsItem.content);

    return (
      <Container className="py-16">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{newsItem.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <Date date={newsItem.date} />
              {newsItem.isPinned && (
                <span className="inline-flex items-center gap-1 bg-yellow-50 text-yellow-900 px-2 py-1 rounded text-xs font-semibold border border-yellow-200">
                  Featured
                </span>
              )}
            </div>
          </header>

          {newsItem.coverImage && (
            <div className="relative w-full h-96 rounded-lg overflow-hidden mb-8">
              <Image
                src={newsItem.coverImage}
                alt={newsItem.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <NewsContent mdxSource={mdxSource} />
        </div>
      </Container>
    );
  } catch (error) {
    console.error('Error fetching news item:', error);
    notFound();
  }
}
