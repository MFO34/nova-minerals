'use client'
import { useState } from 'react'
import { Header } from '../components/Header'  // Standart Header kullan
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">{t('contact')}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t('contactHeroDesc')}
          </p>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('getQuote')}</h2>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={t('companyNamePlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('phoneNumber')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={t('phonePlaceholder')}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('productInterest')} *
                    </label>
                    <select
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      <option value="other">{t('other')}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('expectedQuantity')}
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={t('quantityPlaceholder')}
                    />
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder={t('messagePlaceholder')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200"
                >
                  {t('sendQuoteRequest')}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Main Contact */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">{t('contactInfo')}</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h3 className="font-semibold mb-1">{t('address')}</h3>
                      <p className="text-blue-100">
                        {t('companyAddress')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h3 className="font-semibold mb-1">{t('phone')}</h3>
                      <p className="text-blue-100">+90 541 812 5722</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h3 className="font-semibold mb-1">{t('email')}</h3>
                      <p className="text-blue-100">info@novaminerals.com.tr</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h3 className="font-semibold mb-1">{t('website')}</h3>
                      <p className="text-blue-100">www.novaminerals.com.tr</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('businessHours')}</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>{t('mondayFriday')}</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('saturday')}</span>
                    <span className="font-semibold">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('sunday')}</span>
                    <span className="font-semibold">{t('closed')}</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-blue-800 text-sm">
                    <strong>{t('supportTitle')}:</strong> {t('supportDesc')}
                  </p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('quickContact')}</h3>
                <div className="space-y-4">
                  <a 
                    href="tel:+905418125722" 
                    className="flex items-center space-x-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors"
                  >
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">📞</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{t('callNow')}</div>
                      <div className="text-sm text-gray-600">+90 541 812 5722</div>
                    </div>
                  </a>

                  <a 
                    href="mailto:info@novaminerals.com.tr" 
                    className="flex items-center space-x-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors"
                  >
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">📧</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{t('sendEmail')}</div>
                      <div className="text-sm text-gray-600">info@novaminerals.com.tr</div>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/905418125722" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors"
                  >
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">💬</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{t('whatsapp')}</div>
                      <div className="text-sm text-gray-600">{t('chatInstantly')}</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('ourLocation')}</h2>
            <p className="text-xl text-gray-600">{t('visitUs')}</p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.390088611163!2d32.81858037638065!3d39.850588589901626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d344303e062fa5%3A0xae886815cb01b9c8!2sEti%20Maden%20Sitesi!5e1!3m2!1str!2str!4v1756239444445!5m2!1str!2str" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Nova Minerals - Eti Maden Sitesi Location"
            ></iframe>
          </div>
          
          <div className="text-center mt-6 text-gray-600">
            <p><strong>Adres:</strong> Zülfü Tiğrel Cad. Eti Maden Sitesi No:35/8</p>
            <p>Çankaya/Ankara, Turkey</p>
          </div>
        </div>
      </div>
  )
}
