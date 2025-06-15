import { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "关于我们 | AI IDE",
  description: "AI IDE是专为开发者打造的人工智能辅助编程工具，致力于提升编程效率和代码质量。",
};

const stats = [
  { name: '全球用户', value: '1,000,000+' },
  { name: '企业客户', value: '500+' },
  { name: '支持编程语言', value: '50+' },
  { name: '每日生成代码', value: '1,000,000+ 行' },
];

const teams = [
  {
    name: '领导团队',
    description: '我们的领导团队由业内资深专家组成，拥有丰富的技术和管理经验。',
    people: [
      {
        name: '张伟',
        role: '创始人兼CEO',
        imageUrl: '/images/team/ceo.jpg',
        bio: '前Google高级工程师，拥有超过15年软件开发和人工智能领域经验。曾领导多个大型技术项目，对AI在软件开发中的应用有深入研究。',
      },
      {
        name: '李明',
        role: '首席技术官 (CTO)',
        imageUrl: '/images/team/cto.jpg',
        bio: '人工智能和编程语言专家，曾在微软研究院工作，领导过多个AI编程辅助工具的研发工作。拥有计算机科学博士学位。',
      },
      {
        name: '王芳',
        role: '产品副总裁',
        imageUrl: '/images/team/vp-product.jpg',
        bio: '拥有超过10年产品管理经验，曾在多家顶级科技公司负责开发者工具产品线。对用户体验和产品设计有独到见解。',
      },
    ],
  },
  {
    name: '工程团队',
    description: '我们的工程团队由经验丰富的软件工程师组成，专注于构建高性能、可靠的AI编程工具。',
    people: [
      {
        name: '赵强',
        role: '工程总监',
        imageUrl: '/images/team/engineering-director.jpg',
        bio: '前阿里巴巴技术专家，拥有丰富的大型分布式系统开发经验，专注于系统架构设计和性能优化。',
      },
      {
        name: '钱丽',
        role: 'AI研究主管',
        imageUrl: '/images/team/ai-lead.jpg',
        bio: '机器学习和自然语言处理专家，曾参与多个大型语言模型的研发，对代码生成和理解有深入研究。',
      },
      {
        name: '孙伟',
        role: '前端技术负责人',
        imageUrl: '/images/team/frontend-lead.jpg',
        bio: '拥有8年前端开发经验，专注于构建高性能、易用的开发者工具界面，对开发体验有深刻理解。',
      },
    ],
  }
];

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
                AI IDE是一家致力于将人工智能应用于软件开发领域的技术创新公司。我们的使命是通过先进的AI技术赋能开发者，提高编程效率，减少重复工作，让开发者能够专注于解决真正有创造性的问题。
              </p>
            </div>
          </div>
        </div>

        {/* 数据统计 */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  全球开发者信赖的AI编程工具
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  自2021年成立以来，AI IDE已经帮助全球数百万开发者提升了编程体验
                </p>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.name} className="flex flex-col bg-gray-50 p-8">
                    <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-blue-600">{stat.value}</dd>
                  </div>
                ))}
              </dl>
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
                    "我们相信人工智能不是为了取代开发者，而是为了增强他们的能力，让他们能够专注于更有价值、更具创造性的工作。"
                  </p>
                </blockquote>
                <div className="mt-4 text-gray-600">
                  — 张伟, AI IDE创始人兼CEO
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 团队介绍 */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">认识我们的团队</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                我们的团队由来自行业顶尖公司的专业人士组成，拥有丰富的技术和产品经验。我们对AI和软件开发充满热情，致力于构建下一代开发工具。
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-7xl">
              {teams.map((team) => (
                <div key={team.name} className="mb-16 sm:mb-20 lg:mb-24">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{team.name}</h3>
                  <p className="mt-2 text-lg leading-8 text-gray-600">{team.description}</p>
                  <ul role="list" className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {team.people.map((person) => (
                      <li key={person.name} className="bg-white p-6 shadow-sm border border-gray-200 rounded-xl">
                        <div className="flex items-center gap-x-6">
                          <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-100">
                            {/* 这里使用占位图像 */}
                            <div className="h-full w-full flex items-center justify-center bg-blue-100 text-blue-800 font-bold text-xl">
                              {person.name.substring(0, 1)}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h4>
                            <p className="text-sm font-semibold leading-6 text-blue-600">{person.role}</p>
                          </div>
                        </div>
                        <p className="mt-4 text-sm leading-6 text-gray-600">{person.bio}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
              <a
                href="/careers"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                查看职位
              </a>
              <a href="/contact" className="text-sm font-semibold leading-6 text-white">
                联系我们 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 