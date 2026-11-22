import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Lintel — Real Estate CRM', description: 'A focused real-estate operations dashboard.' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
