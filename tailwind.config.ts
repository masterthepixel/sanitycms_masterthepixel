import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
      borderRadius: {
        '4xl': '2.4rem'
      },
      fontFamily: {
        geistSans: ['var(--font-geist-sans)'],
        geistMono: ['var(--font-geist-mono)']
      },
      keyframes: {
        'logo-marquee-move': {
          to: {
            transform: 'translateX(-50%)'
          }
        },
      },
      animation: {
        'logo-marquee': 'logo-marquee-move 60s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("tailwindcss-animate")
  ],
  future: {
    hoverOnlyWhenSupported: true
  }
};

export default config;