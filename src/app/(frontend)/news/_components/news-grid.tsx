import React from 'react';
import NewsCard from './news-card';
import { News } from '@/types/content';

interface NewsGridProps {
  news: News[];
}

export default function NewsGrid({ news }: NewsGridProps) {
  const pinnedNews = news.filter((item) => item.isPinned);
  const regularNews = news.filter((item) => !item.isPinned);

  return (
    <div className="space-y-8">
      {pinnedNews.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Featured</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {pinnedNews.map((item) => (
              <NewsCard key={item.slug} news={item} featured />
            ))}
          </div>
        </div>
      )}

      {regularNews.length > 0 && (
        <div>
          {pinnedNews.length > 0 && <h2 className="text-2xl font-bold mb-4">Latest News</h2>}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {regularNews.map((item) => (
              <NewsCard key={item.slug} news={item} />
            ))}
          </div>
        </div>
      )}

      {news.length === 0 && (
        <p className="text-center py-12 text-gray-500">No news items yet.</p>
      )}
    </div>
  );
}
