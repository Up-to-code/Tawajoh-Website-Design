import { Search, MousePointer, Palette, Rocket } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'اكتشف',
      description: 'نتعرف على احتياجاتك وأهدافك الرقمية من خلال استشارة مجانية',
      step: '01'
    },
    {
      icon: MousePointer,
      title: 'اختر الخدمة',
      description: 'نساعدك في اختيار الخدمات المناسبة لتحقيق أهدافك بأفضل طريقة',
      step: '02'
    },
    {
      icon: Palette,
      title: 'صمّم',
      description: 'فريقنا المتخصص يعمل على تصميم وتطوير حلولك الرقمية بأعلى جودة',
      step: '03'
    },
    {
      icon: Rocket,
      title: 'أطلق مشروعك',
      description: 'نطلق مشروعك الرقمي ونقدم الدعم المستمر لضمان نجاحه وازدهاره',
      step: '04'
    }
  ]

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1B2A41] mb-6">كيف نعمل؟</h2>
          <p className="text-xl text-[#A3A3A3] max-w-3xl mx-auto">
            عملية بسيطة ومنظمة تضمن تحقيق أهدافك الرقمية بأفضل طريقة ممكنة
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#1B2A41] via-[#C5A25A] to-[#4A6345] transform -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="bg-white border-4 border-[#1B2A41] rounded-full p-6 w-24 h-24 mx-auto flex items-center justify-center group-hover:border-[#C5A25A] transition-all duration-300">
                    <step.icon className="w-8 h-8 text-[#1B2A41] group-hover:text-[#C5A25A] transition-colors duration-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-[#C5A25A] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-[#1B2A41] mb-4">{step.title}</h3>
                <p className="text-[#A3A3A3] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="btn-primary">ابدأ رحلتك الآن</button>
        </div>
      </div>
    </section>
  )
}
