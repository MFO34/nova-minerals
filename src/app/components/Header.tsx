'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useLanguage } from './LanguageContext'

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const productItems = [
    { name: t('ironPyrite'), nameEn: 'Iron Pyrite', href: '/products/iron-pyrite' },
    { name: t('olivine'), nameEn: 'Olivine', href: '/products/olivine' },
    { name: t('manganese'), nameEn: 'Manganese', href: '/products/manganese' },
    { name: t('chromiteSand'), nameEn: 'Chromite Sand', href: '/products/chromite-sand' },
    { name: t('sulphur'), nameEn: 'Sulphur', href: '/products/sulphur' },
    { name: t('sodaAsh'), nameEn: 'Soda Ash', href: '/products/soda-ash' },
    { name: t('waterTreatment'), nameEn: 'Water Treatment', href: '/products/water-treatment' },
    { name: t('fluorspar'), nameEn: 'Fluorspar', href: '/products/fluorspar' },
  ]

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('company'), href: '/company' },
    { 
      name: t('products'), 
      href: '/products',
      submenu: productItems
    },
    { name: t('contact'), href: '/contact' },
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
    setProductsOpen(false)
  }, [pathname])

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en')
  }

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname?.startsWith(href)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Nova Minerals</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div 
                    ref={dropdownRef}
                    className="relative"
                  >
                    <button
                      onClick={() => setProductsOpen(!productsOpen)}
                      onMouseEnter={() => setProductsOpen(true)}
                      className={`flex items-center space-x-1 transition-colors font-medium px-3 py-2 rounded-lg ${
                        isActive(item.href) 
                          ? 'text-blue-600 bg-blue-50' 
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {productsOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-3 z-50 animate-in fade-in-0 zoom-in-95 duration-200"
                        onMouseLeave={() => setProductsOpen(false)}
                      >
                        <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100 mb-2">
                          {t('ourProducts')}
                        </div>
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => setProductsOpen(false)}
                            className={`block px-4 py-3 text-sm transition-colors group rounded-lg mx-2 ${
                              isActive(subItem.href)
                                ? 'text-blue-600 bg-blue-50'
                                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                            }`}
                          >
                            <div className="font-medium">{subItem.name}</div>
                            <div className="text-xs text-gray-500 group-hover:text-blue-500">{subItem.nameEn}</div>
                          </Link>
                        ))}
                        <div className="border-t border-gray-100 mt-2 pt-2 mx-2">
                          <Link
                            href="/products"
                            onClick={() => setProductsOpen(false)}
                            className="block px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors rounded-lg"
                          >
                            {t('viewAllProducts')} →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`transition-colors font-medium px-3 py-2 rounded-lg ${
                      isActive(item.href) 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg border border-gray-200 hover:border-blue-300"
            >
              <span className="text-lg">{language === 'en' ? '🇺🇸' : '🇹🇷'}</span>
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
            
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              {t('getQuote')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-blue-600 p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50">
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
            <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
              <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
                  <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-lg">N</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">Nova Minerals</span>
                </Link>
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600 p-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="px-4 py-6 space-y-2 overflow-y-auto max-h-[calc(100vh-64px)]">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={`block text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                        isActive(item.href)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-1 pl-4 border-l-2 border-gray-100">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`block py-2 px-3 rounded-lg transition-colors ${
                              isActive(subItem.href)
                                ? 'text-blue-600 bg-blue-50'
                                : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <div className="font-medium text-sm">{subItem.name}</div>
                            <div className="text-xs text-gray-500">{subItem.nameEn}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile Language Toggle */}
                <div className="pt-4 border-t border-gray-200 mt-6">
                  <button
                    onClick={() => {
                      toggleLanguage()
                      setMobileMenuOpen(false)
                    }}
                    className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors w-full py-3 px-4 rounded-lg hover:bg-blue-50"
                  >
                    <span className="text-lg">{language === 'en' ? '🇺🇸' : '🇹🇷'}</span>
                    <span className="text-lg font-medium">{language === 'en' ? 'English' : 'Türkçe'}</span>
                  </button>
                </div>
                
                <Link
                  href="/contact"
                  className="block w-full text-center bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg mt-6 hover:bg-blue-700 transition-colors shadow-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('getQuote')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}