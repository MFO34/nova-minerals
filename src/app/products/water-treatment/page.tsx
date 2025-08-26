'use client'
import Link from 'next/link'
import { Header } from '../../components/Header'
import { useLanguage } from '../../components/LanguageContext'

export default function WaterTreatmentPage() {
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
            <span className="text-gray-900 font-medium">{t('waterTreatment')}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-r from-cyan-600 to-teal-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">{t('waterTreatment')}</h1>
              <p className="text-xl text-cyan-100 mb-6">
                {t('waterTreatmentDesc')}
              </p>
              <div className="flex items-center space-x-4">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">{t('mediaFilter')}</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">{t('highPerformance')}</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">{t('quickContact')}</h3>
              <div className="space-y-3 text-cyan-100">
                <div>📞 +90 541 812 5722</div>
                <div>📧 info@novaminerals.com.tr</div>
                <div>📍 Çankaya/Ankara, Turkey</div>
              </div>
              <Link href="/contact" className="block w-full bg-white text-cyan-600 font-semibold py-3 px-6 rounded-lg text-center mt-6 hover:bg-cyan-50 transition-colors">
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
                {t('waterTreatmentOverview')}
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('availableProducts')}</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">{t('manganeseDioxide')}</span>
                    <span className="text-cyan-600 font-semibold">{t('available')}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">{t('mediaFilter')}</span>
                    <span className="text-cyan-600 font-semibold">{t('available')}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="font-medium">{t('variousGrades')}</span>
                    <span className="text-cyan-600 font-semibold">{t('available')}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('keyBenefits')}</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span>{t('ironManganeseRemoval')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span>{t('hydrogenSulfideReduction')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span>{t('tasteOdorImprovement')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span>{t('longServiceLife')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span>{t('lowMaintenance')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('applications')}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-cyan-600 mb-2">{t('municipalWaterTreatment')}</h4>
                    <p className="text-gray-600 text-sm">{t('waterMunicipalApp')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-600 mb-2">{t('industrialWaterProcessing')}</h4>
                    <p className="text-gray-600 text-sm">{t('waterIndustrialApp')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-600 mb-2">{t('wellWaterTreatment')}</h4>
                    <p className="text-gray-600 text-sm">{t('waterWellApp')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-600 mb-2">{t('filtrationSystems')}</h4>
                    <p className="text-gray-600 text-sm">{t('waterFiltrationApp')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('technicalProperties')}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-cyan-50 rounded-lg">
                    <div className="text-2xl mb-2">🧪</div>
                    <div className="font-medium">{t('chemicalFormula')}</div>
                    <div className="text-sm text-gray-600">MnO₂</div>
                  </div>
                  <div className="text-center p-4 bg-cyan-50 rounded-lg">
                    <div className="text-2xl mb-2">⚖️</div>
                    <div className="font-medium">{t('density')}</div>
                    <div className="text-sm text-gray-600">1.4-1.6 g/cm³</div>
                  </div>
                  <div className="text-center p-4 bg-cyan-50 rounded-lg">
                    <div className="text-2xl mb-2">🌡️</div>
                    <div className="font-medium">{t('phRange')}</div>
                    <div className="text-sm text-gray-600">6.8-9.0</div>
                  </div>
                  <div className="text-center p-4 bg-cyan-50 rounded-lg">
                    <div className="text-2xl mb-2">💧</div>
                    <div className="font-medium">{t('porosity')}</div>
                    <div className="text-sm text-gray-600">{t('high')}</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-600 to-teal-700 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">{t('whyChooseOurWaterTreatment')}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-0.5"></div>
                    <div>
                      <div className="font-semibold">{t('effectiveFiltration')}</div>
                      <div className="text-cyan-100 text-sm">{t('waterEffectiveDesc')}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-0.5"></div>
                    <div>
                      <div className="font-semibold">{t('costEffective')}</div>
                      <div className="text-cyan-100 text-sm">{t('waterCostDesc')}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-0.5"></div>
                    <div>
                      <div className="font-semibold">{t('reliablePerformance')}</div>
                      <div className="text-cyan-100 text-sm">{t('waterReliableDesc')}</div>
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
            <Link href="/products/soda-ash" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 group-hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Na</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('sodaAsh')}</h3>
                <p className="text-gray-600">{t('sodaAshDesc')}</p>
              </div>
            </Link>
            
            <Link href="/products/sulphur" className="group">
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-100 group-hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('sulphur')}</h3>
                <p className="text-gray-600">{t('sulphurDesc')}</p>
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