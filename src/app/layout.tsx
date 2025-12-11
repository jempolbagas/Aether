import type {Metadata} from 'next';
import './globals.css';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Toaster } from '@/components/ui/toaster';
import { CustomCursor } from '@/components/CustomCursor';
import { Cormorant_Garamond, IBM_Plex_Mono } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-headline',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['300', '400'],
});

export const metadata: Metadata = {
  title: 'Aether Portfolio',
  description: 'Luxury architecture firm "Aether"',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${cormorant.variable} ${plexMono.variable} font-body antialiased`}>
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Toaster />
      </body>
    </html>
  );
}
