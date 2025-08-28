'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Header } from '../components/Header'
import { useLanguage } from '../components/LanguageContext'

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
      color: 'amber',
      featured: true,
      icon: 'Fe'
    },
    {
      id: 'olivine',
      name: t('olivine'),
      nameEn: 'Olivine',
      category: 'foundry',
      description: t('olivineDesc'),
      color: 'stone',
      icon: 'Ol'
    },
    {
      id: 'manganese',
      name: t('manganese'),
      nameEn: 'Manganese',
      category: 'metals',
      description: t('manganeseDesc'),
      color: 'orange',
      icon: 'Mn'
    },
    {
      id: 'chromite-sand',
      name: t('chromiteSand'),
      nameEn: 'Chromite Sand',
      category: 'foundry', 
      description: t('chromiteSandDesc'),
      color: 'gray',
      icon: 'Cr'
    },
    {
      id: 'sulphur',
      name: t('sulphur'),
      nameEn: 'Sulphur',
      category: 'chemicals',
      description: t('sulphurDesc'),
      color: 'yellow',
      icon: 'S'
    },
    {
      id: 'soda-ash',
      name: t('sodaAsh'),
      nameEn: 'Soda Ash',
      category: 'chemicals',
      description: t('sodaAshDesc'),
      color: 'slate',
      icon: 'Na'
    },
    {
      id: 'fluorspar',
      name: t('fluorspar'),
      nameEn: 'Fluorspar',
      category: 'chemicals',
      description: t('fluorsparDesc'),
      color: 'neutral',
      icon: 'F'
    },
    {
      id: 'water-treatment',
      name: t('waterTreatment'),
      nameEn: 'Water Treatment',
      category: 'chemicals',
      description: t('waterTreatmentDesc'),
      color: 'zinc',
      icon: 'H₂O'
    }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const getColorClasses = (color: string) => {
    const colors = {
      amber: 'from-amber-50 to-orange-50 border-amber-100 bg-gradient-to-br from-amber-500 to-orange-600 text-amber-600',
      stone: 'from-stone-50 to-gray-50 border-stone-100 bg-gradient-to-br from-stone-600 to-stone-800 text-stone-600',
      orange: 'from-orange-50 to-red-50 border-orange-100 bg-gradient-to-br from-orange-600 to-red-700 text-orange-600',
      gray: 'from-gray-50 to-slate-50 border-gray-100 bg-gradient-to-br from-gray-600 to-slate-700 text-gray-600',
      yellow: 'from-yellow-50 to-amber-50 border-yellow-100 bg-gradient-to-br from-yellow-500 to-amber-600 text-yellow-600',
      slate: 'from-slate-50 to-gray-50 border-slate-100 bg-gradient-to-br from-slate-600 to-gray-700 text-slate-600',
      neutral: 'from-neutral-50 to-stone-50 border-neutral-100 bg-gradient-to-br from-neutral-600 to-stone-700 text-neutral-600',
      zinc: 'from-zinc-50 to-slate-50 border-zinc-100 bg-gradient-to-br from-zinc-600 to-slate-700 text-zinc-600'
    }
    return colors[color as keyof typeof colors] || colors.amber
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
              Premium Quality
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-gray-900">{t('ourProductsPage')}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('productsPageDesc')}
          </p>
        </div>
      </div>

      {/* Filtreler */}
      <div className="bg-gray-50 py-8 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors border ${
                selectedCategory === 'all' 
                  ? 'bg-amber-600 text-white border-amber-600 shadow-md' 
                  : 'bg-white text-gray-600 hover:text-amber-600 border-gray-200 hover:border-amber-300'
              }`}
            >
              {t('allProducts')}
            </button>
            <button
              onClick={() => setSelectedCategory('metals')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors border ${
                selectedCategory === 'metals' 
                  ? 'bg-amber-600 text-white border-amber-600 shadow-md' 
                  : 'bg-white text-gray-600 hover:text-amber-600 border-gray-200 hover:border-amber-300'
              }`}
            >
              {t('metalsAlloys')}
            </button>
            <button
              onClick={() => setSelectedCategory('foundry')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors border ${
                selectedCategory === 'foundry' 
                  ? 'bg-amber-600 text-white border-amber-600 shadow-md' 
                  : 'bg-white text-gray-600 hover:text-amber-600 border-gray-200 hover:border-amber-300'
              }`}
            >
              {t('foundryMaterials')}
            </button>
            <button
              onClick={() => setSelectedCategory('chemicals')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors border ${
                selectedCategory === 'chemicals' 
                  ? 'bg-amber-600 text-white border-amber-600 shadow-md' 
                  : 'bg-white text-gray-600 hover:text-amber-600 border-gray-200 hover:border-amber-300'
              }`}
            >
              {t('chemicals')}
            </button>
          </div>
        </div>
      </div>

      {/* Ürün Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const colorClasses = getColorClasses(product.color).split(' ')
              return (
                <div key={product.id} className={`relative bg-gradient-to-br ${colorClasses[0]} ${colorClasses[1]} rounded-2xl p-8 border ${colorClasses[2]} hover:shadow-xl transition-all duration-300 group`}>
                  
                  {product.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 ${colorClasses[3]} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                    <span className="text-white font-bold text-xl">{product.icon}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  
                  <Link 
                    href={`/products/${product.id}`} 
                    className={`inline-flex items-center ${colorClasses[4]} hover:opacity-80 font-semibold transition-opacity`}
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
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('needCustomSolution')}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('customSolutionDesc')}
          </p>
          <Link 
            href="/contact" 
            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-block"
          >
            {t('getCustomQuote')}
          </Link>
        </div>
      </div>
    </div>
  )
}