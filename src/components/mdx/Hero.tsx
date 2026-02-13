import dynamic from "next/dynamic";

const HeroBlock = dynamic(() => import("../page-builder/blocks/hero-block"));

export default function Hero({ block, ...otherProps }: { block?: any, [key: string]: any }) {
  // If block is passed as prop, use it; otherwise this is a placeholder
  if (!block) {
    return <div className="py-16 text-center text-gray-500">Hero component: block data not provided</div>;
  }
  return <HeroBlock {...block} />;
}