'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowLeft } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'من نحن', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'كيف نعمل', href: '#how-it-works' },
    { name: 'تواصل معنا', href: '#contact' },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 space-x-reverse">
            <div className="bg-[#1B2A41] text-white p-2 rounded-lg">
              <ArrowLeft className="w-6 h-6 rotate-180" />
            </div>
            <span className="text-2xl font-bold text-[#1B2A41]">تَوَجُّه</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#1B2A41] hover:text-[#C5A25A] font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <button className="btn-primary">ابدأ الآن</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1B2A41] hover:text-[#C5A25A]"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#1B2A41] hover:text-[#C5A25A] font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="btn-primary w-full mt-4">ابدأ الآن</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
