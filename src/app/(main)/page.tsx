import Image from "next/image";
import Link from "next/link";

const features = [
  {
    name: '智能代码补全',
    description: '基于上下文的智能代码补全，提高编码速度，减少错误。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    name: '代码生成',
    description: '根据自然语言描述自动生成代码，大幅提升开发效率。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    name: '代码解释',
    description: '理解和解释复杂代码，加速新团队成员的入职和代码理解。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    name: '实时协作',
    description: '多人实时协作编辑，代码审查和团队协作更加高效。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    name: '代码优化',
    description: '自动检测并优化性能瓶颈，提供代码改进建议。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    name: '多语言支持',
    description: '支持超过50种编程语言，满足各类开发需求。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    content: 'AI IDE彻底改变了我的开发流程，让我的工作效率提高了至少30%。',
    author: {
      name: '张伟',
      role: '全栈开发工程师',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
    },
  },
  {
    content: '作为一名团队领导，AI IDE帮助我的团队更快地交付高质量代码，特别是新成员的学习曲线大大缩短。',
    author: {
      name: '李明',
      role: '技术负责人',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
    },
  },
  {
    content: '我从未想过AI能如此智能地理解我的代码意图，AI IDE就像一个随时在线的编程助手。',
    author: {
      name: '王芳',
      role: '前端工程师',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
    },
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="pt-16 pb-80 sm:pb-40 lg:pb-48 lg:pt-24">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                AI驱动的智能IDE
                <br />
                <span className="text-blue-600">编程体验的革命</span>
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                利用人工智能技术提升编程体验，加速开发流程，减少重复工作，让开发者专注于真正的创新。
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/download"
                  className="inline-block rounded-md bg-blue-600 px-8 py-3 text-center font-medium text-white hover:bg-blue-700"
                >
                  立即下载
                </Link>
                <Link
                  href="/docs/getting-started"
                  className="inline-block rounded-md border border-blue-600 px-8 py-3 text-center font-medium text-blue-600 hover:bg-blue-50"
                >
                  快速入门
                </Link>
              </div>
            </div>
            <div className="mt-10 sm:mt-16">
              <div className="relative -mx-4 h-[400px] sm:-mx-6 lg:-mx-8 overflow-hidden rounded-xl shadow-xl bg-gray-100 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-24 h-24 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <div className="text-2xl font-bold text-gray-700">AI IDE 界面预览</div>
                  <div className="text-gray-500 text-center max-w-md px-4">智能编码辅助，代码补全，实时协作，性能分析</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 特性部分 */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">提升生产力</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              专为开发者打造的强大功能
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              AI IDE集成了最先进的AI技术，为开发者提供全方位的智能辅助，让编码更加高效、精确和愉悦。
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <div className="h-10 w-10 flex-none rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* 用户评价部分 */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">用户反馈</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              开发者对AI IDE的评价
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mt-20 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-2xl border border-gray-200 p-8 shadow-sm">
                <p className="text-lg leading-8 text-gray-600">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="mt-6 flex items-center gap-x-4">
                  <div className="h-12 w-12 rounded-full bg-blue-600/10 text-blue-600 flex items-center justify-center">
                    {testimonial.author.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                    <div className="text-sm leading-6 text-gray-600">{testimonial.author.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA部分 */}
      <div className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            准备好提升您的开发效率了吗？
            <br />
            今天就开始使用AI IDE。
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
  );
} 