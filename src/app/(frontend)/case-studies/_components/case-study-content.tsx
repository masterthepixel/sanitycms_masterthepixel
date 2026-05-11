'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { mdxComponents } from '@/components/MDXRenderer';

interface CaseStudyContentProps {
  mdxSource: MDXRemoteSerializeResult;
}

export default function CaseStudyContent({ mdxSource }: CaseStudyContentProps) {
  return (
    <article className="prose max-w-none mb-12">
      <MDXRemote {...mdxSource} components={mdxComponents} />
    </article>
  );
}
