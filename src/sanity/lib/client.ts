import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./api";

// Validate required environment variables at runtime
if (typeof window !== 'undefined' || process.env.NODE_ENV !== 'development') {
  if (!projectId) {
    console.warn('Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable');
  }
}

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: process.env.NODE_ENV === "production",
  perspective: 'published',
  stega: { 
    studioUrl: "/studio",
    enabled: true
  },
});