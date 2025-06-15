import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI服务API | AI IDE文档',
  description: '了解如何通过AI服务API与AI IDE的核心AI功能交互，包括代码补全、生成和分析。',
};

export default function AiServicePage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">AI服务API</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          AI服务API允许您直接与AI IDE的核心AI引擎交互，访问代码补全、代码生成、代码解释和其他AI功能。
        </p>
      </div>

      {/* 主要功能介绍 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900">主要功能</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">代码补全API</h3>
            <p className="mt-2 text-gray-600">
              获取上下文相关的代码补全建议，支持多种编程语言和自定义参数设置。
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">代码生成API</h3>
            <p className="mt-2 text-gray-600">
              根据自然语言描述生成代码，支持各种编程语言和框架的定制化代码生成。
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">代码解释API</h3>
            <p className="mt-2 text-gray-600">
              获取代码的自然语言解释，帮助理解复杂代码逻辑和实现细节。
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">代码分析API</h3>
            <p className="mt-2 text-gray-600">
              获取代码质量和性能分析，识别潜在问题并提供优化建议。
            </p>
          </div>
        </div>
      </div>

      {/* 认证方式 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">认证</h2>
        <p className="mt-2 text-base text-gray-600">
          所有API请求都需要进行认证。AI IDE支持以下认证方式：
        </p>
        
        <div className="mt-6 space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-medium text-gray-900">1. API密钥认证</h3>
            <p className="mt-2 text-gray-600">
              通过HTTP头部传递API密钥，这是最常用的认证方式。在请求头中添加 <code className="px-1 py-0.5 text-xs rounded border border-gray-300 bg-gray-50">Authorization: Bearer YOUR_API_KEY</code> 即可。
            </p>
            <div className="mt-4 rounded-lg bg-gray-50 p-4 text-sm">
              <pre className="text-gray-700">
{`// 示例请求
const response = await fetch('https://api.ai-ide.com/v2/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    code: "function calculateSum(a, b) {\\n  ",
    language: "javascript",
    maxTokens: 50
  })
});`}
              </pre>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900">2. OAuth 2.0认证</h3>
            <p className="mt-2 text-gray-600">
              用于第三方应用集成，支持标准的OAuth 2.0授权流程，包括授权码流程和客户端凭证流程。
            </p>
            <div className="mt-4 flex">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 flex-shrink-0 text-blue-500">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
              </svg>
              <p className="ml-2 text-sm text-gray-700">
                <strong>提示：</strong> 详细的OAuth集成指南请参阅<a href="/docs/api/authentication" className="text-blue-600 hover:underline">认证详细文档</a>。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 代码补全API */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">代码补全API</h2>
        <p className="mt-2 text-base text-gray-600">
          代码补全API允许您获取基于当前代码上下文的智能代码补全建议。
        </p>
        
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900">请求格式</h3>
            <div className="mt-2 rounded-md bg-gray-800 px-4 py-2 text-white">
              <code>POST /v2/completions</code>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900">请求参数</h3>
            <div className="mt-2 overflow-hidden rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      参数名
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      类型
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      必填
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      说明
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">
                      code
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      string
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      是
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      当前代码上下文
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">
                      language
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      string
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      是
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      编程语言
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">
                      maxTokens
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      integer
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      否
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      最大生成token数
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">
                      temperature
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      float
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      否
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      生成多样性，0-1
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900">响应格式</h3>
            <div className="mt-2 rounded-lg bg-gray-50 p-4 text-sm">
              <pre className="text-gray-700">
{`{
  "id": "comp-123456",
  "completions": [
    {
      "text": "return a + b;\\n}",
      "score": 0.95
    },
    {
      "text": "const sum = a + b;\\n  return sum;\\n}",
      "score": 0.85
    }
  ],
  "language": "javascript"
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* 使用限制 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">使用限制</h2>
        <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  账户类型
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  每分钟请求数
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  每天请求数
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  免费账户
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  20
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  1,000
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  专业账户
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  60
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  10,000
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  企业账户
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  无限制
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  无限制
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
              <strong>提示：</strong> 如需更高的配额，请联系我们的<a href="/support" className="text-blue-600 hover:underline">销售团队</a>了解企业定制方案。
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
            <a href="/docs/api/authentication" className="text-blue-600 hover:underline">
              详细认证指南
            </a>
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-5 w-5 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            <a href="/docs/api/error-handling" className="text-blue-600 hover:underline">
              错误处理指南
            </a>
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-5 w-5 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            <a href="/docs/api/examples" className="text-blue-600 hover:underline">
              API使用示例
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
} 