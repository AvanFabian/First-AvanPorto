import '@/styles/globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Fabian Daniswara',
  description: 'Build custom web applications or maintain react website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="relative z-0 bg-[#0e0e1a]">
          <div className="relative bg-hero-mountain bg-cover
          bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <div className='paddingAll max-w-7xl
            mx-auto relative z-0'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
