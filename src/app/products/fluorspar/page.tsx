'use client'
import Link from 'next/link'
import { Header } from '../../components/Header'
import { useLanguage } from '../../components/LanguageContext'

export default function FluorsparPage() {
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
            <span className="text-gray-900 font-medium">{t('fluorspar')}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">{t('fluorspar')}</h1>
              <p className="text-xl text-indigo-100 mb-6">
                {t('fluorsparDesc')}
              </p>
              <div className="flex items-center space-x-4">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">{t('fluxingAgent')}</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">{t('southAfricanOrigin')}</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">{t('quickContact')}</h3>
              <div className="space-y-3 text-indigo-100">
                <div>📞 +90 541 812 5722</div>
                <div>📧 info@novaminerals.com.tr</div>
                <div>📍 Çankaya/Ankara, Turkey</div>
              </div>
              <Link href="/contact" className="block w-full bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg text-center mt-6 hover:bg-indigo-50 transition-colors">
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
                {t('fluorsparOverview')}
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('availableGrades')}</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">{t('acidGrade')}</span>
                    <span className="text-indigo-600 font-semibold">{t('available')}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">{t('metallurgicalGrade')}</span>
                    <span className="text-indigo-600 font-semibold">{t('available')}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="font-medium">{t('ceramicGrade')}</span>
                    <span className="text-indigo-600 font-semibold">{t('available')}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('chemicalFormula')}</h3>
                <div className="text-center p-6 bg-indigo-50 rounded-lg">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">CaF₂</div>
                  <div className="text-gray-600">{t('calciumFluoride')}</div>
                  <div className="text-sm text-gray-500 mt-2">{t('republicOfSouthAfricaOrigin')}</div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('primaryApplications')}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-indigo-600 mb-2">{t('steelManufacturing')}</h4>
                    <p className="text-gray-600 text-sm">{t('fluorsparSteelApp')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-600 mb-2">{t('stainlessSteelProduction')}</h4>
                    <p className="text-gray-600 text-sm">{t('fluorsparStainlessApp')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-600 mb-2">{t('ferroAlloys')}</h4>
                    <p className="text-gray-600 text-sm">{t('fluorsparFerroApp')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-600 mb-2">{t('baseMetals')}</h4>
                    <p className="text-gray-600 text-sm">{t('fluorsparBaseMetalsApp')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-600 mb-2">{t('aluminumIndustry')}</h4>
                    <p className="text-gray-600 text-sm">{t('fluorsparAluminumApp')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('technicalProperties')}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-indigo-50 rounded-lg">
                    <div className="text-2xl mb-2">🔥</div>
                    <div className="font-medium">{t('meltingPoint')}</div>
                    <div className="text-sm text-gray-600">1418°C</div>
                  </div>
                  <div className="text-center p-4 bg-indigo-50 rounded-lg">
                    <div className="text-2xl mb-2">⚖️</div>
                    <div className="font-medium">{t('density')}</div>
                    <div className="text-sm text-gray-600">3.18 g/cm³</div>
                  </div>
                  <div className="text-center p-4 bg-indigo-50 rounded-lg">
                    <div className="text-2xl mb-2">💎</div>
                    <div className="font-medium">{t('hardness')}</div>
                    <div className="text-sm text-gray-600">4 Mohs</div>
                  </div>
                  <div className="text-center p-4 bg-indigo-50 rounded-lg">
                    <div className="text-2xl mb-2">🧪</div>
                    <div className="font-medium">{t('caf2Content')}</div>
                    <div className="text-sm text-gray-600">85-97%</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">{t('whyChooseOurFluorspar')}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-0.5"></div>
                    <div>
                      <div className="font-semibold">{t('southAfricanQuality')}</div>
                      <div className="text-indigo-100 text-sm">{t('fluorsparQualityDesc')}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-0.5"></div>
                    <div>
                      <div className="font-semibold">{t('multipleGrades')}</div>
                      <div className="text-indigo-100 text-sm">{t('fluorsparGradesDesc')}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-0.5"></div>
                    <div>
                      <div className="font-semibold">{t('consistentSupply')}</div>
                      <div className="text-indigo-100 text-sm">{t('fluorsparSupplyDesc')}</div>
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
            
            <Link href="/products/manganese" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-100 group-hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Mn</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('manganese')}</h3>
                <p className="text-gray-600">{t('manganeseDesc')}</p>
              </div>
            </Link>
            
            <Link href="/products/soda-ash" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 group-hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Na</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('sodaAsh')}</h3>
                <p className="text-gray-600">{t('sodaAshDesc')}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}