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
      if (['Hero', 'LogoBlock', 'FeatureGrid', 'Testimonial', 'FeaturesMinimal', 'MediaBlock', 'FreeformBlock', 'CallToActionBlock', 'LatestPosts'].includes(componentName) && frontmatter) {
        enhanced[componentName] = (props: any) => {
          const blockKey = componentName === 'Hero' ? 'heroBlock' :
                          componentName === 'LogoBlock' ? 'logoBlock' :
                          componentName === 'FeatureGrid' ? 'featureGridBlock' :
                          componentName === 'Testimonial' ? 'testimonialBlock' :
                          componentName === 'FeaturesMinimal' ? 'featuresMinimalBlock' :
                          componentName === 'MediaBlock' ? 'mediaBlock' :
                          componentName === 'FreeformBlock' ? 'freeformBlock' :
                          componentName === 'CallToActionBlock' ? 'callToActionBlock' :
                          componentName === 'LatestPosts' ? 'latestPosts' : null;
          
          const blockData = blockKey ? frontmatter[blockKey] : null;
          
          if (!blockData) {
            console.warn(`[MDXClientRenderer] No data found for ${componentName} (blockKey: ${blockKey})`);
          }
          
          return <OriginalComponent {...props} {...(componentName === 'LatestPosts' ? { posts: blockData } : { block: blockData })} />;
        };
      } else {
        enhanced[componentName] = OriginalComponent;
      }
    });
    
    return enhanced;
  }, [components, frontmatter]);

  // Prepare scope data to pass to MDXRemote
  const scope = useMemo(() => {
    return {
      ...frontmatter,
      // Also expose individual blocks at root level if needed
      heroBlock: frontmatter?.heroBlock,
      logoBlock: frontmatter?.logoBlock,
      featureGridBlock: frontmatter?.featureGridBlock,
      testimonialBlock: frontmatter?.testimonialBlock,
      featuresMinimalBlock: frontmatter?.featuresMinimalBlock,
      mediaBlock: frontmatter?.mediaBlock,
      freeformBlock: frontmatter?.freeformBlock,
      callToActionBlock: frontmatter?.callToActionBlock,
      latestPosts: frontmatter?.latestPosts,
    };
  }, [frontmatter]);

  useEffect(() => {
    console.debug('[MDXClientRenderer] content preview:', (content || '').slice(0,2000));
    console.debug('[MDXClientRenderer] available components:', Object.keys(components || {}));
    console.debug('[MDXClientRenderer] frontmatter preview:', frontmatter);
    let mounted = true;
    const serializeContent = async () => {
      try {
        setError(null);
        const src = await serialize(content || '', {
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

  return <MDXRemote {...mdxSource} components={enhancedComponents} scope={scope} />;
}
