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
        content='-UKgXR_VAcX0r3qNHT_FWY_MM_JUYMjALw-pDNMXzlY'
      />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
