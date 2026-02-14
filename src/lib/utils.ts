import { Metadata } from 'next';
import toast from "react-hot-toast";
import { ButtonType } from '@/types';
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export function scrollToElement(id: string) {
  const element = document.getElementById(id)
  if (element) {
    const rect = element.getBoundingClientRect()
    const scrollTop = window.scrollY + rect.top - 90
    window.scrollTo({ top: scrollTop, behavior: 'smooth' })
  }
};

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

export function truncateText(text: string, target: number) {
  if (text.length > target) { 
    return text.slice(0, target) + '...';
  };
  return text;
};

export function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).replace(/(\d+)/, (match) => {
    const num = parseInt(match);
    const suffix = ['th', 'st', 'nd', 'rd'][
      (num > 3 && num < 21) || num % 10 > 3 ? 0 : num % 10
    ];
    return match + suffix;
  });
};

export async function copyHeadingUrl(id: string): Promise<boolean> {
  try {
    const url = `${window.location.href.split('#')[0]}#${id}`;
    await navigator.clipboard.writeText(url);
    return true;
  } catch (error) {
    console.error('Failed to copy URL:', error);
    return false;
  }
};

export function copyToClipboard(input: string) {
  
  if (input.startsWith('#') || document.getElementById(input)) {
    copyHeadingUrl(input.startsWith('#') ? input.substring(1) : input)
      .then(() => toast.success('Copied link to clipboard'))
      .catch(() => toast.error('Failed to copy link'));
  } 
  
  else {
    navigator.clipboard.writeText(input)
      .then(() => toast.success('Copied to clipboard'))
      .catch(() => toast.error('Failed to copy text'));
  }
};

export function formatFieldId(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export function getAnchorHref({ 
  anchorLocation, 
  anchorId, 
  pageReference 
}: { 
  anchorLocation: ButtonType['buttonAnchorLocation'];
  anchorId: ButtonType['buttonAnchorId'];
  pageReference: ButtonType['buttonPageReference'];
}) {
  if (anchorLocation === 'currentPage') {
    return `#${anchorId}`;
  }
  return `/${pageReference?.slug}#${anchorId}`;
}

export function getPageHref(page: { slug: string; _type?: string }) {
  return `/${page._type ? `${page._type}/` : ''}${page.slug}`;
}

export function resolveHref(documentType?: string, slug?: string): string | undefined {
  switch (documentType) {
    case 'home':
      return '/';
    case 'page':
      return slug ? `/${slug}` : undefined;
    case 'service':
      return slug ? `/services/${slug}` : undefined;
    case 'project':
      return slug ? `/projects/${slug}` : undefined;
    case 'post':
      return slug ? `/blog/${slug}` : undefined;
    default:
      return `/${slug}`;
  }
}

export type PageQueryResult = any;
  
export function processMetadata({ data }: {
  data: PageQueryResult;
}): Metadata {

  const pageData = data as any;
  const { _id: id, title: pageTitle } = pageData ?? {};
  const { title, description, image, noIndex } = pageData?.seo ?? {};

  const metadata: Metadata = {
    title: {
      template: `${title ? title : pageTitle} | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
      default: `${title ? title : pageTitle}`,
    },
    description,
  };

  // Normalize `seo.image` which can be a string, an object from Sanity, or null.
  const resolveImageUrl = (img: any): string | undefined => {
    if (!img) return undefined;
    if (typeof img === 'string') return img;
    if (typeof img === 'object') {
      // common shapes: { url: '/path' } or { asset: { url: '/path' } }
      return img.url || img?.asset?.url || undefined;
    }
    return undefined;
  };

  const imageUrl = resolveImageUrl(image) || `/api/og?id=${id}`;

  metadata.openGraph = {
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
      },
    ],
  };

  if (noIndex) {
    metadata.robots = 'noindex'
  };

  return metadata;
}

export function normalizePageBuilder(data: any): any[] {
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