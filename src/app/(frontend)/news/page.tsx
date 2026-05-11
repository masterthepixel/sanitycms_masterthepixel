import { Metadata } from 'next';
import Container from '@/components/global/container';
import NewsGrid from './_components/news-grid';
import { getAllNews } from '@/lib/content';

export const metadata: Metadata = {
  title: 'News',
  description: 'Latest news and announcements from masterthepixel',
};

export default async function NewsPage() {
  const news = await getAllNews();
  const sortedNews = news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Container className="py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">News & Updates</h1>
          <p className="text-lg text-gray-600">
            Latest announcements, updates, and news from masterthepixel
          </p>
        </div>

        <NewsGrid news={sortedNews} />
      </div>
    </Container>
  );
}
