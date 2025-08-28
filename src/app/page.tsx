'use client'
import Link from 'next/link'
import { Header } from './components/Header'
import { useLanguage } from './components/LanguageContext'

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - White dominant with industrial accents */}
      <div className="bg-white relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <div className="mb-8">
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium border border-amber-200">
                {t('heroSubtitle')}
              </span>
            </div>
            
            <h1 className="text-6xl font-bold leading-tight mb-6 text-gray-900">
              {t('heroTitle1')}
              <span className="block text-amber-600">
                {t('heroTitle2')}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('heroDescription')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Link href="/products" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                {t('exploreProducts')}
              </Link>
              <Link href="/contact" className="bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200">
                {t('getQuote')}
              </Link>
            </div>

            {/* Stats - Clean white cards with industrial accents */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
                <div className="text-sm text-gray-600 font-medium">{t('countriesServed')}</div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-amber-600 mb-2">IMMBI</div>
                <div className="text-sm text-gray-600 font-medium">{t('member')}</div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-amber-600 mb-2">#1</div>
                <div className="text-sm text-gray-600 font-medium">{t('ironPyriteProducer')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section - Clean white with subtle gray background */}
      <div className="py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('ourProducts')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('productsDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Iron Pyrite - Featured with industrial styling */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 relative hover:shadow-xl transition-all duration-300 group">
              <div className="absolute top-4 right-4">
                <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                  Featured
                </span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-white font-bold text-2xl">Fe</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('ironPyrite')}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{t('ironPyriteDesc')}</p>
              <Link href="/products/iron-pyrite" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold transition-colors">
                {t('learnMore')} →
              </Link>
            </div>

            {/* Olivine */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-stone-600 to-stone-800 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-white font-bold text-2xl">Ol</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('olivine')}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{t('olivineDesc')}</p>
              <Link href="/products/olivine" className="inline-flex items-center text-stone-700 hover:text-stone-800 font-semibold transition-colors">
                {t('learnMore')} →
              </Link>
            </div>

            {/* Manganese */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-white font-bold text-2xl">Mn</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('manganese')}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{t('manganeseDesc')}</p>
              <Link href="/products/manganese" className="inline-flex items-center text-orange-700 hover:text-orange-800 font-semibold transition-colors">
                {t('learnMore')} →
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="bg-gray-900 hover:bg-black text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              {t('viewAllProducts')}
            </Link>
          </div>
        </div>
      </div>



      {/* CTA Section - Clean white */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('partnerWithNova')}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">{t('partnerDesc')}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              {t('contactUs')}
            </Link>
            <Link href="tel:+905418125722" className="bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              +90 541 812 5722
            </Link>
          </div>
        </div>
      </div>

      {/* Footer - Minimal white */}
      <footer className="bg-gray-50 text-gray-900 py-12 border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">N</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Nova Minerals</span>
              </div>
              <p className="text-gray-600">{t('footerDescription')}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">{t('contact')}</h3>
              <p className="text-gray-600">+90 541 812 5722</p>
              <p className="text-gray-600">info@novaminerals.com.tr</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">{t('quickLinks')}</h3>
              <div className="space-y-2 text-gray-600">
                <div><Link href="/products" className="hover:text-amber-600 transition-colors">{t('products')}</Link></div>
                <div><Link href="/company" className="hover:text-amber-600 transition-colors">{t('company')}</Link></div>
                <div><Link href="/contact" className="hover:text-amber-600 transition-colors">{t('contact')}</Link></div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2025 {t('footerCopyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}