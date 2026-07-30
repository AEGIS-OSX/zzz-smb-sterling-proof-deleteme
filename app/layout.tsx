import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Stillwater Cold Brew',
  description: 'Professional cold brew for the five boroughs.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
