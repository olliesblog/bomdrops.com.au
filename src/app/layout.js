import './globals.css'
import MobileMenu from '@/components/MobileMenu'
import SearchButton from '@/components/SearchButton'
import Breadcrumbs from '@/components/Breadcrumbs'
import DisclaimerBanner from '@/components/DisclaimerBanner'
import ShowDisclaimerButton from '@/components/ShowDisclaimerButton'
import Logo from '@/components/Logo'

export const metadata = {
  metadataBase: new URL('https://bomdrop.com.au'),
  title: {
    default: 'BoMdrop: What $96.5 Million AUD Could Have Bought Instead',
    template: '%s'
  },
  description: 'Instead of spending $96.5 million on BOM.gov.au redesign, Australia could have bought...',
  keywords: ['BOM', 'Bureau of Meteorology', 'government spending', 'Australian government', 'public money', 'satire'],
  authors: [{ name: 'Australian Government Satire' }],
  creator: 'Australian Government Satire',
  publisher: 'BOMdrop.com.au',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://bomdrop.com.au',
    title: 'BoMdrop: What $96.5 Million AUD Could Have Bought Instead',
    description: 'Instead of spending $96.5 million on BOM.gov.au redesign, Australia could have bought...',
    siteName: 'BoMdrop.com.au',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'BoMdrop: What $96.5 Million AUD Could Have Bought Instead',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BoMdrop: What $96.5 Million AUD Could Have Bought Instead',
    description: 'Instead of spending $96.5 million on BOM.gov.au redesign, Australia could have bought...',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <DisclaimerBanner />
        <header>
          <nav>
            <div className="nav-container">
              <Logo />
              <div className="nav-links">
                <a href="/category/">Categories</a>
                <a href="/sources/">Sources</a>
                <a href="/methodology/">Methodology</a>
                <a href="/press/">Press</a>
                <a href="/addendum/">Addendum</a>
                <a href="/weather/" title="Weather, it's money well spent?">⚠️</a>
              </div>
              <SearchButton />
              <MobileMenu />
            </div>
          </nav>
          <Breadcrumbs />
        </header>
        <main>{children}</main>
        <footer>
          <div className="footer-container">
            <p>
              <a href="/">BoMdrop.com.au</a> is an independent satirical analysis of the $96.5 million spent on redesigning the Bureau of Meteorology website (BOM.gov.au). This project aims to provide context for government IT spending by comparing the cost to tangible alternatives that could benefit Australian communities. This website, the contents and the idea was created by one person on a free evening, and took around 12 hours, rushed out (excuse any errors).
            </p>
            <p>
              <a href="/sources/">View all sources</a>
              {' | '}
              <a href="/methodology/">Methodology</a>
              {' | '}
              <a href="/api/feed.json">Data API</a>
              {' | '}
              <a href="/addendum/">
                <span className="footer-link-full">Websites that don't cost $96.5 million</span>
                <span className="footer-link-mobile">Website design</span>
              </a>
              {' | '}
              <ShowDisclaimerButton />
            </p>
            <p className="copyright">
              © 2025 BoMdrop.com.au | Not affiliated with the Australian Bureau of Meteorology, or the Australian Government |
              Data available under Creative Commons Attribution 4.0
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
