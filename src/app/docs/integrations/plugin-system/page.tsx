import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AppConfig } from '@/lib/config';
import { CirclePlus, Settings, Package, LayoutGrid, Layers, Zap, Shield, Code, CheckCircle2, Terminal, Bot, RefreshCcw, FileCode, Users, BookOpen, Link as LinkIcon, Server, Lock } from 'lucide-react';
import Link from "next/link";

export const metadata: Metadata = {
  title: '插件系统 | {AppConfig.APP_NAME}文档',
  description: '了解{AppConfig.APP_NAME}的插件系统，如何安装、使用和开发插件。',
};

export default function PluginSystemPage() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">插件系统</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          {AppConfig.APP_NAME}提供了强大的插件系统，允许您扩展和定制IDE功能，满足特定的开发需求。
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <LayoutGrid className="h-5 w-5 text-blue-500" />
            插件系统概览
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            {AppConfig.APP_NAME}的插件系统采用现代化的模块化架构设计，为开发者提供了强大而灵活的扩展能力。通过插件，您可以添加新的功能、集成外部服务、扩展AI能力，或者自定义IDE的界面和行为，使其更好地适应您的特定开发需求和工作流程。
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Zap className="h-5 w-5 text-blue-500" />
            核心功能
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <Layers className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">模块化架构</p>
                <p className="text-sm text-gray-600">基于现代化的扩展API，支持松耦合的功能扩展</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CirclePlus className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">丰富的扩展点</p>
                <p className="text-sm text-gray-600">提供多种扩展点，允许插件集成到IDE的各个方面</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Bot className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">AI能力增强</p>
                <p className="text-sm text-gray-600">允许插件扩展和定制{AppConfig.APP_NAME}的智能功能</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Package className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">统一的插件市场</p>
                <p className="text-sm text-gray-600">集中式平台，方便发现、安装和管理插件</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Shield className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">安全沙箱</p>
                <p className="text-sm text-gray-600">保护您的工作环境和代码安全</p>
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
            <h3 className="font-medium flex items-center gap-2">
              <CirclePlus className="h-4 w-4 text-blue-600" />
              功能扩展插件
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              这类插件为IDE添加新功能，如代码格式化工具、性能分析器、测试运行器等。它们通常会在IDE界面中添加新的命令、菜单项或面板，并提供专门的功能实现。
            </p>
          </div>
          
          <div className="space-y-2 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium flex items-center gap-2">
              <Code className="h-4 w-4 text-blue-600" />
              语言支持插件
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              为特定编程语言提供支持的插件，包括语法高亮、代码补全、错误检查、调试支持等功能。{AppConfig.APP_NAME}已内置支持多种主流语言，但通过插件可以添加更多专业或小众语言的支持。
            </p>
          </div>
          
          <div className="space-y-2 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium flex items-center gap-2">
              <Settings className="h-4 w-4 text-blue-600" />
              主题和界面插件
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              这些插件可以改变IDE的外观和感觉，包括颜色主题、图标集、布局调整等。它们可以帮助您创建更符合个人偏好或团队风格的开发环境。
            </p>
          </div>
          
          <div className="space-y-2 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium flex items-center gap-2">
              <Bot className="h-4 w-4 text-blue-600" />
              AI增强插件
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              专门设计用于增强{AppConfig.APP_NAME}智能功能的插件。它们可以为AI提供额外的上下文信息、领域特定知识、自定义提示模板或专门的代码生成能力，使AI更好地理解和支持特定领域的开发工作。
            </p>
          </div>
          
          <div className="space-y-2 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium flex items-center gap-2">
              <LinkIcon className="h-4 w-4 text-blue-600" />
              集成插件
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              将IDE与外部服务和工具集成的插件，如项目管理系统、CI/CD平台、云服务、数据库工具等。这些插件允许您直接在IDE中访问和控制这些外部服务，减少上下文切换。
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Layers className="h-5 w-5 text-blue-500" />
            插件架构
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            {AppConfig.APP_NAME}的插件架构基于以下核心概念：
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <CirclePlus className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">扩展点（Extension Points）</h3>
              </div>
              <p className="text-sm text-gray-700">
                IDE中预定义的接口，允许插件向特定功能区域贡献代码。主要包括命令、视图、编辑器增强、语言服务、AI上下文提供者和设置贡献。
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <RefreshCcw className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">事件系统（Event System）</h3>
              </div>
              <p className="text-sm text-gray-700">
                允许插件监听和响应IDE中发生的各种事件，如文件打开/保存、编辑操作、焦点变化等。插件可以注册事件监听器，在特定事件发生时执行自定义逻辑。
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Server className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">API接口（API Interfaces）</h3>
              </div>
              <p className="text-sm text-gray-700">
                IDE提供的一组稳定API，允许插件访问和操作IDE的各种功能和资源，如文件系统、编辑器、终端、调试器等。这些API接口设计遵循版本兼容性原则，确保插件在IDE更新后仍能正常工作。
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <FileCode className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">插件清单（Plugin Manifest）</h3>
              </div>
              <p className="text-sm text-gray-700">
                每个插件都需要提供一个清单文件（通常是plugin.json），描述插件的元数据、依赖关系、激活条件、贡献点等信息。IDE根据这些信息加载和初始化插件。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Settings className="h-5 w-5 text-blue-500" />
            插件管理
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-medium text-lg flex items-center gap-2">
              <CirclePlus className="h-4 w-4 text-blue-600" />
              安装插件
            </h3>
            <p className="text-gray-600">
              {AppConfig.APP_NAME}提供多种安装插件的方式：
            </p>
            <div className="mt-2 grid gap-2 md:grid-cols-3">
              <div className="bg-white p-3 rounded border border-gray-200 text-sm">
                <span className="font-medium block mb-1">插件市场</span>
                在IDE中打开插件市场，浏览、搜索并一键安装官方和社区插件
              </div>
              <div className="bg-white p-3 rounded border border-gray-200 text-sm">
                <span className="font-medium block mb-1">VSIX文件安装</span>
                支持从本地VSIX文件安装插件，适用于离线环境或未发布到市场的插件
              </div>
              <div className="bg-white p-3 rounded border border-gray-200 text-sm">
                <span className="font-medium block mb-1">从源码安装</span>
                从源代码仓库克隆插件项目，编译并安装到开发实例中进行测试
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium text-lg flex items-center gap-2">
              <Settings className="h-4 w-4 text-blue-600" />
              管理插件
            </h3>
            <p className="text-gray-600">
              在插件管理界面中，您可以查看已安装的插件列表、启用/禁用特定插件、更新插件到最新版本、卸载不再需要的插件、查看插件详情和配置选项，以及为插件设置工作区或全局级别的配置。
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Package className="h-5 w-5 text-blue-500" />
            常见插件类别
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="font-medium mb-2 text-blue-800 flex items-center gap-2">
                <Code className="h-4 w-4 text-blue-600" />
                开发工具
              </h3>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>代码质量工具</li>
                <li>测试工具</li>
                <li>调试增强</li>
                <li>代码导航</li>
              </ul>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="font-medium mb-2 text-blue-800 flex items-center gap-2">
                <FileCode className="h-4 w-4 text-blue-600" />
                语言和框架
              </h3>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>语言支持</li>
                <li>框架集成</li>
                <li>DSL支持</li>
              </ul>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="font-medium mb-2 text-blue-800 flex items-center gap-2">
                <Bot className="h-4 w-4 text-blue-600" />
                AI增强
              </h3>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>领域知识库</li>
                <li>自定义AI模型</li>
                <li>提示模板</li>
                <li>代码生成器</li>
              </ul>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="font-medium mb-2 text-blue-800 flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-600" />
                团队协作
              </h3>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>代码评审</li>
                <li>实时协作</li>
                <li>团队通信</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-500" />
            开发自己的插件
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            {AppConfig.APP_NAME}提供了完整的插件开发工具链和文档，使开发者能够创建自己的插件：
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <Terminal className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">开发环境设置</p>
                <p className="text-sm text-gray-600">使用插件生成器快速创建插件项目骨架，包含基本结构和配置文件。开发环境支持热重载，便于快速迭代和测试。</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <BookOpen className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">API文档</p>
                <p className="text-sm text-gray-600">详细的API参考文档，包括所有可用的扩展点、服务接口和事件类型。文档包含代码示例和最佳实践指南。</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Zap className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">调试支持</p>
                <p className="text-sm text-gray-600">内置的插件调试支持，允许在开发主机实例中运行和调试插件代码，设置断点、检查变量等。</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Package className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">发布流程</p>
                <p className="text-sm text-gray-600">简化的插件打包和发布流程，支持将插件发布到官方插件市场或通过私有渠道分发。</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-500" />
            安全与隐私
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert className="mb-4 bg-blue-50 border-blue-200">
            <AlertTitle className="text-blue-800">安全设计</AlertTitle>
            <AlertDescription className="text-blue-700">
              {AppConfig.APP_NAME}的插件系统设计时充分考虑了安全性和隐私保护。
            </AlertDescription>
          </Alert>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <Lock className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">权限模型</p>
                <p className="text-sm text-gray-600">插件需要明确声明所需的权限，用户可以在安装时审查这些权限</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Shield className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">沙箱执行</p>
                <p className="text-sm text-gray-600">插件在受限的沙箱环境中运行，限制对系统资源的访问</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">代码签名</p>
                <p className="text-sm text-gray-600">支持插件代码签名，验证插件来源和完整性</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <RefreshCcw className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">自动更新检查</p>
                <p className="text-sm text-gray-600">定期检查插件更新，及时修复安全漏洞</p>
              </div>
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
              <Zap className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">性能优化</p>
                <p className="text-sm text-gray-600">插件应当高效运行，避免不必要的资源消耗</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CirclePlus className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">渐进式激活</p>
                <p className="text-sm text-gray-600">使用延迟激活机制，仅在需要时加载插件功能</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Settings className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">遵循界面指南</p>
                <p className="text-sm text-gray-600">保持与IDE整体界面风格的一致性</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <BookOpen className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">提供清晰文档</p>
                <p className="text-sm text-gray-600">为用户提供详细的使用说明和配置指南</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* 底部行动号召 */}
      <div className="mt-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 p-8 text-white shadow-lg">
        <h2 className="text-2xl font-bold">开始使用插件系统</h2>
        <p className="mt-2 text-lg">
          探索丰富的插件生态系统，或开发自己的插件，打造专属开发环境。
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/docs/api/plugin-development" className="rounded-md bg-white px-4 py-2 font-medium text-blue-700 hover:bg-blue-50">
            学习插件开发
          </Link>
          <Link href="/docs/integrations/third-party" className="rounded-md border border-white px-4 py-2 font-medium text-white hover:bg-blue-600">
            探索第三方集成
          </Link>
        </div>
      </div>
    </div>
  );
} 