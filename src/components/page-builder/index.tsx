"use client"
import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { PageBuilderType } from "@/types";
import { normalizePageBuilder } from "@/lib/utils";

const HeroBlock = dynamic(() => import("./blocks/hero-block"));
const HeaderBlock = dynamic(() => import("./blocks/header-block"));
const FeatureCardsBlock = dynamic(() => import("./blocks/feature-cards-block"));
const TestimonialBlock = dynamic(() => import("./blocks/testimonial-block"));
const LogoBlock = dynamic(() => import("./blocks/logo-block"));
const FreeformBlock = dynamic(() => import("./blocks/freeform-block"));
const PortableTextBlock = dynamic(() => import("./blocks/portable-text-block"));
const CallToActionBlock = dynamic(() => import("./blocks/call-to-action-block"));
const FeaturesMinimalBlock = dynamic(() => import("./blocks/features-minimal-block"));
const ServicesBlock = dynamic(() => import("./blocks/services-block"));
const FormBlock = dynamic(() => import("./blocks/form-block"));
const MediaBlock = dynamic(() => import("./blocks/media-block"));

type PageBlock = PageBuilderType<string>;

export type PageBuilderProps = {
  pageBuilder: PageBlock[];
  id: string;
  type: string;
};

const PB_BLOCKS = {
  heroBlock: HeroBlock,
  headerBlock: HeaderBlock,
  featureCardsBlock: FeatureCardsBlock,
  testimonialBlock: TestimonialBlock,
  logoBlock: LogoBlock,
  freeformBlock: FreeformBlock,
  portableTextBlock: PortableTextBlock,
  callToActionBlock: CallToActionBlock,
  featuresMinimalBlock: FeaturesMinimalBlock,
  servicesBlock: ServicesBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
} as const;

type BlockType = keyof typeof PB_BLOCKS;

export function PageBuilder({ pageBuilder, id, type }: PageBuilderProps) {
  const normalizedBlocks = normalizePageBuilder(pageBuilder);

  return (
    <div>
      {normalizedBlocks.map((block) => {
        const Component = PB_BLOCKS[block._type] as ComponentType<any>;
        return (
          <div key={`${block._type}-${block._key}`}>
            <Component {...block} />
          </div>
        );
      })}
    </div>
  );
}