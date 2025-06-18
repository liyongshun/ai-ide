const fs = require('fs');
const path = require('path');

// 要修复TS注释的文件列表
const filesToFix = [
  'src/app/docs/[category]/[doc]/page.tsx',
  'src/app/docs/[category]/page.tsx',
  'src/app/docs/layout.tsx',
  'src/app/docs/page.tsx',
  'src/app/download/page.tsx',
  'src/components/ui/tabs.tsx'
];

// 处理单个文件
function processFile(filePath) {
  console.log(`处理文件: ${filePath}`);
  
  try {
    // 读取文件内容
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // 移除所有的@ts-expect-error和@ts-ignore注释
    content = content.replace(/\/\/\s*@ts-expect-error.*?\n/g, '');
    content = content.replace(/\/\/\s*@ts-ignore.*?\n/g, '');
    
    // 只有在内容有变化时才写入文件
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`已修复文件: ${filePath}`);
    } else {
      console.log(`文件无需修改: ${filePath}`);
    }
  } catch (error) {
    console.error(`处理文件 ${filePath} 时出错:`, error);
  }
}

// 处理所有文件
function processAllFiles() {
  for (const filePath of filesToFix) {
    processFile(filePath);
  }
  
  console.log('所有文件处理完成!');
}

// 执行脚本
processAllFiles(); 