"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ToastContext";
import { useState } from "react";
import { AppConfig } from "@/lib/config";

// 注意: PAGE_METADATA在客户端组件中不直接使用，
// 但保留它是为了与服务器端渲染兼容，以及将来可能的SEO优化
 
// 用于SEO元数据，在服务端渲染中使用
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PAGE_METADATA = {
  title: `下载 ${AppConfig.APP_NAME}`,
  description: `下载最新版本的${AppConfig.APP_NAME}，支持Linux平台。`,
};

const downloadOptions = [
  {
    name: "Windows",
    description: "支持中",
    href: "/download/windows",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    versions: [
      { name: `${AppConfig.APP_NAME} ${AppConfig.LATEST_VERSION} - Windows 64位 (开发中)`, size: "敬请期待", href: "#" },
    ],
  },
  {
    name: "Linux",
    description: "适用于主流Linux发行版",
    href: "/download/linux",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    versions: [
      { name: `${AppConfig.APP_NAME} ${AppConfig.LATEST_VERSION} - Debian/Ubuntu (.deb)`, size: "183 MB", href: "/download/files/ai-ide-v2.5.0.deb" },
      { name: `${AppConfig.APP_NAME} ${AppConfig.LATEST_VERSION} - Red Hat/Fedora (.rpm)`, size: "185 MB", href: "/download/files/ai-ide-v2.5.0.rpm" },
      { name: `${AppConfig.APP_NAME} ${AppConfig.LATEST_VERSION} - 通用 Linux (.tar.gz)`, size: "180 MB", href: "/download/files/ai-ide-v2.5.0.tar.gz" },
    ],
  },
];

const systemRequirements = {
  minimum: {
    os: "Ubuntu 20.04 或其他相同级别的 Linux 发行版",
    processor: "多核处理器，1.8GHz 或更高",
    memory: "8 GB RAM",
    storage: "1 GB 可用空间",
    display: "1280 x 720 显示分辨率",
  },
  recommended: {
    os: "Ubuntu 22.04 或更新版本",
    processor: "多核处理器，2.4GHz 或更高",
    memory: "16 GB RAM",
    storage: "2 GB 可用空间",
    display: "1920 x 1080 显示分辨率或更高",
  },
};

