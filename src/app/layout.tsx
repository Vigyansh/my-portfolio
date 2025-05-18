import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Vigyansh Chugh - Portfolio',
  description:
    'Professional portfolio showcasing web development and design work',
  keywords: 'web development, frontend developer, portfolio, react, next.js',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Vigyansh Chugh - Portfolio',
    description:
      'Professional portfolio showcasing web development and design work',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} bg-black text-slate-300`}>
        {children}
      </body>
    </html>
  );
}
