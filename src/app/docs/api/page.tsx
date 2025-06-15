import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'API参考 | AI IDE文档',
  description: 'AI IDE的API参考文档，包括AI服务API、插件开发API和主题定制API。',
};

const apis = [
  {
    title: 'AI服务API',
    description: '与AI IDE的核心AI服务交互的API，用于访问代码补全、生成和分析功能。',
    href: '/docs/api/ai-service',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: '插件开发API',
    description: '用于开发AI IDE插件的API，包括扩展点、事件系统和UI组件。',
    href: '/docs/api/plugin-development',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
      </svg>
    ),
  },
  {
    title: '主题定制API',
    description: '用于创建和自定义IDE主题的API，控制界面外观和色彩方案。',
    href: '/docs/api/theme-customization',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
      </svg>
    ),
  },
];

export default function ApiPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">API参考</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          AI IDE提供了一系列强大的API，允许开发者扩展IDE功能、与AI引擎交互，以及自定义用户界面。本文档提供了所有可用API的详细参考。
        </p>
      </div>

      <div className="rounded-lg bg-yellow-50 p-4 mb-8">
        <div className="flex">
          <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">API文档建设中</h3>
            <p className="mt-2 text-sm text-yellow-700">
              我们的API文档正在持续完善中，目前提供基本参考信息。完整的API文档将陆续发布。
            </p>
          </div>
        </div>
      </div>
      
      {/* API分类列表 */}
      <div className="space-y-12">
        {apis.map((api) => (
          <div key={api.title} className="border-b border-gray-200 pb-8">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600 md:mr-6">
                {api.icon}
              </div>
              <div className="mt-4 md:mt-0">
                <h2 className="text-2xl font-bold text-gray-900">
                  <Link href={api.href}>
                    {api.title}
                  </Link>
                </h2>
              </div>
            </div>
            <p className="mt-4 text-lg text-gray-600">{api.description}</p>
            <div className="mt-4">
              <Link href={api.href} className="text-blue-600 hover:text-blue-800 font-medium">
                查看详细文档 <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* API版本信息 */}
      <div className="mt-12 rounded-lg bg-gray-50 p-6">
        <h2 className="text-lg font-semibold text-gray-900">API版本与兼容性</h2>
        <p className="mt-2 text-gray-600">
          AI IDE的API遵循语义化版本控制原则。我们会尽量保持向后兼容性，重大变更会提前通知。
        </p>
        <div className="mt-4 overflow-hidden rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  API版本
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  IDE版本
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  状态
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  v2.0
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  3.0+
                </td>
                <td className="px-6 py-4 text-sm text-green-600">
                  当前稳定版
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  v1.0
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  2.0+
                </td>
                <td className="px-6 py-4 text-sm text-yellow-600">
                  已弃用
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 开发者社区 */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-gray-900">加入开发者社区</h2>
        <p className="mt-2 text-gray-600">
          有API相关问题或反馈？加入我们的开发者社区获取支持。
        </p>
        <div className="mt-6 flex space-x-4">
          <a href="#" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
            开发者论坛
          </a>
          <a href="#" className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
            GitHub仓库
          </a>
        </div>
      </div>
    </div>
  );
} 