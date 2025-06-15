"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Footer from "@/components/Footer";

const sidebarNavigation = [
  {
    name: '入门指南',
    href: '/docs/getting-started',
    children: [
      { name: '安装', href: '/docs/getting-started/installation' },
      { name: '快速开始', href: '/docs/getting-started/quick-start' },
      { name: '界面概览', href: '/docs/getting-started/interface-overview' },
    ],
  },
  {
    name: '核心功能',
    href: '/docs/features',
    children: [
      { name: 'AI代码补全', href: '/docs/features/code-completion' },
      { name: 'AI代码生成', href: '/docs/features/code-generation' },
      { name: 'AI代码解释', href: '/docs/features/code-explanation' },
      { name: '智能重构', href: '/docs/features/refactoring' },
      { name: '实时协作', href: '/docs/features/collaboration' },
    ],
  },
  {
    name: '集成与扩展',
    href: '/docs/integrations',
    children: [
      { name: '插件系统', href: '/docs/integrations/plugin-system' },
      { name: '版本控制', href: '/docs/integrations/version-control' },
      { name: '第三方工具集成', href: '/docs/integrations/third-party' },
    ],
  },
  {
    name: 'API参考',
    href: '/docs/api',
    children: [
      { name: 'AI服务API', href: '/docs/api/ai-service' },
      { name: '插件开发API', href: '/docs/api/plugin-development' },
      { name: '主题定制API', href: '/docs/api/theme-customization' },
    ],
  },
  {
    name: '进阶使用',
    href: '/docs/advanced',
    children: [
      { name: '配置文件', href: '/docs/advanced/configuration' },
      { name: '性能优化', href: '/docs/advanced/performance' },
      { name: '自定义AI模型', href: '/docs/advanced/custom-models' },
    ],
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-1">
        {/* 左侧边栏 - 桌面版 */}
        <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-10 lg:block lg:w-64 lg:border-r lg:border-gray-200 lg:bg-white lg:pb-10">
          <div className="flex h-16 items-center justify-between border-b border-gray-200 px-6">
            <div className="text-lg font-semibold text-gray-900">文档</div>
          </div>
          <nav className="space-y-1 px-4 pt-6">
            {sidebarNavigation.map((category) => {
              const isCategoryActive = pathname.startsWith(category.href);
              return (
                <div key={category.name} className="mb-6">
                  <h3 className="px-3 text-sm font-medium text-gray-500">{category.name}</h3>
                  <div className="mt-2 space-y-1">
                    {category.children.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`
                            block rounded-md px-3 py-2 text-sm font-medium
                            ${isActive
                              ? 'bg-blue-50 text-blue-700'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                            }
                          `}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </nav>
        </aside>

        {/* 移动端侧边栏 */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-20 bg-gray-500 bg-opacity-75 lg:hidden" onClick={() => setMobileMenuOpen(false)}>
            <aside className="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto bg-white pb-10">
              <div className="flex h-16 items-center justify-between border-b border-gray-200 px-6">
                <div className="text-lg font-semibold text-gray-900">文档</div>
                <button
                  type="button"
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md text-gray-500 hover:text-gray-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">关闭侧边栏</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="space-y-1 px-4 pt-6">
                {sidebarNavigation.map((category) => {
                  const isCategoryActive = pathname.startsWith(category.href);
                  return (
                    <div key={category.name} className="mb-6">
                      <h3 className="px-3 text-sm font-medium text-gray-500">{category.name}</h3>
                      <div className="mt-2 space-y-1">
                        {category.children.map((item) => {
                          const isActive = pathname === item.href;
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={`
                                block rounded-md px-3 py-2 text-sm font-medium
                                ${isActive
                                  ? 'bg-blue-50 text-blue-700'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                }
                              `}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </nav>
            </aside>
          </div>
        )}

        {/* 主内容区 */}
        <div className="flex flex-1 flex-col lg:pl-64 bg-white">
          {/* 移动端顶部导航 */}
          <div className="sticky top-0 z-10 lg:hidden">
            <div className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4">
              <div className="text-lg font-semibold text-gray-900">文档</div>
              <button
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">打开侧边栏</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>

          {/* 内容 */}
          <main className="flex-1 bg-white">
            <div className="mx-auto max-w-4xl px-4 pt-10 pb-24 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </div>
      
      {/* 页脚 */}
      <Footer />
    </div>
  );
} 