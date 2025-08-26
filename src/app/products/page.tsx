'use client'
import { Header } from '../components/Header'
import { useLanguage } from '../components/LanguageContext'
import Link from 'next/link'
import { useState } from 'react'

export default function ProductsPage() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    {
      id: 'iron-pyrite',
      name: t('ironPyrite'),
      nameEn: 'Iron Pyrite',
      category: 'metals',
      description: t('ironPyriteDesc'),
      sizes: [t('concentrate75Micron'), t('powder05mm'), t('lumps312')],
      color: 'orange',
      applications: [t('steelMills'), t('chemicalIndustry'), t('cementProduction')]
    },
    {
      id: 'olivine',
      name: t('olivine'),
      nameEn: 'Olivine',
      category: 'foundry',
      description: t('olivineDesc'),
      sizes: [t('ebtSand'), t('foundrySand'), t('blastingSand'), t('refractorySpray')],
      color: 'green',
      applications: [t('foundries'), t('refractory'), t('steelMills'), t('blasting')]
    },
    {
      id: 'manganese',
      name: t('manganese'),
      nameEn: 'Manganese',
      category: 'metals',
      description: t('manganeseDesc'),
      sizes: [t('mn3o4'), t('ferroManganese'), t('manganeseOxide'), t('powderForms')],
      color: 'purple',
      applications: [t('steelIndustry'), t('batteryProduction'), t('chemicalIndustry')]
    },
    {
      id: 'chromite-sand',
      name: t('chromiteSand'),
      nameEn: 'Chromite Sand',
      category: 'foundry', 
      description: t('chromiteSandDesc'),
      sizes: [t('foundryGrade'), '30/60 Mesh', '40/70 Mesh'],
      color: 'gray',
      applications: [t('foundries'), t('steelCasting'), t('investmentCasting')]
    },
    {
      id: 'sulphur',
      name: t('sulphur'),
      nameEn: 'Sulphur',
      category: 'chemicals',
      description: t('sulphurDesc'),
      sizes: [t('powderForm'), 'Granular', 'Lumps'],
      color: 'yellow',
      applications: [t('chemicalIndustry'), t('fertilizer'), t('rubberIndustry')]
    },
    {
      id: 'soda-ash',
      name: t('sodaAsh'),
      nameEn: 'Soda Ash',
      category: 'chemicals',
      description: t('sodaAshDesc'),
      sizes: ['Dense Soda Ash', 'Light Soda Ash', 'Sodium Carbonate'],
      color: 'blue',
      applications: [t('glassIndustry'), t('detergentProduction'), t('paperIndustry')]
    },
    {
      id: 'water-treatment',
      name: t('waterTreatment'),
      nameEn: 'Water Treatment',
      category: 'chemicals',
      description: t('waterTreatmentDesc'),
      sizes: ['Media Filter', 'Manganese Dioxide', 'Various Grades'],
      color: 'cyan',
      applications: [t('waterTreatmentApp'), t('filtrationSystems'), t('purification')]
    },
    {
      id: 'fluorspar',
      name: t('fluorspar'),
      nameEn: 'Fluorspar',
      category: 'chemicals',
      description: t('fluorsparDesc'),
      sizes: ['Acid Grade', 'Metallurgical Grade', 'Ceramic Grade'],
      color: 'indigo',
      applications: [t('steelProduction'), t('aluminumIndustry'), t('chemicalIndustry')]
    }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const getColorClasses = (color: string) => {
    const colors = {
      orange: 'from-orange-50 to-red-50 border-orange-100 bg-orange-500',
      green: 'from-green-50 to-emerald-50 border-green-100 bg-green-500',
      purple: 'from-purple-50 to-violet-50 border-purple-100 bg-purple-500',
      gray: 'from-gray-50 to-slate-50 border-gray-100 bg-gray-600',
      yellow: 'from-yellow-50 to-amber-50 border-yellow-100 bg-yellow-500',
      blue: 'from-blue-50 to-indigo-50 border-blue-100 bg-blue-500',
      cyan: 'from-cyan-50 to-teal-50 border-cyan-100 bg-cyan-500',
      indigo: 'from-indigo-50 to-purple-50 border-indigo-100 bg-indigo-500'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">{t('ourProductsPage')}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t('productsPageDesc')}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white py-8 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {t('allProducts')}
            </button>
            <button
              onClick={() => setSelectedCategory('metals')}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === 'metals' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {t('metalsAlloys')}
            </button>
            <button
              onClick={() => setSelectedCategory('foundry')}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === 'foundry' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {t('foundryMaterials')}
            </button>
            <button
              onClick={() => setSelectedCategory('chemicals')}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === 'chemicals' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {t('chemicals')}
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const colorClasses = getColorClasses(product.color).split(' ')
              return (
                <div key={product.id} className={`bg-gradient-to-br ${colorClasses[0]} ${colorClasses[1]} rounded-xl p-6 border ${colorClasses[2]} hover:shadow-lg transition-all duration-300`}>
                  <div className={`w-12 h-12 ${colorClasses[3]} rounded-lg mb-4 flex items-center justify-center`}>
                    <span className="text-white font-bold text-xl">{product.nameEn.charAt(0)}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">{t('availableSizes')}:</h4>
                    <div className="space-y-1">
                      {product.sizes.map((size, index) => (
                        <div key={index} className="text-sm text-gray-600">• {size}</div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">{t('applications')}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, index) => (
                        <span key={index} className="bg-white/70 text-gray-700 px-2 py-1 rounded text-xs">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={`/products/${product.id}`} 
                    className={`text-${product.color}-600 hover:text-${product.color}-700 font-semibold`}
                  >
                    {t('learnMore')} →
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t('needCustomSolution')}</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('customSolutionDesc')}
          </p>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
            {t('getCustomQuote')}
          </Link>
        </div>
      </div>
    </div>
  )
}