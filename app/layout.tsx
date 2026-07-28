import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Stillwater | Boutique Housekeeping for New York City',
  description:
    'Stillwater brings a boutique housekeeping standard to the five boroughs. Book a service today.',
  openGraph: {
    title: 'Stillwater | Boutique Housekeeping for New York City',
    description:
      'Stillwater brings a boutique housekeeping standard to the five boroughs. Book a service today.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
