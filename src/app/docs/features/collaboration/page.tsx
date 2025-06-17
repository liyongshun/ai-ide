import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AppConfig } from '@/lib/config';
import { 
  Users, UserPlus, GitBranch, MessageSquare, Zap, BookOpen, Layers, Shield,
  Share2, Code, CheckCircle2, Eye, Lock, MessagesSquare, GitMerge, Database,
  Search, FileCode, GitPullRequest
} from 'lucide-react';

export const metadata: Metadata = {
  title: '协作功能 | {AppConfig.APP_NAME}文档',
  description: '{AppConfig.APP_NAME}团队协作功能文档，支持多人实时编码和AI辅助。',
};

export default function CollaborationPage() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">协作功能</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          了解{AppConfig.APP_NAME}的团队协作功能，支持多人实时编码、共享AI辅助和高效团队沟通。
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-500" />
            功能概述
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            {AppConfig.APP_NAME}的协作功能将实时多人编辑与AI辅助相结合，为团队提供无缝的协作体验。无论团队成员身处何地，都能共同编写代码、共享AI生成的内容、进行代码评审，并通过内置通信工具保持沟通，大幅提高团队开发效率和协作质量。
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
              <Users className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">实时多人编辑</p>
                <p className="text-sm text-gray-600">多名开发者可以同时编辑同一文件，实时查看彼此的更改</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Share2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">AI辅助共享</p>
                <p className="text-sm text-gray-600">团队成员可以共享和协作使用AI生成的代码、解释和建议</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MessageSquare className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">内置代码评审</p>
                <p className="text-sm text-gray-600">直接在IDE中进行代码评审，添加注释和讨论</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <GitMerge className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">智能冲突解决</p>
                <p className="text-sm text-gray-600">AI辅助解决代码冲突，提供合并建议</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Database className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">团队知识库</p>
                <p className="text-sm text-gray-600">自动收集和组织团队编码知识，形成可搜索的知识库</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <BookOpen className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">协作上下文共享</p>
                <p className="text-sm text-gray-600">共享编码上下文，帮助团队成员快速理解项目状态</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-500" />
            实时协作编辑
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <UserPlus className="h-5 w-5 text-blue-600" />
              <h3 className="font-medium">多人同步编辑</h3>
            </div>
            <p className="text-sm text-gray-700">
              多名开发者可以同时编辑同一文件，每个人的光标位置和选择区域都会以不同颜色显示，方便团队成员了解彼此的工作焦点。所有更改会实时同步到所有参与者的编辑器中，无需手动刷新或合并。
            </p>
          </div>
          
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="h-5 w-5 text-blue-600" />
              <h3 className="font-medium">编辑状态指示</h3>
            </div>
            <p className="text-sm text-gray-700">
              IDE会显示当前正在编辑文件的所有团队成员，包括他们的在线状态、当前编辑位置和最近的更改。这有助于避免重复工作和潜在冲突。
            </p>
          </div>
          
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="h-5 w-5 text-blue-600" />
              <h3 className="font-medium">权限控制</h3>
            </div>
            <p className="text-sm text-gray-700">
              项目管理员可以设置不同级别的访问权限，如只读、评论或编辑权限，确保团队成员只能访问和修改他们被授权的内容。
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Share2 className="h-5 w-5 text-blue-500" />
            AI辅助共享
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">共享AI生成内容</h3>
              </div>
              <p className="text-sm text-gray-600">
                当团队成员使用AI生成代码或获取解释时，可以选择将这些内容共享给团队其他成员。共享的AI生成内容会在团队工作区中可见，其他成员可以查看、评论或进一步修改。
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">协作提示</h3>
              </div>
              <p className="text-sm text-gray-600">
                团队成员可以共同编写和改进AI提示，通过集体智慧优化AI输出。系统会记录成功的提示模式，帮助团队逐步建立最适合项目需求的提示库。
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MessagesSquare className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">AI会话共享</h3>
              </div>
              <p className="text-sm text-gray-600">
                开发者可以共享完整的AI对话会话，让团队成员了解问题解决的思路和过程。这对于知识传递和团队学习特别有价值。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-blue-500" />
            代码评审与讨论
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FileCode className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">内联评论</h3>
              </div>
              <p className="text-sm text-gray-600">
                团队成员可以在代码行旁添加评论，讨论特定代码片段的实现、潜在问题或改进建议。评论支持Markdown格式，可以包含代码示例、链接和图片。
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">AI辅助评审</h3>
              </div>
              <p className="text-sm text-gray-600">
                AI可以自动分析提交的代码，识别潜在问题、风格不一致或可能的bug，并提供改进建议。这些AI评审结果可以作为正式代码评审的补充，提高评审效率和质量。
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <GitPullRequest className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">评审请求</h3>
              </div>
              <p className="text-sm text-gray-600">
                开发者可以直接在IDE中创建评审请求，指定评审者和评审范围。评审者会收到通知，并可以在IDE中完成评审过程，无需切换到其他工具。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <GitMerge className="h-5 w-5 text-blue-500" />
            智能冲突解决
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium flex items-center gap-2">
                <Eye className="h-4 w-4 text-blue-600" />
                冲突预警
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                当多人同时编辑相同或相关代码区域时，IDE会实时显示潜在冲突警告，帮助团队成员提前协调工作，避免冲突发生。
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium flex items-center gap-2">
                <Zap className="h-4 w-4 text-blue-600" />
                AI辅助合并
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                当发生代码冲突时，AI会分析冲突内容和上下文，提供智能合并建议。它不仅考虑语法正确性，还会尝试理解代码意图，提供最合理的解决方案。
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium flex items-center gap-2">
                <MessagesSquare className="h-4 w-4 text-blue-600" />
                冲突解决对话
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                对于复杂冲突，系统支持相关开发者直接在冲突处进行实时讨论，共同决定最佳解决方案。讨论历史会被保存，作为决策依据的记录。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Database className="h-5 w-5 text-blue-500" />
            团队知识库
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-blue-600" />
                自动知识收集
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                系统会自动收集团队在开发过程中产生的有价值信息，如常见问题解决方案、代码模式、架构决策等，构建团队专属知识库。
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium flex items-center gap-2">
                <Search className="h-4 w-4 text-blue-600" />
                智能搜索与推荐
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                开发者可以通过自然语言查询团队知识库，AI会理解查询意图，返回最相关的结果。系统还会根据当前编码上下文，主动推荐可能有用的团队知识。
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                知识贡献与评分
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                团队成员可以主动贡献知识到知识库，其他成员可以对内容进行评分和完善，确保知识库内容的质量和时效性。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-500" />
            协作上下文共享
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-blue-700">项目状态共享</h3>
              <p className="text-sm text-gray-600 mt-2">
                团队成员可以共享当前的项目状态，包括正在处理的任务、遇到的问题和解决进展，帮助其他成员快速了解项目情况。
              </p>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-blue-700">开发环境同步</h3>
              <p className="text-sm text-gray-600 mt-2">
                新加入的团队成员可以快速同步项目的开发环境配置，包括依赖项、工具链和设置，减少环境配置的时间和问题。
              </p>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-blue-700">协作会话</h3>
              <p className="text-sm text-gray-600 mt-2">
                团队可以创建临时或持久的协作会话，邀请相关成员共同解决特定问题。会话中的所有交流和代码更改都会被记录，便于后续参考。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-blue-500" />
            与版本控制系统集成
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            {AppConfig.APP_NAME}的协作功能与主流版本控制系统（如Git）深度集成，支持以下功能：
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">直接在IDE中执行常见版本控制操作，如提交、推送、拉取和合并</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">可视化分支历史和变更比较</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">AI辅助生成高质量的提交信息</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">自动关联代码变更与任务管理系统中的任务</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-blue-500" />
            协作最佳实践
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert className="mb-4 bg-blue-50 border-blue-200">
            <AlertTitle className="text-blue-800">为提高团队协作效率，请遵循以下实践</AlertTitle>
          </Alert>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">定期同步</p>
                <p className="text-sm text-gray-600">鼓励团队成员定期同步和推送更改，避免大规模冲突</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">明确分工</p>
                <p className="text-sm text-gray-600">使用项目管理工具明确任务分配，减少重复工作</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">代码标准</p>
                <p className="text-sm text-gray-600">建立并遵循一致的代码风格和命名约定</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">积极沟通</p>
                <p className="text-sm text-gray-600">利用内置通信工具保持团队沟通，特别是处理复杂或关键部分时</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">知识共享</p>
                <p className="text-sm text-gray-600">主动将个人解决方案和经验添加到团队知识库</p>
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
          <p className="mb-4 text-gray-600">
            {AppConfig.APP_NAME}的协作功能设计时充分考虑了安全性和隐私保护：
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="flex items-center p-3 bg-green-50 rounded-lg border border-green-100">
              <Lock className="h-5 w-5 text-green-600 mr-2" />
              <p className="text-sm text-green-700">所有协作通信采用端到端加密</p>
            </div>
            <div className="flex items-center p-3 bg-green-50 rounded-lg border border-green-100">
              <Shield className="h-5 w-5 text-green-600 mr-2" />
              <p className="text-sm text-green-700">细粒度的权限控制，确保敏感代码只对授权人员可见</p>
            </div>
            <div className="flex items-center p-3 bg-green-50 rounded-lg border border-green-100">
              <FileCode className="h-5 w-5 text-green-600 mr-2" />
              <p className="text-sm text-green-700">完整的操作审计日志，记录所有重要协作活动</p>
            </div>
            <div className="flex items-center p-3 bg-green-50 rounded-lg border border-green-100">
              <Database className="h-5 w-5 text-green-600 mr-2" />
              <p className="text-sm text-green-700">可配置的数据保留策略，符合企业合规要求</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Layers className="h-5 w-5 text-blue-500" />
            与其他功能的协同
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            协作功能与{AppConfig.APP_NAME}的其他功能紧密集成，形成完整的开发体验：
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <a href="/docs/features/code-generation" className="text-blue-600 font-medium hover:underline flex items-center gap-2">
                <Code className="h-4 w-4" />代码生成
              </a>
              <p className="text-sm mt-1 text-gray-700">团队共同利用AI生成和改进代码</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <a href="/docs/features/code-explanation" className="text-blue-600 font-medium hover:underline flex items-center gap-2">
                <BookOpen className="h-4 w-4" />代码解释
              </a>
              <p className="text-sm mt-1 text-gray-700">帮助团队成员理解彼此的代码</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <a href="/docs/features/refactoring" className="text-blue-600 font-medium hover:underline flex items-center gap-2">
                <GitMerge className="h-4 w-4" />代码重构
              </a>
              <p className="text-sm mt-1 text-gray-700">团队共同参与大规模代码改进</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <a href="/docs/integrations/version-control" className="text-blue-600 font-medium hover:underline flex items-center gap-2">
                <GitBranch className="h-4 w-4" />版本控制
              </a>
              <p className="text-sm mt-1 text-gray-700">管理团队代码变更</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* 底部行动号召 */}
      <div className="mt-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 p-8 text-white shadow-lg">
        <h2 className="text-2xl font-bold">提升您的团队协作效率</h2>
        <p className="mt-2 text-lg">
          使用{AppConfig.APP_NAME}的协作功能，让团队成员无缝协作，共同创造优秀的代码。
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="/docs/getting-started/quick-start" className="rounded-md bg-white px-4 py-2 font-medium text-blue-700 hover:bg-blue-50">
            开始使用
          </a>
          <a href="/docs/integrations/version-control" className="rounded-md border border-white px-4 py-2 font-medium text-white hover:bg-blue-600">
            探索版本控制集成
          </a>
        </div>
      </div>
    </div>
  );
} 