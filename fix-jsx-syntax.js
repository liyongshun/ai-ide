const fs = require('fs');
const path = require('path');

// 要修复的文件列表
const filesToFix = [
  'src/app/docs/advanced/page.tsx',
  'src/app/docs/api/page.tsx',
  'src/app/docs/integrations/page.tsx'
];

// 修复JSX语法错误
function fixJsxSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 检查是否有Link标签错误
    content = content.replace(/<\/Link>(?=\s*<\/a>)/g, '');
    
    // 检查是否有a标签错误
    content = content.replace(/<a([^>]*)>([^<]*)<\/Link>/g, '<a$1>$2</a>');
    
    // 修复div标签错误 - 这可能是由于引号问题导致的
    content = content.replace(/className=&quot;/g, 'className="');
    
    // 修复结束标签错误
    content = content.replace(/<a([^>]*)>([^<]*)<\/Link>/g, '<a$1>$2</a>');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed JSX syntax in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing JSX syntax in ${filePath}:`, error);
    return false;
  }
}

// 处理所有文件
async function processFiles() {
  for (const file of filesToFix) {
    fixJsxSyntax(file);
  }
  
  console.log('All files fixed successfully!');
}

// 执行修复
processFiles().catch(console.error); 