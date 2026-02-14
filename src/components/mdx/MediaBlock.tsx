import dynamic from 'next/dynamic'

const PageMediaBlock = dynamic(() => import('../page-builder/blocks/media-block'))

export default function MediaBlock({ block, ...otherProps }: { block?: any; [key: string]: any }) {
  if (!block) return <div className="py-16 text-center text-gray-500">MediaBlock component: block data not provided</div>
  return <PageMediaBlock {...block} />
}
