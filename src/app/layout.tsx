import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Acme Tech',
  description: 'Elevate your business with cutting-edge technology.',
  keywords: ['tech', 'landing page', 'modern design', 'startup'],
  openGraph: {
    title: 'Acme Tech',
    description: 'Elevate your business with cutting-edge technology.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}