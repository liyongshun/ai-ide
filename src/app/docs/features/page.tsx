import Link from 'next/link';
import { Metadata } from 'next';
import { AppConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: `核心功能 | ${AppConfig.APP_NAME}文档`,
  description: `探索${AppConfig.APP_NAME}的核心功能，了解如何利用AI提升您的编程体验和开发效率。`,
};

const features = [
  {
    title: 'AI代码补全',
    description: '智能的代码补全功能，可以预测您的下一步编码意图，提供准确的代码建议。',
    href: '/docs/features/code-completion',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'AI代码生成',
    description: '根据自然语言描述或注释自动生成代码，快速实现您的功能需求。',
    href: '/docs/features/code-generation',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: 'AI代码解释',
    description: '快速理解复杂代码，AI会提供详细的解释和上下文说明。',
    href: '/docs/features/code-explanation',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: '代码重构',
    description: '智能识别代码优化机会，提供自动重构建议，改进代码质量。',
    href: '/docs/features/refactoring',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    title: '协作功能',
    description: '团队成员可以实时协作编码，共享AI辅助功能，提高团队开发效率。',
    href: '/docs/features/collaboration',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

export default function FeaturesPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">核心功能</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          探索{AppConfig.APP_NAME}的核心功能，了解如何利用AI技术提升您的编码体验和开发效率。我们的工具融合了最先进的人工智能，让编程更加智能、高效、愉悦。
        </p>
      </div>

      {/* 功能网格 */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-t border-gray-200 pt-10 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="group relative">
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
              <div className="h-full w-full object-cover object-center flex items-center justify-center text-gray-500 p-8">
                <div className="w-16 h-16 text-blue-600">
                  {feature.icon}
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-900">
              <Link href={feature.href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {feature.title}
              </Link>
            </h3>
            <p className="mt-1 text-base text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* 为什么选择我们的AI功能 */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">为什么选择{AppConfig.APP_NAME}</h2>
        <p className="mt-2 text-lg text-gray-600">
          我们的AI功能与众不同，为您提供真正有价值的编码辅助：
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-gray-900">上下文理解</h3>
            <p className="mt-2 text-gray-600">
              我们的AI不仅理解您正在编写的代码，还能理解整个项目的结构和上下文，提供更加精准的建议。
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-gray-900">持续学习</h3>
            <p className="mt-2 text-gray-600">
              AI会根据您的编码风格和偏好不断学习和适应，随着使用时间的增加，提供越来越个性化的辅助。
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-gray-900">隐私保护</h3>
            <p className="mt-2 text-gray-600">
              我们重视您的代码隐私，所有的AI处理都可以选择在本地进行，确保您的知识产权受到保护。
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-gray-900">灵活定制</h3>
            <p className="mt-2 text-gray-600">
              每一项AI功能都可以根据您的需求进行精细调整，从辅助级别到触发方式，完全由您控制。
            </p>
          </div>
        </div>
      </div>
      
      {/* 进一步了解 */}
      <div className="mt-16 rounded-lg bg-blue-50 p-8">
        <h2 className="text-xl font-semibold text-gray-900">想了解更多？</h2>
        <p className="mt-2 text-gray-600">
          除了这些核心功能外，{AppConfig.APP_NAME}还提供了更多强大的工具和集成选项，帮助您构建更好的软件。
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <Link href="/docs/integrations" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
            查看集成选项
          </Link>
          <Link href="/docs/api" className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
            浏览API文档
          </Link>
        </div>
      </div>
    </div>
  );
} 