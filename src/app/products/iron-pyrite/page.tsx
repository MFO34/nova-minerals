'use client'
import Link from 'next/link'
import { Header } from '../../components/Header'
import { useLanguage } from '../../components/LanguageContext'

export default function IronPyritePage() {
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
            <span className="text-gray-900 font-medium">{t('ironPyrite')}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-r from-orange-600 to-red-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">{t('ironPyrite')}</h1>
              <p className="text-xl text-orange-100 mb-6">
                {t('ironPyriteDesc')}
              </p>
              <div className="flex items-center space-x-4">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">{t('premiumQuality')}</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">{t('multipleSizes')}</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">{t('quickContact')}</h3>
              <div className="space-y-3 text-orange-100">
                <div>📞 +90 541 812 5722</div>
                <div>📧 info@novaminerals.com.tr</div>
                <div>📍 Çankaya/Ankara, Turkey</div>
              </div>
              <Link href="/contact" className="block w-full bg-white text-orange-600 font-semibold py-3 px-6 rounded-lg text-center mt-6 hover:bg-orange-50 transition-colors">
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
            {/* Left Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('productOverview')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('ironPyriteOverview')}
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('availableSizes')}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">{t('ironPyriteConcentrate')}</span>
                    <span className="text-gray-600">75 micron</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">{t('powder')}</span>
                    <span className="text-gray-600">0-5 mm</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">{t('lumps')}</span>
                    <span className="text-gray-600">3-12 mm</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">{t('lumps')}</span>
                    <span className="text-gray-600">10-50 mm</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-medium">{t('lumps')}</span>
                    <span className="text-gray-600">50-100 mm</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('packingOptions')}</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-2">📦</div>
                    <div className="font-medium">{t('bulk')}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-2">🛍️</div>
                    <div className="font-medium">{t('bags25kg')}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-2">📋</div>
                    <div className="font-medium">{t('bigBags1Mt')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('specifications')}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 font-semibold">{t('component')}</th>
                        <th className="text-left py-2 font-semibold">{t('concentrate')}</th>
                        <th className="text-left py-2 font-semibold">{t('lump')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-2">S (%)</td>
                        <td className="py-2">48-50</td>
                        <td className="py-2">45-48</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2">Fe (%)</td>
                        <td className="py-2">43-44</td>
                        <td className="py-2">43-44</td>
                      </tr>
                      <tr>
                        <td className="py-2">SiO2 (%)</td>
                        <td className="py-2">1-2</td>
                        <td className="py-2">5-6</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('applications')}</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>{t('steelMills')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>{t('chemicalIndustry')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>{t('cementProduction')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>{t('sulfuricAcidProduction')}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">{t('whyChooseOurIronPyrite')}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-0.5"></div>
                    <div>
                      <div className="font-semibold">{t('onlyProducerInTurkey')}</div>
                      <div className="text-orange-100 text-sm">{t('uniqueMarketPositionReliableSupply')}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-0.5"></div>
                    <div>
                      <div className="font-semibold">{t('strategicLocation')}</div>
                      <div className="text-orange-100 text-sm">{t('nearGemlikPortOptimizedLogistics')}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-0.5"></div>
                    <div>
                      <div className="font-semibold">{t('qualityAssured')}</div>
                      <div className="text-orange-100 text-sm">{t('consistentQualityReliableSpecs')}</div>
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
            
            <Link href="/products/manganese" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-100 group-hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Mn</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('manganese')}</h3>
                <p className="text-gray-600">{t('manganeseDesc')}</p>
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
          </div>
        </div>
      </div>
    </div>
  )
}