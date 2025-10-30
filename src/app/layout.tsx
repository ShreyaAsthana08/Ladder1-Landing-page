import type { Metadata } from 'next';
import './globals.css';
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"], // include weights you use
  variable: "--font-sora",
});

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
