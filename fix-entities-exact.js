const fs = require('fs');
const path = require('path');

// 定义需要修复的文件和具体位置
const filesToFix = [
  {
    path: 'src/app/docs/advanced/configuration/page.tsx',
    // 指定行号和替换内容
    lineReplacements: [
      { 
        lineNumber: 333,
        search: /([^&])"/g, 
        replace: '$1&quot;'
      },
      {
        lineNumber: 363,
        search: /([^&])"/g,
        replace: '$1&quot;'
      }
    ]
  },
  {
    path: 'src/app/docs/features/code-explanation/page.tsx',
    lineReplacements: [
      {
        lineNumber: 111,
        search: /([^&])"/g,
        replace: '$1&quot;'
      }
    ]
  },
  {
    path: 'src/app/docs/features/plugin-system/page.tsx',
    lineReplacements: [
      {
        lineNumber: 336,
        search: /([^&])"/g,
        replace: '$1&quot;'
      }
    ]
  },
  {
    path: 'src/app/docs/integrations/third-party/page.tsx',
    lineReplacements: [
      {
        lineNumber: 219,
        search: /([^&])"/g,
        replace: '$1&quot;'
      }
    ]
  }
];

// 处理单个文件
function processFile(fileInfo) {
  const { path: filePath, lineReplacements } = fileInfo;
  console.log(`处理文件: ${filePath}`);
  
  try {
    // 读取文件内容
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    let modified = false;
    
    // 应用行替换
    for (const replacement of lineReplacements) {
      const { lineNumber, search, replace } = replacement;
      
      // 确保行号在有效范围内
      if (lineNumber > 0 && lineNumber <= lines.length) {
        const originalLine = lines[lineNumber - 1];
        const newLine = originalLine.replace(search, replace);
        
        if (originalLine !== newLine) {
          lines[lineNumber - 1] = newLine;
          modified = true;
          console.log(`已修复第 ${lineNumber} 行: ${filePath}`);
        }
      }
    }
    
    // 只有在内容有变化时才写入文件
    if (modified) {
      fs.writeFileSync(filePath, lines.join('\n'));
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
  for (const fileInfo of filesToFix) {
    processFile(fileInfo);
  }
  
  console.log('所有文件处理完成!');
}

// 执行脚本
processAllFiles(); 