import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { 
  Code, Terminal, FileCode, Package, Layers, Zap, 
  CheckCircle2, Settings, Server, GitBranch, Database,
  UploadCloud, BookOpen, Command
} from 'lucide-react';

export const metadata: Metadata = {
  title: '插件开发 API - Cursor 文档',
  description: '了解如何使用 Cursor 的插件开发 API 来扩展 IDE 功能',
}

export default function PluginDevelopmentPage() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">插件开发 API</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Cursor 提供了强大的插件开发 API，允许开发者扩展 IDE 的功能。通过插件系统，
          您可以添加新的命令、视图、语言支持等功能。
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Layers className="h-5 w-5 text-blue-500" />
            插件架构
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            Cursor 插件系统基于以下核心概念：
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <FileCode className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">插件清单（manifest）</p>
                <p className="text-sm text-gray-600">定义插件的元数据、功能和权限</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Command className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">命令注册</p>
                <p className="text-sm text-gray-600">创建可以从命令面板或菜单触发的操作</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Layers className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">视图扩展</p>
                <p className="text-sm text-gray-600">添加自定义UI元素到IDE界面</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Code className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">语言服务</p>
                <p className="text-sm text-gray-600">提供语言特定的功能如代码补全和诊断</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Terminal className="h-5 w-5 text-blue-500" />
            开发环境设置
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            要开始插件开发，您需要完成以下步骤：
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100">
              <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-700 font-semibold">1</div>
              <p className="text-gray-700">安装 Cursor IDE</p>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100">
              <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-700 font-semibold">2</div>
              <p className="text-gray-700">设置 Node.js 开发环境</p>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100">
              <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-700 font-semibold">3</div>
              <p className="text-gray-700">安装 Cursor 插件开发工具包</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-500" />
            创建第一个插件
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            以下是一个简单的插件示例：
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto">
            <pre className="text-sm">
{`// plugin.ts
import * as cursor from '@cursor/plugin-api';

export function activate(context: cursor.ExtensionContext) {
  // 注册命令
  let disposable = cursor.commands.registerCommand(
    'myPlugin.helloWorld',
    () => {
      cursor.window.showInformationMessage('Hello from my plugin!');
    }
  );

  context.subscriptions.push(disposable);
}`}
            </pre>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Server className="h-5 w-5 text-blue-500" />
            API 参考
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Command className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">commands</h3>
              </div>
              <p className="text-sm text-gray-700">
                注册和执行命令的API。允许插件创建可以通过命令面板、菜单或快捷键触发的功能。
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">window</h3>
              </div>
              <p className="text-sm text-gray-700">
                管理窗口和视图的API。提供创建和操作UI元素的功能，如显示通知、创建状态栏项目等。
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <FileCode className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">workspace</h3>
              </div>
              <p className="text-sm text-gray-700">
                访问工作区的API。允许插件读取和修改文件，监听文件变化，管理工作区配置等。
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Code className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">languages</h3>
              </div>
              <p className="text-sm text-gray-700">
                语言服务集成API。提供语法高亮、代码补全、诊断、代码操作等语言相关功能。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-blue-500" />
            最佳实践
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <BookOpen className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">遵循插件开发指南</p>
                <p className="text-sm text-gray-600">按照官方文档中的最佳实践和设计模式开发插件</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Code className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">使用类型安全</p>
                <p className="text-sm text-gray-600">利用TypeScript的类型系统确保代码质量和可维护性</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Zap className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">实现错误处理</p>
                <p className="text-sm text-gray-600">妥善处理异常情况，提供用户友好的错误信息</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Settings className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">优化性能</p>
                <p className="text-sm text-gray-600">确保插件高效运行，避免不必要的计算和资源消耗</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <UploadCloud className="h-5 w-5 text-blue-500" />
            发布插件
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            完成插件开发后，您可以按照以下步骤发布：
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100">
              <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-700 font-semibold">1</div>
              <p className="text-gray-700">测试插件，确保所有功能正常工作</p>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100">
              <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-700 font-semibold">2</div>
              <p className="text-gray-700">使用打包工具创建VSIX文件</p>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100">
              <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-700 font-semibold">3</div>
              <p className="text-gray-700">提交到Cursor插件市场进行审核和发布</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Alert className="bg-yellow-50 border-yellow-200">
        <AlertTitle className="text-yellow-800 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
          </svg>
          注意
        </AlertTitle>
        <AlertDescription className="text-yellow-700">
          插件 API 仍在积极开发中，某些功能可能会发生变化。请定期查看文档更新。
        </AlertDescription>
      </Alert>
      
      {/* 底部行动号召 */}
      <div className="mt-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 p-8 text-white shadow-lg">
        <h2 className="text-2xl font-bold">开始开发您的第一个插件</h2>
        <p className="mt-2 text-lg">
          利用Cursor强大的API，创建扩展IDE功能的插件，分享给全球开发者。
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="/docs/integrations/plugin-system" className="rounded-md bg-white px-4 py-2 font-medium text-blue-700 hover:bg-blue-50">
            了解插件系统
          </a>
          <a href="/docs/api/theme-customization" className="rounded-md border border-white px-4 py-2 font-medium text-white hover:bg-blue-600">
            探索主题定制
          </a>
        </div>
      </div>
    </div>
  )
} 