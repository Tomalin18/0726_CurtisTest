import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '科技部落格 | 探索科技前沿',
  description: '最新科技趨勢、深度技術分析 - 與我們一起探索科技的無限可能',
  keywords: ['科技', '技術', '創新', '部落格'],
  openGraph: {
    title: '科技部落格 | 探索科技前沿',
    description: '最新科技趨勢、深度技術分析',
    type: 'website',
  }
}

export default function TechBlogPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Tech Navigation */}
      <nav className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">TechVision</div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                創意工作室
              </Link>
              <Link href="/tech-blog" className="text-emerald-400 font-medium">
                科技部落格
              </Link>
            </div>
            <div className="md:hidden">
              <button className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Tech Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-500/30">
                <span className="text-emerald-400 text-sm font-medium">最新科技資訊</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              探索科技
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                前沿
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              最新科技趨勢、深度技術分析，與我們一起探索科技的無限可能
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-emerald-500/25 transform hover:-translate-y-1 transition-all duration-300">
                閱讀最新文章
              </button>
              <button className="px-8 py-4 border-2 border-emerald-500 text-emerald-400 font-semibold rounded-full hover:bg-emerald-500/10 transition-all duration-300">
                訂閱更新
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">最新科技資訊</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              深入探討最新技術趨勢，分享實用的開發經驗與見解
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <article className="group bg-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-emerald-500 to-cyan-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium">
                    AI 技術
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  生成式 AI 的未來發展趨勢
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  深入分析生成式人工智慧技術的最新發展，探討其對各行各業的影響與應用前景。
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-400 text-sm">2024年1月15日</span>
                  <button className="text-emerald-400 hover:text-emerald-300 transition-colors">
                    閱讀更多 →
                  </button>
                </div>
              </div>
            </article>

            {/* Article 2 */}
            <article className="group bg-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium">
                    Web 開發
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  Next.js 15 新功能完整解析
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  探索 Next.js 15 帶來的革命性功能，包括 App Router 優化、性能提升等重要更新。
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-400 text-sm">2024年1月12日</span>
                  <button className="text-emerald-400 hover:text-emerald-300 transition-colors">
                    閱讀更多 →
                  </button>
                </div>
              </div>
            </article>

            {/* Article 3 */}
            <article className="group bg-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium">
                    雲端技術
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  無伺服器架構的最佳實踐
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  詳細介紹 Serverless 架構的設計原則、性能優化技巧與實際應用案例分享。
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-400 text-sm">2024年1月10日</span>
                  <button className="text-emerald-400 hover:text-emerald-300 transition-colors">
                    閱讀更多 →
                  </button>
                </div>
              </div>
            </article>
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-emerald-500 text-emerald-400 font-medium rounded-full hover:bg-emerald-500/10 transition-all duration-300">
              查看更多文章
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-4">TechVision</div>
            <p className="text-slate-400 mb-6">探索科技前沿，分享技術洞察</p>
            <div className="flex justify-center space-x-6">
              <Link href="/" className="text-slate-400 hover:text-emerald-400 transition-colors">
                創意工作室
              </Link>
              <Link href="/tech-blog" className="text-emerald-400">
                科技部落格
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}