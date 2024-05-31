// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Libre_Franklin } from 'next/font/google'
import { Rubik } from 'next/font/google'
import './styles.css'
import './globals.css'
import Head from "next/head";
import { ReactNode } from 'react';
const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre_franklin',
})


const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
    <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={libre_franklin.variable + ' ' + rubik.variable}>
        {children}
      </body>
    </html>
  )
}