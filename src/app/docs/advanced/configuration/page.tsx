import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Settings, FileJson, Layers, Code,
  Sliders, LayoutTemplate, Terminal, Lock,
  GitBranch, Languages, Palette, Package,
  CheckCircle2, User, Globe, Laptop
} from 'lucide-react';

export const metadata: Metadata = {
  title: '配置文件 | AI IDE文档',
  description: '了解如何通过配置文件自定义AI IDE的行为和功能。',
};

export default function ConfigurationPage() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">配置文件</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          AI IDE提供了灵活的配置选项，允许您自定义IDE的行为、外观和AI功能，以适应不同的项目需求和个人偏好。
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Layers className="h-5 w-5 text-blue-500" />
            配置系统概述
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            AI IDE采用分层的配置系统，使您能够在不同级别上自定义IDE行为。这种设计允许全局设置、用户偏好和项目特定需求共存，同时提供清晰的优先级规则来解决潜在的配置冲突。
          </p>

          <h3 className="text-lg font-medium text-gray-900 mb-4">配置层级</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <Laptop className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">工作区配置</p>
                <p className="text-sm text-gray-600">针对当前工作区的临时设置，不随项目共享，适合个人临时调整</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Code className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">项目配置</p>
                <p className="text-sm text-gray-600">特定项目的专用设置，通常存储在版本控制中并在团队成员间共享</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <User className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">用户配置</p>
                <p className="text-sm text-gray-600">特定用户的个人设置，适用于该用户打开的所有项目</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Globe className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">全局配置</p>
                <p className="text-sm text-gray-600">影响整个IDE行为的默认设置，为所有用户提供基础配置</p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600">
              当一个配置项在多个层级中定义时，优先级较高的层级会覆盖较低层级的设置。这使您可以在全局设置基础上进行逐级自定义。
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <FileJson className="h-5 w-5 text-blue-500" />
            配置文件位置与格式
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            所有配置文件都使用JSON格式，便于人工编辑和程序处理。各级配置文件的位置如下：
          </p>
          
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    配置类型
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Windows
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    macOS
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Linux
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900">
                    全局配置
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    %APPDATA%/ai-ide/config.json
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    ~/Library/Application Support/ai-ide/config.json
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    ~/.config/ai-ide/config.json
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900">
                    用户配置
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    %APPDATA%/ai-ide/user-settings.json
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    ~/Library/Application Support/ai-ide/user-settings.json
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    ~/.config/ai-ide/user-settings.json
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900">
                    项目配置
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600" colSpan={3}>
                    项目根目录/.ai-ide/config.json
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900">
                    工作区配置
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600" colSpan={3}>
                    项目根目录/.ai-ide/workspace.json
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <Alert className="mt-4 bg-blue-50 border-blue-200">
            <AlertTitle className="text-blue-800 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
              </svg>
              提示
            </AlertTitle>
            <AlertDescription className="text-blue-700">
              建议将项目配置文件添加到版本控制系统中，以便团队成员共享一致的配置，但工作区配置通常应添加到 .gitignore 文件中以避免干扰其他开发者的个人设置。
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Layers className="h-5 w-5 text-blue-500" />
            配置文件结构
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            AI IDE的配置文件采用分类嵌套结构，便于组织和访问相关设置。主要配置类别包括：
          </p>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="h-5 w-5 text-blue-600" />
                <span className="font-medium">editor</span>
              </div>
              <p className="text-xs text-gray-600">编辑器相关设置</p>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Sliders className="h-5 w-5 text-blue-600" />
                <span className="font-medium">ai</span>
              </div>
              <p className="text-xs text-gray-600">AI功能相关设置</p>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Palette className="h-5 w-5 text-blue-600" />
                <span className="font-medium">theme</span>
              </div>
              <p className="text-xs text-gray-600">界面主题相关设置</p>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="h-5 w-5 text-blue-600" />
                <span className="font-medium">terminal</span>
              </div>
              <p className="text-xs text-gray-600">终端相关设置</p>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <GitBranch className="h-5 w-5 text-blue-600" />
                <span className="font-medium">git</span>
              </div>
              <p className="text-xs text-gray-600">Git集成相关设置</p>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Languages className="h-5 w-5 text-blue-600" />
                <span className="font-medium">language</span>
              </div>
              <p className="text-xs text-gray-600">语言特定设置</p>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Package className="h-5 w-5 text-blue-600" />
                <span className="font-medium">extensions</span>
              </div>
              <p className="text-xs text-gray-600">插件相关设置</p>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="h-5 w-5 text-blue-600" />
                <span className="font-medium">security</span>
              </div>
              <p className="text-xs text-gray-600">安全相关设置</p>
            </div>
          </div>
          
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">配置示例</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto">
              <pre className="text-sm">
{`{
  "editor": {
    "fontFamily": "Fira Code, Consolas, 'Courier New', monospace",
    "fontSize": 14,
    "tabSize": 2,
    "insertSpaces": true,
    "wordWrap": "on",
    "lineNumbers": "on",
    "minimap": {
      "enabled": true,
      "maxColumn": 120
    },
    "formatOnSave": true,
    "bracketPairColorization": true
  },
  "ai": {
    "completion": {
      "enabled": true,
      "delay": 300,
      "model": "standard",
      "contextLines": 50,
      "multiline": true
    },
    "suggestions": {
      "enabled": true,
      "threshold": 0.7,
      "inlineHints": true
    }
  }
}`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Settings className="h-5 w-5 text-blue-500" />
            常用配置项详解
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">编辑器设置</h3>
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">配置项</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">默认值</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">说明</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">editor.fontFamily</td>
                    <td className="px-4 py-3 text-sm text-gray-600">string</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Consolas</td>
                    <td className="px-4 py-3 text-sm text-gray-600">编辑器字体，可指定多个备选字体</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">editor.fontSize</td>
                    <td className="px-4 py-3 text-sm text-gray-600">number</td>
                    <td className="px-4 py-3 text-sm text-gray-600">14</td>
                    <td className="px-4 py-3 text-sm text-gray-600">字体大小（像素）</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">editor.tabSize</td>
                    <td className="px-4 py-3 text-sm text-gray-600">number</td>
                    <td className="px-4 py-3 text-sm text-gray-600">4</td>
                    <td className="px-4 py-3 text-sm text-gray-600">制表符等效空格数</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">editor.insertSpaces</td>
                    <td className="px-4 py-3 text-sm text-gray-600">boolean</td>
                    <td className="px-4 py-3 text-sm text-gray-600">true</td>
                    <td className="px-4 py-3 text-sm text-gray-600">按Tab键时是否插入空格而非制表符</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">editor.wordWrap</td>
                    <td className="px-4 py-3 text-sm text-gray-600">string</td>
                    <td className="px-4 py-3 text-sm text-gray-600">"off"</td>
                    <td className="px-4 py-3 text-sm text-gray-600">自动换行模式："off"、"on"、"wordWrapColumn"或"bounded"</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">AI设置</h3>
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">配置项</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">默认值</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">说明</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">ai.completion.enabled</td>
                    <td className="px-4 py-3 text-sm text-gray-600">boolean</td>
                    <td className="px-4 py-3 text-sm text-gray-600">true</td>
                    <td className="px-4 py-3 text-sm text-gray-600">是否启用AI代码补全功能</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">ai.completion.model</td>
                    <td className="px-4 py-3 text-sm text-gray-600">string</td>
                    <td className="px-4 py-3 text-sm text-gray-600">"standard"</td>
                    <td className="px-4 py-3 text-sm text-gray-600">使用的AI模型："fast"、"standard"或"advanced"</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">ai.suggestions.threshold</td>
                    <td className="px-4 py-3 text-sm text-gray-600">number</td>
                    <td className="px-4 py-3 text-sm text-gray-600">0.7</td>
                    <td className="px-4 py-3 text-sm text-gray-600">AI建议的置信度阈值，低于此值的建议不显示</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">ai.privacy.sendCodeToCloud</td>
                    <td className="px-4 py-3 text-sm text-gray-600">boolean</td>
                    <td className="px-4 py-3 text-sm text-gray-600">true</td>
                    <td className="px-4 py-3 text-sm text-gray-600">是否允许将代码发送到云端AI服务</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-500" />
            常见配置场景示例
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            以下是一些常见场景的配置示例，可以根据自己的需求进行调整：
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <LayoutTemplate className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">代码样式配置</h3>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-sm">
                <pre className="text-sm">
{`{
  "editor": {
    "tabSize": 2,
    "insertSpaces": true,
    "formatOnSave": true,
    "formatOnType": true,
    "bracketPairColorization": true,
    "guides": {
      "indentation": true,
      "bracketPairs": true
    }
  }
}`}
                </pre>
              </div>
            </div>
            <div className="p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <Sliders className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">AI 功能配置</h3>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-sm">
                <pre className="text-sm">
{`{
  "ai": {
    "completion": {
      "enabled": true,
      "model": "advanced",
      "delay": 200,
      "contextLines": 100
    },
    "suggestions": {
      "enabled": true,
      "threshold": 0.8,
      "inlineHints": true
    }
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="bg-blue-50 border-blue-200">
        <AlertTitle className="text-blue-800 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5" />
          最佳实践
        </AlertTitle>
        <AlertDescription className="text-blue-700">
          为了提高团队协作效率，建议在项目中仅配置与项目直接相关的设置，而将个人偏好保留在用户配置中。这样可以确保团队成员共享关键设置，同时保持个性化的编辑体验。
        </AlertDescription>
      </Alert>
      
      {/* 底部行动号召 */}
      <div className="mt-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 p-8 text-white shadow-lg">
        <h2 className="text-2xl font-bold">优化您的开发体验</h2>
        <p className="mt-2 text-lg">
          利用AI IDE的强大配置系统，为您的工作流程创建完美的开发环境。
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="/docs/advanced/performance" className="rounded-md bg-white px-4 py-2 font-medium text-blue-700 hover:bg-blue-50">
            了解性能优化
          </a>
          <a href="/docs/advanced/custom-models" className="rounded-md border border-white px-4 py-2 font-medium text-white hover:bg-blue-600">
            探索自定义AI模型
          </a>
        </div>
      </div>
    </div>
  );
} 