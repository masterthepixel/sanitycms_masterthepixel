'use client';

import { useEffect, useState } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { mdxComponents } from '@/components/MDXRenderer';

interface CaseStudyContentProps {
  content: string;
}

export default function CaseStudyContent({ content }: CaseStudyContentProps) {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null);

  useEffect(() => {
    let mounted = true;
    serialize(content)
      .then((source) => {
        if (mounted) setMdxSource(source);
      })
      .catch((error) => {
        console.error('Error serializing case study MDX:', error);
      });
    return () => {
      mounted = false;
    };
  }, [content]);

  return (
    <article className="prose max-w-none mb-12">
      {mdxSource ? (
        <MDXRemote {...mdxSource} components={mdxComponents} />
      ) : (
        <div>Loading…</div>
      )}
    </article>
  );
}
