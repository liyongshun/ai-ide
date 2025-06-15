import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '进阶使用 | AI IDE文档',
  description: '深入了解AI IDE的高级功能和配置选项，满足专业开发需求。',
};

const advancedTopics = [
  {
    title: '配置文件',
    description: '详细了解AI IDE的配置选项，自定义IDE行为和功能。',
    href: '/docs/advanced/configuration',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: '性能优化',
    description: '了解如何优化AI IDE的性能，提升在大型项目和复杂代码库中的工作效率。',
    href: '/docs/advanced/performance',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: '自定义AI模型',
    description: '学习如何配置和使用自定义AI模型，根据特定项目需求调整AI行为。',
    href: '/docs/advanced/custom-models',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
];

export default function AdvancedPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">进阶使用</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          深入探索AI IDE的高级功能和配置选项，充分发挥AI辅助编程的潜力，满足专业开发需求。
        </p>
      </div>

      <div className="rounded-lg bg-yellow-50 p-4 mb-8">
        <div className="flex">
          <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">高级功能</h3>
            <p className="mt-2 text-sm text-yellow-700">
              这些高级文档面向有经验的用户，已经了解AI IDE的基本功能。如果您是新用户，建议先阅读入门指南。
            </p>
          </div>
        </div>
      </div>

      {/* 高级主题列表 */}
      <div className="mt-12 space-y-16">
        {advancedTopics.map((topic) => (
          <div key={topic.title} className="flex flex-col sm:flex-row">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600 sm:mr-8">
              {topic.icon}
            </div>
            <div className="mt-4 sm:mt-0">
              <h2 className="text-2xl font-bold text-gray-900">
                <Link href={topic.href} className="hover:text-blue-600">
                  {topic.title}
                </Link>
              </h2>
              <p className="mt-2 text-lg text-gray-600">{topic.description}</p>
              <div className="mt-4">
                <Link href={topic.href} className="text-blue-600 hover:text-blue-800 font-medium">
                  了解更多 <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 专家小贴士 */}
      <div className="mt-16 rounded-lg bg-blue-50 p-8">
        <h2 className="text-xl font-bold text-gray-900">专家小贴士</h2>
        <p className="mt-2 text-base text-gray-600">
          以下是一些来自高级用户的实用技巧，帮助您更有效地使用AI IDE：
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <h3 className="font-medium text-gray-900">利用自定义提示</h3>
            <p className="mt-2 text-sm text-gray-600">
              创建特定领域的自定义提示模板，提高AI代码生成的准确性和相关性。
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <h3 className="font-medium text-gray-900">使用项目级配置</h3>
            <p className="mt-2 text-sm text-gray-600">
              为不同项目创建专门的配置文件，自动适应各种编码风格和框架要求。
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <h3 className="font-medium text-gray-900">调整AI积极性</h3>
            <p className="mt-2 text-sm text-gray-600">
              根据任务复杂度调整AI的积极程度，在探索性编码和精确实现之间找到平衡。
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <h3 className="font-medium text-gray-900">创建代码片段库</h3>
            <p className="mt-2 text-sm text-gray-600">
              将常用的代码模式保存为片段，让AI学习并在相似场景中复用高质量代码。
            </p>
          </div>
        </div>
      </div>

      {/* 进阶教程 */}
      <div className="mt-12 border-t border-gray-200 pt-10">
        <h2 className="text-xl font-bold text-gray-900">进阶教程</h2>
        <p className="mt-2 text-gray-600">
          深入学习如何充分利用AI IDE的高级功能：
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <a href="#" className="rounded-md border border-gray-200 p-4 hover:bg-gray-50">
            <h3 className="font-semibold text-gray-900">构建自定义AI工作流</h3>
            <p className="mt-1 text-sm text-gray-600">
              学习如何创建完全定制化的AI辅助开发工作流，适应团队和项目需求。
            </p>
          </a>
          <a href="#" className="rounded-md border border-gray-200 p-4 hover:bg-gray-50">
            <h3 className="font-semibold text-gray-900">AI IDE和CI/CD集成最佳实践</h3>
            <p className="mt-1 text-sm text-gray-600">
              将AI IDE与持续集成和部署流程无缝集成，实现全自动化开发流程。
            </p>
          </a>
        </div>
      </div>
    </div>
  );
} 