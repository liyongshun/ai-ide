import Link from 'next/link';
import { Metadata } from 'next';
import { AppConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: `API参考 | ${AppConfig.APP_NAME}文档`,
  description: `${AppConfig.APP_NAME}的API参考文档，包括AI服务、插件开发、主题定制等接口说明。`,
};

const apiTopics = [
  {
    title: 'AI服务API',
    description: `了解如何通过API与${AppConfig.APP_NAME}的AI功能进行交互，包括代码生成、补全和解释等服务。`,
    href: '/docs/api/ai-service',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: '插件开发API',
    description: `开发者指南：如何使用${AppConfig.APP_NAME}的插件API创建自定义功能扩展。`,
    href: '/docs/api/plugin-development',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
  },
  {
    title: '主题定制API',
    description: `学习如何使用主题API自定义${AppConfig.APP_NAME}的外观和用户界面。`,
    href: '/docs/api/theme-customization',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
];

export default function ApiPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">API参考</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          全面的API文档，帮助开发者与{AppConfig.APP_NAME}集成，扩展功能，或自定义行为。
        </p>
      </div>

      <div className="rounded-lg bg-blue-50 p-4 mb-8">
        <div className="flex">
          <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
          </svg>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">开发者资源</h3>
            <p className="mt-2 text-sm text-blue-700">
              我们的API遵循RESTful设计原则，使用JSON格式进行数据交换。所有API端点都需要身份验证，请确保在开始前获取API密钥。
            </p>
          </div>
        </div>
      </div>

      {/* API主题列表 */}
      <div className="mt-12 space-y-16">
        {apiTopics.map((topic) => (
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
                  查看文档 <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* API使用指南 */}
      <div className="mt-16 rounded-lg bg-gray-50 p-8">
        <h2 className="text-xl font-bold text-gray-900">API使用指南</h2>
        <p className="mt-2 text-base text-gray-600">
          在开始使用{AppConfig.APP_NAME}的API之前，请了解以下基本信息：
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <h3 className="font-medium text-gray-900">身份验证</h3>
            <p className="mt-2 text-sm text-gray-600">
              所有API请求都需要通过Bearer令牌进行身份验证。您可以在账户设置中生成API密钥。
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <h3 className="font-medium text-gray-900">速率限制</h3>
            <p className="mt-2 text-sm text-gray-600">
              免费账户每分钟限制10次请求，专业版每分钟限制60次请求，企业版可根据需求调整限制。
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <h3 className="font-medium text-gray-900">响应格式</h3>
            <p className="mt-2 text-sm text-gray-600">
              所有API响应均为JSON格式，包含状态码、数据和可能的错误信息。
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <h3 className="font-medium text-gray-900">SDK支持</h3>
            <p className="mt-2 text-sm text-gray-600">
              我们提供多种语言的SDK，包括JavaScript、Python、Java和Go，简化API集成过程。
            </p>
          </div>
        </div>
      </div>

      {/* API示例 */}
      <div className="mt-12 border-t border-gray-200 pt-10">
        <h2 className="text-xl font-bold text-gray-900">API示例</h2>
        <p className="mt-2 text-gray-600">
          以下是一些常见API用例的简单示例：
        </p>
        <div className="mt-6 overflow-hidden rounded-lg bg-gray-900 text-white">
          <div className="px-4 py-2 bg-gray-800 text-xs font-semibold">代码生成API示例</div>
          <pre className="p-4 overflow-auto text-sm">
            <code>{`// 使用JavaScript SDK调用代码生成API
import { AiIdeClient } from '@ai-ide/sdk';

const client = new AiIdeClient({
  apiKey: 'YOUR_API_KEY'
});

async function generateCode() {
  const response = await client.generateCode({
    prompt: '创建一个React计数器组件',
    language: 'javascript',
    framework: 'react'
  });
  
  console.log(response.code);
}

generateCode();`}</code>
          </pre>
        </div>
      </div>

      {/* 获取帮助 */}
      <div className="mt-12 rounded-lg bg-gray-50 p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-gray-900">需要更多帮助？</h3>
            <p className="mt-2 text-sm text-gray-600">
              如果您在使用API过程中遇到任何问题，或需要更多示例和指导，请查看我们的开发者论坛或联系技术支持团队。
            </p>
            <div className="mt-4">
              <Link href="/docs/api/examples" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                查看更多API示例 →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 