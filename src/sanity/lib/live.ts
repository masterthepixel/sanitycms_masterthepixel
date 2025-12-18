import { client } from "./client";
import { token } from "@/sanity/lib/token";

// Handle both string queries and defineQuery objects
export const sanityFetch = async (params: any) => {
  const query = typeof params.query === 'string' ? params.query : params.query?.query || params.query;
  const result = await client.fetch(query, params.params || {});
  return { data: result };
};

// Placeholder for SanityLive - will need to be implemented differently
export const SanityLive = ({ children }: { children: React.ReactNode }) => children;