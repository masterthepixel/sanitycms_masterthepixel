"use client"

import { MDXProvider } from '@mdx-js/react'
import Image from 'next/image'
import { Hero, FeatureGrid, Testimonial, Services } from '@/components/mdx'

const components = {
  Image: ({ src, alt, ...props }: any) => (
    <Image src={src} alt={alt} {...props} />
  ),
  Hero,
  FeatureGrid,
  Testimonial,
  Services,
  Callout: ({ type, children }: { type?: string; children: React.ReactNode }) => (
    <div className={`p-4 rounded-lg border ${
      type === 'warning' ? 'border-yellow-200 bg-yellow-50 text-yellow-800' :
      type === 'error' ? 'border-red-200 bg-red-50 text-red-800' :
      'border-blue-200 bg-blue-50 text-blue-800'
    }`}>
      {children}
    </div>
  ),
}

export default function MDXRenderer({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  )
}