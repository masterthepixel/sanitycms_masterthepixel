import { MDXProvider } from '@mdx-js/react'
import Image from 'next/image'
import { Callout } from '@/components/ui/callout' // assuming this exists, or create a simple one
import { YouTube } from '@/components/shared/play-video' // assuming this exists

const components = {
  Image: ({ src, alt, ...props }: any) => (
    <Image src={src} alt={alt} {...props} />
  ),
  Callout: ({ children, type = 'info', ...props }: any) => (
    <Callout type={type} {...props}>{children}</Callout>
  ),
  YouTube: ({ videoId, ...props }: any) => (
    <YouTube videoId={videoId} {...props} />
  ),
}

export default function MDXRenderer({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  )
}