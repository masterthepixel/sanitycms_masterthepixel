import Script from 'next/script'

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var k='siteengine-theme';var v=localStorage.getItem(k);if(v==='light'||v==='dark'){document.documentElement.classList.remove('light','dark');document.documentElement.classList.add(v);}else{var m=window.matchMedia('(prefers-color-scheme: dark)').matches? 'dark':'light';document.documentElement.classList.remove('light','dark');document.documentElement.classList.add(m);} }catch(e){} })();`,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}