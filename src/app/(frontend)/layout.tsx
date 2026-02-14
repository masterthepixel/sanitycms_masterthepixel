import "./globals.css";
import type { Metadata } from "next";
import Container from "@/components/global/container";
import ClientLayout from "@/components/global/client-layout";
import InstallDemoButton from "@/components/shared/install-demo-button";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { getSiteSettings } from "@/lib/content";
import { transformNavigationSettings } from "@/lib/navigation-mapping";

export async function generateMetadata(): Promise<Metadata> {
  // Prefer explicit env var, fall back to content/site.json -> generalSettings.siteTitle
  let siteName = process.env.NEXT_PUBLIC_SITE_NAME;
  try {
    const siteSettings = await getSiteSettings();
    siteName = siteName || siteSettings.generalSettings?.siteTitle || 'masterthepixel';
  } catch (err) {
    siteName = siteName || 'masterthepixel';
  }

  return {
    title: {
      template: `%s | ${siteName}`,
      default: siteName,
    },
    description: "Open-Source Next.js Marketing Website Template.",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const siteSettings = await getSiteSettings();
  const settings = siteSettings.generalSettings;
  const marketingSettings = siteSettings.marketingSettings;
  const navigationSettings = transformNavigationSettings(siteSettings.navigationSettings);

  if (!settings) return (
    <Container className="py-16 flex items-center justify-center gap-2.5 h-screen pattern-bg--2">
      <InstallDemoButton />
    </Container>
  )
  
  return (
    <html lang="en">
      <body>
        <ClientLayout 
          settings={settings}
          navigationSettings={navigationSettings}
        >
          {children}
        </ClientLayout>
        {marketingSettings?.googleAnalyticsId && (
          <GoogleAnalytics 
            gaId={marketingSettings.googleAnalyticsId} 
          />
        )}
        {marketingSettings?.googleTagManagerId && (
          <GoogleTagManager 
            gtmId={marketingSettings?.googleTagManagerId} 
          />
        )}
      </body>
    </html>
  );
}