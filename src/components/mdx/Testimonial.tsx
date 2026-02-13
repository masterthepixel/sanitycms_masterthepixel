import dynamic from "next/dynamic";

const TestimonialBlock = dynamic(() => import("../page-builder/blocks/testimonial-block"));

export default function Testimonial({ block, ...otherProps }: { block?: any, [key: string]: any }) {
  // If block is passed as prop, use it; otherwise this is a placeholder
  if (!block) {
    return <div className="py-16 text-center text-gray-500">Testimonial component: block data not provided</div>;
  }
  return <TestimonialBlock {...block} />;
}