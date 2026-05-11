'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { mdxComponents } from '@/components/MDXRenderer';

interface NewsContentProps {
  mdxSource: MDXRemoteSerializeResult;
}

export default function NewsContent({ mdxSource }: NewsContentProps) {
  return (
    <article className="prose max-w-none">
      <MDXRemote {...mdxSource} components={mdxComponents} />
    </article>
  );
}
