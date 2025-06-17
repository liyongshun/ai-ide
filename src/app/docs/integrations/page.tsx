import Link from 'next/link';
import { Metadata } from 'next';
import { AppConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: `集成与扩展 | ${AppConfig.APP_NAME}文档`,
  description: `探索${AppConfig.APP_NAME}的集成和扩展能力，包括插件系统、版本控制和第三方工具集成。`,
};

const integrations = [
  {
    title: '插件系统',
    description: `了解如何通过插件扩展${AppConfig.APP_NAME}的功能，以及如何开发自己的插件。`,
    href: '/docs/integrations/plugin-system',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
      </svg>
    ),
  },
  {
    title: '版本控制',
    description: `${AppConfig.APP_NAME}与Git等版本控制系统的深度集成，支持智能提交信息生成和冲突解决。`,
    href: '/docs/integrations/version-control',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
      </svg>
    ),
  },
  {
    title: '第三方工具集成',
    description: '与常用开发工具的无缝集成，包括测试框架、CI/CD系统和云服务。',
    href: '/docs/integrations/third-party',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
];

export default function IntegrationsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">集成与扩展</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          探索{AppConfig.APP_NAME}的集成能力和扩展性，了解如何将其与您已有的工具和流程无缝衔接，以及如何通过插件系统扩展功能。
        </p>
      </div>

      {/* 集成列表 */}
      <div className="mt-10 space-y-16">
        {integrations.map((integration) => (
          <div key={integration.title} className="flex flex-col sm:flex-row">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600 sm:mr-8">
              {integration.icon}
            </div>
            <div className="mt-4 sm:mt-0">
              <h2 className="text-2xl font-bold text-gray-900">
                <Link href={integration.href} className="hover:text-blue-600">
                  {integration.title}
                </Link>
              </h2>
              <p className="mt-2 text-lg text-gray-600">{integration.description}</p>
              <div className="mt-4">
                <Link href={integration.href} className="text-blue-600 hover:text-blue-800 font-medium">
                  了解更多 <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* API 相关提示 */}
      <div className="mt-16 rounded-lg bg-gray-50 p-8">
        <h2 className="text-xl font-bold text-gray-900">开发者资源</h2>
        <p className="mt-2 text-gray-600">
          如果您是开发者并希望为{AppConfig.APP_NAME}开发插件或与其集成，请查看我们的API文档。
        </p>
        <div className="mt-6">
          <Link href="/docs/api" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
            浏览API文档
          </Link>
        </div>
      </div>

      {/* 社区与支持 */}
      <div className="mt-12 border-t border-gray-200 pt-12">
        <h2 className="text-xl font-bold text-gray-900">社区与支持</h2>
        <p className="mt-2 text-gray-600">
          加入我们的开发者社区，分享您的集成经验和插件项目。
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-base font-semibold text-gray-900">开发者论坛</h3>
            <p className="mt-2 text-sm text-gray-600">
              与其他开发者讨论集成问题和方案。
            </p>
            <div className="mt-4">
              <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">访问论坛 <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-base font-semibold text-gray-900">插件市场</h3>
            <p className="mt-2 text-sm text-gray-600">
              浏览和发布{AppConfig.APP_NAME}插件。
            </p>
            <div className="mt-4">
              <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">访问插件市场 <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 