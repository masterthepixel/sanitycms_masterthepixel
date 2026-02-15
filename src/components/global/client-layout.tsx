"use client"
import Navbar from './navbar';
import Footer from './footer';
import localFont from "next/font/local";
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
const Toaster = dynamic(() => import('react-hot-toast').then(mod => mod.Toaster), { ssr: false });

interface ClientLayoutProps {
  children: React.ReactNode;
  settings: any;
  navigationSettings: any;
}

const geistSans = localFont({
  src: "../../app/(frontend)/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../../app/(frontend)/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function ClientLayout({ 
  children,
  settings,
  navigationSettings,
}: ClientLayoutProps) {

  const pathname = usePathname();
  if (pathname.includes('/studio')) return (children);
  
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} font-geistSans antialiased grid min-h-[100dvh] grid-rows-[auto_1fr_auto]`}>
      <Navbar 
        settings={settings}
        navigationSettings={navigationSettings}
      />
      <main className='overflow-hidden'>
        {children}
      </main>
      <Footer 
        settings={settings} 
        navigationSettings={navigationSettings}
      />
      <Toaster 
        position="bottom-right" 
        toastOptions={{
          className: 'text-sm font-semibold antialiased',
          style: {
            borderRadius: '300px',
            padding: '4px 8px',
            color: '#FFFFFF',
            fontWeight: '500',
            backgroundColor: '#000000'
          }
        }}
      />
    </div>
  )
}