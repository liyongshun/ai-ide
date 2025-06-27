import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AppConfig } from "@/lib/config";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `关于我们 | ${AppConfig.APP_NAME}`,
  description: `${AppConfig.APP_NAME}是专为开发者打造的人工智能辅助编程工具，致力于提升编程效率和代码质量。`,
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-white">
        {/* 公司简介 */}
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white pt-16">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                关于<span className="text-blue-600">{AppConfig.APP_NAME}</span>
              </h1>
              <p className="mt-8 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                {AppConfig.APP_NAME}是一款专为开发者打造的智能编程助手，我们利用最先进的人工智能技术，
                为开发者提供代码补全、代码生成、代码解释和优化等全方位的智能辅助功能，
                帮助开发者更高效地编写代码，提高开发效率和代码质量。
              </p>
            </div>
            <div className="mt-16 flex justify-center">
              <Image
                src="/images/hero-screenshot.png"
                alt={`${AppConfig.APP_NAME} 界面预览`}
                width={1200}
                height={675}
                className="rounded-xl shadow-2xl max-w-4xl w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* 使命与愿景 */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="lg:flex items-center gap-x-16">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">我们的使命与愿景</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  我们的使命是通过AI技术提升开发者体验，让编程更加高效、愉悦且富有创造力。
                  我们相信，AI不是要取代开发者，而是要成为开发者的得力助手，处理重复性工作，
                  让开发者能够专注于真正具有创造性和挑战性的任务。
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  我们的愿景是打造全球领先的AI编程平台，让每一位开发者都能从AI技术中受益，
                  推动软件开发效率和质量的革命性提升。
                </p>
              </div>
              <div className="mt-10 lg:mt-0 lg:w-1/2">
                <Image
                  src="/images/case-study-1.jpg"
                  alt="开发团队协作"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-md w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 