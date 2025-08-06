import { ArrowLeft, CheckCircle } from 'lucide-react'

export default function CallToAction() {
  const benefits = [
    'استشارة مجانية لتحديد احتياجاتك',
    'فريق متخصص من المطورين والمصممين',
    'دعم فني مستمر بعد الإطلاق',
    'ضمان الجودة والتسليم في الوقت المحدد'
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-[#1B2A41] to-[#4A6345] text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">جاهز للانطلاق؟</h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              لا تدع منافسيك يسبقونك في العالم الرقمي. ابدأ رحلة التحول الرقمي اليوم واكتشف كيف يمكن لـ "تَوَجُّه" أن يساعدك في تحقيق أهدافك وزيادة أرباحك.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[#C5A25A] flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#C5A25A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#1B2A41] transition-all duration-300 flex items-center justify-center gap-2">
                تواصل معنا الآن
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#1B2A41] transition-all duration-300">
                احجز استشارة مجانية
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">عرض خاص</h3>
                <p className="opacity-90">خصم 30% على الباقة الأولى</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-3xl font-bold text-[#C5A25A]">30%</div>
                  <div className="text-sm opacity-90">خصم على جميع الخدمات</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-3xl font-bold text-[#C5A25A]">24/7</div>
                  <div className="text-sm opacity-90">دعم فني مجاني</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-3xl font-bold text-[#C5A25A]">∞</div>
                  <div className="text-sm opacity-90">تحديثات مجانية</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
