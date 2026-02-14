import dynamic from 'next/dynamic'

const PageFreeform = dynamic(() => import('../page-builder/blocks/freeform-block'))

export default function FreeformBlock({ block, ...otherProps }: { block?: any; [key: string]: any }) {
  if (!block) return <div className="py-16 text-center text-gray-500">FreeformBlock component: block data not provided</div>
  return <PageFreeform {...block} />
}
