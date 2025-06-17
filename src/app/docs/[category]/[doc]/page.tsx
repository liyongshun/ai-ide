"use client";

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import ErrorBoundary from '@/components/ErrorBoundary';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useState, useEffect } from 'react';
import { useToast } from '@/components/ToastContext';
import { AppConfig } from '@/lib/config';
import { replaceAppName } from '@/lib/utils';

// 从主类别页面复用文档内容映射表
const docsContentMap: Record<string, Record<string, { title: string; content: string; }>> = {
  'getting-started': {
    'installation': {
      title: '安装指南',
      content: '# {AppConfig.APP_NAME} 安装指南\n\n本文档将指导您在不同操作系统上安装{AppConfig.APP_NAME}。\n\n## Windows安装\n\n1. 下载Windows安装包\n2. 运行安装程序\n3. 按照向导完成安装\n\n## macOS安装\n\n1. 下载macOS安装包\n2. 打开dmg文件\n3. 将应用拖到Applications文件夹\n\n## Linux安装\n\n### Ubuntu/Debian\n```bash\nsudo apt update\nsudo apt install ai-ide\n```\n\n### Red Hat/Fedora\n```bash\nsudo dnf install ai-ide\n```',
    },
    'quick-start': {
      title: '快速开始',
      content: '# {AppConfig.APP_NAME} 快速入门\n\n本指南将帮助您快速上手{AppConfig.APP_NAME}的基本功能。\n\n## 创建第一个项目\n\n1. 启动{AppConfig.APP_NAME}\n2. 点击"新建项目"\n3. 选择项目类型\n4. 输入项目名称和位置\n5. 点击"创建"\n\n## 使用AI代码补全\n\n1. 在编辑器中开始输入代码\n2. AI会自动提供代码补全建议\n3. 按Tab键接受建议\n\n## 使用AI代码生成\n\n1. 按下Ctrl+Space\n2. 输入你想要实现的功能描述\n3. AI会生成相应的代码片段',
    },
    'interface-overview': {
      title: '界面概览',
      content: '# {AppConfig.APP_NAME} 界面概览\n\n本文档将帮助您熟悉{AppConfig.APP_NAME}的用户界面和基本布局。\n\n## 主要界面区域\n\n### 编辑区\n\n位于中央的主要区域，用于编写和查看代码。支持多标签页和分屏。\n\n### 项目资源管理器\n\n位于左侧，显示项目文件和文件夹结构。通过右键菜单可以进行文件操作。\n\n### 状态栏\n\n位于底部，显示当前文件信息、行号、编码格式等状态信息。\n\n### AI助手面板\n\n可通过Ctrl+Shift+A打开，提供代码生成、问答等AI功能。',
    },
  },
  'features': {
    'code-completion': {
      title: 'AI代码补全',
      content: '# AI代码补全功能\n\n{AppConfig.APP_NAME}的代码补全功能利用先进的机器学习模型，提供上下文相关的编码建议，大幅提高您的开发效率。\n\n## 主要特点\n\n- **上下文感知**：基于当前文件和项目的上下文提供相关建议\n- **多语言支持**：支持所有主流编程语言\n- **个性化学习**：逐渐适应您的编码风格\n- **实时更新**：模型定期更新以支持最新的API和框架\n\n## 使用技巧\n\n- 使用Tab键接受建议\n- 使用上下方向键导航多个建议\n- 按Esc取消建议\n- 在设置中自定义触发行为',
    },
    'code-generation': {
      title: 'AI代码生成',
      content: '# AI代码生成功能\n\n通过{AppConfig.APP_NAME}的代码生成功能，您可以使用自然语言描述来生成完整的代码块。\n\n## 使用方法\n\n1. 按下Ctrl+G打开代码生成面板\n2. 输入您想要实现的功能的自然语言描述\n3. 点击"生成"按钮或按下Enter\n4. 查看生成的代码\n5. 点击"接受"将代码插入到编辑器中\n\n## 最佳实践\n\n- 提供清晰、具体的描述\n- 指定目标语言和框架\n- 包含关键的上下文信息\n- 对生成的代码进行审查和测试',
    },
    'code-explanation': {
      title: 'AI代码解释',
      content: '# AI代码解释功能\n\n{AppConfig.APP_NAME}的代码解释功能可以帮助您理解复杂的代码片段，提高代码可读性和可维护性。\n\n## 主要用途\n\n- 理解他人编写的代码\n- 理解遗留系统\n- 学习新的编程概念和模式\n- 文档生成\n\n## 使用方法\n\n1. 选择您想要解释的代码块\n2. 右键单击选中的代码\n3. 在上下文菜单中选择"AI解释代码"\n4. 查看生成的解释\n\n## 解释级别\n\n您可以根据需要选择不同的解释详细程度：\n\n- **简要**：提供代码的基本功能概述\n- **标准**：包括功能描述和关键概念解释\n- **详细**：包括完整的逻辑解释、潜在问题和优化建议',
    },
  },
};

