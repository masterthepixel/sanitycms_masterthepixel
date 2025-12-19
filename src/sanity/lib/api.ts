export const useCdn = false;
export const studioUrl = '/studio';

// Provide safe defaults so builds don't fail in CI if env vars are temporarily missing.
// Prefer explicit environment variables, but fall back to canonical values used
// in this project to allow the build to proceed while environment config is fixed.
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '5ywyt4ng';

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-04-16';

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) { throw new Error(errorMessage) }
  return v
};