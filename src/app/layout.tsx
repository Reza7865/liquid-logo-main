import type { Metadata, Viewport } from 'next/types';
import './styles.css';
import { Analytics } from '@vercel/analytics/react';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <html suppressHydrationWarning={true}>
      <head>
        <title>Liquid Metal • CreativeRez</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'Turn your logo into liquid metal | CreativeRez',
  description: 'Liquid metal for your logo by creativerez.xyz',
  icons: {
    icon: process.env.NODE_ENV === 'production' ? '/favicon.ico' : '/favicon-dev.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    url: 'https://creativerez.xyz',
    type: 'website',
    locale: 'en_US',
    siteName: 'Liquid logo by CreativeRez',
    title: 'Turn your logo into liquid metal | CreativeRez',
    description: 'Liquid metal for your logo by creativerez.xyz',
    images: [
      {
        url: 'https://creativerez.xyz/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Turn your logo into liquid metal | CreativeRez',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turn your logo into liquid metal | CreativeRez',
    description: 'Liquid metal for your logo by creativerez.xyz',
    creator: '@creativerez',
    images: ['https://creativerez.xyz/og-image.png'],
  },
};

export const viewport = {
  width: 480,
  initialScale: 0,
  themeColor: '#000',
};
