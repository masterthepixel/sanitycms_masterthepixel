"use server"
import { client } from "./client";
import { projectId } from "./api";
import { Redirect } from 'next/dist/lib/load-custom-routes';

interface SanityRedirect {
  _type: string;
  source?: string;
  destination?: string;
  permanent?: boolean;
}

export async function fetchRedirects(): Promise<Redirect[]> {
  // Skip fetching redirects if Sanity is not properly configured
  if (!projectId) {
    console.warn('Sanity not configured, skipping redirects fetch');
    return [];
  }

  try {
    const redirects = await client.fetch(`*[_type == "redirect" && isEnabled == true]`);
    
    return redirects
      .filter((r: SanityRedirect) => r.source && r.destination)
      .map((r: SanityRedirect) => ({
        source: r.source,
        destination: r.destination,
        permanent: !!r.permanent
      }));
  } catch (error) {
    console.warn('Failed to fetch redirects:', error);
    return [];
  }
}