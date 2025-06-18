import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Palette, Code, Layers, CheckCircle2, Eye, PaintBucket, UploadCloud, Brush, Type, Image as ImageIcon } from 'lucide-react';
import { AppConfig } from '@/lib/config';
import Link from "next/link";

export const metadata: Metadata = {
  title: `主题定制 API - ${AppConfig.APP_NAME} 文档`,
  description: `了解如何使用 ${AppConfig.APP_NAME} 的主题定制 API 来自定义 IDE 的外观`,
}

export default function ThemeCustomizationPage() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">主题定制 API</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          {AppConfig.APP_NAME} 提供了灵活的主题定制 API，允许开发者创建和自定义 IDE 的外观。
          通过主题系统，您可以定义颜色、字体、图标等视觉元素。
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Layers className="h-5 w-5 text-blue-500" />
            主题结构
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            主题由以下主要部分组成：
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <PaintBucket className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">颜色方案</p>
                <p className="text-sm text-gray-600">定义IDE各个部分的颜色，包括编辑器、侧边栏、状态栏等</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Type className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">字体设置</p>
                <p className="text-sm text-gray-600">自定义编辑器和界面元素使用的字体和字号</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <ImageIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">图标主题</p>
                <p className="text-sm text-gray-600">定制文件类型、功能按钮等的图标样式</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Layers className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">UI 组件样式</p>
                <p className="text-sm text-gray-600">自定义按钮、输入框、下拉菜单等UI组件的外观</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Palette className="h-5 w-5 text-blue-500" />
            创建自定义主题
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            以下是一个基本的主题定义示例：
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto">
            <pre className="text-sm">
{`// theme.json
{
  "name": "My Custom Theme",
  "type": "dark",
  "colors": {
    "editor.background": "#1E1E1E",
    "editor.foreground": "#D4D4D4",
    "activityBar.background": "#252526",
    "activityBar.foreground": "#FFFFFF"
  },
  "tokenColors": [
    {
      "name": "Keywords",
      "scope": ["keyword"],
      "settings": {
        "foreground": "#569CD6"
      }
    }
  ]
}`}
            </pre>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-500" />
            主题 API 参考
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <PaintBucket className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">颜色定义</h3>
              </div>
              <p className="text-sm text-gray-700">
                通过颜色ID和十六进制颜色值定义IDE各个部分的颜色。支持透明度设置和颜色变量引用。
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Type className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">字体配置</h3>
              </div>
              <p className="text-sm text-gray-700">
                设置编辑器和界面元素的字体系列、大小、粗细和样式。支持字体回退机制。
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <ImageIcon className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">图标定制</h3>
              </div>
              <p className="text-sm text-gray-700">
                自定义文件类型图标、功能按钮图标和状态指示器。支持SVG和PNG格式。
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">组件样式</h3>
              </div>
              <p className="text-sm text-gray-700">
                定义按钮、输入框、下拉菜单等UI组件的边框、背景、阴影和交互状态样式。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Brush className="h-5 w-5 text-blue-500" />
            主题开发工具
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            {AppConfig.APP_NAME} 提供了以下工具来帮助主题开发：
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <Eye className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">主题预览器</p>
                <p className="text-sm text-gray-600">实时查看主题更改效果，无需重新加载IDE</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <PaintBucket className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">颜色选择器</p>
                <p className="text-sm text-gray-600">直观地选择和管理主题中使用的颜色</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Layers className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">实时预览</p>
                <p className="text-sm text-gray-600">在编辑主题文件时立即查看变化效果</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">主题验证器</p>
                <p className="text-sm text-gray-600">检查主题文件的语法和结构是否正确</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <UploadCloud className="h-5 w-5 text-blue-500" />
            发布主题
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            完成主题开发后，您可以按照以下步骤发布：
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100">
              <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-700 font-semibold">1</div>
              <p className="text-gray-700">测试主题，确保在不同环境下显示正常</p>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100">
              <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-700 font-semibold">2</div>
              <p className="text-gray-700">打包主题文件和相关资源</p>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100">
              <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-700 font-semibold">3</div>
              <p className="text-gray-700">提交到 {AppConfig.APP_NAME} 主题市场供其他用户使用</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Alert className="bg-blue-50 border-blue-200">
        <AlertTitle className="text-blue-800 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
          </svg>
          提示
        </AlertTitle>
        <AlertDescription className="text-blue-700">
          建议在开发主题时考虑可访问性，确保颜色对比度符合 WCAG 标准。
        </AlertDescription>
      </Alert>
      
      {/* 底部行动号召 */}
      <div className="mt-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 p-8 text-white shadow-lg">
        <h2 className="text-2xl font-bold">打造您的专属主题</h2>
        <p className="mt-2 text-lg">
          利用{AppConfig.APP_NAME}的主题定制API，创建符合您个人风格或团队需求的IDE主题。
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/docs/api/plugin-development" className="rounded-md bg-white px-4 py-2 font-medium text-blue-700 hover:bg-blue-50">
            了解插件开发
          </Link>
          <Link href="/docs/integrations/plugin-system" className="rounded-md border border-white px-4 py-2 font-medium text-white hover:bg-blue-600">
            探索插件系统
          </Link>
        </div>
      </div>
    </div>
  );
} 