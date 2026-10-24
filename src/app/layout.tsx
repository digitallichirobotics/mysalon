
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import Header from '../components/layout/Header';

export const metadata: Metadata = {
  title: {
    default: 'Maison Belle | Beauty & Wellness',
    template: '%s | Maison Belle',
  },
  description: 'Discover personalised beauty treatments, expert care and relaxing salon experiences at Maison Belle.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#fffdf9] antialiased">
         <Header />
        {children}
      </body>
    </html>
  );
}
