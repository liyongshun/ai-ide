import { Metadata } from 'next';
import { AppConfig } from '@/lib/config';
import Link from "next/link";

export const metadata: Metadata = {
  title: `安装指南 | ${AppConfig.APP_NAME}文档`,
  description: `全面的${AppConfig.APP_NAME}安装指南，包括不同操作系统的安装步骤和系统要求。`,
};

export default function InstallationPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">安装指南</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          本页面将指导您在不同操作系统上安装{AppConfig.APP_NAME}，并提供系统要求和安装后配置的相关信息。
        </p>
      </div>

      {/* 系统要求 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900">系统要求</h2>
        <p className="mt-2 text-base text-gray-600">
          在安装{AppConfig.APP_NAME}之前，请确保您的系统满足以下最低要求：
        </p>
        
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">处理器</h3>
            <p className="mt-2 text-gray-600">
              多核处理器，2.0GHz或更高
            </p>
            <p className="mt-1 text-sm text-gray-500">
              推荐：4核或更多
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">内存</h3>
            <p className="mt-2 text-gray-600">
              最低4GB RAM
            </p>
            <p className="mt-1 text-sm text-gray-500">
              推荐：8GB或更多
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">存储</h3>
            <p className="mt-2 text-gray-600">
              至少1GB可用空间
            </p>
            <p className="mt-1 text-sm text-gray-500">
              推荐：SSD存储
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-gray-50 p-4">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 flex-shrink-0 text-blue-500">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
            </svg>
            <p className="ml-2 text-sm text-gray-700">
              <strong>注意：</strong> AI功能可能需要更高的系统配置以获得最佳性能。
            </p>
          </div>
        </div>
      </div>

      {/* 安装步骤 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900">安装步骤</h2>
        <p className="mt-2 text-base text-gray-600">
          请根据您的操作系统选择相应的安装方式：
        </p>
        
        <div className="mt-6 space-y-6">
          {/* Windows安装 - 置灰 */}
          <div className="rounded-lg border border-gray-300 bg-gray-100 p-6 opacity-70">
            <div className="flex items-center">
              <h3 className="text-lg font-medium text-gray-500">Windows系统</h3>
              <span className="ml-2 rounded-full bg-gray-300 px-2 py-0.5 text-xs font-medium text-gray-700">
                暂不可用
              </span>
            </div>
            <ol className="mt-4 list-decimal pl-5 space-y-2 text-gray-500">
              <li>从<a href="#" className="text-gray-500 cursor-not-allowed">官方网站</a>下载最新的Windows安装包（.exe文件）</li>
              <li>运行下载的安装文件，根据安装向导进行操作</li>
              <li>在安装过程中选择您的首选设置和安装位置</li>
              <li>安装完成后，从开始菜单或桌面快捷方式启动{AppConfig.APP_NAME}</li>
            </ol>
            <div className="mt-4 rounded-lg bg-gray-200 p-4">
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="ml-2 text-sm text-gray-500">
                  <strong>提示：</strong> 您也可以使用Windows包管理器安装：<code className="bg-gray-200 px-1 py-0.5 rounded text-sm">winget install aiide</code>
                </p>
              </div>
            </div>
          </div>

          {/* Linux安装 */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-medium text-gray-900">Linux系统</h3>
            <ol className="mt-4 list-decimal pl-5 space-y-2 text-gray-600">
              <li>从<a href="#" className="text-blue-600 hover:text-blue-800">官方网站</a>下载适合您发行版的安装包（.deb、.rpm或AppImage）</li>
              <li>对于.deb包（Ubuntu/Debian）：
                <pre className="mt-2 bg-gray-50 p-2 rounded overflow-x-auto text-sm">
                  sudo dpkg -i aiide_x.x.x_amd64.deb
                </pre>
              </li>
              <li>对于.rpm包（Fedora/RHEL）：
                <pre className="mt-2 bg-gray-50 p-2 rounded overflow-x-auto text-sm">
                  sudo rpm -i aiide-x.x.x.rpm
                </pre>
              </li>
              <li>对于AppImage：
                <pre className="mt-2 bg-gray-50 p-2 rounded overflow-x-auto text-sm">
                  chmod +x {AppConfig.APP_NAME.replace(/ /g, '_')}-x.x.x.AppImage
                  ./{AppConfig.APP_NAME.replace(/ /g, '_')}-x.x.x.AppImage
                </pre>
              </li>
            </ol>
            <div className="mt-4 rounded-lg bg-gray-50 p-4">
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-blue-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                <p className="ml-2 text-sm text-gray-700">
                  <strong>提示：</strong> 对于一些发行版，也可以通过Snap或Flatpak安装。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 安装验证与问题解决 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900">安装验证与问题解决</h2>
        <p className="mt-2 text-base text-gray-600">
          安装完成后，请执行以下步骤验证安装是否成功：
        </p>
        
        <ol className="mt-4 list-decimal pl-5 space-y-2 text-gray-600">
          <li>启动{AppConfig.APP_NAME}应用程序</li>
          <li>创建一个新项目或打开一个现有项目</li>
          <li>测试基本编辑功能和AI辅助功能</li>
        </ol>
        
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900">常见问题</h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <h4 className="font-medium text-gray-900">启动失败</h4>
              <p className="mt-1 text-sm text-gray-600">
                如果应用程序无法启动，请尝试以下解决方案：
              </p>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
                <li>确认系统满足最低要求</li>
                <li>检查是否有错误日志（通常在用户目录下的日志文件夹中）</li>
                <li>尝试卸载并重新安装应用程序</li>
                <li>确认操作系统是否为最新版本</li>
              </ul>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <h4 className="font-medium text-gray-900">AI功能不可用</h4>
              <p className="mt-1 text-sm text-gray-600">
                如果AI功能无法正常工作，请尝试：
              </p>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
                <li>检查您的网络连接是否正常</li>
                <li>确认您已正确登录账户</li>
                <li>在设置中禁用并重新启用AI功能</li>
                <li>检查是否有可用的更新</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-6 rounded-lg bg-gray-50 p-4">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-blue-500">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
            </svg>
            <p className="ml-2 text-sm text-gray-700">
              <strong>技术支持：</strong> 如果您遇到其他问题，请访问<a href="#" className="text-blue-600 hover:text-blue-800">支持中心</a>或联系我们的技术支持团队。
            </p>
          </div>
        </div>
      </div>

      {/* 下一步 */}
      <div className="rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
        <h2 className="text-xl font-semibold text-gray-900">准备好开始了吗？</h2>
        <p className="mt-2 text-gray-700">
          完成安装后，您可以继续阅读<Link href="/docs/getting-started/quick-start" className="font-medium text-blue-600 hover:text-blue-800">快速开始</Link>指南，了解如何使用{AppConfig.APP_NAME}的基本功能。
        </p>
      </div>
    </div>
  );
} 