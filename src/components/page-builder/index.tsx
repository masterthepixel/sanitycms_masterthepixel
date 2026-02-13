"use client"
import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { PageBuilderType } from "@/types";
import { createDataAttribute } from "next-sanity";
import { PageBySlugQueryResult } from "../../../sanity.types";
import { dataset, projectId, studioUrl } from "@/sanity/lib/api";

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

export function normalizePageBuilder(data: any): PageBlock[] {
  // If data is already an array of blocks, return as-is
  if (Array.isArray(data)) {
    return data;
  }

  // If data has a pageBuilder property, return that
  if (data && data.pageBuilder && Array.isArray(data.pageBuilder)) {
    return data.pageBuilder;
  }

  // If data is a single block, wrap in array
  if (data && data._type) {
    return [data];
  }

  // Fallback to empty array
  return [];
}

export function PageBuilder({ pageBuilder, id, type }: PageBuilderProps) {
  const normalizedBlocks = normalizePageBuilder(pageBuilder);

  return (
    <div
      data-sanity={createDataAttribute({
        id: id,
        type: type,
        dataset: dataset,
        baseUrl: studioUrl,
        path: "pageBuilder",
        projectId: projectId,
      }).toString()}
    >
      {normalizedBlocks.map((block) => {
        const Component = PB_BLOCKS[block._type] as ComponentType<any>;
        return (
          <div
            key={`${block._type}-${block._key}`}
            data-sanity={createDataAttribute({
              id: id,
              type: type,
              dataset: dataset,
              baseUrl: studioUrl,
              projectId: projectId,
              path: `pageBuilder[_key=="${block._key}"]`,
            }).toString()}
          >
            <Component {...block} />
          </div>
        );
      })}
    </div>
  );
}