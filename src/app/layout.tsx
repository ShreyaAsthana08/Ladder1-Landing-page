import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ladder1',
  description: 'Ladder1 Landing Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
