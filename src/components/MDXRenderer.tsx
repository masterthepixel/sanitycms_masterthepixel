"use client"

import { MDXProvider } from '@mdx-js/react'
import Image from 'next/image'
import { Hero, LogoBlock, FeatureGrid, FeaturesMinimal, MediaBlock, LatestPosts, Testimonial, FreeformBlock, CallToActionBlock, Services } from '@/components/mdx'
import { PageBuilder } from '@/components/page-builder'

export const mdxComponents = {
  Image: ({ src, alt, ...props }: any) => (
    <Image src={src} alt={alt} {...props} />
  ),
  Hero,
  LogoBlock,
  FeatureGrid,
  FeaturesMinimal,
  MediaBlock,
  LatestPosts,
  Testimonial,
  FreeformBlock,
  CallToActionBlock,
  Services,
  PageBuilder,
  Callout: ({ type, children }: { type?: string; children: React.ReactNode }) => (
    <div className={`p-4 rounded-lg border ${
      type === 'warning' ? 'border-yellow-200 bg-yellow-50 text-yellow-800' :
      type === 'error' ? 'border-red-200 bg-red-50 text-red-800' :
      'border-blue-200 bg-blue-50 text-blue-800'
    }`}>
      {children}
    </div>
  ),
  // Common HTML elements styling
  h1: ({ children }: any) => <h1 className="text-4xl font-bold mb-6">{children}</h1>,
  h2: ({ children }: any) => <h2 className="text-3xl font-semibold mb-4">{children}</h2>,
  h3: ({ children }: any) => <h3 className="text-2xl font-medium mb-3">{children}</h3>,
  p: ({ children }: any) => <p className="mb-4">{children}</p>,
}

export default function MDXRenderer({ 
  children, 
  components = mdxComponents 
}: { 
  children: React.ReactNode;
  components?: Record<string, React.ComponentType<any>>;
}) {
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  )
}