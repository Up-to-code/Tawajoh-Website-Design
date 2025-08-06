import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'أحمد محمد',
      role: 'مؤسس متجر النور الإلكتروني',
      content: 'تَوَجُّه ساعدني في تحويل فكرتي إلى متجر إلكتروني ناجح. زادت مبيعاتي بنسبة 250% خلال 6 أشهر فقط.',
      rating: 5,
      image: '/placeholder.svg?height=80&width=80'
    },
    {
      name: 'فاطمة العلي',
      role: 'مديرة شركة الإبداع للتسويق',
      content: 'الفريق محترف جداً والخدمة ممتازة. حصلنا على موقع رائع وحملات تسويقية فعالة جداً.',
      rating: 5,
      image: '/placeholder.svg?height=80&width=80'
    },
    {
      name: 'خالد السعيد',
      role: 'صاحب مطعم الأصالة',
      content: 'بفضل تَوَجُّه، أصبح لدينا نظام طلبات أونلاين رائع وزادت طلباتنا بشكل كبير. أنصح بهم بقوة.',
      rating: 5,
      image: '/placeholder.svg?height=80&width=80'
    }
  ]

  return (
    <section className="section-padding bg-[#F8F8F5]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1B2A41] mb-6">ماذا يقول عملاؤنا</h2>
          <p className="text-xl text-[#A3A3A3] max-w-3xl mx-auto">
            نفتخر بثقة عملائنا ونسعى دائماً لتقديم أفضل الخدمات التي تحقق توقعاتهم وتفوقها
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <Quote className="w-8 h-8 text-[#C5A25A] mb-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#C5A25A] fill-current" />
                ))}
              </div>
              
              <p className="text-[#A3A3A3] mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-bold text-[#1B2A41]">{testimonial.name}</h4>
                  <p className="text-[#A3A3A3] text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#C5A25A] fill-current" />
              ))}
            </div>
            <span className="text-[#1B2A41] font-semibold">4.9/5</span>
            <span className="text-[#A3A3A3]">من 500+ تقييم</span>
          </div>
        </div>
      </div>
    </section>
  )
}
