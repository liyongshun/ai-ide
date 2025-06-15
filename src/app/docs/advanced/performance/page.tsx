import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '性能优化 | AI IDE文档',
  description: '了解如何优化AI IDE的性能，提高在大型项目中的运行速度。',
};

export default function PerformancePage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">性能优化</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          了解如何优化AI IDE的性能，提升在大型项目和复杂代码库中的工作效率。
        </p>
      </div>
      
      {/* 系统要求与推荐配置 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">系统要求与推荐配置</h2>
        <p className="mt-2 text-base text-gray-600">
          AI IDE集成了先进的AI功能，在提供强大开发体验的同时也可能消耗较多系统资源，特别是在处理大型项目时。合适的硬件配置可以显著提高IDE的响应速度。
        </p>
        
        <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  配置级别
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  CPU
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  内存
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  存储
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  GPU
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900">
                  最低配置
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">
                  4核心
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">
                  8GB
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">
                  SSD 256GB
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">
                  不要求
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900">
                  推荐配置
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">
                  8核心
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">
                  16GB
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">
                  SSD 512GB
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">
                  集成显卡
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900">
                  高性能配置
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">
                  16核心
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">
                  32GB+
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">
                  SSD 1TB+
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">
                  独立显卡 8GB+
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
              <strong>提示：</strong> 对于本地运行AI模型的用户，独立显卡（如NVIDIA RTX系列）将显著提升性能。对于使用云端AI服务的用户，稳定的网络连接更为重要。
            </p>
          </div>
        </div>
      </div>

      {/* 内存使用优化 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">内存使用优化</h2>
        <p className="mt-2 text-base text-gray-600">
          内存是影响AI IDE性能的关键因素，以下策略可以帮助您优化内存使用：
        </p>
        
        <div className="mt-6 space-y-6">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="font-medium text-lg text-gray-900">项目工作区管理</h3>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-600">
              <li>
                <strong>分离工作区</strong> - 为不同项目创建独立的工作区，避免同时加载多个大型项目
              </li>
              <li>
                <strong>关闭未使用的工作区</strong> - 不活跃的项目应完全关闭，而不是最小化
              </li>
              <li>
                <strong>定期重启</strong> - 长时间使用后重启IDE可以释放累积的内存
              </li>
            </ul>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="font-medium text-lg text-gray-900">文件处理优化</h3>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-600">
              <li>
                <strong>限制打开的文件数量</strong> - 同时打开的文件过多会增加内存占用
              </li>
              <li>
                <strong>配置文件监视限制</strong> - 在设置中调整文件监视器的范围和深度
              </li>
              <li>
                <strong>排除大型二进制文件</strong> - 在<code className="px-1 py-0.5 text-xs rounded border border-gray-300 bg-gray-50">.gitignore</code>和IDE排除列表中添加大型二进制文件
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 rounded-lg bg-gray-50 p-4 text-sm">
          <p className="text-gray-700 mb-2 font-medium">示例配置文件：</p>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
{`// .ai-ide/config.json
{
  "files": {
    "watcherExclude": {
      "**/node_modules/**": true,
      "**/dist/**": true,
      "**/.git/objects/**": true,
      "**/.git/subtree-cache/**": true,
      "**/build/**": true,
      "**/*.{zip,gz,jpeg,jpg,png,mp4,mp3,svg,ico}": true
    },
    "exclude": [
      "node_modules",
      "dist",
      ".git",
      "build",
      "coverage"
    ]
  }
}`}
          </pre>
        </div>
      </div>

      {/* AI功能性能调优 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">AI功能性能调优</h2>
        <p className="mt-2 text-base text-gray-600">
          AI功能是IDE的核心，但也是资源消耗的主要来源。以下设置可以帮助平衡功能与性能：
        </p>
        
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">模型选择与配置</h3>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-600">
              <li>
                <strong>根据硬件选择模型</strong> - 低配置机器选择轻量级模型，高配置机器使用高级模型
              </li>
              <li>
                <strong>调整上下文窗口大小</strong> - 减小AI分析的代码上下文范围可降低内存使用
              </li>
              <li>
                <strong>配置模型缓存</strong> - 适当增加模型缓存可减少重复计算，但会占用更多内存
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">功能使用频率控制</h3>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-600">
              <li>
                <strong>按需启用AI功能</strong> - 只在需要时启用高级AI功能，如代码生成和深度分析
              </li>
              <li>
                <strong>配置触发延迟</strong> - 增加AI补全和建议的触发延迟，减少频繁计算
              </li>
              <li>
                <strong>使用命令式触发</strong> - 使用快捷键或命令手动触发AI功能，而非自动触发
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 rounded-lg bg-gray-50 p-4 text-sm">
          <p className="text-gray-700 mb-2 font-medium">AI性能优化配置示例：</p>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
{`// .ai-ide/config.json
{
  "ai": {
    "completion": {
      "model": "fast", // 可选: "fast", "standard", "advanced"
      "contextLines": 50, // 减少上下文行数可提高性能
      "delay": 500 // 增加延迟可减少频繁触发
    },
    "analysis": {
      "onSave": true, // 仅在保存时分析，而非实时分析
      "depth": "basic" // 可选: "basic", "medium", "deep"
    },
    "cache": {
      "maxSize": 100, // MB
      "ttl": 3600 // 缓存有效期(秒)
    }
  }
}`}
          </pre>
        </div>
      </div>

      {/* 文件索引与搜索优化 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">文件索引与搜索优化</h2>
        <p className="mt-2 text-base text-gray-600">
          高效的文件索引对于大型项目的性能至关重要。合理的索引配置可以显著提升搜索速度和减少资源消耗。
        </p>
        
        <div className="mt-6 space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-medium text-gray-900">1. 索引配置策略</h3>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-600">
              <li>
                <strong>排除不必要的目录</strong> - 将生成的文件、依赖项和临时文件排除在索引之外
              </li>
              <li>
                <strong>配置索引优先级</strong> - 为常用目录设置更高的索引优先级
              </li>
              <li>
                <strong>调整索引频率</strong> - 减少自动重新索引的频率，可在必要时手动触发
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900">2. 高效搜索技巧</h3>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-600">
              <li>
                <strong>使用精确搜索</strong> - 尽量使用文件名、符号名等精确搜索，而非全文搜索
              </li>
              <li>
                <strong>限制搜索范围</strong> - 在搜索时指定文件类型和目录，缩小搜索范围
              </li>
              <li>
                <strong>利用符号索引</strong> - 使用符号导航（如转到定义、查找引用）代替文本搜索
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 rounded-lg bg-gray-50 p-4 text-sm">
          <p className="text-gray-700 mb-2 font-medium">搜索优化配置示例：</p>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
{`// .ai-ide/config.json
{
  "search": {
    "exclude": {
      "**/node_modules": true,
      "**/bower_components": true,
      "**/*.min.*": true,
      "**/vendor": true,
      "**/dist": true
    },
    "maxResults": 1000,
    "indexing": {
      "priority": [
        "src/**/*.{js,ts,jsx,tsx}",
        "lib/**/*.{js,ts}"
      ],
      "delay": 1000,
      "autoRebuild": "onSave"
    }
  }
}`}
          </pre>
        </div>
      </div>

      {/* 大型项目特殊优化 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">大型项目特殊优化</h2>
        <p className="mt-2 text-base text-gray-600">
          对于特别大型的项目（超过100万行代码），需要采用更加专门的优化策略。
        </p>
        
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="font-medium text-lg text-gray-900">项目分割策略</h3>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-600">
              <li>
                <strong>模块化工作区</strong> - 将大型项目分割为多个独立工作区，按需打开
              </li>
              <li>
                <strong>使用工作区集合</strong> - 创建工作区集合，但只加载当前工作的部分
              </li>
              <li>
                <strong>按功能区分</strong> - 例如前端、后端、测试分别使用不同工作区
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="font-medium text-lg text-gray-900">专业模式配置</h3>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-600">
              <li>
                <strong>启用大型项目模式</strong> - 在设置中启用专为大型项目优化的模式
              </li>
              <li>
                <strong>懒加载功能</strong> - 配置AI功能仅在特定文件或目录中启用
              </li>
              <li>
                <strong>自定义缓存策略</strong> - 为大型项目配置更大的缓存空间
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 性能监控与调试 */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">性能监控与调试</h2>
        <p className="mt-2 text-base text-gray-600">
          持续监控AI IDE的性能状态，可以帮助您及时发现和解决性能问题。
        </p>
        
        <div className="mt-6 space-y-6">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="font-medium text-lg text-gray-900">内置性能工具</h3>
            <p className="mt-2 text-gray-600">
              AI IDE提供了内置的性能监控工具，可以帮助您分析和优化性能：
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-600">
              <li>
                <strong>资源使用监视器</strong> - 监控CPU、内存使用情况
              </li>
              <li>
                <strong>性能分析器</strong> - 分析AI功能的响应时间和资源消耗
              </li>
              <li>
                <strong>启动日志</strong> - 查看启动过程中各组件的加载时间
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 rounded-lg bg-gray-50 p-4">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-5 w-5 text-blue-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <p className="text-sm text-gray-700">
              <strong>提示：</strong> 您可以通过命令面板（按 <kbd className="px-1 py-0.5 text-xs rounded border border-gray-300 bg-gray-50">Ctrl</kbd>+<kbd className="px-1 py-0.5 text-xs rounded border border-gray-300 bg-gray-50">Shift</kbd>+<kbd className="px-1 py-0.5 text-xs rounded border border-gray-300 bg-gray-50">P</kbd>）并输入"显示性能信息"来访问性能监控工具。
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
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-5 w-5 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            <a href="/docs/api/ai-service" className="text-blue-600 hover:underline">
              AI服务API
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
} 