'use client'
import Link from 'next/link'
import { Header } from '../../components/Header'
import { useLanguage } from '../../components/LanguageContext'

export default function IronPyritePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb - Minimal */}
      <div className="bg-gray-50 py-4 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-amber-600 transition-colors">{t('breadcrumbHome')}</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-amber-600 transition-colors">{t('breadcrumbProducts')}</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{t('ironPyrite')}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - Clean */}
      <div className="bg-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium border border-amber-200">
                  Featured Product
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-6 text-gray-900">{t('ironPyrite')}</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('ironPyriteDesc')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-center"
                >
                  {t('getQuote')}
                </Link>
                <Link 
                  href="tel:+905418125722" 
                  className="bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-center"
                >
                  Call Now
                </Link>
              </div>
            </div>
            
            {/* Product Icon - Large */}
            <div className="text-center">
              <div className="w-48 h-48 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl mx-auto flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-6xl">Fe</span>
              </div>
              <div className="mt-8 text-center">
                <div className="text-sm text-gray-500 mb-2">Chemical Formula</div>
                <div className="text-2xl font-bold text-gray-900">FeS₂</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Simplified */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left: Available Sizes */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('availableSizes')}</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium">Concentrate</span>
                    <span className="text-gray-600">75 micron</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium">Powder</span>
                    <span className="text-gray-600">0-5 mm</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium">Small Lumps</span>
                    <span className="text-gray-600">3-12 mm</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium">Medium Lumps</span>
                    <span className="text-gray-600">10-50 mm</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium">Large Lumps</span>
                    <span className="text-gray-600">50-100 mm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Key Information */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Applications */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('applications')}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors">
                    <div className="text-3xl mb-3">🏭</div>
                    <h3 className="font-semibold text-gray-900">{t('steelMills')}</h3>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors">
                    <div className="text-3xl mb-3">⚗️</div>
                    <h3 className="font-semibold text-gray-900">{t('chemicalIndustry')}</h3>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors">
                    <div className="text-3xl mb-3">🏗️</div>
                    <h3 className="font-semibold text-gray-900">{t('cementProduction')}</h3>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors">
                    <div className="text-3xl mb-3">🧪</div>
                    <h3 className="font-semibold text-gray-900">Sulfuric Acid</h3>
                  </div>
                </div>
              </div>

              {/* Why Choose Our Iron Pyrite */}
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Why Choose Our Iron Pyrite?</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-amber-200 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Turkey's Only Producer</h3>
                      <p className="text-amber-100">Unique market position with reliable supply chain and quality assurance.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-amber-200 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Strategic Location</h3>
                      <p className="text-amber-100">Near Gemlik Port for optimized logistics and cost-effective shipping worldwide.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-amber-200 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Consistent Quality</h3>
                      <p className="text-amber-100">Reliable specifications meeting international standards with certified analysis.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products - Simple */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{t('relatedProducts')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            <Link href="/products/olivine" className="group">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 group-hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-stone-600 to-stone-800 rounded-2xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-white font-bold text-xl">Ol</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('olivine')}</h3>
                <p className="text-gray-600">{t('olivineDesc')}</p>
              </div>
            </Link>
            
            <Link href="/products/manganese" className="group">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 group-hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-white font-bold text-xl">Mn</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('manganese')}</h3>
                <p className="text-gray-600">{t('manganeseDesc')}</p>
              </div>
            </Link>
            
            <Link href="/products/chromite-sand" className="group">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 group-hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-slate-700 rounded-2xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-white font-bold text-xl">Cr</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('chromiteSand')}</h3>
                <p className="text-gray-600">{t('chromiteSandDesc')}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}