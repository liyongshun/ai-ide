import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AppConfig } from '@/lib/config';
import { Puzzle, CirclePlus, Settings, Package, LayoutGrid, Layers, Zap, Shield, Code, CheckCircle2, Terminal, Cloud, Bot, Database, RefreshCcw, FileCode, Users, BookOpen, Link } from 'lucide-react';

export const metadata: Metadata = {
  title: '插件系统 | {AppConfig.APP_NAME}文档',
  description: '{AppConfig.APP_NAME}强大的插件系统文档，扩展IDE功能和集成第三方工具。',
};

export default function PluginSystemPage() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">插件系统</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          了解{AppConfig.APP_NAME}的强大插件系统，通过安装、开发和管理插件来扩展IDE功能和集成第三方工具。
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <LayoutGrid className="h-5 w-5 text-blue-500" />
            功能概述
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            {AppConfig.APP_NAME}的插件系统提供了强大的扩展性，允许用户安装、配置和开发各种插件，以增强IDE功能、支持新的编程语言、集成第三方工具和服务。通过插件生态系统，您可以根据自己的工作流程和项目需求自定义IDE体验，提高开发效率。
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Zap className="h-5 w-5 text-blue-500" />
            主要特性
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <Package className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">插件市场</p>
                <p className="text-sm text-gray-600">访问丰富的插件生态系统，浏览、搜索和安装各种官方和社区开发的插件</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Settings className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">插件管理</p>
                <p className="text-sm text-gray-600">便捷地安装、更新、配置和禁用插件，管理插件依赖关系</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Layers className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">扩展点系统</p>
                <p className="text-sm text-gray-600">多样化的API和扩展点，允许插件修改和增强IDE的各个方面</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CirclePlus className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">插件开发工具</p>
                <p className="text-sm text-gray-600">完整的插件开发工具链和文档，支持快速创建和调试插件</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Shield className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">安全和隔离</p>
                <p className="text-sm text-gray-600">严格的安全模型和权限系统，确保插件不会危及用户数据或系统安全</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Cloud className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">云端同步</p>
                <p className="text-sm text-gray-600">跨设备自动同步插件配置和偏好设置，确保一致的开发环境</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Package className="h-5 w-5 text-blue-500" />
            插件类型
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium">语言和框架支持</h3>
            <p className="text-sm text-gray-700 mt-1">
              增加对新编程语言、框架和库的支持，包括语法高亮、代码补全、调试工具和特定框架的模板。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
              <div className="bg-white p-2 rounded border border-blue-100 text-xs text-center">TypeScript</div>
              <div className="bg-white p-2 rounded border border-blue-100 text-xs text-center">Python</div>
              <div className="bg-white p-2 rounded border border-blue-100 text-xs text-center">React</div>
              <div className="bg-white p-2 rounded border border-blue-100 text-xs text-center">Vue.js</div>
            </div>
          </div>
          
          <div className="space-y-2 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium">工具和服务集成</h3>
            <p className="text-sm text-gray-700 mt-1">
              与版本控制系统、CI/CD工具、项目管理软件、云服务和其他开发工具的集成，实现无缝工作流程。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
              <div className="bg-white p-2 rounded border border-blue-100 text-xs text-center">GitHub</div>
              <div className="bg-white p-2 rounded border border-blue-100 text-xs text-center">Docker</div>
              <div className="bg-white p-2 rounded border border-blue-100 text-xs text-center">AWS</div>
              <div className="bg-white p-2 rounded border border-blue-100 text-xs text-center">Jira</div>
            </div>
          </div>
          
          <div className="space-y-2 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium">AI增强插件</h3>
            <p className="text-sm text-gray-700 mt-1">
              扩展{AppConfig.APP_NAME}的智能功能，添加特定领域的AI助手、代码生成模板、自定义语言模型集成等。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
              <div className="bg-white p-2 rounded border border-blue-100 text-xs text-center">自定义模型</div>
              <div className="bg-white p-2 rounded border border-blue-100 text-xs text-center">领域专家</div>
              <div className="bg-white p-2 rounded border border-blue-100 text-xs text-center">代码分析</div>
              <div className="bg-white p-2 rounded border border-blue-100 text-xs text-center">安全扫描</div>
            </div>
          </div>
          
          <div className="space-y-2 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium">界面定制</h3>
            <p className="text-sm text-gray-700 mt-1">
              修改IDE界面外观和行为的插件，包括主题、布局、快捷键方案和自定义视图等。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
              <div className="bg-white p-2 rounded border border-blue-100 text-xs text-center">主题</div>
              <div className="bg-white p-2 rounded border border-blue-100 text-xs text-center">图标包</div>
              <div className="bg-white p-2 rounded border border-blue-100 text-xs text-center">布局</div>
              <div className="bg-white p-2 rounded border border-blue-100 text-xs text-center">快捷键</div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Terminal className="h-5 w-5 text-blue-500" />
            使用插件
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-medium text-lg flex items-center gap-2">
              <Package className="h-4 w-4 text-blue-600" />
              浏览和安装插件
            </h3>
            <p className="text-gray-600">
              通过IDE内置的插件市场（<code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">Cmd/Ctrl + Shift + X</code>）浏览可用插件，或搜索特定功能。插件详情页提供描述、功能列表、评分和用户评价，帮助您选择合适的插件。点击安装按钮即可一键安装插件。
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium text-lg flex items-center gap-2">
              <Settings className="h-4 w-4 text-blue-600" />
              配置插件
            </h3>
            <p className="text-gray-600">
              大多数插件安装后会提供自定义选项，可以在IDE的设置面板中进行配置。通过<code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">Cmd/Ctrl + ,</code>打开设置，导航到&quot;插件&quot;部分，选择需要配置的插件，调整其行为、外观和功能。
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium text-lg flex items-center gap-2">
              <RefreshCcw className="h-4 w-4 text-blue-600" />
              更新和管理插件
            </h3>
            <p className="text-gray-600">
              在插件管理界面中，您可以查看已安装的插件、检查更新、暂时禁用或完全卸载插件。系统会自动检查插件更新，也可以手动触发更新检查。对于不常用的插件，建议禁用而非卸载，以便需要时快速启用。
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-500" />
            开发插件
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
            <h3 className="font-medium mb-2 flex items-center gap-2">
              <CirclePlus className="h-4 w-4 text-blue-600" />
              快速开始
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-700">
                使用插件脚手架工具快速创建新插件项目，提供基本结构和示例代码：
              </p>
              <pre className="bg-gray-800 text-gray-100 p-3 rounded-md text-sm overflow-auto">
                <code>npx create-ai-ide-plugin my-awesome-plugin</code>
              </pre>
              <p className="text-sm text-gray-700">
                此命令会创建一个包含必要配置文件、依赖项和基本代码结构的新插件项目。
              </p>
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <FileCode className="h-4 w-4 text-blue-600" />
                插件结构
              </h3>
              <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-md border">
                <pre className="whitespace-pre-wrap">
{`my-awesome-plugin/
├── package.json       # 元数据和依赖
├── manifest.json      # 插件配置和扩展点
├── src/
│   ├── index.ts       # 入口点
│   ├── commands/      # 命令实现
│   └── views/         # UI组件
└── assets/            # 图标和资源`}</pre>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <Layers className="h-4 w-4 text-blue-600" />
                主要API和扩展点
              </h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><code className="bg-gray-100 px-1 py-0.5 rounded">commands</code>: 注册可从命令面板调用的命令</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><code className="bg-gray-100 px-1 py-0.5 rounded">views</code>: 创建自定义UI视图和面板</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><code className="bg-gray-100 px-1 py-0.5 rounded">languages</code>: 添加语言支持和智能功能</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><code className="bg-gray-100 px-1 py-0.5 rounded">aiProviders</code>: 扩展AI功能和模型集成</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="font-medium mb-3">基本插件示例</h3>
            <pre className="bg-gray-50 p-4 rounded-md overflow-auto border text-sm">
              <code>{`// manifest.json
{
  &quot;name&quot;: "hello-world",
  "displayName": "Hello World",
  "version": "1.0.0",
  "description": "我的第一个{AppConfig.APP_NAME}插件",
  "engines": {
    "ai-ide": "^1.0.0"
  },
  "contributes": {
    "commands": [
      {
        "command": "hello-world.sayHello",
        "title": "Hello World: 问好"
      }
    ]
  }
}

// src/index.ts
import * as ide from 'ai-ide-api';
import { AppConfig } from '@/lib/config';
import Link from "next/link";

export function activate(context) {
  console.log('插件"hello-world"已激活!');
  
  let disposable = ide.commands.registerCommand('hello-world.sayHello', () => {
    ide.window.showInformationMessage('Hello World!');
  });
  
  context.subscriptions.push(disposable);
}

export function deactivate() {
  console.log('插件&quot;hello-world&quot;已停用!');
}`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Bot className="h-5 w-5 text-blue-500" />
            AI集成
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            {AppConfig.APP_NAME}提供专门的API，允许插件开发者扩展和增强IDE的AI功能，实现更强大的智能辅助：
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="font-medium mb-2">自定义AI提供者</h3>
              <p className="text-sm text-gray-700">
                插件可以集成自定义语言模型或AI服务，为IDE提供额外的AI能力。您可以添加特定领域的AI模型，如针对特定编程语言或框架的专业模型。
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="font-medium mb-2">上下文增强</h3>
              <p className="text-sm text-gray-700">
                插件可以为AI提供额外的上下文信息，如项目特定的配置、文档或外部资源，帮助AI生成更准确、更相关的代码和建议。
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="font-medium mb-2">自定义AI命令</h3>
              <p className="text-sm text-gray-700">
                创建专门的AI命令，如&quot;优化数据库查询&quot;、&quot;生成单元测试&quot;或&quot;解释选定代码&quot;，为特定任务提供针对性的AI辅助。
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="font-medium mb-2">AI工作流自动化</h3>
              <p className="text-sm text-gray-700">
                构建复合AI工作流，将多个AI操作组合在一起，自动化复杂任务，如代码审查、文档生成或性能分析。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-500" />
            安全最佳实践
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert className="mb-4 bg-blue-50 border-blue-200">
            <AlertTitle className="text-blue-800">插件安全注意事项</AlertTitle>
            <AlertDescription className="text-blue-700">
              插件可以访问您的代码和IDE功能，请务必仅安装来自受信任来源的插件。
            </AlertDescription>
          </Alert>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">验证插件来源</p>
                <p className="text-sm text-gray-600">安装前验证插件发布者身份，优先选择官方认证的开发者</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">查看权限需求</p>
                <p className="text-sm text-gray-600">检查插件要求的权限，避免安装需要不必要权限的插件</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">阅读评价和下载量</p>
                <p className="text-sm text-gray-600">参考社区评价和下载统计，优先选择经过充分测试的流行插件</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">定期更新插件</p>
                <p className="text-sm text-gray-600">保持插件更新到最新版本，获取安全修复和功能改进</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Database className="h-5 w-5 text-blue-500" />
            推荐插件
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-blue-700">代码格式化增强</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">推荐</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                支持多种编程语言的高级代码格式化工具，提供自定义规则和团队共享配置。
              </p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>下载量: 350K+</span>
                <span className="flex items-center">
                  <svg className="w-3 h-3 text-yellow-400 mr-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  4.8/5
                </span>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-blue-700">Git增强工具</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">推荐</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                强大的Git集成工具，提供可视化分支管理、冲突解决助手和提交历史浏览。
              </p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>下载量: 420K+</span>
                <span className="flex items-center">
                  <svg className="w-3 h-3 text-yellow-400 mr-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  4.9/5
                </span>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-blue-700">AI测试生成器</h3>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">新上线</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                基于代码自动生成单元测试和集成测试，支持多种测试框架和覆盖率报告。
              </p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>下载量: 85K+</span>
                <span className="flex items-center">
                  <svg className="w-3 h-3 text-yellow-400 mr-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  4.7/5
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center">
            <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Package className="h-4 w-4" />
              浏览更多插件
            </a>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Puzzle className="h-5 w-5 text-blue-500" />
            社区和资源
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="font-medium mb-2 text-blue-800 flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-600" />
                插件开发者社区
              </h3>
              <p className="text-sm text-gray-700">
                加入活跃的插件开发者社区，分享经验、提问和协作开发插件。访问官方论坛和GitHub仓库，获取最新信息和帮助。
              </p>
              <Link href="/docs/api/plugin-development" className="inline-flex items-center mt-2 text-sm text-blue-600 hover:underline">
                加入社区
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </Link>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="font-medium mb-2 text-blue-800 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-blue-600" />
                学习资源
              </h3>
              <p className="text-sm text-gray-700">
                通过官方教程、示例项目和API文档学习插件开发。参加插件开发工作坊和网络研讨会，提升您的开发技能。
              </p>
              <Link href="/docs/api/plugin-development" className="inline-flex items-center mt-2 text-sm text-blue-600 hover:underline">
                浏览资源
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Layers className="h-5 w-5 text-blue-500" />
            相关功能
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <Link href="/docs/api/plugin-development" className="text-blue-600 font-medium hover:underline flex items-center gap-2">
                <Code className="h-4 w-4" />插件开发API
              </Link>
              <p className="text-sm mt-1 text-gray-700">了解如何开发自定义插件扩展IDE功能</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <Link href="/docs/integrations/third-party" className="text-blue-600 font-medium hover:underline flex items-center gap-2">
                <Link className="h-4 w-4" />第三方集成
              </Link>
              <p className="text-sm mt-1 text-gray-700">探索IDE与其他开发工具的集成能力</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <Link href="/docs/advanced/configuration" className="text-blue-600 font-medium hover:underline flex items-center gap-2">
                <Settings className="h-4 w-4" />高级配置
              </Link>
              <p className="text-sm mt-1 text-gray-700">自定义IDE行为和插件设置</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* 底部行动号召 */}
      <div className="mt-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 p-8 text-white shadow-lg">
        <h2 className="text-2xl font-bold">扩展您的IDE功能</h2>
        <p className="mt-2 text-lg">
          探索丰富的插件生态系统，或开发自己的插件，打造专属开发环境。
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/docs/getting-started/quick-start" className="rounded-md bg-white px-4 py-2 font-medium text-blue-700 hover:bg-blue-50">
            开始使用
          </Link>
          <Link href="/docs/api/plugin-development" className="rounded-md border border-white px-4 py-2 font-medium text-white hover:bg-blue-600">
            学习插件开发
          </Link>
        </div>
      </div>
    </div>
  );
} 