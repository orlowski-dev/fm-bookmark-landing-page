import '@/styles/globals.scss'
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Frontend Mentor - Bookmark landing page',
  icons: '/brand/favicon-32x32.png'
}

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout