import dynamic from 'next/dynamic'

const FeaturesMinimalBlock = dynamic(() => import('../page-builder/blocks/features-minimal-block'))

export default function FeaturesMinimal({ block, ...otherProps }: { block?: any; [key: string]: any }) {
  if (!block) return <div className="py-16 text-center text-gray-500">FeaturesMinimal component: block data not provided</div>
  return <FeaturesMinimalBlock {...block} />
}
