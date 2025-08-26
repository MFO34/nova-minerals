'use client'
import Link from 'next/link'
import { Header } from '../../components/Header'
import { useLanguage } from '../../components/LanguageContext'

export default function ChromiteSandPage() {
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
            <span className="text-gray-900 font-medium">{t('chromiteSand')}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-r from-gray-600 to-slate-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">{t('chromiteSand')}</h1>
              <p className="text-xl text-gray-100 mb-6">
                {t('chromiteSandDesc')}
              </p>
              <div className="flex items-center space-x-4">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">{t('superiorFinish')}</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">{t('foundryGrade')}</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">{t('quickContact')}</h3>
              <div className="space-y-3 text-gray-100">
                <div>📞 +90 541 812 5722</div>
                <div>📧 info@novaminerals.com.tr</div>
                <div>📍 Çankaya/Ankara, Turkey</div>
              </div>
              <Link href="/contact" className="block w-full bg-white text-gray-600 font-semibold py-3 px-6 rounded-lg text-center mt-6 hover:bg-gray-50 transition-colors">
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
                {t('chromiteSandOverview')}
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('keyFeatures')}</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">{t('betterSurfaceFinish')}</span>
                    <span className="text-gray-600 font-semibold">✓</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">{t('reducedCastingDefects')}</span>
                    <span className="text-gray-600 font-semibold">✓</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">{t('highThermalConductivity')}</span>
                    <span className="text-gray-600 font-semibold">✓</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="font-medium">{t('chemicalStability')}</span>
                    <span className="text-gray-600 font-semibold">✓</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('applications')}</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <span>{t('foundryMoldingSand')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <span>{t('steelCasting')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <span>{t('investmentCasting')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <span>{t('coreMaking')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <span>{t('pigmentProduction')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('technicalProperties')}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-2">🔥</div>
                    <div className="font-medium">{t('meltingPoint')}</div>
                    <div className="text-sm text-gray-600">2040°C</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-2">💎</div>
                    <div className="font-medium">{t('hardness')}</div>
                    <div className="text-sm text-gray-600">5.5 Mohs</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-2">⚖️</div>
                    <div className="font-medium">{t('density')}</div>
                    <div className="text-sm text-gray-600">4.5-4.8 g/cm³</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-2">🌡️</div>
                    <div className="font-medium">{t('thermalExpansion')}</div>
                    <div className="text-sm text-gray-600">{t('low')}</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('originSupply')}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-600 mb-2">{t('origin')}</h4>
                    <p className="text-gray-600 text-sm">{t('chromiteSandOrigin')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600 mb-2">{t('supplyChain')}</h4>
                    <p className="text-gray-600 text-sm">{t('chromiteSandSupply')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-600 to-slate-700 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">{t('whyChooseOurChromiteSand')}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-0.5"></div>
                    <div>
                      <div className="font-semibold">{t('premiumQuality')}</div>
                      <div className="text-gray-100 text-sm">{t('chromiteSandQualityDesc')}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-0.5"></div>
                    <div>
                      <div className="font-semibold">{t('betterCastingResults')}</div>
                      <div className="text-gray-100 text-sm">{t('chromiteSandResultsDesc')}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-0.5"></div>
                    <div>
                      <div className="font-semibold">{t('directSupply')}</div>
                      <div className="text-gray-100 text-sm">{t('chromiteSandSupplyDesc')}</div>
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
            <Link href="/products/olivine" className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 group-hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-green-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Ol</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('olivine')}</h3>
                <p className="text-gray-600">{t('olivineDesc')}</p>
              </div>
            </Link>
            
            <Link href="/products/iron-pyrite" className="group">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100 group-hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-orange-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Fe</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('ironPyrite')}</h3>
                <p className="text-gray-600">{t('ironPyriteDesc')}</p>
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