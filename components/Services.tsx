import { Globe, ShoppingBag, Mail, Bot, Package, BarChart3 } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'تصميم مواقع وصفحات هبوط',
      description: 'مواقع احترافية متجاوبة مع جميع الأجهزة، مُحسنة لمحركات البحث ومصممة لتحويل الزوار إلى عملاء',
      features: ['تصميم متجاوب', 'تحسين SEO', 'سرعة تحميل عالية']
    },
    {
      icon: ShoppingBag,
      title: 'تطوير ثيمات لمتاجر "سلة"',
      description: 'ثيمات مخصصة وجذابة لمتاجر سلة الإلكترونية تساعد على زيادة المبيعات وتحسين تجربة التسوق',
      features: ['تصميم مخصص', 'سهولة الاستخدام', 'تحسين التحويل']
    },
    {
      icon: Mail,
      title: 'أدوات تسويق عبر البريد والرسائل',
      description: 'حملات تسويقية ذكية عبر البريد الإلكتروني والرسائل النصية لزيادة التفاعل والمبيعات',
      features: ['أتمتة التسويق', 'تقسيم العملاء', 'تحليل الأداء']
    },
    {
      icon: Bot,
      title: 'ذكاء اصطناعي وروبوتات محادثة',
      description: 'روبوتات محادثة ذكية وأنظمة توصيات مدعومة بالذكاء الاصطناعي لتحسين خدمة العملاء',
      features: ['دعم 24/7', 'ردود ذكية', 'تعلم مستمر']
    },
    {
      icon: Package,
      title: 'منتجات رقمية جاهزة',
      description: 'ثيمات، تطبيقات، وقوالب جاهزة للاستخدام تساعد على إطلاق مشروعك بسرعة وكفاءة',
      features: ['جودة عالية', 'سهولة التخصيص', 'دعم فني']
    },
    {
      icon: BarChart3,
      title: 'أدوات تحليل الأداء',
      description: 'تقارير مفصلة وتحليلات ذكية لقياس أداء موقعك ومتجرك وتحسين تجربة العملاء',
      features: ['تقارير مفصلة', 'تحليل السلوك', 'توصيات ذكية']
    }
  ]

  return (
    <section id="services" className="section-padding bg-[#F8F8F5]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1B2A41] mb-6">خدماتنا</h2>
          <p className="text-xl text-[#A3A3A3] max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات الرقمية المصممة خصيصاً لمساعدة أعمالك على النمو والازدهار في العالم الرقمي
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="bg-[#1B2A41] p-4 rounded-xl w-fit mb-6 group-hover:bg-[#C5A25A] transition-colors duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-[#1B2A41] mb-4">{service.title}</h3>
              <p className="text-[#A3A3A3] mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#C5A25A] rounded-full"></div>
                    <span className="text-sm text-[#1B2A41]">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="mt-6 text-[#C5A25A] font-semibold hover:text-[#1B2A41] transition-colors duration-200">
                اعرف المزيد ←
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
