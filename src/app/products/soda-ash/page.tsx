'use client'
import Link from 'next/link'
import { Header } from '../../components/Header'
import { useLanguage } from '../../components/LanguageContext'

export default function SodaAshPage() {
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
            <span className="text-gray-900 font-medium">{t('sodaAsh')}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">{t('sodaAsh')}</h1>
              <p className="text-xl text-blue-100 mb-6">
                {t('sodaAshDesc')}
              </p>
              <div className="flex items-center space-x-4">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">{t('multipleGrades')}</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">{t('turkishOrigin')}</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">{t('quickContact')}</h3>
              <div className="space-y-3 text-blue-100">
                <div>📞 +90 541 812 5722</div>
                <div>📧 info@novaminerals.com.tr</div>
                <div>📍 Çankaya/Ankara, Turkey</div>
              </div>
              <Link href="/contact" className="block w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg text-center mt-6 hover:bg-blue-50 transition-colors">
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
                {t('sodaAshOverview')}
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('availableTypes')}</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">{t('denseSodaAsh')}</span>
                    <span className="text-blue-600 font-semibold">{t('available')}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">{t('lightSodaAsh')}</span>
                    <span className="text-blue-600 font-semibold">{t('available')}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="font-medium">{t('sodiumCarbonate')}</span>
                    <span className="text-blue-600 font-semibold">{t('available')}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('chemicalFormula')}</h3>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-4xl font-bold text-blue-600 mb-2">Na₂CO₃</div>
                  <div className="text-gray-600">{t('sodiumCarbonate')}</div>
                  <div className="text-sm text-gray-500 mt-2">{t('clearColorlessAqueousSolution')}</div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('areasOfUsage')}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">{t('glassIndustry')}</h4>
                    <p className="text-gray-600 text-sm">{t('sodaAshGlassApp')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">{t('chemicalIndustry')}</h4>
                    <p className="text-gray-600 text-sm">{t('sodaAshChemicalApp')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">{t('soapDetergentIndustry')}</h4>
                    <p className="text-gray-600 text-sm">{t('sodaAshSoapApp')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">{t('paperProduction')}</h4>
                    <p className="text-gray-600 text-sm">{t('sodaAshPaperApp')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">{t('waterTreatmentApp')}</h4>
                    <p className="text-gray-600 text-sm">{t('sodaAshWaterApp')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('sodiumBicarbonate')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('sodiumBicarbonateDesc')}
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">{t('availableGrades')}:</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <span className="bg-white px-3 py-1 rounded text-center">{t('foodGrade')}</span>
                    <span className="bg-white px-3 py-1 rounded text-center">{t('feedGrade')}</span>
                    <span className="bg-white px-3 py-1 rounded text-center">{t('technicalGrade')}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-cyan-700 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">{t('whyChooseOurSodaAsh')}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-0.5"></div>
                    <div>
                      <div className="font-semibold">{t('turkishOrigin')}</div>
                      <div className="text-blue-100 text-sm">{t('sodaAshOriginDesc')}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-0.5"></div>
                    <div>
                      <div className="font-semibold">{t('multipleApplications')}</div>
                      <div className="text-blue-100 text-sm">{t('sodaAshAppsDesc')}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-0.5"></div>
                    <div>
                      <div className="font-semibold">{t('consistentQuality')}</div>
                      <div className="text-blue-100 text-sm">{t('sodaAshQualityDesc')}</div>
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
            <Link href="/products/sulphur" className="group">
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-100 group-hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('sulphur')}</h3>
                <p className="text-gray-600">{t('sulphurDesc')}</p>
              </div>
            </Link>
            
            <Link href="/products/water-treatment" className="group">
              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-6 border border-cyan-100 group-hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">H₂O</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('waterTreatment')}</h3>
                <p className="text-gray-600">{t('waterTreatmentDesc')}</p>
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