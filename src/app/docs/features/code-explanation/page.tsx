import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsItem, TabsList } from "@/components/ui/tabs";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Check, Code, BookOpen, Zap, ShieldCheck, GitCompare, BarChart2, Users, FileCode, Terminal, Layers } from 'lucide-react';
import { AppConfig } from '@/lib/config';
import Link from "next/link";

export const metadata: Metadata = {
  title: `AI代码解释 | ${AppConfig.APP_NAME}文档`,
  description: `了解${AppConfig.APP_NAME}的代码解释功能，快速理解复杂代码逻辑。`,
};

export default function CodeExplanationPage() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">AI代码解释</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          {AppConfig.APP_NAME}提供智能代码解释功能，帮助您快速理解复杂代码逻辑，提高代码阅读和维护效率。
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-500" />
            功能概述
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            AI代码解释功能利用先进的自然语言处理技术，为您分析和解释代码的功能、逻辑和实现细节。无论是理解他人编写的代码、维护遗留系统，还是学习新的编程概念，这一功能都能为您提供清晰、准确的解释，帮助您更快地掌握代码要点。
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
              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">代码功能解释</p>
                <p className="text-sm text-gray-600">清晰描述代码块的主要功能和目的</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">逻辑流程分析</p>
                <p className="text-sm text-gray-600">解析代码的执行流程，帮助理解复杂的条件判断和循环结构</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">算法解释</p>
                <p className="text-sm text-gray-600">详细说明代码中使用的算法原理和实现方式</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">变量和函数分析</p>
                <p className="text-sm text-gray-600">解释关键变量和函数的作用，以及它们之间的关系</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">潜在问题识别</p>
                <p className="text-sm text-gray-600">指出代码中可能存在的性能问题、边界情况或安全隐患</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
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
            <Terminal className="h-5 w-5 text-blue-500" />
            使用方法
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-medium text-lg">选择代码解释</h3>
            <p className="text-gray-600">
              在编辑器中，选择您想要理解的代码块，然后通过右键菜单或快捷键（<code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">Cmd/Ctrl + Shift + E</code>）选择&quot;解释代码&quot;选项。AI将分析所选代码并提供详细解释。
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium text-lg">通过聊天界面解释</h3>
            <p className="text-gray-600">
              打开AI聊天界面（<code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">Cmd/Ctrl + L</code>），选择代码块并询问&quot;解释这段代码&quot;或提出更具体的问题，如&quot;这个函数的目的是什么&quot;或&quot;这个算法的时间复杂度是多少&quot;。
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium text-lg">内联注释生成</h3>
            <p className="text-gray-600">
              选择代码块并使用命令&quot;为这段代码生成注释&quot;，AI将自动为代码添加详细的解释性注释，帮助您和团队成员更好地理解代码。
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <FileCode className="h-5 w-5 text-blue-500" />
            解释类型
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium">概要解释</h3>
              <p className="text-sm text-gray-700">
                提供代码的高级概述，包括主要功能、输入输出和关键逻辑，适合快速了解代码的整体目的。
              </p>
            </div>
            
            <div className="space-y-2 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium">详细解释</h3>
              <p className="text-sm text-gray-700">
                逐行或逐块分析代码，解释每个部分的具体功能和实现细节，适合深入理解复杂代码。
              </p>
            </div>
            
            <div className="space-y-2 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium">教学解释</h3>
              <p className="text-sm text-gray-700">
                以教学的方式解释代码中使用的编程概念、设计模式或算法，帮助学习和提高编程技能。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-500" />
            解释示例
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="example1">
            <TabsList>
              <TabsItem value="example1">函数解释</TabsItem>
              <TabsItem value="example2">算法解释</TabsItem>
            </TabsList>
            <TabsContent value="example1" className="space-y-4">
              <div>
                <p className="font-medium mb-2">代码：</p>
                <pre className="bg-gray-50 p-4 rounded-md overflow-auto border text-sm">
                  <code>{`function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}`}</code>
                </pre>
              </div>
              
              <div>
                <p className="font-medium mb-2">AI解释：</p>
                <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                  <p className="mb-2">这是一个<strong>防抖（debounce）函数</strong>，用于限制函数的执行频率，常用于处理用户输入、窗口调整等频繁触发的事件。</p>
                  <p className="font-medium mt-3 mb-1">参数说明：</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><code className="bg-blue-100 px-1.5 py-0.5 rounded text-sm">func</code>：需要被防抖的原始函数</li>
                    <li><code className="bg-blue-100 px-1.5 py-0.5 rounded text-sm">wait</code>：等待时间（毫秒），在这段时间内的多次调用会被合并为一次</li>
                    <li><code className="bg-blue-100 px-1.5 py-0.5 rounded text-sm">immediate</code>：布尔值，决定是在延迟开始前执行（true）还是延迟结束后执行（false）</li>
                  </ul>
                  <p className="font-medium mt-3 mb-1">工作原理：</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>函数返回一个闭包，保持对<code className="bg-blue-100 px-1.5 py-0.5 rounded text-sm">timeout</code>变量的引用</li>
                    <li>每次调用时，先清除之前的定时器（<code className="bg-blue-100 px-1.5 py-0.5 rounded text-sm">clearTimeout(timeout)</code>）</li>
                    <li>设置新的定时器，延迟<code className="bg-blue-100 px-1.5 py-0.5 rounded text-sm">wait</code>毫秒后执行<code className="bg-blue-100 px-1.5 py-0.5 rounded text-sm">later</code>函数</li>
                    <li>如果<code className="bg-blue-100 px-1.5 py-0.5 rounded text-sm">immediate</code>为true且当前没有等待中的定时器，则立即执行原函数</li>
                    <li>否则，等待定时器结束后在<code className="bg-blue-100 px-1.5 py-0.5 rounded text-sm">later</code>函数中执行原函数</li>
                  </ol>
                  <p className="mt-3">这种实现确保在频繁调用的情况下，函数只会在停止调用一段时间后执行一次（或者在首次调用时立即执行一次）。</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="example2" className="space-y-4">
              <div>
                <p className="font-medium mb-2">代码：</p>
                <pre className="bg-gray-50 p-4 rounded-md overflow-auto border text-sm">
                  <code>{`function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  
  return [...quickSort(left), ...middle, ...quickSort(right)];
}`}</code>
                </pre>
              </div>
              
              <div>
                <p className="font-medium mb-2">AI解释：</p>
                <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                  <p className="mb-2">这是一个<strong>快速排序（Quick Sort）算法</strong>的JavaScript实现，它是一种高效的分治排序算法。</p>
                  <p className="font-medium mt-3 mb-1">算法步骤：</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li><strong>基本情况检查</strong>：如果数组长度小于等于1，直接返回数组（已排序）</li>
                    <li><strong>选择基准值（pivot）</strong>：从数组中间位置选择一个元素作为基准值</li>
                    <li><strong>分区操作</strong>：
                      <ul className="list-disc pl-5 space-y-1 mt-1">
                        <li>将小于基准值的元素放入<code className="bg-blue-100 px-1.5 py-0.5 rounded text-sm">left</code>数组</li>
                        <li>将等于基准值的元素放入<code className="bg-blue-100 px-1.5 py-0.5 rounded text-sm">middle</code>数组</li>
                        <li>将大于基准值的元素放入<code className="bg-blue-100 px-1.5 py-0.5 rounded text-sm">right</code>数组</li>
                      </ul>
                    </li>
                    <li><strong>递归排序</strong>：递归地对<code className="bg-blue-100 px-1.5 py-0.5 rounded text-sm">left</code>和<code className="bg-blue-100 px-1.5 py-0.5 rounded text-sm">right</code>数组应用快速排序</li>
                    <li><strong>合并结果</strong>：将排序后的左侧数组、中间数组和右侧数组合并返回</li>
                  </ol>
                  <p className="font-medium mt-3 mb-1">时间复杂度：</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>平均情况：O(n log n)</li>
                    <li>最坏情况：O(n²)（当数组已经排序或接近排序时）</li>
                  </ul>
                  <p className="mt-2">空间复杂度：O(n)，这个实现使用了额外的数组空间。</p>
                  <p className="mt-2 text-gray-700 italic">注意：这种实现虽然简洁明了，但不是原地排序（in-place），因此空间效率不如传统的快速排序实现。</p>
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
                <GitCompare className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">代码比较解释</h3>
              </div>
              <p className="text-sm text-gray-600">
                AI可以比较两段代码，解释它们之间的差异和各自的优缺点，帮助您理解不同实现方式的影响。
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <BarChart2 className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">性能分析</h3>
              </div>
              <p className="text-sm text-gray-600">
                AI可以分析代码的时间和空间复杂度，指出潜在的性能瓶颈，并提供优化建议。
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">安全审查</h3>
              </div>
              <p className="text-sm text-gray-600">
                AI可以识别代码中可能存在的安全漏洞，如SQL注入、XSS攻击风险等，并提供修复建议。
              </p>
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
            AI代码解释功能与{AppConfig.APP_NAME}的其他功能紧密集成，形成完整的开发体验：
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <Link href="/docs/features/code-generation" className="text-blue-600 font-medium hover:underline flex items-center gap-2">
                <Code className="h-4 w-4" />代码生成
              </Link>
              <p className="text-sm mt-1 text-gray-700">先理解现有代码，再生成相似或改进的代码</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <Link href="/docs/features/refactoring" className="text-blue-600 font-medium hover:underline flex items-center gap-2">
                <GitCompare className="h-4 w-4" />代码重构
              </Link>
              <p className="text-sm mt-1 text-gray-700">在理解代码后进行有针对性的优化</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <Link href="/docs/features/collaboration" className="text-blue-600 font-medium hover:underline flex items-center gap-2">
                <Users className="h-4 w-4" />协作功能
              </Link>
              <p className="text-sm mt-1 text-gray-700">帮助团队成员快速理解彼此的代码</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Zap className="h-5 w-5 text-blue-500" />
            最佳实践
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert className="mb-4 bg-blue-50 border-blue-200">
            <AlertTitle className="text-blue-800">为获得最佳使用体验，请遵循以下建议</AlertTitle>
          </Alert>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">选择合适的代码范围</p>
                <p className="text-sm text-gray-600">选择功能完整的代码块（如完整的函数或类），以获得更准确的解释</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">提出具体问题</p>
                <p className="text-sm text-gray-600">询问特定方面的问题，如&quot;这个函数的边界条件是什么&quot;，可以获得更有针对性的解释</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">结合上下文</p>
                <p className="text-sm text-gray-600">提供足够的上下文信息，如导入的库或相关函数，帮助AI更准确地理解代码</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">验证解释</p>
                <p className="text-sm text-gray-600">始终批判性地评估AI的解释，特别是对于关键或复杂的代码部分</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* 底部行动号召 */}
      <div className="mt-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 p-8 text-white shadow-lg">
        <h2 className="text-2xl font-bold">让复杂代码变得清晰易懂</h2>
        <p className="mt-2 text-lg">
          使用AI代码解释功能，快速理解任何代码的逻辑和实现原理。
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/docs/getting-started/quick-start" className="rounded-md bg-white px-4 py-2 font-medium text-blue-700 hover:bg-blue-50">
            开始使用
          </Link>
          <Link href="/docs/features/code-generation" className="rounded-md border border-white px-4 py-2 font-medium text-white hover:bg-blue-600">
            探索代码生成功能
          </Link>
        </div>
      </div>
    </div>
  );
} 