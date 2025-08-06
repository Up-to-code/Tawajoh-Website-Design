'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const message = 'مرحباً، أريد الاستفسار عن خدمات تَوَجُّه'
    const whatsappUrl = `https://wa.me/966500000000?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-pulse"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  )
}
