import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import LegalPageRenderer from '@/components/LegalPageRenderer';

const pagesDir = path.join(process.cwd(), 'content', 'pages');

async function getPageData(slug: string) {
  const filePath = path.join(pagesDir, `${slug}.json`);
  const content = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(content);
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageData('privacy-policy');
  return {
    title: page.seo?.title,
    description: page.seo?.description,
  };
}

export default async function PrivacyPolicyPage() {
  const page = await getPageData('privacy-policy');

  return <LegalPageRenderer page={page} />;
}