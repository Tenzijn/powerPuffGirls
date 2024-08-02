import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';

import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'PowerPuff Girls',
  description: 'Assignment project for RTL',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
