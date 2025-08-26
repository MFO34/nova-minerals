'use client'
import { Header } from '../components/Header'
import { useLanguage } from '../components/LanguageContext'
import Link from 'next/link'

export default function CompanyPage() {
  const { t, language } = useLanguage()

  const getText = (key: string) => {
    const fallbacks: Record<string, Record<string, string>> = {
      en: {
        aboutNovaTitle: 'About Nova Minerals',
        companyHeroDesc: 'Leading supplier of premium industrial minerals with complete supply chain management from Turkish mines to global markets.',
        productLines: 'Product Lines',
        countriesServed: 'Countries Served',
        member: 'IMMBI Member',
        ourMission: 'Our Mission',
        missionText: 'To provide high-quality industrial minerals and exceptional service to customers worldwide, while maintaining the highest standards of safety, environmental responsibility, and ethical business practices.',
        ourVision: 'Our Vision',
        visionText: 'To be the most trusted and reliable partner for industrial mineral solutions globally, recognized for our quality, innovation, and customer-centric approach.',
        ourStory: 'Our Story',
        storyDesc: 'Nova Minerals has established itself as Turkey\'s leading exporter of industrial minerals, with a comprehensive approach to supply chain management.',
        completeSupplyChainMgmt: 'Complete Supply Chain Management',
        supplyChainDesc1: 'From mining operations to final delivery, we control every step of the process. Our integrated approach ensures consistent quality, reliable supply, and competitive pricing for our customers worldwide.',
        supplyChainDesc2: 'With strategic partnerships and our own mining operations, we maintain full control over production schedules, quality standards, and logistics coordination.',
        uniqueMarketPosition: 'Unique Market Position',
        uniquePositionDesc: 'As Turkey\'s only producer of Iron Pyrite lumps and a leading supplier of premium Olivine, we hold unique positions in specialized mineral markets.',
        keyCapabilities: 'Key Capabilities',
        ourValues: 'Our Values',
        valuesDesc: 'Our core values guide every decision we make and every relationship we build.',
        qualityExcellence: 'Quality Excellence',
        qualityExcellenceDesc: 'Uncompromising commitment to product quality and continuous improvement in all processes.',
        transparency: 'Transparency',
        transparencyDesc: 'Open, honest communication with customers, suppliers, and stakeholders at all times.',
        reliability: 'Reliability',
        reliabilityDesc: 'Dependable delivery performance and consistent product quality that customers can count on.',
        innovation: 'Innovation',
        innovationDesc: 'Continuous investment in technology, processes, and solutions to better serve our customers.',
        miningOperations: 'Mining Operations',
        miningOperationsDesc: 'Direct control over extraction and processing',
        qualityControl: 'Quality Control',
        qualityControlDesc: 'Rigorous testing and certification processes',
        globalLogistics: 'Global Logistics',
        globalLogisticsDesc: 'Efficient worldwide shipping and distribution',
        customerSupport: 'Customer Support',
        customerSupportDesc: 'Dedicated account management and technical support',
        whyChooseNovaTitle: 'Why Choose Nova Minerals?',
        whyChooseDesc: 'Our unique combination of market position, global reach, and customer focus sets us apart.',
        marketLeadership: 'Market Leadership',
        marketLeadershipDesc: 'Unique positions in specialized mineral markets with proven track record of excellence.',
        exclusiveProduction: 'Turkey\'s only Iron Pyrite lumps producer',
        premiumOlivine: 'Premium Olivine from Turkish mines',
        immbiMembership: 'IMMBI membership and industry recognition',
        globalReach: 'Global Reach',
        globalReachDesc: 'Serving customers in over 50 countries with efficient logistics and reliable supply chains.',
        worldwideDistribution: 'Worldwide distribution network',
        strategicPortLocation: 'Strategic port location advantages',
        efficientLogistics: 'Efficient logistics and shipping',
        customerPartnership: 'Customer Partnership',
        customerPartnershipDesc: 'Building long-term relationships through transparency, reliability, and exceptional service.',
        openDialogue: 'Open dialogue and communication',
        dedicatedAccountMgmt: 'Dedicated account management',
        contractualCompliance: 'Contractual compliance and reliability',
        certificationsTitle: 'Certifications & Memberships',
        certificationsDesc: 'Our commitment to quality and industry standards is reflected in our certifications.',
        istanbulMineralsExporters: 'Istanbul Minerals & Metals Exporters Association',
        immbiDesc: 'Proud member of IMMBI, Turkey\'s leading minerals and metals exporters association, ensuring adherence to highest industry standards.',
        qualityAssuranceTitle: 'Quality Assurance',
        qualityAssuranceFullDesc: 'Comprehensive quality management systems ensuring consistent product quality and customer satisfaction through rigorous testing and certification processes.',
        partnerWithNova: 'Partner with Nova Minerals',
        partnerDesc: 'Experience the difference of working with Turkey\'s leading industrial minerals supplier.',
        contactUs: 'Contact Us',
        viewProducts: 'View Products'
      },
      tr: {
        aboutNovaTitle: 'Nova Minerals Hakkında',
        companyHeroDesc: 'Türk madenlerinden küresel pazarlara tam tedarik zinciri yönetimi ile premium endüstriyel minerallerin önde gelen tedarikçisi.',
        productLines: 'Ürün Hatları',
        countriesServed: 'Hizmet Verilen Ülke',
        member: 'İMMİB Üyesi',
        ourMission: 'Misyonumuz',
        missionText: 'Dünya çapındaki müşterilere yüksek kaliteli endüstriyel mineraller ve olağanüstü hizmet sağlamak, aynı zamanda en yüksek güvenlik, çevresel sorumluluk ve etik iş uygulamaları standartlarını korumak.',
        ourVision: 'Vizyonumuz',
        visionText: 'Kalite, inovasyon ve müşteri odaklı yaklaşımımızla tanınan, endüstriyel mineral çözümleri için küresel olarak en güvenilir ve güvenilir ortak olmak.',
        ourStory: 'Hikayemiz',
        storyDesc: 'Nova Minerals, tedarik zinciri yönetimine kapsamlı bir yaklaşımla Türkiye\'nin önde gelen endüstriyel mineral ihracatçısı olarak kendini kurmuştur.',
        completeSupplyChainMgmt: 'Tam Tedarik Zinciri Yönetimi',
        supplyChainDesc1: 'Maden işletmelerinden nihai teslimat aşamasına kadar sürecin her adımını kontrol ediyoruz. Entegre yaklaşımımız, dünya çapındaki müşterilerimiz için tutarlı kalite, güvenilir tedarik ve rekabetçi fiyatlandırma sağlar.',
        supplyChainDesc2: 'Stratejik ortaklıklar ve kendi maden işletmelerimizle, üretim programları, kalite standartları ve lojistik koordinasyonu üzerinde tam kontrol sağlıyoruz.',
        uniqueMarketPosition: 'Benzersiz Pazar Konumu',
        uniquePositionDesc: 'Türkiye\'nin tek Demir Pirit yumru üreticisi ve premium Olivin\'in önde gelen tedarikçisi olarak, özel mineral pazarlarında benzersiz konumlara sahibiz.',
        keyCapabilities: 'Ana Yetenekler',
        ourValues: 'Değerlerimiz',
        valuesDesc: 'Temel değerlerimiz, verdiğimiz her kararı ve kurduğumuz her ilişkiyi yönlendirir.',
        qualityExcellence: 'Kalite Mükemmelliği',
        qualityExcellenceDesc: 'Ürün kalitesine taviz vermeyen bağlılık ve tüm süreçlerde sürekli iyileştirme.',
        transparency: 'Şeffaflık',
        transparencyDesc: 'Müşteriler, tedarikçiler ve paydaşlarla her zaman açık, dürüst iletişim.',
        reliability: 'Güvenilirlik',
        reliabilityDesc: 'Müşterilerin güvenebileceği bağımlı teslimat performansı ve tutarlı ürün kalitesi.',
        innovation: 'İnovasyon',
        innovationDesc: 'Müşterilerimize daha iyi hizmet vermek için teknoloji, süreçler ve çözümlere sürekli yatırım.',
        miningOperations: 'Maden İşletmeleri',
        miningOperationsDesc: 'Çıkarma ve işleme üzerinde doğrudan kontrol',
        qualityControl: 'Kalite Kontrol',
        qualityControlDesc: 'Titiz test ve sertifikasyon süreçleri',
        globalLogistics: 'Global Lojistik',
        globalLogisticsDesc: 'Verimli dünya çapında nakliye ve dağıtım',
        customerSupport: 'Müşteri Desteği',
        customerSupportDesc: 'Özel hesap yönetimi ve teknik destek',
        whyChooseNovaTitle: 'Neden Nova Minerals?',
        whyChooseDesc: 'Pazar konumumuz, küresel erişimimiz ve müşteri odaklılığımızın benzersiz kombinasyonu bizi farklı kılar.',
        marketLeadership: 'Pazar Liderliği',
        marketLeadershipDesc: 'Kanıtlanmış mükemmellik sicili ile özel mineral pazarlarında benzersiz konumlar.',
        exclusiveProduction: 'Türkiye\'nin tek Demir Pirit yumru üreticisi',
        premiumOlivine: 'Türk madenlerinden premium Olivin',
        immbiMembership: 'İMMİB üyeliği ve sektör tanınırlığı',
        globalReach: 'Küresel Erişim',
        globalReachDesc: 'Verimli lojistik ve güvenilir tedarik zincirleri ile 50\'den fazla ülkede müşterilere hizmet veriyoruz.',
        worldwideDistribution: 'Dünya çapında dağıtım ağı',
        strategicPortLocation: 'Stratejik liman konumu avantajları',
        efficientLogistics: 'Verimli lojistik ve nakliye',
        customerPartnership: 'Müşteri Ortaklığı',
        customerPartnershipDesc: 'Şeffaflık, güvenilirlik ve olağanüstü hizmet ile uzun vadeli ilişkiler kuruyoruz.',
        openDialogue: 'Açık diyalog ve iletişim',
        dedicatedAccountMgmt: 'Özel hesap yönetimi',
        contractualCompliance: 'Sözleşme uyumluluğu ve güvenilirlik',
        certificationsTitle: 'Sertifikalar ve Üyelikler',
        certificationsDesc: 'Kalite ve sektör standartlarına bağlılığımız sertifikalarımızda yansıyor.',
        istanbulMineralsExporters: 'İstanbul Maden ve Metaller İhracatçıları Birliği',
        immbiDesc: 'Türkiye\'nin önde gelen maden ve metal ihracatçıları birliği İMMİB\'in gururlu üyesi olarak, en yüksek sektör standartlarına uygunluğu sağlıyoruz.',
        qualityAssuranceTitle: 'Kalite Güvencesi',
        qualityAssuranceFullDesc: 'Titiz test ve sertifikasyon süreçleri ile tutarlı ürün kalitesi ve müşteri memnuniyetini sağlayan kapsamlı kalite yönetim sistemleri.',
        partnerWithNova: 'Nova Minerals ile Ortaklık',
        partnerDesc: 'Türkiye\'nin önde gelen endüstriyel mineral tedarikçisi ile çalışmanın farkını yaşayın.',
        contactUs: 'İletişime Geçin',
        viewProducts: 'Ürünleri Görüntüle'
      }
    }
    return t(key) || fallbacks[language][key] || key
  }

  const values = [
    {
      title: getText('qualityExcellence'),
      description: getText('qualityExcellenceDesc'),
      icon: '🏆'
    },
    {
      title: getText('transparency'),
      description: getText('transparencyDesc'),
      icon: '🤝'
    },
    {
      title: getText('reliability'),
      description: getText('reliabilityDesc'),
      icon: '⚡'
    },
    {
      title: getText('innovation'),
      description: getText('innovationDesc'),
      icon: '💡'
    }
  ]

  const capabilities = [
    {
      title: getText('miningOperations'),
      description: getText('miningOperationsDesc'),
      icon: '⛏️'
    },
    {
      title: getText('qualityControl'),
      description: getText('qualityControlDesc'),
      icon: '🔬'
    },
    {
      title: getText('globalLogistics'),
      description: getText('globalLogisticsDesc'),
      icon: '🚢'
    },
    {
      title: getText('customerSupport'),
      description: getText('customerSupportDesc'),
      icon: '📞'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-6">{getText('aboutNovaTitle')}</h1>
              <p className="text-xl text-blue-100 mb-8">
                {getText('companyHeroDesc')}
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">8</div>
                  <div className="text-sm text-blue-200">{getText('productLines')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">50+</div>
                  <div className="text-sm text-blue-200">{getText('countriesServed')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">İMMİB</div>
                  <div className="text-sm text-blue-200">{getText('member')}</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">{getText('ourMission')}</h3>
              <p className="text-blue-100 mb-6">
                {getText('missionText')}
              </p>
              <h3 className="text-2xl font-bold text-white mb-4">{getText('ourVision')}</h3>
              <p className="text-blue-100">
                {getText('visionText')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{getText('ourStory')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getText('storyDesc')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{getText('completeSupplyChainMgmt')}</h3>
              <p className="text-lg text-gray-600 mb-6">
                {getText('supplyChainDesc1')}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {getText('supplyChainDesc2')}
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-2">{getText('uniqueMarketPosition')}</h4>
                <p className="text-blue-800">
                  {getText('uniquePositionDesc')}
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">{getText('keyCapabilities')}</h3>
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-2xl">{capability.icon}</div>
                    <div>
                      <div className="font-semibold">{capability.title}</div>
                      <div className="text-blue-100 text-sm">{capability.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{getText('ourValues')}</h2>
            <p className="text-xl text-gray-600">{getText('valuesDesc')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{getText('whyChooseNovaTitle')}</h2>
            <p className="text-xl text-gray-600">{getText('whyChooseDesc')}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 border border-orange-100">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-2xl">🥇</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{getText('marketLeadership')}</h3>
              <p className="text-gray-600 mb-4">
                {getText('marketLeadershipDesc')}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  <span>{getText('worldwideDistribution')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  <span>{getText('strategicPortLocation')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  <span>{getText('efficientLogistics')}</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{getText('customerPartnership')}</h3>
              <p className="text-gray-600 mb-4">
                {getText('customerPartnershipDesc')}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  <span>{getText('openDialogue')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  <span>{getText('dedicatedAccountMgmt')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  <span>{getText('contractualCompliance')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications & Memberships */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{getText('certificationsTitle')}</h2>
            <p className="text-xl text-gray-600">{getText('certificationsDesc')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">İMMİB</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{getText('istanbulMineralsExporters')}</h3>
              <p className="text-gray-600">
                {getText('immbiDesc')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">🏅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{getText('qualityAssuranceTitle')}</h3>
              <p className="text-gray-600">
                {getText('qualityAssuranceFullDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{getText('partnerWithNova')}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {getText('partnerDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              {getText('contactUs')}
            </Link>
            <Link href="/products" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              {getText('viewProducts')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
