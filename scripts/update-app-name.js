#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 获取包含"AI IDE"的文件列表
const getFilesWithAIIDE = () => {
  try {
    const result = execSync(
      "find src -type f -name \"*.tsx\" -o -name \"*.ts\" | grep -v \"node_modules\" | xargs grep -l \"AI IDE\" | sort"
    ).toString().trim();
    
    return result.split('\n').filter(Boolean);
  } catch (error) {
    console.error('Error finding files:', error);
    return [];
  }
};

// 处理单个文件
const processFile = (filePath) => {
  try {
    console.log(`Processing: ${filePath}`);
    
    // 读取文件内容
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 检查文件是否已经导入AppConfig
    const hasAppConfigImport = /import\s+{\s*AppConfig\s*}\s+from/.test(content);
    
    // 特殊处理config.ts文件，不替换其中的字符串
    if (filePath === 'src/lib/config.ts') {
      console.log(`Skipping config file: ${filePath}`);
      return true;
    }
    
    // 替换不同情况下的"AI IDE"
    let updatedContent = content;
    
    // 检查文件类型
    const isJSX = filePath.endsWith('.tsx') || filePath.endsWith('.jsx');
    const isTS = filePath.endsWith('.ts') || filePath.endsWith('.tsx');
    
    // 1. 替换字符串中的"AI IDE"
    if (isJSX || isTS) {
      // 在JSX/TSX文件中使用模板字符串语法 `${AppConfig.APP_NAME}`
      updatedContent = updatedContent.replace(/(['"`])AI IDE\1/g, "`${AppConfig.APP_NAME}`");
    }
    
    // 2. 替换JSX文本中的"AI IDE"
    updatedContent = updatedContent.replace(/>AI IDE</g, ">{AppConfig.APP_NAME}<");
    
    // 3. 替换注释中的"AI IDE"
    updatedContent = updatedContent.replace(/(\/\/.*?)AI IDE/g, "$1{AppConfig.APP_NAME}");
    updatedContent = updatedContent.replace(/(\/\*.*?)AI IDE(.*?\*\/)/g, "$1{AppConfig.APP_NAME}$2");
    
    // 4. 替换其他情况下的"AI IDE"
    updatedContent = updatedContent.replace(/AI IDE/g, "{AppConfig.APP_NAME}");
    
    // 如果需要添加导入语句
    if (!hasAppConfigImport && updatedContent !== content) {
      // 检测文件中的现有导入语句
      const importRegex = /import\s+.*from\s+['"].*['"]/;
      const lastImportMatch = [...content.matchAll(new RegExp(importRegex, 'g'))].pop();
      
      if (lastImportMatch) {
        const lastImport = lastImportMatch[0];
        const lastImportIndex = content.lastIndexOf(lastImport) + lastImport.length;
        
        // 在最后一个导入语句后添加AppConfig导入
        const importPath = filePath.includes('/app/') ? '@/lib/config' : './config';
        const newContent = 
          content.slice(0, lastImportIndex) + 
          `;\nimport { AppConfig } from '${importPath}'` + 
          content.slice(lastImportIndex);
          
        fs.writeFileSync(filePath, newContent);
        console.log(`Added AppConfig import to: ${filePath}`);
      } else {
        console.warn(`Could not find import statements in ${filePath}`);
      }
    } else if (updatedContent !== content) {
      // 如果已有导入语句，只替换内容
      fs.writeFileSync(filePath, updatedContent);
      console.log(`Updated content in: ${filePath}`);
    } else {
      console.log(`No changes needed for: ${filePath}`);
    }
    
    return true;
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
    return false;
  }
};

// 手动修复字符串中的替换问题
const fixStringReplacements = (filePath) => {
  try {
    console.log(`Fixing string replacements in: ${filePath}`);
    
    // 读取文件内容
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 修复错误的字符串替换
    // 将 '{AppConfig.APP_NAME}' 替换为 '${AppConfig.APP_NAME}'
    const updatedContent = content.replace(/(['"`]){AppConfig\.APP_NAME}(['"`])/g, "$1${AppConfig.APP_NAME}$2");
    
    if (updatedContent !== content) {
      fs.writeFileSync(filePath, updatedContent);
      console.log(`Fixed string replacements in: ${filePath}`);
      return true;
    } else {
      console.log(`No string replacements needed for: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing string replacements in ${filePath}:`, error);
    return false;
  }
};

// 主函数
const main = () => {
  const files = getFilesWithAIIDE();
  console.log(`Found ${files.length} files containing "AI IDE"`);
  
  let successCount = 0;
  let failCount = 0;
  
  // 第一遍：替换"AI IDE"
  for (const file of files) {
    if (processFile(file)) {
      successCount++;
    } else {
      failCount++;
    }
  }
  
  console.log('\nFixing string replacements...');
  
  // 第二遍：修复字符串替换
  const allTsxFiles = execSync(
    "find src -type f -name \"*.tsx\" -o -name \"*.ts\" | grep -v \"node_modules\" | grep -v \"config.ts\""
  ).toString().trim().split('\n').filter(Boolean);
  
  for (const file of allTsxFiles) {
    fixStringReplacements(file);
  }
  
  console.log('\nSummary:');
  console.log(`- Successfully processed: ${successCount} files`);
  console.log(`- Failed to process: ${failCount} files`);
  
  if (failCount > 0) {
    console.log('\nPlease check the error messages above and fix the remaining files manually.');
  } else {
    console.log('\nAll files have been processed successfully!');
  }
};

main(); 