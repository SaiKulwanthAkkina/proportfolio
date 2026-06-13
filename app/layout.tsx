import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://saikkina.dev'),
  title: 'Sai Kulwanth Akkina | Software Developer Intern',
  description:
    'Portfolio of Sai Kulwanth Akkina — Computer Science student, Software Developer Intern, and aspiring software engineer.',
  keywords: ['Sai Kulwanth Akkina', 'Software Developer', 'Portfolio', 'Java Developer'],
  authors: [{ name: 'Sai Kulwanth Akkina' }],
  openGraph: {
    title: 'Sai Kulwanth Akkina | Software Developer Intern',
    description: 'Portfolio of Sai Kulwanth Akkina — Computer Science student and Software Developer Intern.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