export default function DownloadPage() {
  const { showToast } = useToast();
  // 注意: downloadCount在当前UI中没有显示，
 
  // 但保留它是为了跟踪下载统计，将来可能用于显示热门下载等功能
    // 用于下载统计，将来可能用于显示热门下载等功能
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const [downloadCount, setDownloadCount] = useState(0);

  // 处理下载按钮点击
  const handleDownload = (version: string, href: string) => {
    // 这里可以添加下载统计或其他处理
    setDownloadCount(prev => prev + 1);
    showToast({
      message: `正在开始下载 ${version}，链接: ${href}`,
      type: 'success',
      duration: 3000
    });
    // 实际应用中可以在此处进行下载链接重定向或其他操作
  };

  return (
    <>
      <div className="bg-white">
        {/* 下载横幅部分 */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                下载{AppConfig.APP_NAME}
              </h1>
              <p className="mt-4 text-lg leading-8 text-gray-100">
                获取最新版本的{AppConfig.APP_NAME}，体验智能编程的未来。
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-6">
                <a
                  href="#download-options"
                  className="rounded-md bg-white px-3.5 py-2 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-100"
                >
                  立即下载
                </a>
                <Link href="/docs/getting-started/installation" className="text-sm font-semibold leading-6 text-gray-100 hover:text-white">
                  安装指南 <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 下载选项部分 */}
        <div id="download-options" className="py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-8">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-2">v{AppConfig.LATEST_VERSION}</span>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">选择您的平台</h2>
              <p className="mt-2 text-sm text-gray-500">发布日期: {AppConfig.RELEASE_DATE}</p>
            </div>
            
            <div className="mx-auto max-w-3xl">
              {downloadOptions.map((option) => (
                <div key={option.name} className="mb-6 overflow-hidden rounded-lg border border-gray-200 bg-white">
                  <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-600 text-white">
                      {option.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold leading-6 text-gray-900">{option.name}</h3>
                      <p className="text-xs text-gray-500">{option.description}</p>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {option.versions.map((version) => (
                      <div key={version.name} className="flex items-center justify-between p-4">
                        <div className="flex-1 pr-4">
                          <p className="text-sm font-medium">{version.name}</p>
                          {version.size && (
                            <p className="text-xs text-gray-500">文件大小: {version.size}</p>
                          )}
                        </div>
                        {version.href === "#" ? (
                          <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                            即将推出
                          </span>
                        ) : (
                          <button
                            onClick={() => handleDownload(version.name, version.href)}
                            className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                          >
                            <svg className="-ml-0.5 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                              <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                            </svg>
                            下载
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="mt-8 rounded-lg bg-blue-50 p-4 text-sm">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-blue-800">注意事项</h3>
                    <div className="mt-1 text-blue-700">
                      <p>下载后请按照<Link href="/docs/getting-started/installation" className="font-medium underline">安装指南</Link>进行安装。如遇问题，请访问我们的<Link href="/docs/support" className="font-medium underline">支持页面</Link>获取帮助。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 版本亮点 */}
        <div className="bg-gray-50 py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">版本亮点</h2>
              <p className="mt-2 text-sm text-gray-600">了解{AppConfig.APP_NAME} {AppConfig.LATEST_VERSION}版本的新功能和改进</p>
            </div>
            
            <div className="mx-auto max-w-3xl">
              <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
                <ul className="divide-y divide-gray-200">
                  <li className="flex px-4 py-3">
                    <svg className="h-5 w-5 flex-none mt-0.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-sm">增强的AI代码生成能力，支持更多编程语言和框架</span>
                  </li>
                  <li className="flex px-4 py-3">
                    <svg className="h-5 w-5 flex-none mt-0.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-sm">全新的实时协作功能，允许团队成员同时编辑同一文件</span>
                  </li>
                  <li className="flex px-4 py-3">
                    <svg className="h-5 w-5 flex-none mt-0.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-sm">优化的用户界面，提供更直观的操作体验</span>
                  </li>
                  <li className="flex px-4 py-3">
                    <svg className="h-5 w-5 flex-none mt-0.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-sm">新增代码智能分析和性能优化建议功能</span>
                  </li>
                  <li className="flex px-4 py-3">
                    <svg className="h-5 w-5 flex-none mt-0.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-sm">修复了50多个已知问题，提高了稳定性和性能</span>
                  </li>
                </ul>
                <div className="border-t border-gray-200 px-4 py-3">
                  <Link href="/docs/changelog" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                    查看完整更新日志 <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 系统要求 */}
        <div className="py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">系统要求</h2>
              <p className="mt-2 text-sm text-gray-600">运行{AppConfig.APP_NAME}所需的最低和推荐配置</p>
            </div>
            
            <div className="mx-auto max-w-3xl">
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                <div className="grid grid-cols-1 divide-y divide-gray-200 md:grid-cols-2 md:divide-y-0 md:divide-x">
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-gray-900 mb-4">最低配置</h3>
                    <dl className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <dt className="font-medium text-gray-500">操作系统</dt>
                        <dd className="text-gray-900">{systemRequirements.minimum.os}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium text-gray-500">处理器</dt>
                        <dd className="text-gray-900">{systemRequirements.minimum.processor}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium text-gray-500">内存</dt>
                        <dd className="text-gray-900">{systemRequirements.minimum.memory}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium text-gray-500">存储空间</dt>
                        <dd className="text-gray-900">{systemRequirements.minimum.storage}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium text-gray-500">显示器</dt>
                        <dd className="text-gray-900">{systemRequirements.minimum.display}</dd>
                      </div>
                    </dl>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-gray-900 mb-4">推荐配置</h3>
                    <dl className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <dt className="font-medium text-gray-500">操作系统</dt>
                        <dd className="text-gray-900">{systemRequirements.recommended.os}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium text-gray-500">处理器</dt>
                        <dd className="text-gray-900">{systemRequirements.recommended.processor}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium text-gray-500">内存</dt>
                        <dd className="text-gray-900">{systemRequirements.recommended.memory}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium text-gray-500">存储空间</dt>
                        <dd className="text-gray-900">{systemRequirements.recommended.storage}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium text-gray-500">显示器</dt>
                        <dd className="text-gray-900">{systemRequirements.recommended.display}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 帮助支持 */}
        <div className="bg-gray-50 py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">需要帮助？</h2>
              <p className="mt-2 text-sm text-gray-600">我们提供多种支持渠道，帮助您解决问题</p>
            </div>
            
            <div className="mx-auto max-w-3xl">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-gray-200 bg-white p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-600 text-white mb-3">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">查阅文档</h3>
                  <p className="mt-2 text-xs text-gray-600">详细的安装指南和常见问题解答，帮助您快速解决问题。</p>
                  <div className="mt-4">
                    <Link href="/docs/getting-started/installation" className="text-xs font-medium text-blue-600 hover:text-blue-500">
                      查看安装指南 <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
                
                <div className="rounded-lg border border-gray-200 bg-white p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-600 text-white mb-3">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">社区论坛</h3>
                  <p className="mt-2 text-xs text-gray-600">加入我们的社区论坛，与其他用户交流经验，分享技巧，共同解决问题。</p>
                  <div className="mt-4">
                    <Link href="/community" className="text-xs font-medium text-blue-600 hover:text-blue-500">
                      访问社区论坛 <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
                
                <div className="rounded-lg border border-gray-200 bg-white p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-600 text-white mb-3">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">技术支持</h3>
                  <p className="mt-2 text-xs text-gray-600">如果您仍然无法解决问题，请联系我们的技术支持团队获取专业帮助。</p>
                  <div className="mt-4">
                    <Link href="/support" className="text-xs font-medium text-blue-600 hover:text-blue-500">
                      联系技术支持 <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 