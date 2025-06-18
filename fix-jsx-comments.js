const fs = require('fs');
const path = require('path');

// 要修复JSX注释的文件列表
const filesToFix = [
  'src/app/docs/features/code-completion/page.tsx'
];

// 处理单个文件
function processFile(filePath) {
  console.log(`处理文件: ${filePath}`);
  
  try {
    // 读取文件内容
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // 将JSX中的普通注释转换为JSX注释格式
    // 特别是处理第195行附近的注释问题
    if (filePath === 'src/app/docs/features/code-completion/page.tsx') {
      const lines = content.split('\n');
      for (let i = 190; i < 200; i++) {
        if (i < lines.length && lines[i].includes('//')) {
          lines[i] = lines[i].replace(/(\s+)\/\/([^<>]*?)(<\/[a-z]+>)/g, '$1{/* $2 */}$3');
        }
      }
      content = lines.join('\n');
    }
    
    // 通用的JSX注释修复
    content = content.replace(/(\s+)\/\/([^<>]*?)(<\/[a-z]+>)/g, '$1{/* $2 */}$3');
    
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