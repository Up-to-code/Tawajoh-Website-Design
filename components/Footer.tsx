import { ArrowLeft, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const quickLinks = [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'من نحن', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'كيف نعمل', href: '#how-it-works' },
  ]

  const services = [
    { name: 'تصميم مواقع', href: '#services' },
    { name: 'متاجر إلكترونية', href: '#services' },
    { name: 'تسويق رقمي', href: '#services' },
    { name: 'ذكاء اصطناعي', href: '#services' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
  ]

  return (
    <footer className="bg-[#1B2A41] text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#C5A25A] p-2 rounded-lg">
                <ArrowLeft className="w-6 h-6 rotate-180" />
              </div>
              <span className="text-2xl font-bold">تَوَجُّه</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              منصة متكاملة للتحول الرقمي تساعد الأعمال العربية على النمو والازدهار في العالم الرقمي.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-[#4A6345] p-2 rounded-lg hover:bg-[#C5A25A] transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#C5A25A] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">خدماتنا</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-[#C5A25A] transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">تواصل معنا</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-medium">الهاتف:</p>
                <p>+966 50 000 0000</p>
              </div>
              <div>
                <p className="font-medium">البريد الإلكتروني:</p>
                <p>info@tawajoh.com</p>
              </div>
              <div>
                <p className="font-medium">العنوان:</p>
                <p>الرياض، المملكة العربية السعودية</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-center md:text-right">
              © 2025 تَوَجُّه. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-300 hover:text-[#C5A25A] transition-colors">
                سياسة الخصوصية
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#C5A25A] transition-colors">
                شروط الاستخدام
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#C5A25A] transition-colors">
                سياسة الاسترداد
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
