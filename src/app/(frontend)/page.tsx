import { Metadata } from "next";
import { getPageBySlug } from "@/lib/content";
import { mdxComponents } from "@/components/MDXRenderer";
import MDXClientRenderer from '@/components/mdx/MDXClientRenderer';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('home');
  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description,
  };
}

export default async function Home() {
  const page = await getPageBySlug('home');
  // supply latest posts to MDX frontmatter so <LatestPosts /> receives real data
  try {
    const allPosts = await (await import('@/lib/content')).getAllPosts();
    const recent = (allPosts || [])
      .filter((p: any) => !p.draft)
      .sort((a: any, b: any) => (new Date(b.date).getTime() - new Date(a.date).getTime()))
      .slice(0, 3);
    // attach as `latestPosts` so MDXClientRenderer will forward to LatestPosts
    (page as any).latestPosts = recent;
  } catch (e) {
    console.warn('[Home] could not load latest posts for homepage', e);
  }

  return (
    <div id="home">
      <MDXClientRenderer 
        content={page.content} 
        components={mdxComponents} 
        frontmatter={page}
      />
    </div>
  );
}