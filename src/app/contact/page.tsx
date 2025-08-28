'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { Header } from '../components/Header'
import { useLanguage } from '../components/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(t('formSubmitted'))
    console.log('Form data:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <div className="bg-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium border border-amber-200">
              Get in Touch
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-gray-900">{t('contact')}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('contactHeroDesc')}
          </p>
        </div>
      </div>

      {/* Ana İçerik */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Sol: Hızlı İletişim Kartları */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">{t('quickContact')}</h2>
              
              <div className="space-y-4">
                <a 
                  href="tel:+905418125722" 
                  className="flex items-center space-x-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t('callNow')}</div>
                    <div className="text-gray-600">+90 541 812 5722</div>
                  </div>
                </a>

                <a 
                  href="mailto:info@novaminerals.com.tr" 
                  className="flex items-center space-x-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-stone-600 to-stone-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t('sendEmail')}</div>
                    <div className="text-gray-600">info@novaminerals.com.tr</div>
                  </div>
                </a>

                <a 
                  href="https://wa.me/905418125722" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <span className="text-white text-xl font-bold">💬</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t('whatsapp')}</div>
                    <div className="text-gray-600">{t('chatInstantly')}</div>
                  </div>
                </a>
              </div>

              {/* Adres Bilgisi */}
              <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-2">
                    <MapPin className="w-4 h-4 text-amber-600" />
                  </div>
                  {t('address')}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Zülfü Tiğrel Cad. Eti Maden Sitesi<br />
                  No:35/8 Çankaya/Ankara, Turkey
                </p>
              </div>
            </div>

            {/* Sağ: İletişim Formu */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('getQuote')}</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('fullName')} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                        placeholder={t('fullNamePlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('emailAddress')} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                        placeholder={t('emailPlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('companyName')} *
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                        placeholder={t('companyNamePlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('productInterest')} *
                      </label>
                      <select
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                      >
                        <option value="">{t('selectProduct')}</option>
                        <option value="iron-pyrite">{t('ironPyrite')}</option>
                        <option value="olivine">{t('olivine')}</option>
                        <option value="manganese">{t('manganese')}</option>
                        <option value="chromite-sand">{t('chromiteSand')}</option>
                        <option value="sulphur">{t('sulphur')}</option>
                        <option value="soda-ash">{t('sodaAsh')}</option>
                        <option value="fluorspar">{t('fluorspar')}</option>
                        <option value="water-treatment">{t('waterTreatment')}</option>
                        <option value="multiple">{t('multipleProducts')}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('message')} *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none transition-colors"
                      placeholder={t('messagePlaceholder')}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    {t('sendQuoteRequest')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
