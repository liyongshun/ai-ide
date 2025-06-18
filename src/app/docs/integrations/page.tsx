import Link from 'next/link';
import { Metadata } from 'next';
import { AppConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: `集成与扩展 | ${AppConfig.APP_NAME}文档`,
  description: `探索${AppConfig.APP_NAME}与其他开发工具的集成能力，以及如何通过插件扩展功能。`,
};

const integrationTopics = [
  {
    title: '版本控制集成',
    description: `了解${AppConfig.APP_NAME}如何与Git等版本控制系统深度集成，提供无缝的代码管理体验。`,
    href: '/docs/integrations/version-control',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
  },
  {
    title: '插件系统',
    description: `探索${AppConfig.APP_NAME}强大的插件系统，了解如何安装、配置和管理插件来扩展IDE功能。`,
    href: '/docs/integrations/plugin-system',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
      </svg>
    ),
  },
  {
    title: '第三方工具集成',
    description: `查看${AppConfig.APP_NAME}如何与各种第三方开发工具和服务集成，包括CI/CD平台、云服务和项目管理工具。`,
    href: '/docs/integrations/third-party',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">集成与扩展</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          探索{AppConfig.APP_NAME}与其他开发工具的集成能力，以及如何通过插件扩展功能，打造完整的开发生态系统。
        </p>
      </div>

      <div className="rounded-lg bg-blue-50 p-4 mb-8">
        <div className="flex">
          <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
          </svg>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">无缝工作流</h3>
            <p className="mt-2 text-sm text-blue-700">
              {AppConfig.APP_NAME}的集成功能旨在提供无缝的开发体验，让您可以在一个环境中使用所有需要的工具，减少上下文切换，提高工作效率。
            </p>
          </div>
        </div>
      </div>

      {/* 集成主题列表 */}
      <div className="mt-12 space-y-16">
        {integrationTopics.map((topic) => (
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

      {/* 集成优势 */}
      <div className="mt-16 rounded-lg bg-gray-50 p-8">
        <h2 className="text-xl font-bold text-gray-900">集成优势</h2>
        <p className="mt-2 text-base text-gray-600">
          {AppConfig.APP_NAME}的集成功能为您的开发工作流带来以下优势：
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <h3 className="font-medium text-gray-900">统一开发环境</h3>
            <p className="mt-2 text-sm text-gray-600">
              在一个界面中访问所有开发工具和资源，减少在不同应用间切换的时间和精力消耗。
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <h3 className="font-medium text-gray-900">智能上下文感知</h3>
            <p className="mt-2 text-sm text-gray-600">
              集成工具可以访问当前项目上下文，提供更智能、更相关的功能和建议。
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <h3 className="font-medium text-gray-900">自动化工作流</h3>
            <p className="mt-2 text-sm text-gray-600">
              通过集成功能自动化常见任务，如代码提交、测试运行和部署，减少手动操作步骤。
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <h3 className="font-medium text-gray-900">可扩展性</h3>
            <p className="mt-2 text-sm text-gray-600">
              通过插件系统和API，可以根据特定需求定制和扩展IDE功能，适应不同项目和团队的工作方式。
            </p>
          </div>
        </div>
      </div>

      {/* 集成案例 */}
      <div className="mt-12 border-t border-gray-200 pt-10">
        <h2 className="text-xl font-bold text-gray-900">集成案例</h2>
        <p className="mt-2 text-gray-600">
          了解其他团队如何利用{AppConfig.APP_NAME}的集成功能提升开发效率：
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900">全栈Web开发团队</h3>
            <p className="mt-2 text-sm text-gray-600">
              通过集成GitHub、Jest测试框架和AWS部署工具，实现了从代码编写到测试和部署的完整自动化流程，将发布周期缩短了40%。
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900">移动应用开发团队</h3>
            <p className="mt-2 text-sm text-gray-600">
              利用自定义插件集成Firebase和App Store Connect，简化了应用测试和发布流程，同时通过Jira集成实现了任务和代码变更的自动关联。
            </p>
          </div>
        </div>
      </div>

      {/* 开始使用 */}
      <div className="mt-12 rounded-lg bg-blue-50 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900">准备好开始集成了吗？</h3>
            <p className="mt-2 text-sm text-gray-600">
              浏览我们的集成文档，了解如何将{AppConfig.APP_NAME}与您常用的开发工具连接起来。
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link 
              href="/docs/integrations/getting-started" 
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
            >
              集成入门指南
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 