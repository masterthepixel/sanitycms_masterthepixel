import dynamic from "next/dynamic";

const FeatureCardsBlock = dynamic(() => import("../page-builder/blocks/feature-cards-block"));

export default function FeatureGrid({ block }: { block: any }) {
  return <FeatureCardsBlock {...block} />;
}