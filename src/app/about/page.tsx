import { Metadata } from "next";
import Footer from "@/components/Footer";
import { AppConfig } from "@/lib/config";
import Link from "next/link";
;

export const metadata: Metadata = {
  title: `关于我们 | ${AppConfig.APP_NAME}`,
  description: `${AppConfig.APP_NAME}是专为开发者打造的人工智能辅助编程工具，致力于提升编程效率和代码质量。`,
};

const values = [
  {
    name: '开发者至上',
    description: '我们所有的产品决策都以提升开发者的工作效率和体验为中心。',
  },
  {
    name: '技术创新',
    description: '持续推动技术边界，将最前沿的AI技术应用到实际开发场景中。',
  },
  {
    name: '质量为本',
    description: '我们坚持高标准，确保每一个功能都能可靠地为开发者提供价值。',
  },
  {
    name: '开放协作',
    description: '我们相信开放和协作的力量，积极与开发社区互动并采纳反馈。',
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="bg-white">
        {/* 公司介绍 */}
        <div className="relative bg-gradient-to-b from-blue-50 via-white to-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                关于我们
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {AppConfig.APP_NAME}是一家致力于将人工智能应用于软件开发领域的技术创新公司。我们的使命是通过先进的AI技术赋能开发者，提高编程效率，减少重复工作，让开发者能够专注于解决真正有创造性的问题。
              </p>
            </div>
          </div>
        </div>

        {/* 公司使命和价值观 */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">我们的使命</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  我们致力于利用人工智能技术，创造更智能、更高效的编程工具，帮助开发者减少重复工作，提高生产力，将精力集中在创造性工作上。
                </p>
                <div className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600">
                  <div>
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">愿景</h3>
                    <p className="mt-2">
                      我们期望成为全球领先的AI辅助开发平台，改变数百万开发者的工作方式，推动软件开发效率的革命性提升。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">核心价值观</h3>
                    <ul className="mt-4 space-y-4">
                      {values.map((value) => (
                        <li key={value.name} className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <strong className="font-semibold text-gray-900">{value.name}.</strong> {value.description}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative">
                <blockquote className="text-xl italic font-semibold text-gray-900">
                  <p>
                    &quot;我们相信人工智能不是为了取代开发者，而是为了增强他们的能力，让他们能够专注于更有价值、更具创造性的工作。&quot;
                  </p>
                </blockquote>
                <div className="mt-4 text-gray-600">
                  — {AppConfig.APP_NAME}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 加入我们 */}
        <div className="bg-blue-600">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                加入我们的团队
              </h2>
              <p className="mt-4 text-lg leading-8 text-blue-100">
                我们正在寻找热爱技术、充满激情的人才加入我们，一起打造改变开发者工作方式的产品。
              </p>
            </div>
            <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
              <Link
                href="/careers"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                查看职位
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-white">
                联系我们 <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 