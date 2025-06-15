import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '自定义 AI 模型 | AI IDE文档',
  description: '了解如何在 AI IDE 中配置和使用自定义 AI 模型，提高开发效率和代码质量。',
}

export default function CustomModelsPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">自定义 AI 模型</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          AI IDE 支持集成和配置自定义 AI 模型，让您可以根据项目需求和个人偏好选择最适合的模型，提高开发效率和代码质量。
        </p>
      </div>
      
      <div className="prose prose-blue prose-lg">
        <h2>功能概述</h2>
        <p>
          AI IDE 的自定义模型功能允许您超越默认提供的 AI 模型，使用自己的模型或第三方模型服务。这一功能特别适合对特定领域有专业需求的开发者、对代码隐私有严格要求的企业，以及希望优化 AI 性能的高级用户。
        </p>
        
        <h2>支持的模型类型</h2>
        <p>
          AI IDE 支持多种类型的自定义 AI 模型，每种类型针对不同的开发场景进行了优化：
        </p>
        <ul>
          <li>
            <strong>代码补全模型</strong> - 提供实时代码建议和补全，支持多种编程语言
          </li>
          <li>
            <strong>代码生成模型</strong> - 根据自然语言描述生成完整的代码块、函数或组件
          </li>
          <li>
            <strong>代码解释模型</strong> - 分析和解释复杂代码的功能和逻辑
          </li>
          <li>
            <strong>代码重构模型</strong> - 优化现有代码结构，提高可读性和性能
          </li>
          <li>
            <strong>代码审查模型</strong> - 检查代码质量，发现潜在问题和改进机会
          </li>
          <li>
            <strong>多模态模型</strong> - 支持代码与图像、文档等多种输入形式的交互
          </li>
        </ul>
        
        <h2>模型来源选项</h2>
        <h3>本地模型</h3>
        <p>
          本地运行的 AI 模型可以提供最佳的隐私保护和离线工作能力：
        </p>
        <ul>
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
        
        <h3>云端模型</h3>
        <p>
          通过 API 访问的云端模型提供了强大功能而无需本地计算资源：
        </p>
        <ul>
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

        <h2>模型配置详解</h2>
        <p>
          配置自定义模型需要完成以下几个步骤：
        </p>
        
        <h3>1. 准备模型资源</h3>
        <p>
          根据您选择的模型类型，准备必要的资源：
        </p>
        <ul>
          <li>
            <strong>本地模型</strong> - 下载模型文件（通常为 ONNX、PyTorch 或 TensorFlow 格式）
          </li>
          <li>
            <strong>云端模型</strong> - 获取 API 密钥和端点 URL
          </li>
          <li>
            <strong>自托管模型</strong> - 部署模型服务并确保 AI IDE 可以访问
          </li>
        </ul>
        
        <h3>2. 创建模型配置文件</h3>
        <p>
          在项目或用户配置目录中创建模型配置文件：
        </p>
        <div className="bg-gray-50 p-4 rounded-md overflow-x-auto">
          <pre><code>{`// .ai-ide/models.json
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
}`}</code></pre>
        </div>
        
        <h3>3. 配置模型使用场景</h3>
        <p>
          在 IDE 设置中指定何时使用自定义模型：
        </p>
        <div className="bg-gray-50 p-4 rounded-md overflow-x-auto">
          <pre><code>{`// .ai-ide/config.json
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
}`}</code></pre>
        </div>

        <h2>模型参数详解</h2>
        <p>
          了解和调整模型参数对于获得最佳结果至关重要：
        </p>
        
        <h3>通用参数</h3>
        <div className="overflow-hidden border border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">参数</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">说明</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">temperature</td>
                <td className="px-4 py-3 text-sm text-gray-600">number</td>
                <td className="px-4 py-3 text-sm text-gray-600">控制输出随机性，值越低输出越确定性，建议代码生成使用低温度（0.1-0.3）</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">max_tokens</td>
                <td className="px-4 py-3 text-sm text-gray-600">number</td>
                <td className="px-4 py-3 text-sm text-gray-600">生成的最大令牌数，影响响应长度</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">top_p</td>
                <td className="px-4 py-3 text-sm text-gray-600">number</td>
                <td className="px-4 py-3 text-sm text-gray-600">核采样参数，控制模型考虑的概率分布范围</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">contextWindow</td>
                <td className="px-4 py-3 text-sm text-gray-600">number</td>
                <td className="px-4 py-3 text-sm text-gray-600">模型可处理的最大上下文长度（输入+输出的总令牌数）</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3>特定模型参数</h3>
        <p>
          不同类型的模型可能有特定的参数需要配置：
        </p>
        <ul>
          <li>
            <strong>代码补全模型</strong> - 通常需要配置 <code>delay</code>（触发延迟）和 <code>maxLines</code>（最大补全行数）
          </li>
          <li>
            <strong>代码生成模型</strong> - 可能需要 <code>systemPrompt</code>（系统提示）和 <code>stopSequences</code>（停止序列）
          </li>
          <li>
            <strong>本地模型</strong> - 可能需要 <code>threads</code>（使用的线程数）和 <code>gpuLayers</code>（GPU加载的层数）
          </li>
        </ul>

        <h2>模型性能优化</h2>
        <p>
          为了获得最佳的模型性能和用户体验，可以考虑以下优化策略：
        </p>
        
        <h3>本地模型优化</h3>
        <ul>
          <li>
            <strong>模型量化</strong> - 使用 4-bit 或 8-bit 量化减小模型体积，加快推理速度
          </li>
          <li>
            <strong>GPU 加速</strong> - 配置模型使用 CUDA、ROCm 或 Metal 进行硬件加速
          </li>
          <li>
            <strong>模型剪枝</strong> - 移除不必要的模型权重，减少内存占用
          </li>
          <li>
            <strong>缓存管理</strong> - 调整 KV 缓存大小，平衡内存使用和性能
          </li>
        </ul>
        
        <h3>云端模型优化</h3>
        <ul>
          <li>
            <strong>请求批处理</strong> - 合并多个小请求为一个批量请求，减少网络延迟
          </li>
          <li>
            <strong>响应缓存</strong> - 缓存常见查询的响应，减少重复请求
          </li>
          <li>
            <strong>流式传输</strong> - 使用流式 API 快速获取初始响应，改善用户体验
          </li>
          <li>
            <strong>区域选择</strong> - 选择地理位置最近的 API 端点，减少延迟
          </li>
        </ul>

        <h2>高级模型功能</h2>
        
        <h3>模型微调</h3>
        <p>
          AI IDE 支持使用微调模型，以更好地适应特定的代码库和编程风格：
        </p>
        <ol>
          <li>从项目代码库中收集高质量的代码样本</li>
          <li>使用 AI IDE 的微调工具准备训练数据</li>
          <li>在云端或本地进行模型微调</li>
          <li>导入微调后的模型并配置为项目默认模型</li>
        </ol>
        
        <h3>模型链接与组合</h3>
        <p>
          通过组合多个专用模型创建复杂的 AI 工作流：
        </p>
        <div className="bg-gray-50 p-4 rounded-md overflow-x-auto">
          <pre><code>{`// .ai-ide/workflows.json
{
  "workflows": {
    "code-review": {
      "steps": [
        {
          "name": "analyze-code",
          "model": "code-analysis-model",
          "input": "$input",
          "output": "analysis"
        },
        {
          "name": "generate-review",
          "model": "review-model",
          "input": {
            "code": "$input",
            "analysis": "$analysis"
          },
          "output": "review"
        }
      ],
      "output": "$review"
    }
  }
}`}</code></pre>
        </div>

        <h2>安全与隐私考虑</h2>
        <p>
          使用自定义模型时，需要特别注意以下安全和隐私问题：
        </p>
        
        <h3>API 密钥管理</h3>
        <p>
          保护您的 API 密钥和凭证：
        </p>
        <ul>
          <li>使用环境变量而非硬编码存储 API 密钥</li>
          <li>为不同项目使用不同的 API 密钥</li>
          <li>定期轮换 API 密钥</li>
          <li>设置适当的使用限制和预算警报</li>
        </ul>
        
        <h3>代码隐私</h3>
        <p>
          保护敏感代码和数据：
        </p>
        <ul>
          <li>使用本地模型处理敏感代码</li>
          <li>配置排除规则，防止特定文件或目录被发送到模型</li>
          <li>使用企业级模型服务，确保数据合规性</li>
          <li>定期审查模型日志和使用情况</li>
        </ul>

        <h2>故障排除</h2>
        <p>
          使用自定义模型时可能遇到的常见问题及解决方法：
        </p>
        
        <h3>连接问题</h3>
        <ul>
          <li>
            <strong>API 超时</strong> - 检查网络连接，增加超时设置，或考虑使用本地模型
          </li>
          <li>
            <strong>认证失败</strong> - 验证 API 密钥是否正确，是否有足够的权限和额度
          </li>
          <li>
            <strong>端点错误</strong> - 确认 API 端点 URL 是否正确，是否支持指定的模型
          </li>
        </ul>
        
        <h3>性能问题</h3>
        <ul>
          <li>
            <strong>模型响应慢</strong> - 检查模型大小和复杂度，考虑使用更轻量级的模型
          </li>
          <li>
            <strong>内存不足</strong> - 减少模型上下文窗口大小，使用量化模型，或增加系统内存
          </li>
          <li>
            <strong>生成质量差</strong> - 调整温度和其他参数，或尝试更高质量的模型
          </li>
        </ul>
        
        <h3>诊断工具</h3>
        <p>
          AI IDE 提供了多种工具帮助诊断模型问题：
        </p>
        <ul>
          <li>
            <strong>模型诊断命令</strong> - 使用命令面板中的"AI: 诊断模型"命令
          </li>
          <li>
            <strong>日志分析</strong> - 查看详细的模型请求和响应日志
          </li>
          <li>
            <strong>性能监控</strong> - 监控模型的响应时间、令牌使用量和资源消耗
          </li>
        </ul>
      </div>

      <div className="mt-12 rounded-lg bg-blue-50 p-6">
        <h3 className="text-lg font-semibold text-gray-900">模型资源</h3>
        <p className="mt-2 text-gray-600">
          AI IDE 提供了多种预配置的模型模板和集成选项，帮助您快速开始使用自定义模型。
        </p>
        <div className="mt-4">
          <a href="/docs/advanced/configuration" className="inline-flex text-blue-700 font-medium hover:text-blue-800">
            查看配置文件文档 <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
} 