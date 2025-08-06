import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const cairo = Cairo({ 
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cairo'
})

export const metadata: Metadata = {
  title: 'تَوَجُّه - منصة التحول الرقمي للأعمال العربية',
  description: 'منصة متكاملة لإنشاء مواقع، متاجر، حملات تسويقية، ومنتجات رقمية للشركات الناشئة والأعمال الصغيرة',
  keywords: 'تصميم مواقع، متاجر إلكترونية، تسويق رقمي، ذكاء اصطناعي، منتجات رقمية',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className={`${cairo.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