// 简单的Markdown解析函数
function parseMarkdown(markdown: string) {
  // 先替换应用名称
  const processedMarkdown = replaceAppName(markdown);
  
  let html = processedMarkdown
    // 处理标题
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-6 mb-4">$1</h1>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-5 mb-3">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-4 mb-2">$1</h3>')
    // 处理列表
    .replace(/^\* (.*$)/gm, '<li class="ml-6 list-disc">$1</li>')
    .replace(/^- (.*$)/gm, '<li class="ml-6 list-disc">$1</li>')
    .replace(/^([0-9]+)\. (.*$)/gm, '<li class="ml-6 list-decimal">$2</li>')
    // 处理代码块
    .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-800 text-white p-4 rounded-md my-4 overflow-x-auto"><code>$1</code></pre>')
    // 处理行内代码
    .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded">$1</code>')
    // 处理粗体
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // 处理斜体
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // 处理段落
    .replace(/(?:^|\n)(?!<h|<li|<code|<pre)(.+)/g, '\n<p class="mb-4">$1</p>');

  // 将连续的li元素包装在ul中
  html = html.replace(/<li class="ml-6 list-disc">([\s\S]*?)(?=<\/li>)<\/li>(?:\s*<li class="ml-6 list-disc">[\s\S]*?(?=<\/li>)<\/li>)+/g, 
    '<ul class="my-4">$&</ul>');
  html = html.replace(/<li class="ml-6 list-decimal">([\s\S]*?)(?=<\/li>)<\/li>(?:\s*<li class="ml-6 list-decimal">[\s\S]*?(?=<\/li>)<\/li>)+/g, 
    '<ol class="my-4">$&</ol>');

  return html;
}

export default function DocContentPage() {
  const params = useParams();
  const router = useRouter();
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [docContent, setDocContent] = useState<{ title: string; content: string } | null>(null);
  const [category, setCategory] = useState<string>('');
  const [docId, setDocId] = useState<string>('');
  
  useEffect(() => {
    // 获取当前分类和文档ID
    const currentCategory = Array.isArray(params.category) 
      ? params.category[0] 
      : typeof params.category === 'string' ? params.category : '';
    
    const currentDoc = Array.isArray(params.doc) 
      ? params.doc[0] 
      : typeof params.doc === 'string' ? params.doc : '';
    
    setCategory(currentCategory);
    setDocId(currentDoc);
    
    // 模拟加载文档内容
    setTimeout(() => {
      if (currentCategory && currentDoc && 
          docsContentMap[currentCategory] && 
          docsContentMap[currentCategory][currentDoc]) {
        setDocContent(docsContentMap[currentCategory][currentDoc]);
      } else {
        showToast({
          message: '未找到此文档',
          type: 'error',
          duration: 5000
        });
        // 文档不存在时重定向回文档中心
        setTimeout(() => {
          router.push('/docs');
        }, 1000);
      }
      setIsLoading(false);
    }, 500);
  }, [params.category, params.doc, router, showToast]);

  return (
    <ErrorBoundary>
      <div className="py-8">
        <div className="mb-4">
          <Link href="/docs" className="text-blue-600 hover:underline">
            ← 文档中心
          </Link>
          {category && (
            <>
              <span className="mx-2 text-gray-500">/</span>
              <Link href={`/docs/${category}`} className="text-blue-600 hover:underline">
                {category}
              </Link>
            </>
          )}
        </div>

        {isLoading ? (
          <div className="py-12 flex justify-center">
            <LoadingSpinner text="正在加载文档..." />
          </div>
        ) : docContent ? (
          <>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              {docContent.title}
            </h1>
            <div 
              className="prose prose-blue max-w-none"
              dangerouslySetInnerHTML={{
                __html: parseMarkdown(docContent.content)
              }}
            />
            
            <div className="mt-12 border-t border-gray-200 pt-8">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">此文档有帮助吗?</h3>
                  <div className="mt-1 flex space-x-4">
                    <button 
                      className="px-3 py-1 text-sm border rounded-md border-gray-300 hover:bg-gray-50"
                      onClick={() => showToast({
                        message: '感谢您的反馈!',
                        type: 'success',
                        duration: 3000
                      })}
                    >
                      有帮助
                    </button>
                    <button 
                      className="px-3 py-1 text-sm border rounded-md border-gray-300 hover:bg-gray-50"
                      onClick={() => showToast({
                        message: '感谢您的反馈，我们会继续改进!',
                        type: 'info',
                        duration: 3000
                      })}
                    >
                      需要改进
                    </button>
                  </div>
                </div>
                <Link href="/docs/contact" className="text-sm text-blue-600 hover:underline">
                  报告问题
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">未找到文档</h3>
            <p className="text-gray-600 mb-4">所请求的文档不存在或已被移动。</p>
            <Link href="/docs" className="text-blue-600 hover:underline">
              返回文档中心
            </Link>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
} 