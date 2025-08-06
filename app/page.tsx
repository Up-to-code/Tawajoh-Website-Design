import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import CallToAction from '@/components/CallToAction'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F8F5]" dir="rtl">
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <CallToAction />
      <Testimonials />
      <Contact />
      <WhatsAppFloat />
    </main>
  )
}
