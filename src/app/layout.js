import Cookies from '@/components/layout/Cookies'
import './globals.css'
import { Inter } from "next/font/google"
import { SessionProvider } from 'next-auth/react'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Aktuelt Studio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en" className={inter.className}>
        <body>{children}</body>
        <Cookies policyId={"0.0.1"} />
      </html>
    </SessionProvider>
  )
}
