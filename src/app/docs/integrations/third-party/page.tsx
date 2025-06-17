import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AppConfig } from '@/lib/config';
import { 
  LayoutGrid, Zap, Terminal, CheckCircle2, Database, Cloud, 
  Server, FileCode, Link, Settings, Lock, Package, 
  GitMerge, BarChart2, Search, Shield
} from 'lucide-react';

export const metadata: Metadata = {
  title: '第三方工具集成 | {AppConfig.APP_NAME}文档',
  description: '{AppConfig.APP_NAME}与其他开发工具和服务的集成功能介绍。',
};

export default function ThirdPartyPage() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">第三方工具集成</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          {AppConfig.APP_NAME}提供了与多种第三方开发工具和服务的集成能力，让您能够在统一的环境中使用所需的各种工具。
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
            {AppConfig.APP_NAME}的第三方工具集成功能允许开发者直接在IDE环境中无缝使用各类开发工具和服务，无需频繁切换应用程序，提高工作效率并简化工作流程。通过智能API连接、上下文感知和AI辅助配置，IDE能够与外部工具建立深度集成，为开发者提供一站式开发体验。
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Zap className="h-5 w-5 text-blue-500" />
            支持的集成类别
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium flex items-center gap-2">
              <Terminal className="h-4 w-4 text-blue-600" />
              测试和质量工具
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              {AppConfig.APP_NAME}与主流测试框架和代码质量工具深度集成，让您可以直接在编辑器中运行测试、查看结果和修复问题。
            </p>
            <div className="grid gap-2 md:grid-cols-2 mt-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-sm"><strong>单元测试框架</strong> - 支持Jest、Mocha、Jasmine、PyTest等，提供内联测试结果显示和AI辅助测试编写</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-sm"><strong>代码质量工具</strong> - 集成ESLint、Prettier、SonarQube等，AI可解释问题并提供一键修复</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-2 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium flex items-center gap-2">
              <GitMerge className="h-4 w-4 text-blue-600" />
              CI/CD系统
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              直接在IDE中监控和控制持续集成/持续部署流程，无需切换到外部工具。
            </p>
            <div className="grid gap-2 md:grid-cols-2 mt-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-sm"><strong>流程监控</strong> - 实时查看Jenkins、GitHub Actions、GitLab CI、CircleCI等平台的构建和部署状态</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-sm"><strong>智能诊断</strong> - AI分析CI/CD失败原因并提供修复建议</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-2 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium flex items-center gap-2">
              <Cloud className="h-4 w-4 text-blue-600" />
              云服务
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              与主流云平台无缝集成，简化云资源管理和应用部署。
            </p>
            <div className="grid gap-2 md:grid-cols-2 mt-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-sm"><strong>资源管理</strong> - 直接在IDE中查看和管理AWS、Azure、Google Cloud等平台的云资源</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-sm"><strong>一键部署</strong> - 简化应用部署流程，支持Serverless函数、容器和传统应用部署</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-2 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium flex items-center gap-2">
              <BarChart2 className="h-4 w-4 text-blue-600" />
              项目管理
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              将任务管理与代码开发紧密结合，提高团队协作效率。
            </p>
            <div className="grid gap-2 md:grid-cols-2 mt-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-sm"><strong>任务跟踪</strong> - 集成Jira、GitHub Issues、Trello、Asana等，直接在IDE中查看和更新任务状态</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-sm"><strong>智能关联</strong> - 自动关联代码变更与相关任务，简化提交和代码审查流程</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-2 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium flex items-center gap-2">
              <Database className="h-4 w-4 text-blue-600" />
              数据库工具
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              在IDE中直接操作和管理数据库，简化开发流程。
            </p>
            <div className="grid gap-2 md:grid-cols-2 mt-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-sm"><strong>查询编辑器</strong> - 支持MongoDB、PostgreSQL、MySQL、Redis等，提供语法高亮和自动补全</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-sm"><strong>SQL生成</strong> - 通过自然语言描述生成复杂SQL查询</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-2 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium flex items-center gap-2">
              <FileCode className="h-4 w-4 text-blue-600" />
              API开发
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              简化API的设计、测试和文档生成流程。
            </p>
            <div className="grid gap-2 md:grid-cols-2 mt-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-sm"><strong>API测试</strong> - 集成Postman功能，直接在IDE中设计和执行API测试</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-sm"><strong>文档生成</strong> - 自动生成Swagger/OpenAPI文档，并提供实时预览</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Zap className="h-5 w-5 text-blue-500" />
            AI增强的集成体验
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            {AppConfig.APP_NAME}不仅提供基础的工具集成，还通过AI技术大幅增强集成体验：
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">智能配置</h3>
              </div>
              <p className="text-sm text-gray-700">
                AI能够分析项目结构和依赖，自动推荐合适的第三方工具并生成配置文件。例如，检测到React项目后，可以推荐并配置Jest测试框架、ESLint规则和适合的CI流程。
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Search className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">错误解析与修复</h3>
              </div>
              <p className="text-sm text-gray-700">
                当第三方工具报告错误或警告时，AI能够解析这些信息，用通俗易懂的语言解释问题原因，并提供具体的修复建议或直接执行修复操作。
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <GitMerge className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">工作流优化</h3>
              </div>
              <p className="text-sm text-gray-700">
                基于对开发者工作模式的学习，AI可以优化工具集成工作流，例如自动在合适的时机触发测试、提示代码提交，或根据当前任务上下文显示相关云资源信息。
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">自然语言控制</h3>
              </div>
              <p className="text-sm text-gray-700">
                通过自然语言指令控制第三方工具，例如"部署当前应用到测试环境"、"运行影响此文件的所有测试"或"显示生产环境中的错误日志"。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Settings className="h-5 w-5 text-blue-500" />
            集成设置与管理
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Package className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">集成市场</h3>
              </div>
              <p className="text-sm text-gray-700">
                {AppConfig.APP_NAME}提供集成市场，您可以浏览、安装和配置各类第三方工具集成。每个集成都提供详细的说明文档和配置向导。
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">凭证管理</h3>
              </div>
              <p className="text-sm text-gray-700">
                IDE提供安全的凭证存储系统，集中管理各类API密钥、访问令牌和账户信息，支持多种加密方式和权限控制。
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Link className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">自定义集成</h3>
              </div>
              <p className="text-sm text-gray-700">
                对于市场中未提供的工具，IDE支持通过API和脚本创建自定义集成，并可以将其发布到团队私有市场供团队成员使用。
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
          <Alert className="mb-4 bg-blue-50 border-blue-200">
            <AlertTitle className="text-blue-800">为获得最佳集成体验，请遵循以下建议</AlertTitle>
          </Alert>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">按需启用集成</p>
                <p className="text-sm text-gray-600">只启用当前项目实际需要的工具集成，避免界面过于复杂</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">利用工作区配置</p>
                <p className="text-sm text-gray-600">为不同项目创建专用工作区，配置各自所需的工具集成</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">定期更新集成</p>
                <p className="text-sm text-gray-600">保持集成插件为最新版本，以获得最佳功能和安全性</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">创建集成工作流</p>
                <p className="text-sm text-gray-600">组合多个工具集成创建自动化工作流，进一步提高效率</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Server className="h-5 w-5 text-blue-500" />
            常见问题
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">如何解决集成授权问题？</h3>
              <p className="text-sm text-gray-700">
                大多数第三方集成需要授权访问。在IDE的设置面板中，导航至"集成 {'>'}  凭证管理"，按照向导完成OAuth授权或添加API密钥。对于企业环境，可以联系管理员配置SSO或团队级别的授权。
              </p>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">如何自定义集成行为？</h3>
              <p className="text-sm text-gray-700">
                每个集成插件都提供配置选项，可以在"设置 {'>'} 集成"中进行调整。对于高级自定义，可以编辑工作区或用户配置文件中的集成部分，或使用集成提供的API创建自定义脚本。
              </p>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">集成是否支持离线工作？</h3>
              <p className="text-sm text-gray-700">
                部分集成支持离线模式，会在连接可用时同步数据。在设置中启用"离线支持"选项，IDE会缓存必要数据以支持离线工作。但某些功能（如云部署）在离线状态下不可用。
              </p>
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
          <p className="mb-4 text-gray-600">
            {AppConfig.APP_NAME}在设计第三方集成时充分考虑了安全性和隐私保护：
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">安全凭证存储</p>
                <p className="text-sm text-gray-600">所有API密钥和访问令牌都经过加密存储，确保敏感凭证安全</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">权限隔离</p>
                <p className="text-sm text-gray-600">第三方集成只能访问其功能所需的最小权限范围</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">数据传输加密</p>
                <p className="text-sm text-gray-600">与第三方服务的所有通信都通过加密通道进行</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">审计日志</p>
                <p className="text-sm text-gray-600">记录所有第三方集成的关键操作，便于安全审计和问题排查</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* 底部行动号召 */}
      <div className="mt-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 p-8 text-white shadow-lg">
        <h2 className="text-2xl font-bold">寻找特定集成？</h2>
        <p className="mt-2 text-lg">
          探索我们丰富的插件生态系统，或联系支持团队获取定制集成解决方案。
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="/docs/integrations/plugin-system" className="rounded-md bg-white px-4 py-2 font-medium text-blue-700 hover:bg-blue-50">
            查看插件系统文档
          </a>
          <a href="/docs/api/integration" className="rounded-md border border-white px-4 py-2 font-medium text-white hover:bg-blue-600">
            了解集成API
          </a>
        </div>
      </div>
    </div>
  );
} 