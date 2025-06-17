"use client";

import Link from 'next/link';
import { Metadata } from 'next';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef, useCallback } from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';
import LoadingSpinner from '@/components/LoadingSpinner';
import { AppConfig } from '@/lib/config';

// 客户端组件中不能导出metadata，使用独立的常量
const PAGE_METADATA = {
  title: `${AppConfig.APP_NAME} 文档中心`,
  description: `了解如何使用${AppConfig.APP_NAME}提升你的开发效率，包括安装指南、特性介绍和API参考。`,
};

// 搜索结果类型
type SearchResult = {
  title: string;
  path: string;
  description: string;
  category: string;
};

const docCategories = [
  {
    name: '入门指南',
    description: `帮助你快速上手${AppConfig.APP_NAME}，从安装到基本使用全方位指导。`,
    href: '/docs/getting-started',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    links: [
      { name: '安装', href: '/docs/getting-started/installation' },
      { name: '快速开始', href: '/docs/getting-started/quick-start' },
      { name: '界面概览', href: '/docs/getting-started/interface-overview' },
    ],
  },
  {
    name: '核心功能',
    description: `详细了解${AppConfig.APP_NAME}的核心功能，掌握如何充分利用AI辅助编程能力。`,
    href: '/docs/features',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    links: [
      { name: 'AI代码补全', href: '/docs/features/code-completion' },
      { name: 'AI代码生成', href: '/docs/features/code-generation' },
      { name: 'AI代码解释', href: '/docs/features/code-explanation' },
    ],
  },
  {
    name: '集成与扩展',
    description: `探索如何将${AppConfig.APP_NAME}与其他开发工具集成，以及如何通过插件扩展功能。`,
    href: '/docs/integrations',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
      </svg>
    ),
    links: [
      { name: '插件系统', href: '/docs/integrations/plugin-system' },
      { name: '版本控制', href: '/docs/integrations/version-control' },
      { name: '第三方工具集成', href: '/docs/integrations/third-party' },
    ],
  },
  {
    name: 'API参考',
    description: `了解如何通过API与${AppConfig.APP_NAME}交互，为开发者提供完整的API文档。`,
    href: '/docs/api',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    links: [
      { name: 'AI服务API', href: '/docs/api/ai-service' },
      { name: '插件开发API', href: '/docs/api/plugin-development' },
      { name: '主题定制API', href: '/docs/api/theme-customization' },
    ],
  },
  {
    name: '进阶使用',
    description: `深入了解${AppConfig.APP_NAME}的高级功能和配置选项，满足专业开发需求。`,
    href: '/docs/advanced',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    links: [
      { name: '配置文件', href: '/docs/advanced/configuration' },
      { name: '性能优化', href: '/docs/advanced/performance' },
      { name: '自定义AI模型', href: '/docs/advanced/custom-models' },
    ],
  },
];

// 将searchableContent移到组件外部，避免每次渲染都创建新对象
const searchableContent: SearchResult[] = [
  // 入门指南
  {
    title: '安装指南',
    path: '/docs/getting-started/installation',
    description: `如何在各种操作系统上安装和配置${AppConfig.APP_NAME}`,
    category: '入门指南',
  },
  {
    title: '快速开始',
    path: '/docs/getting-started/quick-start',
    description: `快速上手${AppConfig.APP_NAME}的基本功能和使用方法`,
    category: '入门指南',
  },
  {
    title: '界面概览',
    path: '/docs/getting-started/interface-overview',
    description: `了解${AppConfig.APP_NAME}的界面布局和主要功能区域`,
    category: '入门指南',
  },
  // 核心功能
  {
    title: 'AI代码补全',
    path: '/docs/features/code-completion',
    description: '使用AI智能补全功能加速您的编码过程',
    category: '核心功能',
  },
  {
    title: 'AI代码生成',
    path: '/docs/features/code-generation',
    description: '通过自然语言描述自动生成代码片段和功能',
    category: '核心功能',
  },
  {
    title: 'AI代码解释',
    path: '/docs/features/code-explanation',
    description: '让AI帮助您理解复杂的代码逻辑和实现',
    category: '核心功能',
  },
  // API参考
  {
    title: 'AI服务API',
    path: '/docs/api/ai-service',
    description: `与${AppConfig.APP_NAME}的AI服务交互的API参考文档`,
    category: 'API参考',
  },
  {
    title: '插件开发API',
    path: '/docs/api/plugin-development',
    description: `开发${AppConfig.APP_NAME}插件的API参考指南`,
    category: 'API参考',
  },
];

