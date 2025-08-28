'use client'
import Link from 'next/link'
import { CheckCircle, Globe, Award, Phone, Mail, MapPin } from 'lucide-react'
import { Header } from '../components/Header'
import { useLanguage } from '../components/LanguageContext'

export default function CompanyPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium border border-amber-200">
              {t('heroSubtitle')}
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-gray-900">{t('aboutNovaTitle')}</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('companyHeroDesc')}
          </p>
          
          {/* Ana İstatistikler */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
              <div className="text-sm text-gray-600 font-medium">{t('countriesServed')}</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-amber-600 mb-2">IMMBI</div>
              <div className="text-sm text-gray-600 font-medium">{t('member')}</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-amber-600 mb-2">#1</div>
              <div className="text-sm text-gray-600 font-medium">{t('ironPyriteProducer')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ne Yapıyoruz */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">{t('ourStory')}</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
            {t('storyDesc')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-2xl mx-auto mb-6 flex items-center justify-center border border-amber-200">
                <Globe className="w-10 h-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{t('globalSupplyChain')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('globalSupplyDesc')}</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-2xl mx-auto mb-6 flex items-center justify-center border border-amber-200">
                <Award className="w-10 h-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{t('qualityAssured')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('qualityAssuranceDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Bizi Seçin */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-gray-900">{t('whyChooseNovaTitle')}</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{t('exclusiveProduction')}</h3>
                    <p className="text-gray-600 leading-relaxed">{t('uniquePositionDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{t('strategicLocation')}</h3>
                    <p className="text-gray-600 leading-relaxed">{t('strategicLocationDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{t('completeSupplyChainMgmt')}</h3>
                    <p className="text-gray-600 leading-relaxed">{t('supplyChainDesc1')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{t('immbiMembership')}</h3>
                    <p className="text-gray-600 leading-relaxed">{t('immbiDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* İletişim Kartı */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('ourMission')}</h3>
              
              <div className="mb-8">
                <p className="text-gray-600 leading-relaxed">{t('missionText')}</p>
              </div>
              
              <div className="mb-8">
                <h4 className="font-bold text-amber-600 mb-3">{t('ourVision')}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{t('visionText')}</p>
              </div>
              
              <div className="border-t border-gray-100 pt-6">
                <h4 className="font-semibold mb-4 text-gray-900">{t('contactInfo')}</h4>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-amber-600" />
                    <span>+90 541 812 5722</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-amber-600" />
                    <span>info@novaminerals.com.tr</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <span>Çankaya/Ankara, Turkey</span>
                  </div>
                </div>
                
                <Link
                  href="/contact"
                  className="block w-full text-center bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg mt-6 hover:bg-amber-700 transition-colors shadow-md"
                >
                  {t('getQuote')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">{t('partnerWithNova')}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">{t('partnerDesc')}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {t('contactUs')}
            </Link>
            <Link
              href="/products"
              className="bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
            >
              {t('viewProducts')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}