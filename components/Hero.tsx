import { ArrowLeft, Play } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="section-padding bg-gradient-to-br from-stone-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                انطلق في عالمك الرقمي مع{' '}
                <span className="text-yellow-600 relative">
                  "تَوَجُّه"
                  <div className="absolute -bottom-2 right-0 w-full h-1 bg-yellow-600 rounded"></div>
                </span>
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed">
                منصة متكاملة لإنشاء مواقع، متاجر، حملات تسويقية، ومنتجات رقمية تساعد الشركات الناشئة والأعمال الصغيرة على النمو والازدهار في العالم الرقمي
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center gap-2">
                ابدأ الآن
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-4 text-slate-800 font-medium hover:text-yellow-600 transition-colors">
                <Play className="w-5 h-5" />
                شاهد العرض التوضيحي
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">500+</div>
                <div className="text-gray-500">عميل راضٍ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">1000+</div>
                <div className="text-gray-500">مشروع مكتمل</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">24/7</div>
                <div className="text-gray-500">دعم فني</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-green-700 rounded-2xl p-8 shadow-2xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="لوحة تحكم تَوَجُّه"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-600 text-white p-4 rounded-full shadow-lg">
              <ArrowLeft className="w-6 h-6 rotate-180" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-slate-800 font-bold">نمو 300%</div>
              <div className="text-gray-500 text-sm">في المبيعات</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
