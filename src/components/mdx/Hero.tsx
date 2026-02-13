import dynamic from "next/dynamic";

const HeroBlock = dynamic(() => import("../page-builder/blocks/hero-block"));

export default function Hero({ block }: { block: any }) {
  return <HeroBlock {...block} />;
}