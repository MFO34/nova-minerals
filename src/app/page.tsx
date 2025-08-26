'use client'
import Link from 'next/link'
import { Header } from './components/Header'
import { useLanguage } from './components/LanguageContext'

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-yellow-400 font-semibold">{t('heroSubtitle')}</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                {t('heroTitle1')}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {t('heroTitle2')}
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                {t('heroDescription')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/products" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-center">
                  {t('exploreProducts')} →
                </Link>
                <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg border border-white/20 transition-all duration-200 text-center">
                  {t('getQuote')}
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">8+</div>
                  <div className="text-sm text-gray-400">{t('productLines')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-sm text-gray-400">{t('countriesServed')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-400">{t('support')}</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="w-8 h-8 bg-blue-400 rounded-lg mb-4"></div>
                    <h3 className="text-lg font-semibold text-white mb-2">{t('globalSupplyChain')}</h3>
                    <p className="text-gray-300 text-sm">{t('globalSupplyDesc')}</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="w-8 h-8 bg-green-400 rounded-lg mb-4"></div>
                    <h3 className="text-lg font-semibold text-white mb-2">{t('qualityAssured')}</h3>
                    <p className="text-gray-300 text-sm">{t('qualityAssuredDesc')}</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="w-8 h-8 bg-yellow-400 rounded-lg mb-4"></div>
                    <h3 className="text-lg font-semibold text-white mb-2">{t('strategicLocation')}</h3>
                    <p className="text-gray-300 text-sm">{t('strategicLocationDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Showcase Section */}
      <div className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('ourProducts')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('productsDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Iron Pyrite */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-orange-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">Fe</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('ironPyrite')}</h3>
            <p className="text-gray-600 mb-4">{t('ironPyriteDesc')}</p>
            <div className="space-y-2 mb-4">
              <div className="text-sm text-gray-500">• {t('concentrate75Micron')}</div>
              <div className="text-sm text-gray-500">• {t('powder05mm')}</div>
              <div className="text-sm text-gray-500">• {t('lumps312')}</div>
            </div>
            <Link href="/products/iron-pyrite" className="text-orange-600 hover:text-orange-700 font-semibold">
              {t('learnMore')} →
            </Link>
          </div>

          {/* Olivine */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-green-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">Ol</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('olivine')}</h3>
            <p className="text-gray-600 mb-4">{t('olivineDesc')}</p>
            <div className="space-y-2 mb-4">
              <div className="text-sm text-gray-500">• {t('ebtSand')}</div>
              <div className="text-sm text-gray-500">• {t('foundrySand')}</div>
              <div className="text-sm text-gray-500">• {t('blastingSand')}</div>
              <div className="text-sm text-gray-500">• {t('refractorySpray')}</div>
            </div>
            <Link href="/products/olivine" className="text-green-600 hover:text-green-700 font-semibold">
              {t('learnMore')} →
            </Link>
          </div>

          {/* Manganese */}
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-purple-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">Mn</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('manganese')}</h3>
            <p className="text-gray-600 mb-4">{t('manganeseDesc')}</p>
            <div className="space-y-2 mb-4">
              <div className="text-sm text-gray-500">• {t('mn3o4')}</div>
              <div className="text-sm text-gray-500">• {t('ferroManganese')}</div>
              <div className="text-sm text-gray-500">• {t('manganeseOxide')}</div>
              <div className="text-sm text-gray-500">• {t('powderForms')}</div>
            </div>
            <Link href="/products/manganese" className="text-purple-600 hover:text-purple-700 font-semibold">
              {t('learnMore')} →
            </Link>
          </div>

          {/* Chromite Sand */}
          <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-gray-600 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">Cr</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('chromiteSand')}</h3>
            <p className="text-gray-600 mb-4">{t('chromiteSandDesc')}</p>
            <div className="space-y-2 mb-4">
              <div className="text-sm text-gray-500">• {t('foundryGrade')}</div>
              <div className="text-sm text-gray-500">• {t('betterSurfaceFinish')}</div>
              <div className="text-sm text-gray-500">• {t('reducedDefects')}</div>
            </div>
            <Link href="/products/chromite-sand" className="text-gray-600 hover:text-gray-700 font-semibold">
              {t('learnMore')} →
            </Link>
          </div>

          {/* Sulphur */}
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-100 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('sulphur')}</h3>
            <p className="text-gray-600 mb-4">{t('sulphurDesc')}</p>
            <div className="space-y-2 mb-4">
              <div className="text-sm text-gray-500">• {t('highPurity')}</div>
              <div className="text-sm text-gray-500">• {t('powderForm')}</div>
              <div className="text-sm text-gray-500">• {t('industrialGrade')}</div>
            </div>
            <Link href="/products/sulphur" className="text-yellow-600 hover:text-yellow-700 font-semibold">
              {t('learnMore')} →
            </Link>
          </div>

          {/* Fluorspar */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('fluorspar')}</h3>
            <p className="text-gray-600 mb-4">{t('fluorsparDesc')}</p>
            <div className="space-y-2 mb-4">
              <div className="text-sm text-gray-500">• {t('steelManufacturing')}</div>
              <div className="text-sm text-gray-500">• {t('stainlessSteel')}</div>
              <div className="text-sm text-gray-500">• {t('ferroAlloys')}</div>
              <div className="text-sm text-gray-500">• {t('baseMetals')}</div>
            </div>
            <Link href="/products/fluorspar" className="text-blue-600 hover:text-blue-700 font-semibold">
              {t('learnMore')} →
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/products" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            {t('viewAllProducts')}
          </Link>
        </div>
      </div>
      </div>

      {/* Company Section */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('aboutNova')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('companyDescription1')}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {t('companyDescription2')}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">IMMBI</div>
                  <div className="text-sm text-gray-600">{t('member')}</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{t('unique')}</div>
                  <div className="text-sm text-gray-600">{t('ironPyriteProducer')}</div>
                </div>
              </div>
              <Link href="/company" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                {t('learnMoreAbout')}
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">{t('whyChooseNova')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <div className="font-semibold mb-1">{t('completeSupplyChain')}</div>
                      <div className="text-blue-100 text-sm">{t('completeSupplyDesc')}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <div className="font-semibold mb-1">{t('qualityAssurance')}</div>
                      <div className="text-blue-100 text-sm">{t('qualityAssuranceDesc')}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <div className="font-semibold mb-1">{t('strategicLocationFull')}</div>
                      <div className="text-blue-100 text-sm">{t('strategicLocationFullDesc')}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <div className="font-semibold mb-1">{t('dedicatedSupport')}</div>
                      <div className="text-blue-100 text-sm">{t('dedicatedSupportDesc')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <span className="text-xl font-bold">Nova Minerals</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                {t('footerDescription')}
              </p>
              <div className="space-y-2">
                <div className="text-gray-400">
                  <span className="font-semibold">{t('address')}:</span> Zülfü Tiğrel Cad. Eti Maden Sitesi No:35/8 Çankaya/Ankara
                </div>
                <div className="text-gray-400">
                  <span className="font-semibold">{t('phone')}:</span> +90 541 812 5722
                </div>
                <div className="text-gray-400">
                  <span className="font-semibold">{t('email')}:</span> info@novaminerals.com.tr
                </div>
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('products')}</h3>
              <div className="space-y-2 text-gray-400">
                <div>{t('ironPyrite')}</div>
                <div>{t('olivine')}</div>
                <div>{t('manganese')}</div>
                <div>{t('chromiteSand')}</div>
                <div>{t('sulphur')}</div>
                <div>{t('sodaAsh')}</div>
                <div>{t('fluorspar')}</div>
                <div>{t('waterTreatment')}</div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
              <div className="space-y-2 text-gray-400">
                <div><Link href="/" className="hover:text-blue-400 transition-colors">{t('home')}</Link></div>
                <div><Link href="/company" className="hover:text-blue-400 transition-colors">{t('company')}</Link></div>
                <div><Link href="/products" className="hover:text-blue-400 transition-colors">{t('products')}</Link></div>
                <div><Link href="/contact" className="hover:text-blue-400 transition-colors">{t('contact')}</Link></div>
                <div><Link href="/contact" className="hover:text-blue-400 transition-colors">{t('getQuote')}</Link></div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 {t('footerCopyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}