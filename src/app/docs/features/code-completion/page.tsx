import { Metadata } from 'next';
import { AppConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: `AI代码补全 | ${AppConfig.APP_NAME}文档`,
  description: `了解${AppConfig.APP_NAME}强大的代码补全功能，提高编码效率。`,
};

export default function CodeCompletionPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">AI代码补全</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          {AppConfig.APP_NAME}提供智能代码补全功能，基于先进的机器学习模型，能够理解您的代码意图，提供准确的补全建议，显著提高编码效率。
        </p>
      </div>

      {/* 主要功能介绍 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900">主要功能</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">全语言支持</h3>
            <p className="mt-2 text-gray-600">
              支持几乎所有主流编程语言，包括JavaScript、Python、Java、C++、Go等，无需额外配置。
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">上下文感知</h3>
            <p className="mt-2 text-gray-600">
              AI会分析您的代码上下文，包括变量、函数定义和导入，提供高度相关的补全建议。
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">项目感知</h3>
            <p className="mt-2 text-gray-600">
              AI会理解您的整个项目结构，包括自定义类和函数，提供更精准的代码补全。
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21a48.309 48.309 0 01-8.135-1.086c-1.717-.294-2.298-2.38-1.067-3.612L5 14.5" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">多行补全</h3>
            <p className="mt-2 text-gray-600">
              支持多行代码补全，能够根据上下文完成整个函数或代码块，而不仅仅是单个语句。
            </p>
          </div>
        </div>
      </div>

      {/* 使用方法 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">如何使用</h2>
        <p className="mt-2 text-base text-gray-600">
          AI代码补全功能集成在编辑器中，在您编码时自动工作。以下是基本使用方法：
        </p>
        
        <div className="mt-6 space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-medium text-gray-900">1. 内联代码补全</h3>
            <p className="mt-2 text-gray-600">
              当您开始输入代码时，系统会自动显示半透明的补全建议。按 <kbd className="px-1 py-0.5 text-xs rounded border border-gray-300 bg-gray-50">Tab</kbd> 键接受建议，按 <kbd className="px-1 py-0.5 text-xs rounded border border-gray-300 bg-gray-50">Esc</kbd> 键忽略建议。
            </p>
            <div className="mt-4 rounded-lg bg-gray-100 p-4 text-center text-gray-500">
              这里将显示代码补全界面截图
            </div>
          </div>
          
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-medium text-gray-900">2. 手动触发补全</h3>
            <p className="mt-2 text-gray-600">
              您可以随时按 <kbd className="px-1 py-0.5 text-xs rounded border border-gray-300 bg-gray-50">Ctrl</kbd>+<kbd className="px-1 py-0.5 text-xs rounded border border-gray-300 bg-gray-50">Space</kbd> 手动触发代码补全功能。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900">3. 通过注释提示</h3>
            <p className="mt-2 text-gray-600">
              您可以通过添加注释来引导AI生成更精确的补全：
            </p>
            <div className="mt-4 rounded-lg bg-gray-50 p-4">
              <pre className="text-sm text-gray-700">
{`// 创建一个用户注册函数
function register`}
              </pre>
            </div>
            <p className="mt-2 text-gray-600">
              AI将理解您的注释并提供相关的用户注册函数实现。
            </p>
          </div>
        </div>
      </div>

      {/* 配置与自定义 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">配置与自定义</h2>
        <p className="mt-2 text-base text-gray-600">
          您可以根据个人喜好自定义代码补全功能：
        </p>
        
        <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  设置项
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  说明
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  启用/禁用
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  可以完全开启或关闭AI代码补全功能
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  补全延迟
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  调整触发代码补全的延迟时间
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  补全范围
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  选择补全范围：行内、多行或全功能
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  AI模型选择
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  可以选择不同性能级别的AI模型
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 rounded-lg bg-gray-50 p-4">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 flex-shrink-0 text-blue-500">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
            </svg>
            <p className="ml-2 text-sm text-gray-700">
              <strong>提示：</strong> 您可以在设置页面的"编辑器 &gt; AI代码补全"部分找到所有配置选项。
            </p>
          </div>
        </div>
      </div>

      {/* 高级技巧 */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">高级技巧</h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <h3 className="font-medium text-gray-900">使用自然语言注释</h3>
            <p className="mt-1 text-sm text-gray-600">
              您可以使用自然语言注释来指导AI如何补全代码。例如："// 创建一个处理表单提交的函数，验证输入并发送API请求"。
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <h3 className="font-medium text-gray-900">隐藏补全建议</h3>
            <p className="mt-1 text-sm text-gray-600">
              在特定文件或代码块中，您可以使用特殊注释禁用代码补全：<code className="rounded bg-gray-100 px-1 py-0.5 text-sm">// @ai-completion-disable</code>
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <h3 className="font-medium text-gray-900">项目特定补全</h3>
            <p className="mt-1 text-sm text-gray-600">
              通过在项目根目录创建<code className="rounded bg-gray-100 px-1 py-0.5 text-sm">.airc</code>配置文件，可以为特定项目设置AI补全行为。
            </p>
          </div>
        </div>
      </div>

      {/* 相关文档链接 */}
      <div className="mt-12 rounded-lg bg-gray-50 p-6">
        <h3 className="text-lg font-medium text-gray-900">相关文档</h3>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-5 w-5 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            <a href="/docs/features/code-generation" className="text-blue-600 hover:underline">
              AI代码生成
            </a>
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-5 w-5 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            <a href="/docs/advanced/configuration" className="text-blue-600 hover:underline">
              高级配置选项
            </a>
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-5 w-5 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            <a href="/docs/advanced/custom-models" className="text-blue-600 hover:underline">
              自定义AI模型
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
} 