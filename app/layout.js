import './globals.css'
import { Raleway } from 'next/font/google'

const inter = Raleway({ subsets: ['latin'], weight: '500' })

export const metadata = {
  title: 'Kwik_n_Klean',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
