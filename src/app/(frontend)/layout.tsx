import "./globals.css";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import Container from "@/components/global/container";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import ClientLayout from "@/components/global/client-layout";
import InstallDemoButton from "@/components/shared/install-demo-button";
import { DisableDraftMode } from "@/components/shared/disable-draft-mode";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { navigationSettingsQuery } from "@/sanity/lib/queries/singletons/navigation";
import { generalSettingsQuery, marketingSettingsQuery } from "@/sanity/lib/queries/singletons/settings";
import { ThemeProvider } from "@/components/shared/theme-provider";

export const metadata: Metadata = {
  title: {
    template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    default: `${process.env.NEXT_PUBLIC_SITE_NAME}`,
  },
  description: "Open-Source Next.js & Sanity Marketing Website Template.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { isEnabled: isDraftMode } = await draftMode();

  const [{ data: settings }, { data: marketingSettings }, { data: navigationSettings }] = await Promise.all([
    sanityFetch({ query: generalSettingsQuery }),
    sanityFetch({ query: marketingSettingsQuery }),
    sanityFetch({ query: navigationSettingsQuery })
  ]);

  if (!settings) return (
    <Container className="py-16 flex items-center justify-center gap-2.5 h-screen pattern-bg--2">
      <InstallDemoButton />
    </Container>
  )
  
  return (
    <html lang="en">
      <body>
        <ThemeProvider defaultTheme="system" storageKey="siteengine-theme">
          <ClientLayout 
            settings={settings}
            navigationSettings={navigationSettings}
          >
            {children}
          </ClientLayout>
        </ThemeProvider>
        {isDraftMode && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}
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