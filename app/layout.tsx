import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Stillwater Cold Brew',
  description: 'Small-batch cold brew, brewed slow.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
