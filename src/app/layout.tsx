import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import Layout from '@/components/layout';
import { cn } from '@/utils';

import Providers from './providers';

export const metadata: Metadata = {
  title: 'HrFlow Web',
  description: 'HrFlow web built using Next.js 13.',
  keywords: ['HrFlow.ai', 'HrFlow'],
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-inter',
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' className={cn('scroll-smooth font-sans  antialiased', fontSans.variable)}>
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
