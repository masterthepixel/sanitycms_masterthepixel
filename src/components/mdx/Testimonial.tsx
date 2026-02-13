import dynamic from "next/dynamic";

const TestimonialBlock = dynamic(() => import("../page-builder/blocks/testimonial-block"));

export default function Testimonial({ block }: { block: any }) {
  return <TestimonialBlock {...block} />;
}