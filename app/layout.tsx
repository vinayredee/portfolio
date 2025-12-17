import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kundu Vinay Kumar Reddy | Full-Stack Developer',
  description: 'Portfolio of Kundu Vinay Kumar Reddy - Full-Stack Developer specializing in AI-powered applications and scalable web systems.',
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Kundu Vinay Kumar Reddy | Full-Stack Developer',
    description: 'Portfolio of Kundu Vinay Kumar Reddy - Full-Stack Developer specializing in AI-powered applications and scalable web systems.',
    url: 'https://vinay-portfolio.vercel.app', // Best guess, user can update
    siteName: 'Vinay Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[var(--background)] text-gray-900 min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
