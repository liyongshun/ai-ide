"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import ErrorBoundary from '@/components/ErrorBoundary';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useState, useEffect } from 'react';
import { useToast } from '@/components/ToastContext';
import { AppConfig } from '@/lib/config';
import { replaceAppName } from '@/lib/utils';

// 文档分类映射表
const categoryMap: Record<string, { title: string; description: string; }> = {
  'getting-started': {
    title: '入门指南',
    description: `帮助你快速上手${AppConfig.APP_NAME}，从安装到基本使用全方位指导。`,
  },
  'features': {
    title: '核心功能',
    description: `详细了解${AppConfig.APP_NAME}的核心功能，掌握如何充分利用AI辅助编程能力。`,
  },
  'integrations': {
    title: '集成与扩展',
    description: `探索如何将${AppConfig.APP_NAME}与其他开发工具集成，以及如何通过插件扩展功能。`,
  },
  'api': {
    title: 'API参考',
    description: `了解如何通过API与${AppConfig.APP_NAME}交互，为开发者提供完整的API文档。`,
  },
  'advanced': {
    title: '进阶使用',
    description: `深入了解${AppConfig.APP_NAME}的高级功能和配置选项，满足专业开发需求。`,
  },
};

// 使用replaceAppName函数处理文档内容中的应用名称
const getDocContent = (content: string): string => {
  return replaceAppName(content);
};

// 文档内容映射表（模拟)
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
  },
};

export default function DocCategoryPage() {
  const params = useParams();
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [docsList, setDocsList] = useState<Array<{id: string, title: string}>>([]);
  const [category, setCategory] = useState<string>('');
  
  useEffect(() => {
    // 获取当前分类
    const currentCategory = Array.isArray(params.category) 
      ? params.category[0] 
      : typeof params.category === 'string' ? params.category : '';
    
    setCategory(currentCategory);
    
    // 模拟加载文档列表
    setTimeout(() => {
      if (currentCategory && docsContentMap[currentCategory]) {
        const docs = Object.keys(docsContentMap[currentCategory]).map(key => ({
          id: key,
          title: docsContentMap[currentCategory][key].title
        }));
        setDocsList(docs);
      } else {
        showToast({
          message: '未找到此分类的文档',
          type: 'warning',
          duration: 5000
        });
      }
      setIsLoading(false);
    }, 500);
  }, [params.category, showToast]);

  // 获取分类信息
  const categoryInfo = category && categoryMap[category] 
    ? categoryMap[category] 
    : { title: '文档分类', description: '浏览文档分类。' };

  return (
    <ErrorBoundary>
      <div className="py-8">
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {categoryInfo.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {replaceAppName(categoryInfo.description)}
          </p>
        </div>

        {isLoading ? (
          <div className="py-12 flex justify-center">
            <LoadingSpinner text="正在加载文档..." />
          </div>
        ) : docsList.length > 0 ? (
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
            {docsList.map((doc) => (
              <div key={doc.id} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <Link href={`/docs/${category}/${doc.id}`} className="block">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">{doc.title}</h3>
                  <p className="text-gray-600 line-clamp-3">
                    {replaceAppName(docsContentMap[category][doc.id]?.content.split('\n').slice(0, 2).join(' ').replace(/[#*]/g, ''))}...
                  </p>
                  <div className="mt-4 text-sm font-medium text-blue-600 hover:underline">
                    阅读文档 →
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">暂无文档</h3>
            <p className="text-gray-600 mb-4">此分类下暂时没有可用的文档。请稍后再查看。</p>
            <Link href="/docs" className="text-blue-600 hover:underline">
              返回文档中心
            </Link>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
} 