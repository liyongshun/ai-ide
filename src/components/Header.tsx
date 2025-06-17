"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NAVIGATION } from "@/lib/constants";
import { AppConfig } from "@/lib/config";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{AppConfig.APP_NAME}</span>
            <div className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt={`${AppConfig.APP_NAME} Logo`}
                width={36}
                height={36}
                className="h-9 w-auto"
                priority
              />
              <span className="ml-2 text-xl font-semibold">{AppConfig.APP_NAME}</span>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">打开主菜单</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {NAVIGATION.main.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors",
                pathname === item.href && "text-blue-600"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/download" className="text-sm font-semibold leading-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            立即下载
          </Link>
        </div>
      </nav>
      
      {/* 移动端菜单 */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-white">
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">{AppConfig.APP_NAME}</span>
                  <div className="flex items-center">
                    <Image
                      src="/images/logo.svg"
                      alt={`${AppConfig.APP_NAME} Logo`}
                      width={32}
                      height={32}
                      className="h-8 w-auto"
                      priority
                    />
                    <span className="ml-2 text-lg font-semibold">{AppConfig.APP_NAME}</span>
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">关闭菜单</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {NAVIGATION.main.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={clsx(
                          "block px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 rounded-md",
                          pathname === item.href && "bg-gray-50 text-blue-600"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      href="/download"
                      className="block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-base font-semibold text-white shadow-sm hover:bg-blue-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      立即下载
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 