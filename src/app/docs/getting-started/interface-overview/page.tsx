import { Metadata } from 'next';
import { AppConfig } from '@/lib/config';
import Link from "next/link";

export const metadata: Metadata = {
  title: `界面概览 | ${AppConfig.APP_NAME}文档`,
  description: `了解${AppConfig.APP_NAME}的用户界面布局和主要组件，帮助你快速熟悉开发环境。`,
};

export default function InterfaceOverviewPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">界面概览</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          {AppConfig.APP_NAME}提供了现代、直观的用户界面，本页面将介绍其主要组成部分和功能区域，帮助您快速熟悉开发环境。
        </p>
      </div>

      {/* 主界面概览 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900">主界面组成</h2>
        <p className="mt-2 text-base text-gray-600">
          {AppConfig.APP_NAME}的界面包含多个功能区域，每个区域都有特定的用途和功能。
        </p>
        
        <div className="mt-6 rounded-lg bg-gray-100 p-6 text-center text-gray-500">
          <p className="mb-4">主界面预览图</p>
          <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            这里将显示{AppConfig.APP_NAME}主界面的截图，标注了各个主要区域
          </div>
          <p className="mt-4 text-sm text-gray-600">图1: {AppConfig.APP_NAME}主界面布局，标注了主要功能区域</p>
        </div>
      </div>

      {/* 核心界面元素详解 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">核心界面元素</h2>
        <p className="mt-2 text-base text-gray-600">
          以下是{AppConfig.APP_NAME}界面的核心组件，理解它们的功能将帮助您高效使用IDE：
        </p>
        
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">编辑器区域</h3>
            <p className="mt-2 text-gray-600">
              IDE的核心组件，用于编写和修改代码，支持多文件标签、语法高亮和内联AI补全。
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">AI助手面板</h3>
            <p className="mt-2 text-gray-600">
              提供AI编程辅助功能，包括代码建议、自然语言聊天、相关API文档和代码生成。
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">文件资源管理器</h3>
            <p className="mt-2 text-gray-600">
              浏览和管理项目文件，支持文件过滤、搜索和常见文件操作。
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">状态栏</h3>
            <p className="mt-2 text-gray-600">
              显示当前文件信息、AI模型状态、项目状态和快速操作按钮。
            </p>
          </div>
        </div>
      </div>

      {/* 详细功能介绍 - 编辑器区域 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">1. 编辑器区域</h2>
        <p className="mt-2 text-base text-gray-600">
          编辑器是IDE的核心组件，用于编写和修改代码。{AppConfig.APP_NAME}的编辑器具有以下特点：
        </p>
        
        <div className="mt-6 space-y-4">
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <h3 className="font-medium text-gray-900">多标签编辑</h3>
            <p className="mt-1 text-sm text-gray-600">
              同时打开多个文件，通过标签快速切换，支持拆分视图同时查看多个文件。
            </p>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <h3 className="font-medium text-gray-900">智能代码编辑</h3>
            <p className="mt-1 text-sm text-gray-600">
              提供语法高亮、代码折叠、自动缩进和括号匹配等功能，提高代码可读性和编辑效率。
            </p>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <h3 className="font-medium text-gray-900">AI代码辅助</h3>
            <p className="mt-1 text-sm text-gray-600">
              在编辑过程中提供智能代码补全、错误提示和修复建议，提高编码效率和准确性。
            </p>
          </div>
        </div>
        
        <div className="mt-4 rounded-lg bg-gray-50 p-4">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 flex-shrink-0 text-blue-500">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
            </svg>
            <p className="ml-2 text-sm text-gray-700">
              <strong>提示：</strong> 使用快捷键 <kbd className="px-1 py-0.5 text-xs rounded border border-gray-300 bg-gray-50">Ctrl</kbd>+<kbd className="px-1 py-0.5 text-xs rounded border border-gray-300 bg-gray-50">P</kbd> 可以快速在多个打开的文件之间切换。
            </p>
          </div>
        </div>
      </div>

      {/* 详细功能介绍 - AI助手面板 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">2. AI助手面板</h2>
        <p className="mt-2 text-base text-gray-600">
          位于右侧的AI助手面板是{AppConfig.APP_NAME}的独特功能，提供智能编程辅助：
        </p>
        
        <div className="mt-6 rounded-lg overflow-hidden border border-gray-200">
          <div className="bg-gray-50 px-4 py-3 flex items-center border-b border-gray-200">
            <div className="flex space-x-2">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">代码建议</span>
              <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-medium">聊天</span>
              <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-medium">文档</span>
              <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-medium">代码生成</span>
            </div>
          </div>
          <div className="bg-white p-4">
            <div className="mb-4">
              <span className="text-xs text-gray-500">AI建议</span>
              <div className="mt-2 rounded bg-blue-50 p-3 text-sm text-gray-700">
                考虑对循环内的操作进行优化，将不变的计算移到循环外部，以提高性能。
              </div>
            </div>
            <div>
              <span className="text-xs text-gray-500">代码示例</span>
              <pre className="mt-2 bg-gray-50 p-3 text-sm text-gray-700 rounded overflow-x-auto">
{`// 优化前
for (let i = 0; i < items.length; i++) {
  const result = compute(items[i]) * Math.PI;
  // 处理结果
}

// 优化后
const constant = Math.PI;
for (let i = 0; i < items.length; i++) {
  
  // 处理结果
}`}
              </pre>
            </div>
          </div>
        </div>
        
        <div className="mt-4 rounded-lg bg-gray-50 p-4">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
            <p className="ml-2 text-sm text-gray-700">
              <strong>技巧：</strong> 使用快捷键 <kbd className="px-1 py-0.5 text-xs rounded border border-gray-300 bg-gray-50">Alt</kbd>+<kbd className="px-1 py-0.5 text-xs rounded border border-gray-300 bg-gray-50">A</kbd> 快速打开或关闭AI助手面板。
            </p>
          </div>
        </div>
      </div>

      {/* 详细功能介绍 - 文件资源管理器 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">3. 文件资源管理器</h2>
        <p className="mt-2 text-base text-gray-600">
          位于左侧的文件资源管理器用于浏览和管理项目文件：
        </p>
        
        <div className="mt-6 rounded-lg overflow-hidden border border-gray-200">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
            <span className="font-medium text-gray-900">项目文件</span>
            <div className="flex space-x-2">
              <button className="p-1 text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
              <button className="p-1 text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
              <button className="p-1 text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
          <div className="bg-white p-4">
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1 text-blue-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                </svg>
                <span>src/</span>
              </li>
              <li className="flex items-center pl-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1 text-blue-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                </svg>
                <span>components/</span>
              </li>
              <li className="flex items-center pl-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1 text-purple-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <span>Button.tsx</span>
              </li>
              <li className="flex items-center pl-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <span>index.js</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 命令面板 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">4. 命令面板</h2>
        <p className="mt-2 text-base text-gray-600">
          命令面板是一个强大的功能，可以快速访问IDE的所有功能和命令：
        </p>
        
        <div className="mt-6 rounded-lg overflow-hidden border border-gray-200">
          <div className="bg-white p-4">
            <div className="border border-gray-300 rounded-md p-2 flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <span className="text-gray-800">分析代码</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="p-2 bg-blue-50 rounded flex justify-between items-center">
                <span className="text-gray-800">分析当前文件的性能问题</span>
                <span className="text-xs text-gray-500">Alt+P</span>
              </li>
              <li className="p-2 hover:bg-gray-50 rounded flex justify-between items-center">
                <span className="text-gray-800">分析代码复杂度</span>
              </li>
              <li className="p-2 hover:bg-gray-50 rounded flex justify-between items-center">
                <span className="text-gray-800">查找可能的安全问题</span>
              </li>
              <li className="p-2 hover:bg-gray-50 rounded flex justify-between items-center">
                <span className="text-gray-800">生成代码文档</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-4 rounded-lg bg-gray-50 p-4">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <p className="ml-2 text-sm text-gray-700">
              <strong>提示：</strong> 按下<kbd className="px-1 py-0.5 text-xs rounded border border-gray-300 bg-gray-50">Ctrl</kbd>+<kbd className="px-1 py-0.5 text-xs rounded border border-gray-300 bg-gray-50">Shift</kbd>+<kbd className="px-1 py-0.5 text-xs rounded border border-gray-300 bg-gray-50">P</kbd>打开命令面板，然后输入自然语言命令或搜索功能。
            </p>
          </div>
        </div>
      </div>

      {/* 自定义界面 */}
      <div className="rounded-lg bg-blue-50 p-6">
        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-blue-800">自定义界面</h3>
            <p className="mt-2 text-blue-700">
              您可以通过设置菜单自定义IDE界面布局、颜色主题和图标。{AppConfig.APP_NAME} IDE支持多种主题和布局选项，包括深色模式、高对比度模式和精简模式。
            </p>
            <div className="mt-4">
              <Link href="/docs/advanced/configuration" className="inline-flex items-center text-blue-800 font-medium hover:text-blue-900">
                查看配置文档
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 相关文档链接 */}
      <div className="mt-12 rounded-lg bg-gray-50 p-6">
        <h3 className="text-lg font-medium text-gray-900">相关文档</h3>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-5 w-5 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            <Link href="/docs/getting-started/quick-start" className="text-blue-600 hover:underline">
              快速入门指南
            </Link>
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-5 w-5 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            <Link href="/docs/features/code-completion" className="text-blue-600 hover:underline">
              AI代码补全功能
            </Link>
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-5 w-5 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            <Link href="/docs/advanced/configuration" className="text-blue-600 hover:underline">
              IDE配置与自定义
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
} 