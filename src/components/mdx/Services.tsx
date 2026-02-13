import dynamic from "next/dynamic";

const ServicesBlock = dynamic(() => import("../page-builder/blocks/services-block"));

export default function Services({ block }: { block: any }) {
  return <ServicesBlock {...block} />;
}