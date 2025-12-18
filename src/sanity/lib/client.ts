import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./api";

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