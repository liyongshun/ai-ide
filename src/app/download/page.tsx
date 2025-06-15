"use client";

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ToastContext";
import { useState } from "react";

const PAGE_METADATA = {
  title: "下载 AI IDE - 人工智能辅助开发工具",
  description: "下载最新版本的AI IDE，体验AI辅助编程的无限可能",
};

const downloadOptions = [
  {
    name: "Windows",
    description: "适用于 Windows 10 及以上版本",
    href: "/download/windows",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    versions: [
      { name: "AI IDE v2.5.0 - Windows 64位", size: "187 MB", href: "/download/files/ai-ide-v2.5.0-win64.exe" },
      { name: "AI IDE v2.5.0 - Windows 32位", size: "173 MB", href: "/download/files/ai-ide-v2.5.0-win32.exe" },
    ],
  },
  {
    name: "macOS",
    description: "适用于 macOS 11.0 及以上版本",
    href: "/download/macos",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    versions: [
      { name: "AI IDE v2.5.0 - Intel芯片", size: "195 MB", href: "/download/files/ai-ide-v2.5.0-intel.dmg" },
      { name: "AI IDE v2.5.0 - Apple Silicon", size: "192 MB", href: "/download/files/ai-ide-v2.5.0-arm64.dmg" },
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
      { name: "AI IDE v2.5.0 - Debian/Ubuntu (.deb)", size: "183 MB", href: "/download/files/ai-ide-v2.5.0.deb" },
      { name: "AI IDE v2.5.0 - Red Hat/Fedora (.rpm)", size: "185 MB", href: "/download/files/ai-ide-v2.5.0.rpm" },
      { name: "AI IDE v2.5.0 - 通用 Linux (.tar.gz)", size: "180 MB", href: "/download/files/ai-ide-v2.5.0.tar.gz" },
    ],
  },
];

const systemRequirements = {
  minimum: {
    os: "Windows 10, macOS 11.0, Ubuntu 20.04 或其他相同级别的 Linux 发行版",
    processor: "多核处理器，1.8GHz 或更高",
    memory: "8 GB RAM",
    storage: "1 GB 可用空间",
    display: "1280 x 720 显示分辨率",
  },
  recommended: {
    os: "Windows 11, macOS 13.0 或更新版本",
    processor: "多核处理器，2.4GHz 或更高",
    memory: "16 GB RAM",
    storage: "2 GB 可用空间",
    display: "1920 x 1080 显示分辨率或更高",
  },
};

