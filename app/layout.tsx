import type { Metadata } from 'next';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

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
      <meta
        name='google-site-verification'
        content='GGYFsjEAwrnRF4SGC4UOUGSkR46VRfl1CJIg-jS_SCw'
      />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
