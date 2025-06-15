"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

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

// 定义价格方案
const tiers = [
  {
    name: "免费版",
    id: "free",
    price: "¥0",
    description: "适合个人开发者和小型项目",
    features: [
      "基础AI代码补全",
      "标准开发工具",
      "社区支持",
      "最多3个项目",
      "单用户",
    ],
    cta: "立即下载",
    href: "/download",
  },
  {
    name: "专业版",
    id: "pro",
    price: "¥299",
    frequency: "/月",
    description: "适合专业开发者和中小型团队",
    features: [
      "高级AI代码补全与生成",
      "代码解释与重构",
      "优先级技术支持",
      "无限项目",
      "最多10个团队成员",
      "协作功能",
    ],
    cta: "开始14天免费试用",
    href: "/download?plan=pro",
    mostPopular: true,
  },
  {
    name: "企业版",
    id: "enterprise",
    price: "联系我们",
    description: "适合大型企业和团队",
    features: [
      "全部AI功能无限制",
      "私有化部署选项",
      "专属客户成功经理",
      "SLA保障",
      "无限团队成员",
      "高级安全与合规功能",
      "定制化培训与支持",
    ],
    cta: "联系销售团队",
    href: "/contact",
  },
];

// 案例研究
const caseStudies = [
  {
    name: "科技创新公司",
    description: "使用AI IDE后，科技创新公司的开发团队将项目开发周期缩短了30%，同时减少了15%的代码缺陷。",
    imageUrl: "/images/case-study-1.jpg",
  },
  {
    name: "金融科技企业",
    description: "金融科技企业采用AI IDE后，新员工培训时间减少50%，代码审查效率提升40%，安全合规性显著增强。",
    imageUrl: "/images/case-study-2.jpg",
  },
  {
    name: "教育科技公司",
    description: "教育科技公司借助AI IDE实现了跨团队协作，提高了代码重用率，降低了35%的维护成本。",
    imageUrl: "/images/case-study-3.jpg",
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
                AI IDE产品介绍
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                AI IDE是一款面向专业开发人员的人工智能辅助开发工具，通过先进的AI技术提升编程体验，加速开发流程，减少重复工作，让开发者专注于真正的创新。
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
                AI IDE集成了最先进的AI技术和开发工具，提供全方位的智能辅助，让编码更加高效、精确和愉悦。
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
                      <div className="mx-auto max-w-2xl lg:text-center">
                        <h3 className="text-xl font-semibold leading-7 text-blue-600">{feature.name}</h3>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                          {feature.description}
                        </p>
                      </div>
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

        {/* 价格部分 */}
        <div id="pricing" className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600">价格方案</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                为不同需求提供灵活方案
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                无论您是个人开发者还是大型企业，我们都有适合您的方案。选择最适合您需求的版本开始使用。
              </p>
            </div>
            <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`
                    rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10
                    ${tier.mostPopular ? 'bg-white shadow-lg ring-2 ring-blue-600' : 'bg-white/60'}
                  `}
                >
                  <div className="flex items-center justify-between gap-x-4">
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">{tier.name}</h3>
                    {tier.mostPopular && (
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-600">
                        最受欢迎
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price}</span>
                    {tier.frequency && <span className="text-sm font-semibold leading-6 text-gray-600">{tier.frequency}</span>}
                  </p>
                  <a
                    href={tier.href}
                    className={`
                      mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                      ${tier.mostPopular 
                        ? 'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600' 
                        : 'bg-white text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300'
                      }
                    `}
                  >
                    {tier.cta}
                  </a>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 案例研究 */}
        <div id="case-studies" className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600">成功案例</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                客户如何使用AI IDE取得成功
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                了解各行业客户如何利用AI IDE提高开发效率，降低成本，加速创新。
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {caseStudies.map((study) => (
                <div key={study.name} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                  <div className="flex-shrink-0">
                    <div className="h-48 w-full relative">
                      <Image
                        className="h-48 w-full object-cover"
                        src={study.imageUrl}
                        alt={study.name}
                        fill
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900">{study.name}</h3>
                      <p className="mt-3 text-base text-gray-500">{study.description}</p>
                    </div>
                    <div className="mt-6">
                      <a href="#" className="text-base font-semibold text-blue-600 hover:text-blue-500">
                        阅读完整案例 →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA部分 */}
        <div className="bg-blue-600">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              准备好提升您的开发效率了吗？
              <br />
              现在就开始使用AI IDE。
            </h2>
            <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
              <Link
                href="/download"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                立即下载
              </Link>
              <Link
                href="/docs/getting-started"
                className="text-sm font-semibold leading-6 text-white"
              >
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