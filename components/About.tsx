import { Target, Users, Lightbulb, Shield } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'الابتكار',
      description: 'نستخدم أحدث التقنيات لتقديم حلول مبتكرة ومتطورة'
    },
    {
      icon: Users,
      title: 'التمكين',
      description: 'نمكن الشركات من تحقيق أهدافها الرقمية بكفاءة عالية'
    },
    {
      icon: Target,
      title: 'البساطة',
      description: 'نجعل التحول الرقمي بسيطاً وسهل المنال للجميع'
    },
    {
      icon: Shield,
      title: 'الثقة',
      description: 'نبني علاقات طويلة الأمد مع عملائنا قائمة على الثقة'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1B2A41] mb-6">من نحن</h2>
          <p className="text-xl text-[#A3A3A3] max-w-3xl mx-auto leading-relaxed">
            "تَوَجُّه" هي منصة ذكية تساعد الأعمال العربية على النمو رقمياً. نحن نؤمن بقوة التكنولوجيا في تحويل الأفكار إلى واقع رقمي ناجح، ونسعى لتمكين رواد الأعمال والشركات الصغيرة من تحقيق طموحاتهم في العالم الرقمي.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="bg-[#F8F8F5] p-6 rounded-2xl mb-6 group-hover:bg-[#1B2A41] transition-all duration-300">
                <value.icon className="w-12 h-12 text-[#C5A25A] mx-auto group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#1B2A41] mb-3">{value.title}</h3>
              <p className="text-[#A3A3A3] leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#1B2A41] to-[#4A6345] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            أن نكون الشريك الأول للأعمال العربية في رحلة التحول الرقمي، ونساهم في بناء اقتصاد رقمي عربي قوي ومزدهر
          </p>
        </div>
      </div>
    </section>
  )
}
