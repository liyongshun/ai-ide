import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AppConfig } from '@/lib/config';
import {
  Brain, Database, Server, Cloud,
  Settings, Code, Terminal, Puzzle,
  Sliders, Zap, Shield, Cpu,
  Download, HardDrive, Workflow, GitFork
} from 'lucide-react';

export const metadata: Metadata = {
  title: '自定义 AI 模型 | {AppConfig.APP_NAME}文档',
  description: '了解如何在 {AppConfig.APP_NAME} 中配置和使用自定义 AI 模型，提高开发效率和代码质量。',
}

export default function CustomModelsPage() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">自定义 AI 模型</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          {AppConfig.APP_NAME} 支持集成和配置自定义 AI 模型，让您可以根据项目需求和个人偏好选择最适合的模型，提高开发效率和代码质量。
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Brain className="h-5 w-5 text-blue-500" />
            功能概述
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            {AppConfig.APP_NAME} 的自定义模型功能允许您超越默认提供的 AI 模型，使用自己的模型或第三方模型服务。这一功能特别适合对特定领域有专业需求的开发者、对代码隐私有严格要求的企业，以及希望优化 AI 性能的高级用户。
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-500" />
            支持的模型类型
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            {AppConfig.APP_NAME} 支持多种类型的自定义 AI 模型，每种类型针对不同的开发场景进行了优化：
          </p>
          
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    模型类型
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    主要功能
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    适用场景
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900">
                    代码补全模型
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    提供实时代码建议和补全
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    日常编码，提高输入效率
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900">
                    代码生成模型
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    根据自然语言描述生成代码块
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    快速实现功能，构建模板代码
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900">
                    代码解释模型
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    分析和解释复杂代码的功能和逻辑
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    理解旧代码，加速新成员入职
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900">
                    代码重构模型
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    优化现有代码结构，提高可读性和性能
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    技术债务清理，代码质量提升
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900">
                    代码审查模型
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    检查代码质量，发现潜在问题
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    代码评审，质量保证
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
              您可以同时使用多种不同类型的模型，例如为代码补全使用轻量级的本地模型，为代码生成使用功能更强大的云端模型。
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Database className="h-5 w-5 text-blue-500" />
            模型来源选项
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            {AppConfig.APP_NAME} 支持从多种来源使用 AI 模型，可以根据性能、隐私和成本需求进行选择。
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
                <Server className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">本地模型</h3>
              <p className="mt-2 text-gray-600">
                本地运行的 AI 模型可以提供最佳的隐私保护和离线工作能力：
              </p>
              <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-600">
                <li>
                  <strong>量化模型</strong> - 经过优化的小型模型，可在普通开发机器上运行
                </li>
                <li>
                  <strong>全尺寸模型</strong> - 需要强大的 GPU 支持，但提供最高质量的结果
                </li>
                <li>
                  <strong>领域特定模型</strong> - 针对特定编程语言或框架训练的专业模型
                </li>
              </ul>
              <div className="mt-4 bg-blue-50 rounded p-3 text-sm text-blue-700">
                <strong>优势:</strong> 完全隐私、无网络延迟、无需订阅费用
              </div>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
                <Cloud className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">云端模型</h3>
              <p className="mt-2 text-gray-600">
                通过 API 访问的云端模型提供了强大功能而无需本地计算资源：
              </p>
              <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-600">
                <li>
                  <strong>第三方模型服务</strong> - 如 OpenAI、Anthropic、Google Vertex AI 等
                </li>
                <li>
                  <strong>企业私有模型</strong> - 部署在企业内部网络或私有云中的模型
                </li>
                <li>
                  <strong>微调模型</strong> - 基于企业代码库微调的专用模型
                </li>
              </ul>
              <div className="mt-4 bg-blue-50 rounded p-3 text-sm text-blue-700">
                <strong>优势:</strong> 强大的能力、无需本地计算资源、持续更新
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Settings className="h-5 w-5 text-blue-500" />
            模型配置详解
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            配置自定义模型需要完成以下几个步骤：
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100">
              <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-700 font-semibold">1</div>
              <div>
                <p className="font-medium text-gray-900">准备模型资源</p>
                <p className="text-sm text-gray-700 mt-1">根据模型类型，准备必要的文件或API密钥</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100">
              <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-700 font-semibold">2</div>
              <div>
                <p className="font-medium text-gray-900">创建模型配置文件</p>
                <p className="text-sm text-gray-700 mt-1">创建并编辑 models.json 文件，详细定义模型参数</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100">
              <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-700 font-semibold">3</div>
              <div>
                <p className="font-medium text-gray-900">配置模型使用场景</p>
                <p className="text-sm text-gray-700 mt-1">在 config.json 中指定何时使用自定义模型</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">配置示例</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto">
              <pre className="text-sm">
{`// .ai-ide/models.json
{
  "models": {
    "my-completion-model": {
      "type": "completion",
      "provider": "openai",
      "endpoint": "https://api.openai.com/v1/completions",
      "apiKey": "${process.env.OPENAI_API_KEY}",
      "model": "gpt-4",
      "parameters": {
        "temperature": 0.3,
        "max_tokens": 1024,
        "top_p": 1.0,
        "frequency_penalty": 0.0,
        "presence_penalty": 0.0
      }
    },
    "local-code-model": {
      "type": "generation",
      "provider": "local",
      "modelPath": "/path/to/model/directory",
      "parameters": {
        "temperature": 0.7,
        "contextWindow": 8192,
        "maxGenerationLength": 2048
      }
    }
  }
}`}
              </pre>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">使用配置</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto">
              <pre className="text-sm">
{`// .ai-ide/config.json
{
  "ai": {
    "completion": {
      "model": "my-completion-model",
      "fallbackModel": "default"
    },
    "generation": {
      "model": "local-code-model"
    },
    "explanation": {
      "model": "default"
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
            <Sliders className="h-5 w-5 text-blue-500" />
            模型参数详解
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            了解和调整模型参数对于获得最佳结果至关重要：
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">温度 (temperature)</h3>
              </div>
              <p className="text-sm text-gray-700">
                控制输出随机性的参数，值越低输出越确定性。代码生成通常使用 0.1-0.3，创意建议使用 0.7-0.9。
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">最大令牌数 (max_tokens)</h3>
              </div>
              <p className="text-sm text-gray-700">
                限制生成文本的长度。代码补全通常设置为 256-512，代码生成通常为 1024-2048，视任务复杂度而定。
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Puzzle className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">上下文窗口 (contextWindow)</h3>
              </div>
              <p className="text-sm text-gray-700">
                模型能够考虑的最大上下文长度（输入+输出）。较大的窗口能处理更多信息，但会增加内存需求和响应时间。
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">核采样 (top_p)</h3>
              </div>
              <p className="text-sm text-gray-700">
                控制模型考虑的概率分布范围。对于代码生成，建议使用接近 1.0 的值，确保输出的一致性和可预测性。
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">特定模型参数</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-2">
                <Terminal className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">代码补全参数</p>
                  <ul className="mt-1 space-y-1 list-disc pl-5 text-sm text-gray-600">
                    <li><strong>delay</strong> - 触发延迟 (建议值: 200-300ms)</li>
                    <li><strong>maxLines</strong> - 单次补全行数 (建议值: 5-10)</li>
                    <li><strong>minCharacters</strong> - 最小触发字符数 (建议值: 2-3)</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Code className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">代码生成参数</p>
                  <ul className="mt-1 space-y-1 list-disc pl-5 text-sm text-gray-600">
                    <li><strong>systemPrompt</strong> - 系统提示指令</li>
                    <li><strong>stopSequences</strong> - 停止生成的文本序列</li>
                    <li><strong>maxTime</strong> - 最大等待时间 (建议值: 30-60秒)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <Alert className="mt-6 bg-blue-50 border-blue-200">
            <AlertTitle className="text-blue-800 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
              </svg>
              提示
            </AlertTitle>
            <AlertDescription className="text-blue-700">
              建议从模型供应商的默认推荐参数开始，然后根据实际体验进行微调。对于代码生成任务，降低temperature参数可以得到更准确和一致的结果。
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Zap className="h-5 w-5 text-blue-500" />
            模型性能优化
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            为了获得最佳的模型性能和用户体验，可以考虑以下优化策略：
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
                <HardDrive className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">本地模型优化</h3>
              <div className="grid gap-3 mt-4">
                <div className="flex items-start gap-2">
                  <Cpu className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">模型量化</p>
                    <p className="text-sm text-gray-600">使用 4-bit 或 8-bit 量化减小模型体积，加快推理速度</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">GPU 加速</p>
                    <p className="text-sm text-gray-600">配置模型使用 CUDA、ROCm 或 Metal 进行硬件加速</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Settings className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">缓存管理</p>
                    <p className="text-sm text-gray-600">调整 KV 缓存大小，平衡内存使用和性能</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
                <Cloud className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">云端模型优化</h3>
              <div className="grid gap-3 mt-4">
                <div className="flex items-start gap-2">
                  <Workflow className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">请求批处理</p>
                    <p className="text-sm text-gray-600">合并多个小请求为一个批量请求，减少网络延迟</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Database className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">响应缓存</p>
                    <p className="text-sm text-gray-600">缓存常见查询的响应，减少重复请求</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <GitFork className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">流式传输</p>
                    <p className="text-sm text-gray-600">使用流式 API 快速获取初始响应，改善用户体验</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">性能优化配置示例</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto">
              <pre className="text-sm">
{`// .ai-ide/models.json
{
  "models": {
    "optimized-local-model": {
      "type": "completion",
      "provider": "local",
      "modelPath": "/path/to/model/directory",
      "parameters": {
        "temperature": 0.2,
        "contextWindow": 4096,
        "maxGenerationLength": 1024
      },
      "optimization": {
        "quantization": "int8",
        "gpuLayers": 32,
        "cacheSize": 2048,
        "threads": 8,
        "batchSize": 512
      }
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
            <Code className="h-5 w-5 text-blue-500" />
            常见使用场景
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            以下是一些常见的自定义模型使用场景及其配置示例：
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">企业内部私有模型</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                适用于对代码隐私有严格要求的企业，可以将模型部署在企业内网中：
              </p>
              <div className="bg-gray-50 p-4 rounded-lg text-sm">
                <pre className="text-sm">
{`{
  "models": {
    "enterprise-model": {
      "type": "all",
      "provider": "custom",
      "endpoint": "http://ai-service.internal.company.com/api/v1/generate",
      "apiKey": "${process.env.INTERNAL_API_KEY}",
      "headers": {
        "X-Project-ID": "dev-tools",
        "X-Team": "engineering"
      }
    }
  }
}`}
                </pre>
              </div>
            </div>
            
            <div className="p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <Code className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">特定编程语言优化</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                针对特定语言优化的模型可以提供更准确的补全和建议：
              </p>
              <div className="bg-gray-50 p-4 rounded-lg text-sm">
                <pre className="text-sm">
{`{
  "models": {
    "python-specialized": {
      "type": "completion",
      "provider": "openai",
      "model": "ft:codex-davinci-002:company:python-model:7abc123p",
      "filePatterns": ["**/*.py"],
      "parameters": {
        "temperature": 0.2,
        "stop": ["def ", "class ", "#"]
      }
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
          <Download className="h-5 w-5" />
          开始使用
        </AlertTitle>
        <AlertDescription className="text-blue-700">
          您可以从我们的示例库获取预配置的模型模板，快速开始使用自定义模型。这些模板包含了常见场景的最佳实践配置，可以根据您的需求进行调整。
        </AlertDescription>
      </Alert>
      
      {/* 底部行动号召 */}
      <div className="mt-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 p-8 text-white shadow-lg">
        <h2 className="text-2xl font-bold">提升您的AI开发能力</h2>
        <p className="mt-2 text-lg">
          利用{AppConfig.APP_NAME}的强大自定义模型功能，创建适合您特定开发需求的AI助手。
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="/docs/advanced/performance" className="rounded-md bg-white px-4 py-2 font-medium text-blue-700 hover:bg-blue-50">
            探索性能优化
          </a>
          <a href="/docs/advanced/configuration" className="rounded-md border border-white px-4 py-2 font-medium text-white hover:bg-blue-600">
            查看配置选项
          </a>
        </div>
      </div>
    </div>
  );
} 