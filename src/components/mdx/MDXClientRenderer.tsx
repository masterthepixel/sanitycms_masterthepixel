"use client";

import React, { useEffect, useState, useMemo } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

export default function MDXClientRenderer({ 
  content, 
  components,
  frontmatter
}: { 
  content: string;
  components?: Record<string, React.ComponentType<any>>;
  frontmatter?: any;
}) {
  const [mdxSource, setMdxSource] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // Create enhanced components that have access to frontmatter data
  const enhancedComponents = useMemo(() => {
    if (!components) return {};
    
    const enhanced: Record<string, React.ComponentType<any>> = {};
    
    Object.keys(components).forEach(componentName => {
      const OriginalComponent = components[componentName];
      
      // Special handling for our MDX components that need block data
      if (['Hero', 'FeatureGrid', 'Testimonial'].includes(componentName) && frontmatter) {
        enhanced[componentName] = (props: any) => {
          const blockKey = componentName === 'Hero' ? 'heroBlock' :
                          componentName === 'FeatureGrid' ? 'featureGridBlock' :
                          componentName === 'Testimonial' ? 'testimonialBlock' : null;
          
          const blockData = blockKey ? frontmatter[blockKey] : null;
          
          return <OriginalComponent {...props} block={blockData} />;
        };
      } else {
        enhanced[componentName] = OriginalComponent;
      }
    });
    
    return enhanced;
  }, [components, frontmatter]);

  useEffect(() => {
    console.debug('[MDXClientRenderer] content preview:', (content || '').slice(0,2000));
    console.debug('[MDXClientRenderer] available components:', Object.keys(components || {}));
    console.debug('[MDXClientRenderer] frontmatter preview:', frontmatter);
    let mounted = true;
    const serializeContent = async () => {
      try {
        setError(null);
        const src = await serialize(content || '', {
          parseFrontmatter: true,
          mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
            development: process.env.NODE_ENV === 'development'
          }
        });
        if (mounted) setMdxSource(src);
      } catch (err) {
        console.error('MDX serialize failed', err);
        if (mounted) setError(err instanceof Error ? err.message : 'Unknown error');
      }
    };
    serializeContent();
    return () => { mounted = false };
  }, [content, components, frontmatter]);

  if (error) {
    return (
      <div className="p-4 border border-red-300 bg-red-50 text-red-800 rounded">
        <h3 className="font-semibold">MDX Error:</h3>
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  if (!mdxSource) return <div>Loading content…</div>;

  return <MDXRemote {...mdxSource} components={enhancedComponents} />;
}