export default function DocsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // 执行搜索逻辑 - 移除对searchableContent的依赖
  const performSearch = useCallback((query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // 模拟异步搜索，实际项目中可能是API调用
    setTimeout(() => {
      const normalizedQuery = query.toLowerCase().trim();
      const results = searchableContent.filter(
        item =>
          item.title.toLowerCase().includes(normalizedQuery) ||
          item.description.toLowerCase().includes(normalizedQuery) ||
          item.category.toLowerCase().includes(normalizedQuery)
      );
      
      setSearchResults(results);
      setIsSearching(false);
    }, 100);
  }, []); // 移除searchableContent依赖

  // 处理搜索框输入变化
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  // 处理搜索框按下回车
  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      performSearch(searchQuery);
    }
  };

  // 清除搜索
  const clearSearch = () => {
    setSearchQuery('');
    setDebouncedQuery('');
    setSearchResults([]);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  // 使用防抖处理搜索查询
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // 当防抖查询变化时执行搜索
  useEffect(() => {
    performSearch(debouncedQuery);
  }, [debouncedQuery, performSearch]);

  const DocsContent = () => (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          文档中心
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          欢迎来到{AppConfig.APP_NAME}文档中心。在这里，你可以找到关于{AppConfig.APP_NAME}的安装指南、功能介绍、API参考以及进阶使用技巧。无论你是初次使用还是有经验的开发者，这里都能找到帮助你充分利用{AppConfig.APP_NAME}的信息。
        </p>
      </div>
      
      {/* 搜索框 */}
      <div className="mb-12">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            ref={searchInputRef}
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="搜索文档..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            onKeyDown={handleSearchKeyDown}
          />
          {searchQuery && (
            <button 
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
              onClick={clearSearch}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* 搜索结果 */}
      {searchQuery && (
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">搜索结果</h2>
            <p className="text-sm text-gray-500">
              {isSearching ? '搜索中...' : `找到 ${searchResults.length} 个结果`}
            </p>
          </div>
          
          {isSearching ? (
            <LoadingSpinner text="正在搜索..." />
          ) : searchResults.length > 0 ? (
            <div className="space-y-4">
              {searchResults.map((result) => (
                <div key={result.path} className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <Link href={result.path} className="block">
                    <h3 className="text-lg font-semibold text-blue-600">{result.title}</h3>
                    <p className="text-sm text-gray-500 mb-1">分类：{result.category}</p>
                    <p className="text-gray-600">{result.description}</p>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-gray-50 rounded-lg border border-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-gray-400 mb-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
              </svg>
              <p className="text-gray-600 font-medium">没有找到与 "{searchQuery}" 相关的文档</p>
              <p className="text-gray-500 text-sm mt-2">尝试使用不同的关键词，或浏览下方的文档分类</p>
            </div>
          )}
        </div>
      )}

      {/* 当没有搜索时显示文档分类 */}
      {!searchQuery && (
        <div className="grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {docCategories.map((category) => (
            <div key={category.name} className="group relative">
              <div className="inline-flex rounded-lg bg-blue-50 p-3 text-blue-700">
                {category.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                <Link href={category.href} className="hover:text-blue-600">
                  {category.name}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {category.description}
              </p>
              <ul className="mt-3 space-y-1">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-blue-600 hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={category.href} className="mt-4 block text-sm font-medium text-blue-600 hover:underline">
                查看全部 →
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* 帮助与支持 */}
      <div className="mt-16 rounded-2xl bg-gray-50 p-8">
        <h2 className="text-xl font-semibold text-gray-900">需要额外帮助？</h2>
        <p className="mt-2 text-sm text-gray-600">
          如果你在文档中没有找到需要的信息，或者遇到特殊问题，可以通过以下渠道获取支持。
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-md bg-white p-4 shadow-sm">
            <h3 className="text-base font-medium text-gray-900">社区论坛</h3>
            <p className="mt-1 text-sm text-gray-600">
              加入我们的社区论坛，与其他开发者交流问题和解决方案。
            </p>
            <Link href="/community" className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline">
              访问论坛 →
            </Link>
          </div>
          <div className="rounded-md bg-white p-4 shadow-sm">
            <h3 className="text-base font-medium text-gray-900">技术支持</h3>
            <p className="mt-1 text-sm text-gray-600">
              联系我们的技术支持团队获取专业帮助。
            </p>
            <Link href="/support" className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline">
              联系支持 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <ErrorBoundary>
      <DocsContent />
    </ErrorBoundary>
  );
} 