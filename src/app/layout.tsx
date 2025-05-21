import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' }); // important for perf

export const metadata: Metadata = {
  metadataBase: new URL('https://vigyansh.dev'), // Replace with your real domain
  title: 'Vigyansh Chugh | Front-End Developer Portfolio',
  description:
    'Portfolio of Vigyansh Chugh, a front-end developer based in Sydney, Australia, specializing in React.js, Next.js, and Tailwind CSS.',
  keywords:
    'Vigyansh Chugh, front-end developer, React developer, Next.js portfolio, Tailwind CSS, web developer Sydney, JavaScript developer',
  authors: [{ name: 'Vigyansh Chugh' }],
  creator: 'Vigyansh Chugh',
  openGraph: {
    title: 'Vigyansh Chugh | Front-End Developer Portfolio',
    description:
      'Explore the professional work, skills, and projects of Vigyansh Chugh – a front-end developer crafting responsive, scalable, and modern web applications.',
    type: 'website',
    locale: 'en_US',
    url: 'https://vigyansh.dev',
    siteName: 'Vigyansh Chugh Portfolio',
    images: [
      {
        url: '/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Vigyansh Chugh Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vigyansh Chugh | Front-End Developer Portfolio',
    description:
      'Sydney-based front-end developer building modern web apps with React, Next.js, and Tailwind CSS.',
    images: ['/og-preview.png'],
    creator: '@yourhandle',
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
