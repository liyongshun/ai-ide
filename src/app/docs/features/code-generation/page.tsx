import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { 
  Code, MessageSquare, Zap, BookOpen, FileCode, Terminal, 
  Settings, Package, ArrowRightLeft, CirclePlus, CheckCircle2, 
  Layers, Lock, RefreshCcw, LayoutGrid
} from 'lucide-react';
import { AppConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: `AI代码生成 | ${AppConfig.APP_NAME}文档`,
  description: `了解${AppConfig.APP_NAME}的代码生成功能，通过自然语言描述自动生成代码。`,
};

export default function CodeGenerationPage() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">AI代码生成</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          {AppConfig.APP_NAME}的代码生成功能允许您通过简单的自然语言描述自动生成代码，大幅提高开发效率。
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
            AI代码生成功能利用先进的自然语言处理和机器学习技术，将您的需求描述转化为高质量的代码。无论是创建新功能、实现算法还是构建完整应用，AI都能理解您的意图并生成符合最佳实践的代码，帮助您更快地将想法转化为现实。
          </p>
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
                <p className="font-medium">自然语言到代码转换</p>
                <p className="text-sm text-gray-600">只需用日常语言描述您需要实现的功能，AI即可生成相应高质量代码</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <Code className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">多语言支持</p>
                <p className="text-sm text-gray-600">支持包括JavaScript、TypeScript、Python、Java、C#、Go等在内的多种编程语言</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <Layers className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">上下文感知</p>
                <p className="text-sm text-gray-600">分析您的项目结构、已有代码和导入的库，生成与项目风格一致的代码</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <CirclePlus className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">智能补全</p>
                <p className="text-sm text-gray-600">根据您开始编写的代码自动提供后续代码建议，预测您的编码意图</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <BookOpen className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">代码解释</p>
                <p className="text-sm text-gray-600">为生成的代码提供详细解释，帮助您理解实现原理和代码逻辑</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <FileCode className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">多文件生成</p>
                <p className="text-sm text-gray-600">支持同时生成多个相关文件，创建完整功能模块或应用程序结构</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 使用方法 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Terminal className="h-5 w-5 text-blue-500" />
            使用方法
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-medium text-lg flex items-center gap-2">
              <Code className="h-4 w-4 text-blue-600" />
              内联代码生成
            </h3>
            <p className="text-gray-600">
              在编辑器中，通过快捷键 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">Cmd/Ctrl + K</code> 打开内联AI提示栏，输入您想要实现的功能描述。AI将直接在当前位置生成相应代码。
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium text-lg flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-blue-600" />
              聊天界面代码生成
            </h3>
            <p className="text-gray-600">
              通过{AppConfig.APP_NAME}的聊天界面（<code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">Cmd/Ctrl + L</code>），您可以与AI进行更复杂的交互，描述详细需求，并通过多轮对话逐步完善生成的代码。
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium text-lg flex items-center gap-2">
              <Layers className="h-4 w-4 text-blue-600" />
              多文件代码生成（Composer）
            </h3>
            <p className="text-gray-600">
              使用Composer功能（<code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">Cmd/Ctrl + I</code>），您可以描述更复杂的功能需求，生成跨越多个文件的完整实现，如完整的组件、模块或应用程序。
            </p>
          </div>
        </CardContent>
      </Card>
      
      {/* 代码生成示例 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <FileCode className="h-5 w-5 text-blue-500" />
            代码生成示例
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <div className="bg-gray-50 px-4 py-3">
              <h3 className="text-md font-medium text-gray-900">示例1：生成一个简单函数</h3>
            </div>
            <div className="p-4">
              <div className="mb-3">
                <p className="mb-2 text-sm font-medium text-gray-700">提示:</p>
                <div className="rounded-md bg-blue-50 p-3">
                  <code className="text-sm text-gray-800">创建一个JavaScript函数，接收一个数组，返回数组中的最大值和最小值</code>
                </div>
              </div>
              
              <div>
                <p className="mb-2 text-sm font-medium text-gray-700">生成结果:</p>
                <div className="rounded-md bg-gray-50 p-3">
                  <pre className="text-sm text-gray-800 overflow-auto">{`function findMinMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return { min: undefined, max: undefined };
  }
  
  let min = arr[0];
  let max = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  return { min, max };
}`}</pre>
                </div>
              </div>
            </div>
          </div>
          
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <div className="bg-gray-50 px-4 py-3">
              <h3 className="text-md font-medium text-gray-900">示例2：生成React组件</h3>
            </div>
            <div className="p-4">
              <div className="mb-3">
                <p className="mb-2 text-sm font-medium text-gray-700">提示:</p>
                <div className="rounded-md bg-blue-50 p-3">
                  <code className="text-sm text-gray-800">创建一个React组件，显示一个待办事项列表，支持添加、删除和标记完成功能</code>
                </div>
              </div>
              
              <div>
                <p className="mb-2 text-sm font-medium text-gray-700">生成结果:</p>
                <div className="rounded-md bg-gray-50 p-3">
                  <pre className="text-sm text-gray-800 overflow-auto max-h-80">{`import React, { useState } from 'react';
import { AppConfig } from '@/lib/config';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>待办事项列表</h2>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="添加新任务..."
        />
        <button onClick={handleAddTodo}>添加</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span onClick={() => handleToggleComplete(todo.id)}>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>删除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;`}</pre>
                </div>
              </div>
            </div>
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
                <RefreshCcw className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">代码重构</h3>
              </div>
              <p className="text-sm text-gray-700">
                选择需要优化的代码块，然后要求AI进行重构，它将提供更清晰、更高效的实现。
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <CirclePlus className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">代码补全</h3>
              </div>
              <p className="text-sm text-gray-700">
                AI预测您的意图并提供智能补全建议，包括完整代码块、函数或类定义。
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRightLeft className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">代码转换</h3>
              </div>
              <p className="text-sm text-gray-700">
                将代码从一种语言转换为另一种语言，或者从一个框架迁移到另一个框架。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 最佳实践 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-blue-500" />
            最佳实践
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert className="mb-4 bg-blue-50 border-blue-200">
            <AlertTitle className="text-blue-800">为获得最佳代码生成效果，请遵循以下建议</AlertTitle>
          </Alert>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">提供清晰的需求描述</p>
                <p className="text-sm text-gray-600">详细说明功能、输入输出要求和边界条件，使AI生成更精准的代码</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">指定技术栈</p>
                <p className="text-sm text-gray-600">明确告知AI您使用的框架、库和技术栈，以获得更匹配的代码</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">迭代改进</p>
                <p className="text-sm text-gray-600">如果生成的代码不完全符合需求，提供反馈并要求AI进行调整</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">审查生成的代码</p>
                <p className="text-sm text-gray-600">始终检查AI生成的代码，确保其符合您的项目标准和安全要求</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 隐私与安全 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Lock className="h-5 w-5 text-blue-500" />
            隐私与安全
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            {AppConfig.APP_NAME}重视您的代码隐私和安全。您可以配置代码生成功能，控制哪些项目信息可以被用作上下文，以及是否允许将代码发送到外部AI服务。此外，您还可以选择使用本地运行的AI模型，确保敏感代码不离开您的设备。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">数据隐私控制</p>
                <p className="text-sm text-gray-600">精确控制哪些文件和信息可以被AI访问和处理</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">本地AI模型选项</p>
                <p className="text-sm text-gray-600">支持在本地运行AI模型，确保敏感代码不离开您的设备</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 相关文档链接 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Package className="h-5 w-5 text-blue-500" />
            相关功能
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <a href="/docs/features/code-explanation" className="text-blue-600 font-medium hover:underline flex items-center gap-2">
                <BookOpen className="h-4 w-4" />AI代码解释
              </a>
              <p className="text-sm mt-1 text-gray-700">理解AI生成的代码逻辑和实现原理</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <a href="/docs/features/code-completion" className="text-blue-600 font-medium hover:underline flex items-center gap-2">
                <CirclePlus className="h-4 w-4" />AI代码补全
              </a>
              <p className="text-sm mt-1 text-gray-700">智能预测并补全您正在编写的代码</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <a href="/docs/advanced/configuration" className="text-blue-600 font-medium hover:underline flex items-center gap-2">
                <Settings className="h-4 w-4" />高级配置选项
              </a>
              <p className="text-sm mt-1 text-gray-700">自定义AI代码生成行为和偏好设置</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* 底部行动号召 */}
      <div className="mt-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 p-8 text-white shadow-lg">
        <h2 className="text-2xl font-bold">准备好提升您的编码效率了吗？</h2>
        <p className="mt-2 text-lg">
          使用AI代码生成功能，将您的想法快速转化为高质量代码。
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="/docs/getting-started/quick-start" className="rounded-md bg-white px-4 py-2 font-medium text-blue-700 hover:bg-blue-50">
            开始使用
          </a>
          <a href="/docs/features/code-completion" className="rounded-md border border-white px-4 py-2 font-medium text-white hover:bg-blue-600">
            探索代码补全功能
          </a>
        </div>
      </div>
    </div>
  );
} 