import { Metadata } from "next";
import Footer from "@/components/Footer";
import { AppConfig } from "@/lib/config";
import Link from "next/link";
;

export const metadata: Metadata = {
  title: `关于我们 | ${AppConfig.APP_NAME}`,
  description: `${AppConfig.APP_NAME}是专为开发者打造的人工智能辅助编程工具，致力于提升编程效率和代码质量。`,
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-white">
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