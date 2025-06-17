import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AppConfig } from '@/lib/config';
import { 
  GitBranch, Zap, GitCompare, GitMerge, 
  FileCode, TerminalSquare, Settings, Package, 
  ShieldCheck, RefreshCcw, History, MessageSquare,
  CheckSquare, GitPullRequest, BarChart
} from 'lucide-react';

export const metadata: Metadata = {
  title: '版本控制 | {AppConfig.APP_NAME}文档',
  description: '{AppConfig.APP_NAME}与Git等版本控制系统的集成功能介绍。',
};

export default function VersionControlPage() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">版本控制</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          {AppConfig.APP_NAME}提供了与Git等版本控制系统的深度集成，支持智能提交信息生成和冲突解决，提高团队协作效率。
        </p>
      </div>
      
      {/* 功能概述 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-blue-500" />
            功能概述
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            {AppConfig.APP_NAME}的版本控制功能将传统版本控制系统的能力与AI技术相结合，为开发者提供更智能、更高效的代码版本管理体验。无论是个人开发者还是大型团队，都能从这些功能中获益，简化工作流程，减少常见错误，提高协作效率。
          </p>
          
          <div className="mt-4">
            <h3 className="font-medium text-lg">支持的版本控制系统</h3>
            <ul className="mt-2 list-disc pl-6 text-gray-700">
              <li className="mb-2">
                <strong>Git</strong> - 全面支持，包括所有常用操作和高级功能
              </li>
              <li className="mb-2">
                <strong>Mercurial</strong> - 基本支持常用操作
              </li>
              <li className="mb-2">
                <strong>SVN (Subversion)</strong> - 基本支持主要功能
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
      
      {/* 主要特性 */}
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
              <MessageSquare className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">智能提交信息生成</p>
                <p className="text-sm text-gray-600">AI分析代码变更，自动生成详细、规范的提交信息，提高代码历史可读性</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <GitMerge className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">智能冲突解决</p>
                <p className="text-sm text-gray-600">AI辅助分析和解决合并冲突，提供智能建议，简化复杂合并场景</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <History className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">可视化历史浏览</p>
                <p className="text-sm text-gray-600">直观图形界面展示代码历史，清晰显示分支、合并关系和变更细节</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <BarChart className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">代码历史分析</p>
                <p className="text-sm text-gray-600">AI分析代码历史，识别热点文件、质量趋势和团队协作模式，提供洞察</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* 核心功能 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-blue-500" />
            核心功能
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 集成式Git操作界面 */}
          <div className="space-y-2">
            <h3 className="font-medium text-lg flex items-center gap-2">
              <TerminalSquare className="h-4 w-4 text-blue-600" />
              集成式Git操作界面
            </h3>
            <p className="text-gray-600">
              {AppConfig.APP_NAME}提供了直观的图形界面，让您无需离开编辑器即可执行所有常见的Git操作：
            </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 mt-2">
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-gray-700">初始化仓库、克隆远程仓库</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-gray-700">暂存和提交更改</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-gray-700">创建和切换分支</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-gray-700">推送、拉取和合并操作</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-gray-700">查看和管理标签</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-gray-700">处理存储（stash）</span>
              </div>
            </div>
          </div>
          
          {/* 可视化历史浏览 */}
          <div className="space-y-2">
            <h3 className="font-medium text-lg flex items-center gap-2">
              <History className="h-4 w-4 text-blue-600" />
              可视化历史浏览
            </h3>
            <p className="text-gray-600">
              通过直观的图形界面查看项目历史，帮助您更好地理解代码演进过程：
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>提交历史图表，显示分支和合并关系</li>
              <li>详细的提交信息查看</li>
              <li>文件历史追踪</li>
              <li>按作者、日期或内容筛选提交</li>
              <li>可视化比较任意两个提交之间的差异</li>
            </ul>
          </div>
          
          {/* AI辅助提交信息生成 */}
          <div className="space-y-2">
            <h3 className="font-medium text-lg flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-blue-600" />
              AI辅助提交信息生成
            </h3>
            <p className="text-gray-600">
              利用AI技术自动分析您的代码更改，生成高质量、信息丰富的提交信息：
            </p>
            <div className="mt-3 overflow-hidden rounded-lg border border-gray-200">
              <div className="bg-gray-50 px-4 py-2">
                <h4 className="text-sm font-medium text-gray-700">提交信息示例</h4>
              </div>
              <div className="p-4">
                <pre className="whitespace-pre-wrap text-sm text-gray-800">feat(auth): 实现基于JWT的身份验证系统

