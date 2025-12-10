import type {Metadata} from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Toaster } from '@/components/ui/toaster';

const oggHeadline = localFont({
  src: './fonts/Ogg-Regular.woff2',
  variable: '--font-headline',
  display: 'swap',
});

const oggBody = localFont({
  src: [
    {
      path: './fonts/OggText-Book.woff2',
      style: 'normal',
    },
    {
      path: './fonts/OggText-BookItalic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-body',
  display: 'swap',
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
      <body className={`${oggBody.variable} ${oggHeadline.variable} font-body antialiased`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Toaster />
      </body>
    </html>
  );
}
