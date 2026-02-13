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