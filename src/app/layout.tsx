import { Theme } from '@radix-ui/themes';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import '@radix-ui/themes/styles.css';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

const title = 'DAP De Beleyr | Dierenartsenpraktijk voor kleine huisdieren in Beveren';
const description =
  'Dierenartsenpraktijk DAP De Beleyr in Beveren, gespecialiseerd in kleine huisdieren. Werkt enkel op afspraak: bel 03 775 20 26. Bekijk de openingsuren en het adres.';

export const metadata: Metadata = {
  metadataBase: new URL('https://dapdebeleyr.be'),
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: '/',
    siteName: 'DAP De Beleyr',
    title,
    description,
    images: [
      {
        url: '/assets/vet-office.jpeg',
        width: 4032,
        height: 3024,
        alt: 'Het bord en de ingang van dierenartsenpraktijk DAP De Beleyr in Beveren',
      },
    ],
  },
  twitter: { card: 'summary_large_image', title, description },
};

export const viewport: Viewport = {
  themeColor: '#242b7b',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl-BE" className={inter.variable}>
      <body className={inter.className}>
        <a href="#inhoud" className="skip-link">
          Ga naar de inhoud
        </a>
        <Theme accentColor="indigo" grayColor="slate" radius="large" scaling="95%" hasBackground={false}>
          {children}
        </Theme>
      </body>
    </html>
  );
}
