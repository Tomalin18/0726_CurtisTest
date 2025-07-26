import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '創意設計工作室 | 創意無界限',
  description: '我們用設計改變世界 - 專業的創意設計服務，打造獨特的視覺體驗',
  keywords: ['創意設計', '設計工作室', '視覺設計', '品牌設計'],
  openGraph: {
    title: '創意設計工作室 | 創意無界限',
    description: '我們用設計改變世界',
    type: 'website',
  }
}

export default function CreativeStudioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Creative Navigation */}
      <nav className="bg-white border-b border-emerald-100 sticky top-0 z-50 backdrop-blur-md bg-white/90">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-emerald-800">Creative Studio</div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-emerald-600 font-medium border-b-2 border-emerald-500">
                創意工作室
              </Link>
              <Link href="/tech-blog" className="text-gray-600 hover:text-emerald-600 transition-colors">
                科技部落格
              </Link>
            </div>
            <div className="md:hidden">
              <button className="text-emerald-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Creative Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-100 py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-block">
                  <div className="px-6 py-3 bg-emerald-100 rounded-full border border-emerald-200 shadow-sm">
                    <span className="text-emerald-700 font-medium">✨ 專業設計服務</span>
                  </div>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                  <span className="text-emerald-800 block">創意</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-yellow-500">
                    無界限
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  我們用設計改變世界，透過創新思維與精湛技藝，為您打造獨一無二的視覺體驗
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-emerald-500/25 transform hover:-translate-y-1 transition-all duration-300">
                    <span className="flex items-center">
                      查看作品
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                  <button className="px-8 py-4 border-2 border-emerald-500 text-emerald-600 font-semibold rounded-2xl hover:bg-emerald-50 transition-all duration-300">
                    聯絡我們
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 border border-emerald-100">
                    <div className="space-y-6">
                      <div className="h-32 bg-gradient-to-br from-emerald-400 to-yellow-400 rounded-2xl"></div>
                      <div className="space-y-3">
                        <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded-full w-1/2"></div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 bg-emerald-300 rounded-full"></div>
                        <div className="w-8 h-8 bg-yellow-300 rounded-full"></div>
                        <div className="w-8 h-8 bg-emerald-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-emerald-800 mb-6">精選作品</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              每一個專案都是我們創意與技術的完美結合，展現獨特的設計理念與卓越品質
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="aspect-square bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20 group-hover:opacity-40 transition-opacity">
                    Brand
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-2xl font-bold mb-2">品牌識別設計</h3>
                  <p className="text-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    為新創企業打造獨特的品牌形象
                  </p>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="aspect-square bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20 group-hover:opacity-40 transition-opacity">
                    Web
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-2xl font-bold mb-2">網站設計開發</h3>
                  <p className="text-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    響應式網站與互動體驗設計
                  </p>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="aspect-square bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20 group-hover:opacity-40 transition-opacity">
                    UI/UX
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-2xl font-bold mb-2">使用者介面設計</h3>
                  <p className="text-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    以使用者為中心的介面體驗設計
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 border-2 border-emerald-500 text-emerald-600 font-medium rounded-2xl hover:bg-emerald-50 transition-all duration-300">
              查看完整作品集
            </button>
          </div>
        </div>
      </section>

      {/* Creative Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-emerald-800 mb-6">創意大師們</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              我們的團隊由充滿熱情的創意專家組成，每個人都以獨特的視角和專業技能貢獻於每個專案
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Team Member 1 */}
            <div className="group text-center">
              <div className="relative mb-6 inline-block">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 p-1">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
                      <span className="text-4xl font-bold text-emerald-800">AC</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-emerald-800 mb-2">Alex Chen</h3>
              <p className="text-emerald-600 font-medium mb-4">創意總監</p>
              <p className="text-gray-600 leading-relaxed">
                擁有 10 年品牌設計經驗，專精於視覺識別系統與創意策略，曾為多家知名企業打造獨特品牌形象。
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="group text-center">
              <div className="relative mb-6 inline-block">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-1">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-yellow-100 to-orange-200 flex items-center justify-center">
                      <span className="text-4xl font-bold text-orange-800">SL</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-emerald-800 mb-2">Sarah Lin</h3>
              <p className="text-emerald-600 font-medium mb-4">UI/UX 設計師</p>
              <p className="text-gray-600 leading-relaxed">
                專注於使用者體驗設計，擅長將複雜的需求轉化為直觀易用的介面，致力於創造有意義的數位體驗。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-50 border-t border-emerald-100 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-800 mb-4">Creative Studio</div>
            <p className="text-emerald-600 mb-6">創意無界限，設計改變世界</p>
            <div className="flex justify-center space-x-6">
              <Link href="/" className="text-emerald-600 font-medium">
                創意工作室
              </Link>
              <Link href="/tech-blog" className="text-gray-500 hover:text-emerald-600 transition-colors">
                科技部落格
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}