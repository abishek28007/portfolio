import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Showcase Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <nav>
          <Link href="/">Home</Link>
          <Link href="/weather">Weather</Link>
        </nav> */}
        {children}
      </body>
    </html>
  )
}
