const fs = require('fs');
const path = require('path');
const glob = require('glob');

// 修复引号问题
function fixQuotes(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 替换所有的 &quot; 为 "
    content = content.replace(/&quot;/g, '"');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed quotes in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing quotes in ${filePath}:`, error);
    return false;
  }
}

// 处理所有文件
async function processAllFiles() {
  // 查找所有TypeScript/JavaScript/TSX/JSX文件
  const files = glob.sync('src/**/*.{ts,tsx,js,jsx}');
  
  console.log(`Found ${files.length} files to process.`);
  
  for (const file of files) {
    fixQuotes(file);
  }
  
  console.log('All quotes fixed successfully!');
}

// 执行修复
processAllFiles().catch(console.error); 