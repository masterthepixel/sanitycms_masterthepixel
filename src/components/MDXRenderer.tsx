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
}

export default function MDXRenderer({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  )
}