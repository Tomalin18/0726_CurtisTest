import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: '科技產品商店 | 最新科技產品選購',
  description: '探索最新的科技產品，從智慧手機到筆記型電腦，為您提供高品質的科技商品選擇。',
  keywords: ['科技產品', '電子商品', '智慧型手機', '筆記型電腦', '科技商店'],
  openGraph: {
    title: '科技產品商店 | 最新科技產品選購',
    description: '探索最新的科技產品選擇',
    type: 'website',
    locale: 'zh_TW',
  },
  robots: {
    index: true,
    follow: true,
  },
}

interface Product {
  id: number
  name: string
  price_in_cents: number
  image_url: string
}

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/products`, {
      cache: 'no-store'
    })
    if (!res.ok) {
      throw new Error('Failed to fetch products')
    }
    return res.json()
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`
}

export default async function TechStorePage() {
  const products = await getProducts()

  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: 科技導航 */}
      <nav className="bg-slate-900/95 backdrop-blur-md border-b border-blue-800 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-400">TechStore</div>
            <div className="hidden md:flex space-x-8">
              <Link href="/corporate" className="text-gray-300 hover:text-blue-400 transition-colors">
                企業官網
              </Link>
              <Link href="/tech-store" className="text-blue-400 font-medium border-b-2 border-blue-400">
                科技商店
              </Link>
              <Link href="/portfolio" className="text-gray-300 hover:text-blue-400 transition-colors">
                作品集
              </Link>
            </div>
            <div className="md:hidden">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                選單
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Section 2: 產品主打 */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="grid grid-cols-6 gap-8 opacity-5">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="w-8 h-8 border border-blue-400 rounded"></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30">
                  🔥 最新科技產品
                </Badge>
                
                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                  <span className="text-white block">科技</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    改變生活
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                  探索最新的科技產品，從智慧手機到筆記型電腦，我們為您精選高品質的科技商品，讓科技提升您的生活品質。
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
                    立即購買
                  </Button>
                  <Button variant="outline" size="lg" className="border-blue-400 text-blue-300 hover:bg-blue-500/10">
                    瀏覽產品
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative z-10">
                  <Card className="bg-white/10 backdrop-blur-md border-blue-400/30 shadow-2xl">
                    <CardHeader>
                      <div className="h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mb-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 rounded-lg"></div>
                        <div className="absolute bottom-4 left-4 text-white font-bold text-lg">
                          Latest Tech
                        </div>
                      </div>
                      <CardTitle className="text-white text-xl">最新科技產品</CardTitle>
                      <CardDescription className="text-gray-300">頂級品質，創新設計</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="h-3 bg-white/20 rounded-full w-3/4"></div>
                        <div className="h-3 bg-white/20 rounded-full w-1/2"></div>
                        <div className="flex space-x-2 pt-2">
                          <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                          <div className="w-8 h-8 bg-cyan-400 rounded-full"></div>
                          <div className="w-8 h-8 bg-blue-300 rounded-full"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 產品特色 */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">產品特色</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我們提供的每一款科技產品都經過嚴格篩選，確保品質與性能都能滿足您的需求
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-blue-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <CardTitle className="text-slate-900">高品質保證</CardTitle>
                <CardDescription>原廠認證，品質保障</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  所有產品都經過原廠認證，提供完整的品質保障和售後服務支援。
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow duration-300 border-blue-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <CardTitle className="text-slate-900">快速配送</CardTitle>
                <CardDescription>24小時內快速出貨</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  高效的物流系統，確保您的訂單能在最短時間內送達您手中。
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow duration-300 border-blue-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-white rounded-lg transform rotate-45"></div>
                </div>
                <CardTitle className="text-slate-900">專業服務</CardTitle>
                <CardDescription>專業團隊技術支援</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  專業的技術支援團隊，為您解答產品使用上的任何問題。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: 熱門商品 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">熱門商品</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              精選最受歡迎的科技產品，為您的生活帶來更多便利與樂趣
            </p>
          </div>
          
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-blue-100 overflow-hidden">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-500 text-white">熱門</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-slate-900 text-lg group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      高品質的科技產品，為您的生活帶來便利
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-blue-600">
                        {formatPrice(product.price_in_cents)}
                      </div>
                      <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                        加入購物車
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">暫無商品</h3>
              <p className="text-gray-500">商品資料載入中，請稍後再試</p>
            </div>
          )}
          
          {products.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                查看更多商品
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold text-blue-400 mb-4">TechStore</div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                您的科技生活夥伴，提供最新、最優質的科技產品選擇。
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">商品分類</h3>
              <ul className="space-y-2 text-gray-300">
                <li>智慧型手機</li>
                <li>筆記型電腦</li>
                <li>平板電腦</li>
                <li>配件周邊</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">快速連結</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/corporate" className="hover:text-blue-400 transition-colors">企業官網</Link></li>
                <li><Link href="/tech-store" className="hover:text-blue-400 transition-colors">科技商店</Link></li>
                <li><Link href="/portfolio" className="hover:text-blue-400 transition-colors">作品集</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TechStore. 版權所有。</p>
          </div>
        </div>
      </footer>
    </div>
  )
}