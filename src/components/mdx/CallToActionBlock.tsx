import dynamic from 'next/dynamic'

const PageCTA = dynamic(() => import('../page-builder/blocks/call-to-action-block'))

export default function CallToActionBlock({ block, ...otherProps }: { block?: any; [key: string]: any }) {
  if (!block) return <div className="py-16 text-center text-gray-500">CallToAction component: block data not provided</div>
  return <PageCTA {...block} />
}
