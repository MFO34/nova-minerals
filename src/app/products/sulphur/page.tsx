'use client'
import Link from 'next/link'
import { Header } from '../../components/Header'
import { useLanguage } from '../../components/LanguageContext'

export default function SulphurPage() {
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
            <span className="text-gray-900 font-medium">{t('sulphur')}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-r from-yellow-500 to-amber-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">{t('sulphur')}</h1>
              <p className="text-xl text-yellow-100 mb-6">
                {t('sulphurDesc')}
              </p>
              <div className="flex items-center space-x-4">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">{t('highPurity')}</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">{t('industrialGrade')}</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">{t('quickContact')}</h3>
              <div className="space-y-3 text-yellow-100">
                <div>📞 +90 541 812 5722</div>
                <div>📧 info@novaminerals.com.tr</div>
                <div>📍 Çankaya/Ankara, Turkey</div>
              </div>
              <Link href="/contact" className="block w-full bg-white text-yellow-600 font-semibold py-3 px-6 rounded-lg text-center mt-6 hover:bg-yellow-50 transition-colors">
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
                {t('sulphurOverview')}
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('availableForms')}</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">{t('powderForm')}</span>
                    <span className="text-yellow-600 font-semibold">{t('available')}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">{t('granular')}</span>
                    <span className="text-yellow-600 font-semibold">{t('available')}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="font-medium">{t('lumps')}</span>
                    <span className="text-yellow-600 font-semibold">{t('available')}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('keyProperties')}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl mb-2">🌟</div>
                    <div className="font-medium">{t('appearance')}</div>
                    <div className="text-sm text-gray-600">{t('brightYellow')}</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl mb-2">✨</div>
                    <div className="font-medium">{t('texture')}</div>
                    <div className="text-sm text-gray-600">{t('softPowder')}</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl mb-2">🧪</div>
                    <div className="font-medium">{t('purity')}</div>
                    <div className="text-sm text-gray-600">{t('highGrade')}</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl mb-2">🔥</div>
                    <div className="font-medium">{t('meltingPoint')}</div>
                    <div className="text-sm text-gray-600">115°C</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('applications')}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-yellow-600 mb-2">{t('chemicalIndustry')}</h4>
                    <p className="text-gray-600 text-sm">{t('sulphurChemicalApp')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-600 mb-2">{t('fertilizer')}</h4>
                    <p className="text-gray-600 text-sm">{t('sulphurFertilizerApp')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-600 mb-2">{t('rubberIndustry')}</h4>
                    <p className="text-gray-600 text-sm">{t('sulphurRubberApp')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-600 mb-2">{t('pharmaceutical')}</h4>
                    <p className="text-gray-600 text-sm">{t('sulphurPharmaApp')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('technicalSpecifications')}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">{t('sulphurContent')}</span>
                    <span className="text-gray-600">99.5% min</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">{t('moisture')}</span>
                    <span className="text-gray-600">0.1% max</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">{t('ashContent')}</span>
                    <span className="text-gray-600">0.1% max</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-medium">{t('particleSize')}</span>
                    <span className="text-gray-600">{t('various')}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">{t('whyChooseOurSulphur')}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-0.5"></div>
                    <div>
                      <div className="font-semibold">{t('highPurity')}</div>
                      <div className="text-yellow-100 text-sm">{t('sulphurHighPurityDesc')}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-0.5"></div>
                    <div>
                      <div className="font-semibold">{t('consistentQuality')}</div>
                      <div className="text-yellow-100 text-sm">{t('sulphurConsistentDesc')}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-0.5"></div>
                    <div>
                      <div className="font-semibold">{t('multipleForms')}</div>
                      <div className="text-yellow-100 text-sm">{t('sulphurMultipleFormsDesc')}</div>
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
            
            <Link href="/products/fluorspar" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 group-hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('fluorspar')}</h3>
                <p className="text-gray-600">{t('fluorsparDesc')}</p>
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
          </div>
        </div>
      </div>
    </div>
  )
}