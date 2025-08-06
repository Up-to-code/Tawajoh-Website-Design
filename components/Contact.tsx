'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with WhatsApp or your preferred contact method
    const whatsappMessage = `مرحباً، أنا ${formData.name}. أريد الاستفسار عن ${formData.service}. ${formData.message}`
    const whatsappUrl = `https://wa.me/966500000000?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'اتصل بنا',
      content: '+966 50 000 0000',
      link: 'tel:+966500000000'
    },
    {
      icon: Mail,
      title: 'راسلنا',
      content: 'info@tawajoh.com',
      link: 'mailto:info@tawajoh.com'
    },
    {
      icon: MapPin,
      title: 'موقعنا',
      content: 'الرياض، المملكة العربية السعودية',
      link: '#'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1B2A41] mb-6">نحن هنا لمساعدتك</h2>
          <p className="text-xl text-[#A3A3A3] max-w-3xl mx-auto">
            تواصل معنا اليوم واحصل على استشارة مجانية لتحديد أفضل الحلول الرقمية لعملك
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#F8F8F5] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#1B2A41] mb-6">أرسل لنا رسالة</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#1B2A41] font-medium mb-2">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#C5A25A] focus:outline-none transition-colors"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#1B2A41] font-medium mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#C5A25A] focus:outline-none transition-colors"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-[#1B2A41] font-medium mb-2">
                  نوع الخدمة
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#C5A25A] focus:outline-none transition-colors"
                >
                  <option value="">اختر نوع الخدمة</option>
                  <option value="تصميم موقع">تصميم موقع</option>
                  <option value="متجر إلكتروني">متجر إلكتروني</option>
                  <option value="تسويق رقمي">تسويق رقمي</option>
                  <option value="ذكاء اصطناعي">ذكاء اصطناعي</option>
                  <option value="منتجات رقمية">منتجات رقمية</option>
                  <option value="تحليل الأداء">تحليل الأداء</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-[#1B2A41] font-medium mb-2">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#C5A25A] focus:outline-none transition-colors resize-none"
                  placeholder="أخبرنا عن مشروعك وكيف يمكننا مساعدتك"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                إرسال الرسالة
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#1B2A41] mb-6">معلومات التواصل</h3>
              <p className="text-[#A3A3A3] mb-8 leading-relaxed">
                نحن متاحون للرد على استفساراتك ومساعدتك في تحقيق أهدافك الرقمية. تواصل معنا بالطريقة التي تناسبك.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 bg-[#F8F8F5] rounded-lg hover:bg-[#1B2A41] hover:text-white transition-all duration-300 group"
                >
                  <div className="bg-[#C5A25A] p-3 rounded-lg group-hover:bg-white">
                    <info.icon className="w-6 h-6 text-white group-hover:text-[#1B2A41] transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1B2A41] group-hover:text-white transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-[#A3A3A3] group-hover:text-gray-200 transition-colors duration-300">
                      {info.content}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#1B2A41] to-[#4A6345] rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-3">ساعات العمل</h4>
              <div className="space-y-2 text-sm opacity-90">
                <div className="flex justify-between">
                  <span>الأحد - الخميس</span>
                  <span>9:00 ص - 6:00 م</span>
                </div>
                <div className="flex justify-between">
                  <span>الجمعة - السبت</span>
                  <span>مغلق</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
