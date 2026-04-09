import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nadine Schneider | Einzel- & Paartherapie | Berlin & Online',
  description: 'Systemische Therapie in Berlin und Online. Unterstützung für Einzelpersonen und Paare bei Krisen, Konflikten und persönlicher Entwicklung. DGSF zertifiziert.',
  keywords: ['Therapie Berlin', 'Paartherapie', 'Einzeltherapie', 'Systemische Therapie', 'DGSF', 'Online Therapie'],
  authors: [{ name: 'Nadine Schneider' }],
  metadataBase: new URL('https://nadine-schneider-therapie.de'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌿</text></svg>', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: 'Nadine Schneider | Einzel- & Paartherapie | Berlin & Online',
    description: 'Systemische Therapie in Berlin und Online. Unterstützung für Einzelpersonen und Paare bei Krisen, Konflikten und persönlicher Entwicklung.',
    url: 'https://nadine-schneider-therapie.de',
    siteName: 'Therapie Schneider Berlin',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/images/portrait_square_small.jpg',
        width: 800,
        height: 800,
        alt: 'Nadine Schneider - Systemische Therapeutin Berlin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nadine Schneider | Einzel- & Paartherapie | Berlin & Online',
    description: 'Systemische Therapie in Berlin und Online. Unterstützung für Einzelpersonen und Paare.',
    images: ['/images/portrait_square_small.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
