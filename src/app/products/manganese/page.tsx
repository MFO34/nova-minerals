'use client'
import Link from 'next/link'
import { Header } from '../../components/Header'
import { useLanguage } from '../../components/LanguageContext'

export default function ManganesePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">{t('breadcrumbHome')}</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-blue-600">{t('breadcrumbProducts')}</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{t('manganese')}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-600 to-violet-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">{t('manganese')}</h1>
              <p className="text-xl text-purple-100 mb-6">
                {t('manganeseDesc')}
              </p>
              <div className="flex items-center space-x-4">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">{t('multipleForms')}</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">{t('highPurity')}</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">{t('quickContact')}</h3>
              <div className="space-y-3 text-purple-100">
                <div>📞 +90 541 812 5722</div>
                <div>📧 info@novaminerals.com.tr</div>
                <div>📍 Çankaya/Ankara, Turkey</div>
              </div>
              <Link href="/contact" className="block w-full bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg text-center mt-6 hover:bg-purple-50 transition-colors">
                {t('getQuote')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('productOverview')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('manganeseOverview')}
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('availableForms')}</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">{t('mn3o4')}</span>
                    <span className="text-purple-600 font-semibold">{t('available')}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">{t('ferroManganese')}</span>
                    <span className="text-purple-600 font-semibold">{t('available')}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">{t('manganeseOxide')}</span>
                    <span className="text-purple-600 font-semibold">{t('available')}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="font-medium">{t('powderForms')}</span>
                    <span className="text-purple-600 font-semibold">{t('available')}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('applications')}</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>{t('steelIndustry')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>{t('batteryProduction')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>{t('chemicalIndustry')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>{t('ferroAlloyProduction')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('keyProperties')}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">{t('chemicalComposition')}</h4>
                    <p className="text-gray-600 text-sm">{t('manganeseChemicalDesc')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">{t('particleSize')}</h4>
                    <p className="text-gray-600 text-sm">{t('manganeseParticleSizeDesc')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">{t('qualityStandards')}</h4>
                    <p className="text-gray-600 text-sm">{t('manganeseQualityDesc')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-violet-700 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">{t('whyChooseOurManganese')}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-0.5"></div>
                    <div>
                      <div className="font-semibold">{t('consistentQuality')}</div>
                      <div className="text-purple-100 text-sm">{t('manganeseConsistentDesc')}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-0.5"></div>
                    <div>
                      <div className="font-semibold">{t('multipleForms')}</div>
                      <div className="text-purple-100 text-sm">{t('manganeseMultipleDesc')}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-0.5"></div>
                    <div>
                      <div className="font-semibold">{t('reliableSupply')}</div>
                      <div className="text-purple-100 text-sm">{t('manganeseReliableDesc')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{t('relatedProducts')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/products/iron-pyrite" className="group">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100 group-hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-orange-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Fe</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('ironPyrite')}</h3>
                <p className="text-gray-600">{t('ironPyriteDesc')}</p>
              </div>
            </Link>
            
            <Link href="/products/chromite-sand" className="group">
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-100 group-hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gray-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Cr</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('chromiteSand')}</h3>
                <p className="text-gray-600">{t('chromiteSandDesc')}</p>
              </div>
            </Link>
            
            <Link href="/products/fluorspar" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 group-hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('fluorspar')}</h3>
                <p className="text-gray-600">{t('fluorsparDesc')}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}