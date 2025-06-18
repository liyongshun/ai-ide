const fs = require('fs');
const path = require('path');

// 要修复的文件列表
const filesToFix = [
  'src/app/about/page.tsx',
  'src/app/docs/[category]/page.tsx',
  'src/app/docs/advanced/configuration/page.tsx',
  'src/app/docs/advanced/performance/page.tsx',
  'src/app/docs/features/code-completion/page.tsx',
  'src/app/docs/features/code-explanation/page.tsx',
  'src/app/docs/features/plugin-system/page.tsx',
  'src/app/docs/features/refactoring/page.tsx',
  'src/app/docs/getting-started/quick-start/page.tsx',
  'src/app/docs/integrations/third-party/page.tsx',
  'src/app/docs/integrations/version-control/page.tsx',
  'src/app/docs/page.tsx'
];

// 修复导入语句中的引号问题
function fixImportQuotes(filePath) {
  try {
    console.log(`处理文件: ${filePath}`);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 修复import语句中的引号
    let newContent = content.replace(/import (.*?) from &quot;(.*?)"/g, 'import $1 from "$2"');
    newContent = newContent.replace(/import (.*?) from "(.*?)&quot;/g, 'import $1 from "$2"');
    
    // 修复import语句中的花括号内容
    newContent = newContent.replace(/import { (.*?) } from &quot;(.*?)"/g, 'import { $1 } from "$2"');
    newContent = newContent.replace(/import { (.*?) } from "(.*?)&quot;/g, 'import { $1 } from "$2"');
    
    // 修复特定文件中的其他问题
    if (filePath === 'src/app/docs/[category]/page.tsx') {
      // 修复多余的大括号
      newContent = newContent.replace(/};(\s*?)};/g, '};');
    }
    
    // 只有在内容有变化时才写入文件
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log(`已修复 ${filePath}`);
      return true;
    } else {
      console.log(`没有需要修改的内容: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`修复 ${filePath} 时出错:`, error);
    return false;
  }
}

// 处理所有文件
async function processFiles() {
  for (const file of filesToFix) {
    fixImportQuotes(file);
  }
  
  console.log('所有文件处理完成!');
}

// 执行修复
processFiles().catch(console.error); 