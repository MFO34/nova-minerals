'use client'
import Link from 'next/link'
import { Header } from '../../components/Header'
import { useLanguage } from '../../components/LanguageContext'

export default function OlivinePage() {
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
            <span className="text-gray-900 font-medium">{t('olivine')}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">{t('olivine')}</h1>
              <p className="text-xl text-green-100 mb-6">
                {t('olivineDesc')}
              </p>
              <div className="flex items-center space-x-4">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">{t('bestQuality')}</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">{t('multipleApplications')}</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">{t('quickContact')}</h3>
              <div className="space-y-3 text-green-100">
                <div>📞 +90 541 812 5722</div>
                <div>📧 info@novaminerals.com.tr</div>
                <div>📍 Çankaya/Ankara, Turkey</div>
              </div>
              <Link href="/contact" className="block w-full bg-white text-green-600 font-semibold py-3 px-6 rounded-lg text-center mt-6 hover:bg-green-50 transition-colors">
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
                {t('olivineOverview')}
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('productTypes')}</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">{t('ebtSand')}</span>
                    <span className="text-green-600 font-semibold">{t('available')}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">{t('foundrySand')}</span>
                    <span className="text-green-600 font-semibold">{t('available')}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">{t('blastingSand')}</span>
                    <span className="text-green-600 font-semibold">{t('available')}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">{t('refractorySpray')}</span>
                    <span className="text-green-600 font-semibold">{t('available')}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="font-medium">{t('slagSand')}</span>
                    <span className="text-green-600 font-semibold">{t('available')}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('keyProperties')}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl mb-2">🔥</div>
                    <div className="font-medium">{t('highMeltingPoint')}</div>
                    <div className="text-sm text-gray-600">1890°C</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl mb-2">💎</div>
                    <div className="font-medium">{t('hardness')}</div>
                    <div className="text-sm text-gray-600">6.5-7 Mohs</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl mb-2">⚖️</div>
                    <div className="font-medium">{t('density')}</div>
                    <div className="text-sm text-gray-600">3.2-3.4 g/cm³</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl mb-2">🧪</div>
                    <div className="font-medium">{t('chemicalStability')}</div>
                    <div className="text-sm text-gray-600">{t('excellent')}</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('applications')}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">{t('foundries')}</h4>
                    <p className="text-gray-600 text-sm">{t('olivineFoundryApp')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">{t('refractoryIndustry')}</h4>
                    <p className="text-gray-600 text-sm">{t('olivineRefractoryApp')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">{t('steelMills')}</h4>
                    <p className="text-gray-600 text-sm">{t('olivineSteelApp')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">{t('blastingApplications')}</h4>
                    <p className="text-gray-600 text-sm">{t('olivineBlastingApp')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">{t('whyChooseOurOlivine')}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-0.5"></div>
                    <div>
                      <div className="font-semibold">{t('superiorQuality')}</div>
                      <div className="text-green-100 text-sm">{t('olivineSuperiorDesc')}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-0.5"></div>
                    <div>
                      <div className="font-semibold">{t('versatileApplications')}</div>
                      <div className="text-green-100 text-sm">{t('olivineVersatileDesc')}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-0.5"></div>
                    <div>
                      <div className="font-semibold">{t('reliableSupply')}</div>
                      <div className="text-green-100 text-sm">{t('olivineReliableDesc')}</div>
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
            
            <Link href="/products/manganese" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-100 group-hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Mn</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('manganese')}</h3>
                <p className="text-gray-600">{t('manganeseDesc')}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}