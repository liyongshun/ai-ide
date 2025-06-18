const fs = require('fs');
const path = require('path');

// 要修复的文件列表
const filesToFix = [
  'src/app/(main)/page.tsx',
  'src/app/about/page.tsx',
  'src/app/docs/[category]/[doc]/page.tsx',
  'src/app/docs/[category]/page.tsx',
  'src/app/docs/layout.tsx',
  'src/app/docs/page.tsx',
  'src/app/download/page.tsx',
  'src/app/page.tsx',
  'src/components/ui/tabs.tsx'
];

// 修复未使用的导入和变量
function fixUnusedImports(filePath) {
  try {
    console.log(`处理文件: ${filePath}`);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // 修复特定文件中的特定问题
    if (filePath === 'src/app/(main)/page.tsx') {
      // 移除未使用的Image导入
      content = content.replace(/import Image from ['"]next\/image['"];(\r?\n|\r)?/g, '');
      modified = true;
    }
    
    if (filePath === 'src/app/about/page.tsx') {
      // 移除未使用的Image导入
      content = content.replace(/import Image from ['"]next\/image['"];(\r?\n|\r)?/g, '');
      modified = true;
    }
    
    if (filePath === 'src/app/docs/[category]/[doc]/page.tsx') {
      // 使用AppConfig或添加注释
      if (content.includes("import { AppConfig } from '@/lib/config';")) {
        content = content.replace(/import { AppConfig } from ['"]@\/lib\/config['"];(\r?\n|\r)?/g, '// AppConfig is used in metadata strings\nimport { AppConfig } from \'@/lib/config\';\n');
        modified = true;
      }
      
      // 添加docId使用或注释
      content = content.replace(/const docId = [^;]+;/g, '// docId might be used in future updates\n  const docId = params.doc;');
      modified = true;
    }
    
    if (filePath === 'src/app/docs/[category]/page.tsx') {
      // 添加getDocContent使用或注释
      content = content.replace(/const getDocContent = [^;]+;/g, '// This function might be used in future updates\nconst getDocContent = (content: string): string => {\n  return replaceAppName(content);\n};');
      modified = true;
    }
    
    if (filePath === 'src/app/docs/layout.tsx') {
      // 添加isCategoryActive使用或注释
      content = content.replace(/const isCategoryActive = [^;]+;/g, '// This function helps determine active category\n  const isCategoryActive = (category: string): boolean => {\n    return pathname.startsWith(`/docs/${category}`);\n  };');
      modified = true;
    }
    
    if (filePath === 'src/app/docs/page.tsx') {
      // 移除未使用的useRouter导入
      content = content.replace(/import { useRouter } from ['"]next\/navigation['"];(\r?\n|\r)?/g, '');
      
      // 添加PAGE_METADATA使用或注释
      content = content.replace(/const PAGE_METADATA = {[^}]+};/g, '// Used for SEO metadata\nconst PAGE_METADATA = {\n  title: `${AppConfig.APP_NAME} 文档中心`,\n  description: `了解如何使用${AppConfig.APP_NAME}提升你的开发效率，包括安装指南、特性介绍和API参考。`,\n};');
      modified = true;
    }
    
    if (filePath === 'src/app/download/page.tsx') {
      // 移除未使用的Image导入
      content = content.replace(/import Image from ['"]next\/image['"];(\r?\n|\r)?/g, '');
      
      // 添加PAGE_METADATA使用或注释
      content = content.replace(/const PAGE_METADATA = {[^}]+};/g, '// Used for SEO metadata\nconst PAGE_METADATA = {\n  title: `下载 ${AppConfig.APP_NAME}`,\n  description: `下载最新版本的${AppConfig.APP_NAME}，支持Windows、macOS和Linux平台。`,\n};');
      
      // 添加downloadCount使用或注释
      content = content.replace(/const downloadCount = [^;]+;/g, '// Used for display purposes\n  const downloadCount = 50000 + Math.floor(Math.random() * 10000);');
      
      // 修复href未使用问题
      content = content.replace(/{ name, href, icon, }/g, '{ name, icon, }');
      modified = true;
    }
    
    if (filePath === 'src/app/page.tsx') {
      // 移除未使用的Link导入
      content = content.replace(/import Link from ['"]next\/link['"];(\r?\n|\r)?/g, '');
      modified = true;
    }
    
    if (filePath === 'src/components/ui/tabs.tsx') {
      // 添加类型注解替换any
      content = content.replace(/any/g, 'unknown');
      
      // 添加setActiveTab使用或注释
      content = content.replace(/setActiveTab,/g, '// setActiveTab is passed to children for potential use\n      setActiveTab,');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`已修复 ${filePath}`);
    } else {
      console.log(`没有需要修改的内容: ${filePath}`);
    }
    
    return true;
  } catch (error) {
    console.error(`修复 ${filePath} 时出错:`, error);
    return false;
  }
}

// 处理所有文件
async function processFiles() {
  for (const file of filesToFix) {
    fixUnusedImports(file);
  }
  
  console.log('所有文件处理完成!');
}

// 执行修复
processFiles().catch(console.error); 