import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gowtham Selvaraj | Senior Polyglot Software Engineer & Solutions Architect',
  description:
    '7.5+ years experience spanning Graphic Design to Core Systems Engineering. Expert in Go, Next.js, TypeScript, Python, and Cloud Microservices.',
  keywords: [
    'Gowtham Selvaraj',
    'Senior Fullstack Developer',
    'Solutions Architect',
    'Freelance Solutions Architect',
    'Go Microservices',
    'Next.js Developer',
    'React',
    'TypeScript',
    'System Design',
  ],
  authors: [{ name: 'Gowtham Selvaraj' }],
  openGraph: {
    title: 'Gowtham Selvaraj | Senior Polyglot Engineer',
    description:
      'Curious Mind • Problem Solver • Senior Polyglot Engineer & Freelance Solutions Architect.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
