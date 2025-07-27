import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: '設計師作品集 | 創意設計作品展示',
  description: '瀏覽我們的設計作品集，包含品牌設計、網頁設計、UI/UX設計等創意作品展示。',
  keywords: ['設計作品集', '創意設計', '品牌設計', '網頁設計', 'UI/UX設計', '平面設計'],
  openGraph: {
    title: '設計師作品集 | 創意設計作品展示',
    description: '瀏覽我們的創意設計作品集',
    type: 'website',
    locale: 'zh_TW',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: 創意導航 */}
      <nav className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100 sticky top-0 z-50 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Creative Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/corporate" className="text-gray-600 hover:text-purple-600 transition-colors">
                企業官網
              </Link>
              <Link href="/tech-store" className="text-gray-600 hover:text-purple-600 transition-colors">
                科技商店
              </Link>
              <Link href="/portfolio" className="text-purple-600 font-medium border-b-2 border-purple-500">
                作品集
              </Link>
            </div>
            <div className="md:hidden">
              <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                選單
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Section 2: 設計師介紹 */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200">
                  ✨ 創意設計師
                </Badge>
                
                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                  <span className="text-gray-900 block">設計</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
                    改變世界
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  我是一位充滿熱情的設計師，致力於創造美麗且有意義的視覺體驗。每個作品都是創意與技術的完美結合。
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    查看作品
                  </Button>
                  <Button variant="outline" size="lg" className="border-purple-500 text-purple-600 hover:bg-purple-50">
                    聯絡合作
                  </Button>
                </div>
                
                <div className="flex items-center space-x-6 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">5+</div>
                    <div className="text-sm text-gray-600">年經驗</div>
                  </div>
                  <Separator orientation="vertical" className="h-12" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">100+</div>
                    <div className="text-sm text-gray-600">完成專案</div>
                  </div>
                  <Separator orientation="vertical" className="h-12" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">50+</div>
                    <div className="text-sm text-gray-600">滿意客戶</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative z-10">
                  {/* Designer Profile Card */}
                  <Card className="shadow-2xl border-purple-100 overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400 relative">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute bottom-6 left-6">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-2xl font-bold text-purple-600">AC</span>
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-gray-900 text-xl">Alex Chen</CardTitle>
                      <CardDescription>創意設計師 & 視覺藝術家</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-gray-600 text-sm">
                          專精於品牌識別、網頁設計與用戶體驗設計
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-purple-600 border-purple-200">UI/UX</Badge>
                          <Badge variant="outline" className="text-pink-600 border-pink-200">品牌設計</Badge>
                          <Badge variant="outline" className="text-orange-600 border-orange-200">插畫</Badge>
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

      {/* Section 3: 設計服務 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">設計服務</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              提供全方位的設計服務，從品牌識別到數位體驗，為您的品牌創造獨特的視覺語言
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-purple-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <CardTitle className="text-gray-900">品牌識別設計</CardTitle>
                <CardDescription>打造獨特的品牌形象</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  從 Logo 設計到完整的品牌識別系統，為您的品牌建立一致且有力的視覺形象。
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Logo 設計與標準字</li>
                  <li>• 品牌色彩與字體規範</li>
                  <li>• 名片與文具設計</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 border-pink-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <CardTitle className="text-gray-900">網頁與UI設計</CardTitle>
                <CardDescription>現代化的數位體驗設計</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  設計美觀且實用的網站介面，提供優秀的使用者體驗和視覺效果。
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 響應式網頁設計</li>
                  <li>• 使用者介面設計</li>
                  <li>• 互動原型製作</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 border-orange-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="w-8 h-8 bg-white rounded-lg transform rotate-45"></div>
                </div>
                <CardTitle className="text-gray-900">插畫與視覺設計</CardTitle>
                <CardDescription>原創插畫與視覺創作</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  創作獨特的插畫作品和視覺元素，為您的品牌增添創意與個性。
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 手繪插畫創作</li>
                  <li>• 圖標與符號設計</li>
                  <li>• 海報與宣傳設計</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: 設計作品 */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">精選作品</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              每一個作品都承載著獨特的創意理念，展現設計的力量與美感
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-square bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold opacity-30 group-hover:opacity-50 transition-opacity">
                    BRAND
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/20 text-white border-white/30">品牌設計</Badge>
                </div>
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl font-bold mb-2">企業品牌識別</h3>
                  <p className="text-purple-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    為新創科技公司打造的現代化品牌形象系統
                  </p>
                </div>
              </div>
            </Card>

            {/* Project 2 */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-square bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold opacity-30 group-hover:opacity-50 transition-opacity">
                    WEB
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/20 text-white border-white/30">網頁設計</Badge>
                </div>
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl font-bold mb-2">電商平台設計</h3>
                  <p className="text-pink-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    響應式電商網站設計，提供優質的購物體驗
                  </p>
                </div>
              </div>
            </Card>

            {/* Project 3 */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-square bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold opacity-30 group-hover:opacity-50 transition-opacity">
                    APP
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/20 text-white border-white/30">UI/UX</Badge>
                </div>
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl font-bold mb-2">行動應用介面</h3>
                  <p className="text-orange-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    以使用者為中心的移動應用程式界面設計
                  </p>
                </div>
              </div>
            </Card>

            {/* Project 4 */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-square bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold opacity-30 group-hover:opacity-50 transition-opacity">
                    PRINT
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/20 text-white border-white/30">平面設計</Badge>
                </div>
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl font-bold mb-2">宣傳物料設計</h3>
                  <p className="text-blue-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    企業宣傳冊、海報等印刷物設計
                  </p>
                </div>
              </div>
            </Card>

            {/* Project 5 */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-square bg-gradient-to-br from-green-400 via-green-500 to-green-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold opacity-30 group-hover:opacity-50 transition-opacity">
                    ICON
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/20 text-white border-white/30">圖標設計</Badge>
                </div>
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl font-bold mb-2">圖標系統設計</h3>
                  <p className="text-green-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    一致性的圖標設計系統，提升產品視覺效果
                  </p>
                </div>
              </div>
            </Card>

            {/* Project 6 */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-square bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold opacity-30 group-hover:opacity-50 transition-opacity">
                    ART
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/20 text-white border-white/30">插畫</Badge>
                </div>
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl font-bold mb-2">原創插畫創作</h3>
                  <p className="text-indigo-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    手繪插畫與數位藝術創作，展現獨特風格
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="text-center mt-16">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              查看完整作品集
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Creative Portfolio
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                用設計創造美好，讓每個作品都能傳達獨特的故事與情感。
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">設計服務</h3>
              <ul className="space-y-2 text-gray-300">
                <li>品牌識別設計</li>
                <li>網頁與UI設計</li>
                <li>插畫與視覺設計</li>
                <li>平面設計</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">快速連結</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/corporate" className="hover:text-purple-400 transition-colors">企業官網</Link></li>
                <li><Link href="/tech-store" className="hover:text-purple-400 transition-colors">科技商店</Link></li>
                <li><Link href="/portfolio" className="hover:text-purple-400 transition-colors">作品集</Link></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Creative Portfolio. 版權所有。設計改變世界。</p>
          </div>
        </div>
      </footer>
    </div>
  )
}