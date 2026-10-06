import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sales Analytics Dashboard',
  description: 'Next.js 15 sales dashboard frontend assessment',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
