import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '入门指南 | AI IDE文档',
  description: '帮助你快速上手AI IDE的入门指南，包括安装、初始设置和基本使用。',
};

const gettingStartedGuides = [
  {
    title: '安装',
    description: '了解如何在不同操作系统上安装AI IDE，包括系统要求和安装步骤。',
    href: '/docs/getting-started/installation',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: '快速开始',
    description: '通过简单的步骤快速上手AI IDE，包括初始设置、创建项目等基本操作。',
    href: '/docs/getting-started/quick-start',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: '界面概览',
    description: '了解AI IDE的用户界面布局和主要组件，帮助你快速熟悉开发环境。',
    href: '/docs/getting-started/interface-overview',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
  },
];

export default function GettingStartedPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">入门指南</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          欢迎使用AI IDE！这些入门指南将帮助您快速安装和设置AI IDE，了解基本界面和功能，让您尽快开始使用这个强大的AI辅助编程工具。
        </p>
      </div>

      {/* 视频介绍 */}
      <div className="mb-12 rounded-lg bg-gray-50 p-6">
        <div className="mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-5 w-5 text-blue-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
          </svg>
          <h2 className="text-lg font-medium text-gray-900">快速上手视频</h2>
        </div>
        <div className="aspect-video w-full rounded-lg bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">AI IDE入门视频教程</p>
          {/* 实际实现中这里会嵌入一个视频播放器 */}
        </div>
        <p className="mt-4 text-sm text-gray-600">
          这个3分钟的视频教程将向您展示如何安装、配置和开始使用AI IDE进行开发。
        </p>
      </div>

      {/* 入门指南列表 */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {gettingStartedGuides.map((guide) => (
          <div key={guide.title} className="relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
            <div className="flex flex-1 flex-col justify-between p-6">
              <div className="flex-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                  {guide.icon}
                </div>
                <Link href={guide.href} className="mt-4 block">
                  <h3 className="text-xl font-semibold leading-7 text-gray-900">{guide.title}</h3>
                  <p className="mt-2 text-base leading-6 text-gray-600">{guide.description}</p>
                </Link>
              </div>
              <div className="mt-4">
                <Link
                  href={guide.href}
                  className="text-sm font-medium leading-6 text-blue-600 hover:text-blue-500"
                >
                  查看详情 <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 下一步 */}
      <div className="mt-12 rounded-lg border border-gray-200 bg-white p-6">
        <h2 className="text-lg font-medium text-gray-900">准备好深入了解了吗？</h2>
        <p className="mt-2 text-base text-gray-600">
          完成入门指南后，探索AI IDE的核心功能，了解如何充分利用AI辅助编程能力。
        </p>
        <div className="mt-4">
          <Link
            href="/docs/features"
            className="text-sm font-medium leading-6 text-blue-600 hover:text-blue-500"
          >
            浏览核心功能文档 <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 