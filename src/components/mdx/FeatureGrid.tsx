import dynamic from "next/dynamic";

const FeatureCardsBlock = dynamic(() => import("../page-builder/blocks/feature-cards-block"));

export default function FeatureGrid({ block, ...otherProps }: { block?: any, [key: string]: any }) {
  // If block is passed as prop, use it; otherwise this is a placeholder
  if (!block) {
    return <div className="py-16 text-center text-gray-500">FeatureGrid component: block data not provided</div>;
  }
  return <FeatureCardsBlock {...block} />;
}