export default function DownloadPage() {
  const { showToast } = useToast();
  const [downloadCount, setDownloadCount] = useState(0);

  // 处理下载按钮点击
  const handleDownload = (version: string, href: string) => {
    // 这里可以添加下载统计或其他处理
    setDownloadCount(prev => prev + 1);
    showToast({
      message: `正在开始下载 ${version}`,
      type: 'success',
      duration: 3000
    });
    // 实际应用中可以在此处进行下载链接重定向或其他操作
  };

  return (
    <>
      <div className="bg-white">
        {/* 下载横幅部分 */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                下载AI IDE
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-100">
                获取最新版本的AI IDE，体验智能编程的未来。无论您使用哪种平台，我们都能支持您的开发需求。
              </p>
            </div>
          </div>
        </div>

        {/* 版本发布说明 */}
        <div className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600">最新版本</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                AI IDE v2.5.0
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                发布日期: 2023年12月15日
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl border border-gray-200 p-8 sm:mt-20 sm:p-10">
              <h3 className="text-lg font-semibold leading-7 text-gray-900">版本亮点:</h3>
              <ul className="mt-6 space-y-4 text-base leading-7 text-gray-600">
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  增强的AI代码生成能力，支持更多编程语言和框架
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  全新的实时协作功能，允许团队成员同时编辑同一文件
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  优化的用户界面，提供更直观的操作体验
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  新增代码智能分析和性能优化建议功能
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  修复了50多个已知问题，提高了稳定性和性能
                </li>
              </ul>
              <Link
                href="/docs/changelog"
                className="mt-8 text-sm font-semibold leading-6 text-blue-600"
              >
                查看完整更新日志 <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 下载选项 */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600">选择您的平台</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                获取适合您的版本
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                AI IDE支持所有主流操作系统，选择您使用的平台开始下载。
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
              <div className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
                {downloadOptions.map((option) => (
                  <div key={option.name} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                    <div className="flex items-center gap-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                        {option.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{option.name}</h3>
                        <p className="text-sm leading-6 text-gray-600">{option.description}</p>
                      </div>
                    </div>
                    <div className="mt-6 border-t border-gray-200 pt-6">
                      <ul role="list" className="space-y-4">
                        {option.versions.map((version) => (
                          <li key={version.name} className="flex justify-between gap-x-4">
                            <div className="flex flex-col">
                              <p className="text-sm font-medium leading-6 text-gray-900">{version.name}</p>
                              <p className="text-xs leading-5 text-gray-500">{version.size}</p>
                            </div>
                            <button
                              onClick={() => handleDownload(version.name, version.href)}
                              className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            >
                              下载
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 系统要求 */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600">系统要求</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                运行AI IDE所需的配置
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                请确保您的系统满足以下要求，以获得最佳体验。
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-4xl">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900 mb-4">最低配置</h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">操作系统</dt>
                      <dd className="mt-1 text-sm text-gray-900">{systemRequirements.minimum.os}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">处理器</dt>
                      <dd className="mt-1 text-sm text-gray-900">{systemRequirements.minimum.processor}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">内存</dt>
                      <dd className="mt-1 text-sm text-gray-900">{systemRequirements.minimum.memory}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">存储空间</dt>
                      <dd className="mt-1 text-sm text-gray-900">{systemRequirements.minimum.storage}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">显示器</dt>
                      <dd className="mt-1 text-sm text-gray-900">{systemRequirements.minimum.display}</dd>
                    </div>
                  </dl>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900 mb-4">推荐配置</h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">操作系统</dt>
                      <dd className="mt-1 text-sm text-gray-900">{systemRequirements.recommended.os}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">处理器</dt>
                      <dd className="mt-1 text-sm text-gray-900">{systemRequirements.recommended.processor}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">内存</dt>
                      <dd className="mt-1 text-sm text-gray-900">{systemRequirements.recommended.memory}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">存储空间</dt>
                      <dd className="mt-1 text-sm text-gray-900">{systemRequirements.recommended.storage}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">显示器</dt>
                      <dd className="mt-1 text-sm text-gray-900">{systemRequirements.recommended.display}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 帮助支持 */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600">需要帮助？</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                获取安装和使用支持
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                如果您在下载或安装过程中遇到问题，我们提供多种支持渠道帮助您解决。
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-8">
                <h3 className="text-lg font-semibold text-gray-900">查阅文档</h3>
                <p className="mt-4 text-sm text-gray-600">我们的帮助文档提供了详细的安装指南和常见问题解答，可能已经包含了您所遇到问题的解决方案。</p>
                <div className="mt-auto pt-6">
                  <Link href="/docs/installation" className="text-sm font-semibold leading-6 text-blue-600">查看安装指南 <span aria-hidden="true">→</span></Link>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-8">
                <h3 className="text-lg font-semibold text-gray-900">社区论坛</h3>
                <p className="mt-4 text-sm text-gray-600">加入我们的社区论坛，与其他用户交流经验，分享技巧，共同解决问题。专业开发者和社区管理员也会在论坛中提供帮助。</p>
                <div className="mt-auto pt-6">
                  <Link href="/community" className="text-sm font-semibold leading-6 text-blue-600">访问社区论坛 <span aria-hidden="true">→</span></Link>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-8">
                <h3 className="text-lg font-semibold text-gray-900">技术支持</h3>
                <p className="mt-4 text-sm text-gray-600">如果您仍然无法解决问题，请联系我们的技术支持团队。我们的专业人员将在工作时间内尽快回复您的请求。</p>
                <div className="mt-auto pt-6">
                  <Link href="/support" className="text-sm font-semibold leading-6 text-blue-600">联系技术支持 <span aria-hidden="true">→</span></Link>
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