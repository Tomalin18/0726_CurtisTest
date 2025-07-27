import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: '現代企業官網 | 專業企業解決方案',
  description: '領先的企業解決方案提供商，為您的業務增長提供專業服務和創新技術支持。',
  keywords: ['企業解決方案', '商業服務', '專業諮詢', '企業管理'],
  openGraph: {
    title: '現代企業官網 | 專業企業解決方案',
    description: '領先的企業解決方案提供商',
    type: 'website',
    locale: 'zh_TW',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: 透明導航 */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-900">Corporate Solutions</div>
            <div className="hidden md:flex space-x-8">
              <Link href="/corporate" className="text-blue-600 font-medium border-b-2 border-blue-500">
                企業官網
              </Link>
              <Link href="/tech-store" className="text-gray-600 hover:text-blue-600 transition-colors">
                科技商店
              </Link>
              <Link href="/portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">
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

      {/* Section 2: 漸層主視覺 */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
                  🚀 專業企業服務
                </Badge>
                
                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                  <span className="text-blue-900 block">專業</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                    企業解決方案
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  我們為企業提供全面的數位轉型與商業諮詢服務，幫助您在競爭激烈的市場中脫穎而出，實現業務增長目標。
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                    立即諮詢
                  </Button>
                  <Button variant="outline" size="lg" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                    了解更多
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <Card className="transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                  <CardHeader>
                    <div className="h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-4"></div>
                    <CardTitle className="text-blue-900 text-xl">企業數位化解決方案</CardTitle>
                    <CardDescription>為您的企業量身打造的專業服務</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="h-3 bg-gray-200 rounded-full w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>
                      <div className="flex space-x-2 pt-2">
                        <div className="w-8 h-8 bg-blue-300 rounded-full"></div>
                        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                        <div className="w-8 h-8 bg-blue-200 rounded-full"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 成就數據 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">我們的成就</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              多年來，我們已經為數百家企業提供專業服務，創造了卓越的商業價值
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600 font-medium">成功專案</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600 font-medium">客戶滿意度</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600 font-medium">服務年資</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">專業支援</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: 核心優勢 */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">核心優勢</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我們的專業團隊提供全方位的企業解決方案，確保您的業務保持競爭優勢
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-blue-600 rounded"></div>
                </div>
                <CardTitle className="text-blue-900">數位轉型</CardTitle>
                <CardDescription>協助企業進行全面的數位化升級</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  從傳統業務模式轉向數位化營運，提升效率並擴大市場覆蓋範圍。
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                </div>
                <CardTitle className="text-blue-900">商業諮詢</CardTitle>
                <CardDescription>提供專業的策略規劃與商業建議</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  深度分析市場趨勢，制定適合的商業策略，確保企業持續成長。
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-lg transform rotate-45"></div>
                </div>
                <CardTitle className="text-blue-900">技術支援</CardTitle>
                <CardDescription>24/7 全天候技術支援服務</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  專業技術團隊隨時待命，確保您的系統穩定運行，業務不中斷。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5: 客戶見證 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">客戶見證</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              聽聽我們的客戶如何評價我們的專業服務
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">王</span>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">王總經理</div>
                    <div className="text-sm text-gray-600">科技公司</div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  &ldquo;專業的服務團隊和高效的解決方案，幫助我們公司成功完成數位轉型，業績提升了30%。&rdquo;
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">李</span>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">李執行長</div>
                    <div className="text-sm text-gray-600">製造業</div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  &ldquo;從諮詢到實施，整個過程都非常順利。他們的專業建議為我們節省了大量成本。&rdquo;
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">陳</span>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">陳董事長</div>
                    <div className="text-sm text-gray-600">零售集團</div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  &ldquo;優秀的團隊合作精神和創新思維，讓我們在激烈的市場競爭中脫穎而出。&rdquo;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 6: 行動呼籲 */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              準備開始您的數位轉型之旅嗎？
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              立即聯繫我們的專業團隊，獲得免費的商業諮詢服務，讓我們幫助您實現業務目標。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                免費諮詢
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                下載資料
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: 現代頁尾 */}
      <footer className="bg-blue-50 border-t border-blue-100 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold text-blue-900 mb-4">Corporate Solutions</div>
              <p className="text-gray-600 leading-relaxed max-w-md">
                專業的企業解決方案提供商，致力於為客戶創造最大的商業價值。
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-blue-900 mb-4">服務項目</h3>
              <ul className="space-y-2 text-gray-600">
                <li>數位轉型</li>
                <li>商業諮詢</li>
                <li>技術支援</li>
                <li>策略規劃</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-blue-900 mb-4">快速連結</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/corporate" className="hover:text-blue-600 transition-colors">企業官網</Link></li>
                <li><Link href="/tech-store" className="hover:text-blue-600 transition-colors">科技商店</Link></li>
                <li><Link href="/portfolio" className="hover:text-blue-600 transition-colors">作品集</Link></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center text-gray-600">
            <p>&copy; 2025 Corporate Solutions. 版權所有。</p>
          </div>
        </div>
      </footer>
    </div>
  )
}