const fs = require('fs');
const path = require('path');

// 要修复未转义引号的文件列表
const filesToFix = [
  'src/app/docs/advanced/configuration/page.tsx',
  'src/app/docs/features/code-explanation/page.tsx',
  'src/app/docs/features/plugin-system/page.tsx',
  'src/app/docs/features/refactoring/page.tsx',
  'src/app/docs/integrations/third-party/page.tsx',
  'src/app/docs/integrations/version-control/page.tsx',
  'src/app/docs/page.tsx'
];

// 修复未转义的引号
function fixUnescapedEntities(content) {
  // 替换JSX中的未转义引号
  return content.replace(/([>][^<>]*?)[""]([^<>]*?[<])/g, (match, before, after) => {
    return `${before}&quot;${after}`;
  });
}

// 处理单个文件
function processFile(filePath) {
  console.log(`处理文件: ${filePath}`);
  
  try {
    // 读取文件内容
    const content = fs.readFileSync(filePath, 'utf8');
    
    // 修复未转义的引号
    const fixedContent = fixUnescapedEntities(content);
    
    // 如果内容有变化，写入文件
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
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
  for (const file of filesToFix) {
    processFile(file);
  }
  
  console.log('所有文件处理完成!');
}

// 执行脚本
processAllFiles(); 