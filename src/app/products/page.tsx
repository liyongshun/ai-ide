"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { AppConfig } from "@/lib/config";
;

// 定义产品特性类别和内容
const features = [
  {
    id: "ai-features",
    name: "AI辅助功能",
    description: "利用人工智能技术提升编程体验，让开发更加高效。",
    items: [
      {
        name: "代码补全",
        description: "基于上下文的智能代码补全，提高编码速度，减少错误。支持多种编程语言，实时学习您的编码风格。",
      },
      {
        name: "代码生成",
        description: "根据自然语言描述自动生成代码，大幅提升开发效率。适用于常见模式、算法实现和重复性任务。",
      },
      {
        name: "代码解释",
        description: "理解和解释复杂代码，加速新团队成员的入职和代码理解。提供易于理解的代码解析和文档生成。",
      },
      {
        name: "智能重构",
        description: "智能识别代码优化机会，自动提出重构建议，并帮助实现更清晰、高效的代码结构。",
      },
    ],
  },
  {
    id: "productivity",
    name: "生产力工具",
    description: "一系列提升开发效率的工具和功能，帮助团队更快交付高质量代码。",
    items: [
      {
        name: "智能调试",
        description: "先进的调试工具，帮助快速定位和修复问题。提供上下文相关的问题解析和解决方案。",
      },
      {
        name: "集成终端",
        description: "功能丰富的集成终端，支持多种Shell和命令行工具，无需离开IDE即可完成命令行操作。",
      },
      {
        name: "项目管理",
        description: "内置项目管理工具，轻松跟踪任务、问题和进度，提升团队协作效率。",
      },
      {
        name: "快速导航",
        description: "智能文件导航和代码搜索功能，快速定位到需要的代码位置，节省宝贵的开发时间。",
      },
    ],
  },
  {
    id: "collaboration",
    name: "协作能力",
    description: "增强团队协作的功能集，让开发团队无缝协作。",
    items: [
      {
        name: "实时协作",
        description: "多人实时协作编辑，代码审查和团队协作更加高效。支持实时通信和共享编辑会话。",
      },
      {
        name: "版本控制",
        description: "深度集成主流版本控制系统，提供图形化界面进行代码管理、合并和解决冲突。",
      },
      {
        name: "代码评审",
        description: "内置代码评审工具，支持行内评论、建议修改和变更跟踪，提升代码质量。",
      },
      {
        name: "团队同步",
        description: "项目设置和开发环境同步功能，确保团队成员使用一致的开发标准和工具配置。",
      },
    ],
  },
];

export default function ProductsPage() {
  const [selectedTab, setSelectedTab] = useState("ai-features");
  
  return (
    <>
      <div className="bg-white">
        {/* 产品概述 */}
        <div className="relative bg-gradient-to-b from-blue-50 via-white to-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {AppConfig.APP_NAME}产品介绍
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {AppConfig.APP_NAME}是一款面向专业开发人员的人工智能辅助开发工具，通过先进的AI技术提升编程体验，加速开发流程，减少重复工作，让开发者专注于真正的创新。
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/download"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  立即开始
                </Link>
                <a href="#features" className="text-sm font-semibold leading-6 text-gray-900">
                  了解更多 <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="relative rounded-xl bg-gray-900/5 p-2 shadow-2xl ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <div className="relative rounded-md shadow-md">
                  <Image
                    src="/images/product-screenshot.png"
                    alt="产品截图"
                    width={2432}
                    height={1442}
                    className="w-full rounded-md"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 特性部分 */}
        <div id="features" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600">全面的功能</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                专为开发者打造的强大工具集
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {AppConfig.APP_NAME}集成了最先进的AI技术和开发工具，提供全方位的智能辅助，让编码更加高效、精确和愉悦。
              </p>
            </div>
            
            {/* 特性标签页 */}
            <div className="mt-16 overflow-hidden bg-white">
              <div className="mx-auto max-w-7xl">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex justify-center space-x-8" aria-label="Tabs">
                    {features.map((feature) => (
                      <button
                        key={feature.id}
                        onClick={() => setSelectedTab(feature.id)}
                        className={`
                          whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium 
                          ${selectedTab === feature.id 
                            ? 'border-blue-600 text-blue-600' 
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}
                        `}
                      >
                        {feature.name}
                      </button>
                    ))}
                  </nav>
                </div>
                
                {/* 特性内容 */}
                <div className="py-16">
                  {features.map((feature) => (
                    <div key={feature.id} className={selectedTab === feature.id ? 'block' : 'hidden'}>
                      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                          {feature.items.map((item) => (
                            <div key={item.name} className="relative pl-16">
                              <dt className="text-lg font-semibold leading-7 text-gray-900">
                                <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                {item.name}
                              </dt>
                              <dd className="mt-2 text-base leading-7 text-gray-600">{item.description}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA部分 */}
        <div className="bg-blue-600">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              准备好提升您的开发效率了吗？
              <br />
              现在就开始使用{AppConfig.APP_NAME}。
            </h2>
            <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
              <Link
                href="/download"
                className="rounded-md bg-white px-8 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                立即下载
              </Link>
              <Link href="/docs" className="text-base font-semibold leading-6 text-white hover:text-gray-100">
                了解更多 <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 