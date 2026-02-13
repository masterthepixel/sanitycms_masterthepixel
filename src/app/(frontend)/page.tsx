import { Metadata } from "next";
import { getPageBySlug } from "@/lib/content";
import MDXRenderer from "@/components/MDXRenderer";

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
      <MDXRenderer>
        {page.content}
      </MDXRenderer>
    </div>
  );
}