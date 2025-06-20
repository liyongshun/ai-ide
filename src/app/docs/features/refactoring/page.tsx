import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsItem, TabsList } from "@/components/ui/tabs";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Code, ArrowUpRight, LayoutGrid, Command, Zap, RefreshCcw, GitCommit, Layers, ArrowRightLeft, Search, CheckCircle2, Settings, BookOpen, Users } from 'lucide-react';
import { AppConfig } from '@/lib/config';
import Link from "next/link";

export const metadata: Metadata = {
  title: `AI代码重构 | ${AppConfig.APP_NAME}文档`,
  description: `了解${AppConfig.APP_NAME}的智能代码重构功能，自动改进代码质量和结构。`,
};

export default function RefactoringPage() {
  return (
    <div className="space-y-8 opacity-70">
      {/* 顶部横幅提示功能未上线 */}
      <Alert className="border-yellow-300 bg-yellow-50">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-yellow-700">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          <AlertTitle className="ml-2 text-yellow-800 text-lg font-semibold">
            功能即将上线 - 智能重构功能目前还在开发中，敬请期待！
          </AlertTitle>
        </div>
      </Alert>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-500 sm:text-4xl">AI代码重构</h1>
        <p className="mt-4 text-lg leading-8 text-gray-500">
          {AppConfig.APP_NAME}的智能代码重构功能可以帮助您自动改进代码质量、优化结构，让您的代码更加简洁、高效和易于维护。
        </p>
      </div>

      <Card className="border-gray-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-500">功能概述</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">
            AI代码重构利用先进的代码分析和机器学习技术，能够识别代码中的潜在问题和改进空间，并提供智能化的重构建议。它不仅可以发现并修复常见的代码气味和反模式，还能根据最佳实践对代码结构进行优化，提高代码的可读性、性能和可维护性。
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <LayoutGrid className="h-5 w-5 text-blue-500" />
            功能概述
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            AI代码重构功能利用先进的代码分析和人工智能技术，帮助开发者改进现有代码的结构、可读性和性能，同时保持功能不变。通过智能识别代码中的优化机会，{AppConfig.APP_NAME}可以自动提出并应用重构建议，使代码更加清晰、高效和易于维护。
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
              <Search className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">智能代码分析</p>
                <p className="text-sm text-gray-600">自动识别代码中的设计问题、复杂性和优化机会</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <ArrowUpRight className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">重构建议</p>
                <p className="text-sm text-gray-600">提供针对性的重构建议，包括代码结构优化、性能改进和最佳实践</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <RefreshCcw className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">自动重构实现</p>
                <p className="text-sm text-gray-600">一键应用复杂的重构操作，如提取方法、重命名变量、简化条件等</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Code className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">代码预览</p>
                <p className="text-sm text-gray-600">在应用更改前预览重构结果，确保改动符合预期</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Layers className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">批量重构</p>
                <p className="text-sm text-gray-600">支持跨文件和项目范围的一致性重构</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <GitCommit className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">多语言支持</p>
                <p className="text-sm text-gray-600">支持包括JavaScript、TypeScript、Python、Java、C#、Go等在内的多种编程语言</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <RefreshCcw className="h-5 w-5 text-blue-500" />
            重构类型
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium">代码结构重构</h3>
            <ul className="grid gap-2 md:grid-cols-2 mt-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-sm"><strong>提取方法/函数</strong> - 将代码块提取为独立的方法或函数，提高代码复用性</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-sm"><strong>提取类/组件</strong> - 将相关功能提取为独立的类或组件，改善代码组织</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-sm"><strong>内联方法/变量</strong> - 将简单的方法或变量内联到调用处，简化代码</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-sm"><strong>移动方法/字段</strong> - 将方法或字段移动到更合适的类或模块</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-2 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium">代码质量重构</h3>
            <ul className="grid gap-2 md:grid-cols-2 mt-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-sm"><strong>重命名</strong> - 改进变量、方法、类的命名，使其更具描述性</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-sm"><strong>简化条件</strong> - 优化复杂的条件逻辑，提高可读性</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-sm"><strong>移除重复代码</strong> - 识别和合并重复的代码片段</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-sm"><strong>替换算法</strong> - 用更高效或更清晰的算法替换现有实现</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-2 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium">现代化重构</h3>
            <ul className="grid gap-2 md:grid-cols-2 mt-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-sm"><strong>语言特性更新</strong> - 利用新的语言特性改进代码（如将ES5代码更新为ES6+）</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-sm"><strong>API迁移</strong> - 将使用过时API的代码更新为使用现代API</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-sm"><strong>设计模式应用</strong> - 识别并应用适当的设计模式改进代码结构</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Command className="h-5 w-5 text-blue-500" />
            使用方法
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-medium text-lg flex items-center gap-2">
              <Search className="h-4 w-4 text-blue-600" />
              智能重构建议
            </h3>
            <p className="text-gray-600">
              {AppConfig.APP_NAME}会自动分析您的代码，并在编辑器中通过波浪线或图标标记潜在的重构机会。点击这些标记可以查看详细的重构建议和预览效果。
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium text-lg flex items-center gap-2">
              <ArrowRightLeft className="h-4 w-4 text-blue-600" />
              选择性重构
            </h3>
            <p className="text-gray-600">
              选择需要重构的代码块，然后通过右键菜单或快捷键（<code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">Cmd/Ctrl + Shift + R</code>）打开重构菜单，选择合适的重构操作。
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium text-lg flex items-center gap-2">
              <ArrowUpRight className="h-4 w-4 text-blue-600" />
              通过AI聊天重构
            </h3>
            <p className="text-gray-600">
              打开AI聊天界面（<code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">Cmd/Ctrl + L</code>），描述您想要进行的重构，如&quot;将这个函数拆分为更小的函数&quot;或&quot;优化这段代码的性能&quot;。AI将分析代码并提供重构建议。
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium text-lg flex items-center gap-2">
              <Layers className="h-4 w-4 text-blue-600" />
              批量重构
            </h3>
            <p className="text-gray-600">
              对于需要在多个文件中一致应用的重构（如重命名类或方法），可以使用批量重构功能，确保所有相关代码都得到更新。
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-500" />
            重构示例
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="example1">
            <TabsList>
              <TabsItem value="example1">提取方法</TabsItem>
              <TabsItem value="example2">简化条件逻辑</TabsItem>
            </TabsList>
            <TabsContent value="example1" className="space-y-4">
              <div>
                <p className="font-medium mb-2">重构前：</p>
                <pre className="bg-gray-50 p-4 rounded-md overflow-auto border text-sm">
                  <code>{`function calculateTotal(items) {
  let total = 0;
  let discount = 0;
  
  // 计算商品总价
  for (const item of items) {
    total += item.price * item.quantity;
  }
  
  // 计算折扣
  if (total > 1000) {
    discount = total * 0.1;
  } else if (total > 500) {
    discount = total * 0.05;
  }
  
  return total - discount;
}`}</code>
                </pre>
              </div>
              
              <div>
                <p className="font-medium mb-2">重构后：</p>
                <pre className="bg-blue-50 p-4 rounded-md overflow-auto border border-blue-100 text-sm">
                  <code>{`function calculateTotal(items) {
  const total = calculateSubtotal(items);
  const discount = calculateDiscount(total);
  return total - discount;
}

function calculateSubtotal(items) {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
}

function calculateDiscount(total) {
  if (total > 1000) {
    return total * 0.1;
  } else if (total > 500) {
    return total * 0.05;
  }
  return 0;
}`}</code>
                </pre>
              </div>
              <div className="p-3 bg-green-50 border border-green-100 rounded-md text-sm text-green-800">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium">重构改进：</p>
                    <ul className="list-disc list-inside mt-1 ml-1 space-y-1">
                      <li>提高了代码可读性和可维护性</li>
                      <li>分离了不同的职责到独立函数中</li>
                      <li>每个函数只做一件事，符合单一职责原则</li>
                      <li>便于未来单独测试或修改各个函数</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="example2" className="space-y-4">
              <div>
                <p className="font-medium mb-2">重构前：</p>
                <pre className="bg-gray-50 p-4 rounded-md overflow-auto border text-sm">
                  <code>{`function getUserStatus(user) {
  if (user.isActive === true) {
    if (user.isPremium === true) {
      if (user.subscriptionDays > 30) {
        return 'loyal-premium';
      } else {
        return 'new-premium';
      }
    } else {
      if (user.registrationDays > 90) {
        return 'loyal-basic';
      } else {
        return 'new-basic';
      }
    }
  } else {
    return 'inactive';
  }
}`}</code>
                </pre>
              </div>
              
              <div>
                <p className="font-medium mb-2">重构后：</p>
                <pre className="bg-blue-50 p-4 rounded-md overflow-auto border border-blue-100 text-sm">
                  <code>{`function getUserStatus(user) {
  if (!user.isActive) {
    return 'inactive';
  }
  
  const isLoyalUser = user.isPremium 
    ? user.subscriptionDays > 30 
    : user.registrationDays > 90;
    
  const userTier = user.isPremium ? 'premium' : 'basic';
  const loyaltyStatus = isLoyalUser ? 'loyal' : 'new';
  
  return \`\${loyaltyStatus}-\${userTier}\`;
}`}</code>
                </pre>
              </div>
              <div className="p-3 bg-green-50 border border-green-100 rounded-md text-sm text-green-800">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium">重构改进：</p>
                    <ul className="list-disc list-inside mt-1 ml-1 space-y-1">
                      <li>减少了嵌套条件，降低了代码复杂度</li>
                      <li>通过提前返回模式处理特殊情况</li>
                      <li>使用有意义的变量名提高可读性</li>
                      <li>使用模板字符串构建返回值，避免硬编码</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Zap className="h-5 w-5 text-blue-500" />
            高级功能
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Search className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">代码健康度分析</h3>
              </div>
              <p className="text-sm text-gray-600">
                {AppConfig.APP_NAME}可以对整个项目进行代码健康度分析，识别技术债务、复杂性热点和重构优先级，帮助您制定系统性的代码改进计划。
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">重构影响分析</h3>
              </div>
              <p className="text-sm text-gray-600">
                在应用重构前，AI会分析更改可能产生的影响范围，识别潜在的风险点，确保重构不会破坏现有功能。
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">自定义重构规则</h3>
              </div>
              <p className="text-sm text-gray-600">
                您可以定义自己的重构规则和代码风格偏好，AI将根据这些规则提供更符合您团队标准的重构建议。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <ArrowRightLeft className="h-5 w-5 text-blue-500" />
            与其他功能的协同
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            AI代码重构功能与{AppConfig.APP_NAME}的其他功能紧密集成，形成完整的开发体验：
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <Link href="/docs/features/code-generation" className="text-blue-600 font-medium hover:underline flex items-center gap-2">
                <Code className="h-4 w-4" />代码生成
              </Link>
              <p className="text-sm mt-1 text-gray-700">重构后生成更高质量的新代码</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <Link href="/docs/features/code-explanation" className="text-blue-600 font-medium hover:underline flex items-center gap-2">
                <BookOpen className="h-4 w-4" />代码解释
              </Link>
              <p className="text-sm mt-1 text-gray-700">在重构前深入理解代码逻辑</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <Link href="/docs/features/collaboration" className="text-blue-600 font-medium hover:underline flex items-center gap-2">
                <Users className="h-4 w-4" />协作功能
              </Link>
              <p className="text-sm mt-1 text-gray-700">在团队中共享和讨论重构方案</p>
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
            <AlertTitle className="text-blue-800">为获得最佳重构效果，请遵循以下建议</AlertTitle>
          </Alert>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">小步重构</p>
                <p className="text-sm text-gray-600">进行小规模、增量式的重构，而不是一次性大规模改动</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">保持测试</p>
                <p className="text-sm text-gray-600">确保有足够的测试覆盖，在重构前后运行测试验证功能</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">理解代码</p>
                <p className="text-sm text-gray-600">在重构前充分理解代码的功能和上下文，避免破坏业务逻辑</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">审查重构</p>
                <p className="text-sm text-gray-600">仔细审查AI提出的重构建议，确保符合项目需求和编码标准</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">文档更新</p>
                <p className="text-sm text-gray-600">重构后更新相关文档，确保文档与代码保持一致</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* 底部行动号召 */}
      <div className="mt-10 rounded-lg bg-gray-200 p-8 text-gray-600 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-500">敬请期待</h2>
        <p className="mt-2 text-lg">
          我们正在努力开发智能重构功能，为您带来更加高效的代码优化体验。
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <button disabled className="rounded-md bg-gray-300 px-4 py-2 font-medium text-gray-500 cursor-not-allowed">
            功能开发中
          </button>
        </div>
      </div>
    </div>
  );
} 