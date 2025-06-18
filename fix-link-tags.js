const fs = require('fs');
const path = require('path');
const glob = require('glob');

// 修复链接标签问题
function fixLinkTags(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 查找Link组件但使用了</a>结束标签的情况
    const linkPattern = /<Link\s+[^>]*>[\s\S]*?<\/a>/g;
    content = content.replace(linkPattern, (match) => {
      return match.replace(/<\/a>$/, '</Link>');
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed link tags in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing link tags in ${filePath}:`, error);
    return false;
  }
}

// 处理所有文件
async function processAllFiles() {
  // 查找所有TypeScript/JavaScript/TSX/JSX文件
  const files = glob.sync('src/**/*.{ts,tsx,js,jsx}');
  
  console.log(`Found ${files.length} files to process.`);
  
  for (const file of files) {
    fixLinkTags(file);
  }
  
  console.log('All link tags fixed successfully!');
}

// 执行修复
processAllFiles().catch(console.error); 