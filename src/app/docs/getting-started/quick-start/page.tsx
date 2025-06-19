import { Metadata } from 'next';
import { AppConfig } from '@/lib/config';
import Link from "next/link";

export const metadata: Metadata = {
  title: `快速开始 | ${AppConfig.APP_NAME}文档`,
  description: `通过简单的步骤快速上手${AppConfig.APP_NAME}，包括初始设置、创建项目等基本操作。`,
};

export default function QuickStartPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">快速开始</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          本指南将帮助您快速开始使用{AppConfig.APP_NAME}，从创建项目到体验主要功能，只需几个简单步骤。
        </p>
      </div>

      {/* 快速入门步骤 */}
      <div className="space-y-12">
        <div className="border-b border-gray-200 pb-8">
          <h2 className="text-xl font-semibold text-gray-900">第1步：启动{AppConfig.APP_NAME}</h2>
          <p className="mt-2 text-base text-gray-600">
            完成安装后，从应用程序菜单或快捷方式启动{AppConfig.APP_NAME}。首次启动时，系统将引导您完成初始化设置，包括选择主题、设置快捷键偏好等。
          </p>
          <div className="mt-4 rounded-lg bg-gray-50 p-4">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-blue-500">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
              </svg>
              <p className="ml-2 text-sm text-gray-700">
                <strong>提示：</strong> 您可以稍后在设置菜单中随时调整这些偏好。
              </p>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-200 pb-8">
          <h2 className="text-xl font-semibold text-gray-900">第2步：创建或打开项目</h2>
          <p className="mt-2 text-base text-gray-600">
            在欢迎页面上，您可以选择创建新项目或打开现有项目。
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-600">
            <li>创建新项目：点击&quot;新建项目&quot;，选择项目类型和模板，然后指定项目名称和位置。</li>
            <li>打开现有项目：点击&quot;打开项目&quot;，然后浏览到项目文件夹。</li>
            <li>从版本控制克隆：点击&quot;从Git克隆&quot;，输入仓库URL。</li>
          </ul>
        </div>

        <div className="border-b border-gray-200 pb-8">
          <h2 className="text-xl font-semibold text-gray-900">第3步：体验AI编码辅助功能</h2>
          <p className="mt-2 text-base text-gray-600">
            {AppConfig.APP_NAME}包含多种强大的AI辅助功能，可以显著提高您的编码效率：
          </p>
          <ul className="mt-4 space-y-4">
            <li className="flex">
              <div className="flex-shrink-0 mr-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">1</div>
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-900">代码补全</h3>
                <p className="mt-1 text-sm text-gray-600">
                  在编辑器中开始键入代码，AI将自动提供上下文相关的代码补全建议。按Tab键接受建议。
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="flex-shrink-0 mr-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">2</div>
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-900">内联对话</h3>
                <p className="mt-1 text-sm text-gray-600">
                  选择一段代码，右键单击并选择&quot;内联对话&quot;选项，可以在编辑器内直接与AI进行交流，询问代码相关问题或获取改进建议。
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="flex-shrink-0 mr-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">3</div>
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-900">代码生成</h3>
                <p className="mt-1 text-sm text-gray-600">
                  使用快捷键 <kbd className="px-1 py-0.5 text-xs rounded border border-gray-300 bg-gray-50">Ctrl</kbd>+<kbd className="px-1 py-0.5 text-xs rounded border border-gray-300 bg-gray-50">Space</kbd> 打开AI命令面板，输入自然语言描述生成代码段。
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">第4步：配置AI功能</h2>
          <p className="mt-2 text-base text-gray-600">
            您可以根据自己的喜好自定义AI功能：
          </p>
          <ol className="mt-4 list-decimal pl-5 space-y-2 text-gray-600">
            <li>打开设置面板（<kbd className="px-1 py-0.5 text-xs rounded border border-gray-300 bg-gray-50">Ctrl</kbd>+<kbd className="px-1 py-0.5 text-xs rounded border border-gray-300 bg-gray-50">,</kbd>或从菜单栏选择&quot;文件 &gt; 设置&quot;）</li>
            <li>在左侧导航中找到&quot;AI助手&quot;选项</li>
            <li>在此处您可以调整AI模型、补全行为、提示快捷键等</li>
          </ol>

          <div className="mt-6 rounded-lg bg-blue-50 p-4">
            <div className="flex">
              <svg className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
              </svg>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">下一步</h3>
                <p className="mt-2 text-sm text-blue-700">
                  现在您已经了解了基本使用方法，建议继续浏览<Link href="/docs/features" className="font-medium underline">核心功能</Link>文档，深入了解{AppConfig.APP_NAME}的强大功能。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 