- 添加用户登录和注册API端点
- 实现JWT令牌生成和验证
- 添加密码哈希和安全存储
- 集成用户会话管理

相关任务: #AUTH-123</pre>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 mt-3">
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-sm text-gray-700">遵循团队约定的提交信息格式</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-sm text-gray-700">自动识别并包含相关任务编号</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-sm text-gray-700">支持自定义提交信息模板和规则</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-sm text-gray-700">多语言支持，可生成不同语言的提交信息</span>
              </div>
            </div>
          </div>
          
          {/* 智能冲突解决 */}
          <div className="space-y-2">
            <h3 className="font-medium text-lg flex items-center gap-2">
              <GitMerge className="h-4 w-4 text-blue-600" />
              智能冲突解决
            </h3>
            <p className="text-gray-600">
              AI辅助的冲突解决工具，帮助您更轻松地处理合并冲突：
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>直观的三向差异视图，清晰显示冲突</li>
              <li>AI分析冲突并提供智能解决建议</li>
              <li>自动识别简单冲突并提供一键解决选项</li>
              <li>保留冲突解决历史，用于类似情况</li>
              <li>冲突预防提示，在冲突发生前提醒</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* 高级功能 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Zap className="h-5 w-5 text-blue-500" />
            高级功能
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <GitBranch className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">多分支管理</h3>
              </div>
              <p className="text-sm text-gray-700">
                强大的分支管理功能，支持复杂的分支策略和工作流，包括可视化分支图、分支比较和分支策略模板。
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <GitPullRequest className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">代码评审集成</h3>
              </div>
              <p className="text-sm text-gray-700">
                与代码评审流程的无缝集成，支持创建和管理拉取请求、内联评论和AI辅助代码评审建议。
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <BarChart className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">变更分析</h3>
              </div>
              <p className="text-sm text-gray-700">
                深入分析代码变更，提供变更影响范围分析、潜在问题识别和代码质量变化趋势等洞察。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 使用方法 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <TerminalSquare className="h-5 w-5 text-blue-500" />
            使用方法
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-medium text-lg flex items-center gap-2">
              <GitBranch className="h-4 w-4 text-blue-600" />
              版本控制视图
            </h3>
            <p className="text-gray-600">
              <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">Ctrl+Shift+G</code>
              <span className="ml-2">打开版本控制视图</span>
            </p>
            <p className="text-gray-600">
              通过活动栏中的版本控制图标或使用快捷键打开版本控制视图。此视图提供对所有版本控制功能的访问，包括：
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>更改列表，显示已修改、已暂存和未跟踪的文件</li>
              <li>提交操作按钮和提交信息输入框</li>
              <li>分支选择器和分支操作</li>
              <li>同步状态和操作（拉取、推送）</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium text-lg flex items-center gap-2">
              <FileCode className="h-4 w-4 text-blue-600" />
              文件操作
            </h3>
            <p className="text-gray-600">
              在编辑器中处理文件时，可以通过以下方式执行版本控制操作：
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>变更指示器：编辑器左侧的行号旁显示变更指示器</li>
              <li>上下文菜单：右键菜单提供上下文相关的版本控制操作</li>
              <li>历史和比较：编辑器顶部的文件历史和比较按钮</li>
              <li>快捷键：通过快捷键执行常用版本控制操作</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium text-lg flex items-center gap-2">
              <TerminalSquare className="h-4 w-4 text-blue-600" />
              命令面板
            </h3>
            <p className="text-gray-600">
              <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">Ctrl+Shift+P</code>
              <span className="ml-2">打开命令面板</span>
            </p>
            <p className="text-gray-600">
              通过命令面板可以快速访问所有版本控制命令，输入"git"或"svn"等关键词可以筛选相关命令：
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="inline-block px-2 py-0.5 rounded-full bg-gray-200 text-sm">Git: 提交</span>
              <span className="inline-block px-2 py-0.5 rounded-full bg-gray-200 text-sm">Git: 拉取</span>
              <span className="inline-block px-2 py-0.5 rounded-full bg-gray-200 text-sm">Git: 推送</span>
              <span className="inline-block px-2 py-0.5 rounded-full bg-gray-200 text-sm">Git: 创建分支</span>
              <span className="inline-block px-2 py-0.5 rounded-full bg-gray-200 text-sm">Git: 切换分支</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI增强功能详解 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Zap className="h-5 w-5 text-blue-500" />
            AI增强功能详解
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h3 className="font-medium text-lg flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-blue-600" />
              智能提交信息生成
            </h3>
            <p className="text-gray-600">
              当您准备提交更改时，AI会分析您的代码变更，并生成描述性的提交信息。生成流程：
            </p>
            <ol className="list-decimal pl-6 text-gray-700">
              <li>在版本控制视图中暂存您的更改</li>
              <li>点击"生成提交信息"按钮或使用快捷键</li>
              <li>AI会分析更改并生成提交信息</li>
              <li>您可以根据需要编辑生成的信息</li>
              <li>确认并提交更改</li>
            </ol>
            
            <p className="text-gray-700">生成的提交信息通常包括：</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>简洁的标题：概括主要更改内容</li>
              <li>详细的描述：解释更改的原因和影响</li>
              <li>相关任务引用：自动关联相关问题或任务</li>
              <li>标准格式：遵循约定的提交信息格式</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-medium text-lg flex items-center gap-2">
              <GitMerge className="h-4 w-4 text-blue-600" />
              冲突解决助手
            </h3>
            <p className="text-gray-600">
              当遇到合并冲突时，AI冲突解决助手会帮助您更高效地解决问题：
            </p>
            <ol className="list-decimal pl-6 text-gray-700">
              <li>执行合并或变基操作时遇到冲突</li>
              <li>IDE自动打开冲突解决视图</li>
              <li>AI分析冲突并提供解决建议</li>
              <li>您可以选择接受建议、手动编辑或查看更多选项</li>
              <li>解决所有冲突后，完成合并操作</li>
            </ol>
            
            <p className="text-gray-700">AI在分析冲突时会考虑：</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>代码上下文和语义</li>
              <li>项目历史和类似冲突</li>
              <li>代码风格和最佳实践</li>
              <li>潜在的副作用和风险</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-medium text-lg flex items-center gap-2">
              <BarChart className="h-4 w-4 text-blue-600" />
              代码历史分析
            </h3>
            <p className="text-gray-600">
              AI可以分析项目的提交历史，提供有价值的见解：
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>热点文件识别</strong>：识别频繁变更的"热点"文件，可能需要重构</li>
              <li><strong>代码质量趋势</strong>：检测代码质量变化趋势和潜在问题</li>
              <li><strong>协作模式分析</strong>：分析团队协作模式和贡献分布</li>
              <li><strong>相关提交识别</strong>：识别与特定功能或问题相关的提交</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* 配置与自定义 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Settings className="h-5 w-5 text-blue-500" />
            配置与自定义
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">版本控制设置</h3>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">Ctrl+,</code>
                <span className="ml-1">打开设置面板</span>
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>默认提交信息模板</li>
                <li>自动暂存、提交和推送选项</li>
                <li>差异比较和合并工具配置</li>
                <li>忽略文件规则</li>
                <li>AI辅助功能的行为设置</li>
              </ul>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <GitBranch className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">Git配置</h3>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                IDE提供图形界面配置Git全局和项目级设置：
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>用户名和电子邮件</li>
                <li>默认分支名称</li>
                <li>行尾处理和编码设置</li>
                <li>凭证存储和身份验证</li>
                <li>钩子脚本管理</li>
              </ul>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <GitCompare className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">工作流模板</h3>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                预配置的工作流模板，适用于不同类型的项目和团队：
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li><strong>Git Flow</strong>：适合计划发布周期的项目</li>
                <li><strong>GitHub Flow</strong>：简化的持续部署工作流</li>
                <li><strong>GitLab Flow</strong>：结合环境分支的工作流</li>
                <li><strong>自定义工作流</strong>：根据团队需求定制</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 与其他功能的协同 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Package className="h-5 w-5 text-blue-500" />
            与其他功能的协同
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            版本控制功能与{AppConfig.APP_NAME}的其他功能紧密集成，形成完整的开发体验：
          </p>
          
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <a href="/docs/features/code-generation" className="text-blue-600 font-medium hover:underline flex items-center gap-2">
                <FileCode className="h-4 w-4" />代码生成
              </a>
              <p className="text-sm mt-1 text-gray-700">在生成代码后自动创建有意义的提交</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <a href="/docs/features/code-explanation" className="text-blue-600 font-medium hover:underline flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />代码解释
              </a>
              <p className="text-sm mt-1 text-gray-700">理解历史代码变更的原因和影响</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <a href="/docs/features/refactoring" className="text-blue-600 font-medium hover:underline flex items-center gap-2">
                <RefreshCcw className="h-4 w-4" />代码重构
              </a>
              <p className="text-sm mt-1 text-gray-700">在重构后生成清晰的提交记录</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 最佳实践 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <CheckSquare className="h-5 w-5 text-blue-500" />
            最佳实践
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert className="mb-4 bg-blue-50 border-blue-200">
            <AlertTitle className="text-blue-800">为获得最佳版本控制体验，请遵循以下建议</AlertTitle>
          </Alert>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <CheckSquare className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">小而频繁的提交</p>
                <p className="text-sm text-gray-600">每次提交专注于单一逻辑变更，便于理解和回滚。保持提交粒度小，更容易追踪变更历史。</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckSquare className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">有意义的提交信息</p>
                <p className="text-sm text-gray-600">利用AI生成详细的提交信息，但确保其准确反映您的意图。良好的提交信息对团队协作至关重要。</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckSquare className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">定期同步</p>
                <p className="text-sm text-gray-600">频繁拉取和推送更改，减少大型冲突的可能性。保持本地代码与远程仓库的同步。</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckSquare className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">使用分支</p>
                <p className="text-sm text-gray-600">为每个功能或修复创建专门的分支，保持主分支稳定。分支策略是高效团队协作的关键。</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckSquare className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">代码评审</p>
                <p className="text-sm text-gray-600">在合并前进行代码评审，利用AI辅助功能提高评审质量。评审是提高代码质量的重要环节。</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* 底部行动号召 */}
      <div className="mt-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 p-8 text-white shadow-lg">
        <h2 className="text-2xl font-bold">体验AI增强版本控制</h2>
        <p className="mt-2 text-lg">
          了解AI如何增强您的版本控制工作流，让提交更有意义，冲突解决更高效，代码历史更清晰。
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="/docs/tutorials/ai-version-control" className="rounded-md bg-white px-4 py-2 font-medium text-blue-700 hover:bg-blue-50">
            AI版本控制最佳实践
          </a>
        </div>
      </div>
    </div>
  );
} 
