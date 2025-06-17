import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { AppConfig } from '@/lib/config';
import { replaceAppName } from '@/lib/utils';

export default function RootPage() {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <section className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-2">
                全新版本 2.0 现已发布
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                AI 驱动的<br />
                <span className="text-blue-600">智能编程环境</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                提升您的编程效率，通过AI辅助功能加速开发流程，减少重复工作，专注于创造性任务。
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/download" size="lg" className="bg-blue-600 hover:bg-blue-700">
                  免费下载
                </Button>
                <Button href="/docs" variant="outline" size="lg">
                  查看文档
                </Button>
              </div>
              
              <div className="pt-6">
                <p className="text-sm text-gray-500 mb-3">受到全球开发者的信任</p>
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                    <svg className="h-8 w-auto" viewBox="0 0 100 30" fill="currentColor">
                      <rect width="100" height="30" fill="none"/>
                      <text x="10" y="20" fontSize="14" fontWeight="bold">TechCorp</text>
                    </svg>
                  </div>
                  <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                    <svg className="h-8 w-auto" viewBox="0 0 100 30" fill="currentColor">
                      <rect width="100" height="30" fill="none"/>
                      <text x="10" y="20" fontSize="14" fontWeight="bold">DevInc</text>
                    </svg>
                  </div>
                  <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                    <svg className="h-8 w-auto" viewBox="0 0 100 30" fill="currentColor">
                      <rect width="100" height="30" fill="none"/>
                      <text x="10" y="20" fontSize="14" fontWeight="bold">CodeFirm</text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <Image
                  src="/images/hero-screenshot.png"
                  alt={`${AppConfig.APP_NAME} 界面展示`}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  className="object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </section>

          <section className="py-12 border-t border-b border-gray-200 bg-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-blue-600">500K+</p>
                <p className="text-gray-600 mt-2">活跃用户</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600">35%</p>
                <p className="text-gray-600 mt-2">开发效率提升</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600">25+</p>
                <p className="text-gray-600 mt-2">支持的编程语言</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600">4.8/5</p>
                <p className="text-gray-600 mt-2">用户满意度</p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <h2 className="text-3xl font-bold text-center mb-4">主要功能</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              我们的AI驱动技术为您的开发流程带来革命性的变化，提供智能化的编程体验
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">代码生成</h3>
                <p className="text-gray-600">
                  通过自然语言描述自动生成高质量代码，减少手动编写时间。支持多种编程范式和设计模式。
                </p>
              </Card>
              <Card className="p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">智能代码补全</h3>
                <p className="text-gray-600">
                  基于上下文的代码补全建议，提高编码速度和准确性。实时学习您的编码风格和项目特点。
                </p>
              </Card>
              <Card className="p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">代码重构</h3>
                <p className="text-gray-600">
                  自动识别并优化代码结构，提高代码质量和可维护性。智能提出重构建议，简化复杂逻辑。
                </p>
              </Card>
            </div>
          </section>

          <section className="py-16 bg-blue-50 -mx-4 px-4 rounded-lg">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">为何选择我们</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                我们的{AppConfig.APP_NAME}不仅是一款开发工具，更是您的智能编程伙伴
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4 p-6 bg-white rounded-xl shadow-md">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">提高开发效率</h3>
                  <p className="text-gray-600">
                    减少重复性工作，让开发人员专注于创造性任务，显著提高项目交付速度。
                  </p>
                </div>
                <div className="space-y-4 p-6 bg-white rounded-xl shadow-md">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">降低学习曲线</h3>
                  <p className="text-gray-600">
                    通过智能提示和文档集成，帮助开发人员更快掌握新技术和框架。
                  </p>
                </div>
                <div className="space-y-4 p-6 bg-white rounded-xl shadow-md">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">提升代码质量</h3>
                  <p className="text-gray-600">
                    自动检测潜在问题并提供优化建议，确保代码符合最佳实践。
                  </p>
                </div>
                <div className="space-y-4 p-6 bg-white rounded-xl shadow-md">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">无缝集成</h3>
                  <p className="text-gray-600">
                    与现有开发工具和工作流程轻松集成，最小化切换成本。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 -mx-4 px-4 rounded-lg text-white">
            <h2 className="text-3xl font-bold text-center mb-12">开始使用</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl mb-8">
                立即体验AI驱动的编程环境，提升您的开发效率和代码质量。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/download" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  免费下载
                </Button>
                <Button href="/docs" variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
                  查看文档
                </Button>
              </div>
              <p className="mt-6 text-sm text-blue-200">
                支持 Windows, macOS 和 Linux 平台
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
