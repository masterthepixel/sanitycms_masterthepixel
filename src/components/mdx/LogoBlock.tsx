import dynamic from 'next/dynamic'

const PageLogoBlock = dynamic(() => import('../page-builder/blocks/logo-block'))

export default function LogoBlock({ block, ...otherProps }: { block?: any; [key: string]: any }) {
  if (!block) {
    return <div className="py-16 text-center text-gray-500">LogoBlock component: block data not provided</div>
  }
  return <PageLogoBlock {...block} />
}
