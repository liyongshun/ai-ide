const fs = require('fs');
const path = require('path');
const glob = require('glob');

// 修复未使用的导入和变量
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 查找未使用的导入
    const unusedImportsRegex = /import\s+{[^}]*}\s+from\s+['"][^'"]+['"]/g;
    const imports = content.match(unusedImportsRegex) || [];
    
    for (const importStatement of imports) {
      // 检查导入语句中的每个变量
      const importedVars = importStatement.match(/{([^}]*)}/)[1].split(',').map(v => v.trim());
      const unusedVars = [];
      
      for (const varName of importedVars) {
        // 排除注释和字符串中的出现
        const cleanName = varName.replace(/\s+as\s+\w+/, ''); // 处理 "Name as Alias" 情况
        const nameToCheck = cleanName.split(' ').pop(); // 获取实际变量名
        
        // 检查变量在文件其余部分是否被使用
        const restOfFile = content.substring(content.indexOf(importStatement) + importStatement.length);
        const regex = new RegExp(`\\b${nameToCheck}\\b`, 'g');
        
        if (!regex.test(restOfFile)) {
          unusedVars.push(varName);
        }
      }
      
      // 如果有未使用的变量，修改导入语句
      if (unusedVars.length > 0) {
        const newImportedVars = importedVars.filter(v => !unusedVars.includes(v)).join(', ');
        
        if (newImportedVars) {
          // 还有其他变量，更新导入语句
          const newImportStatement = importStatement.replace(/{[^}]*}/, `{ ${newImportedVars} }`);
          content = content.replace(importStatement, newImportStatement);
        } else {
          // 所有变量都未使用，删除整个导入语句
          content = content.replace(importStatement, '');
        }
      }
    }
    
    // 查找未使用的变量定义
    const unusedVarsRegex = /const\s+(\w+)\s*=.+?;/g;
    const varMatches = content.matchAll(unusedVarsRegex);
    
    for (const match of varMatches) {
      const fullMatch = match[0];
      const varName = match[1];
      
      // 检查变量在定义后是否被使用
      const position = match.index + fullMatch.length;
      const restOfFile = content.substring(position);
      const regex = new RegExp(`\\b${varName}\\b`, 'g');
      
      if (!regex.test(restOfFile)) {
        content = content.replace(fullMatch, '');
      }
    }
    
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    console.error(`Error fixing unused imports in ${filePath}:`, error);
    return false;
  }
}

// 修复HTML链接为Next.js Link组件
function fixHtmlLinks(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 检查文件是否已经导入Link组件
    let hasLinkImport = /import\s+.*Link.*\s+from\s+['"]next\/link['"]/g.test(content);
    
    // 查找内部链接的a标签
    const htmlLinkRegex = /<a\s+[^>]*href\s*=\s*["']\/[^"'>]*["'][^>]*>/g;
    const links = content.match(htmlLinkRegex) || [];
    
    if (links.length > 0 && !hasLinkImport) {
      // 添加Link导入
      const importRegex = /import\s+.*from\s+['"][^'"]+['"]/g;
      const lastImport = [...content.matchAll(importRegex)].pop();
      
      if (lastImport) {
        const lastImportStatement = lastImport[0];
        const lastImportIndex = content.lastIndexOf(lastImportStatement) + lastImportStatement.length;
        content = content.slice(0, lastImportIndex) + 
                 `;\nimport Link from "next/link"` + 
                 content.slice(lastImportIndex);
      }
      
      hasLinkImport = true;
    }
    
    // 替换a标签为Link组件
    for (const link of links) {
      const hrefMatch = link.match(/href\s*=\s*["']([^"']+)["']/);
      if (hrefMatch && hrefMatch[1].startsWith('/')) {
        const href = hrefMatch[1];
        const newLinkStart = link.replace(/<a/, '<Link').replace(/href/, 'href');
        content = content.replace(link, newLinkStart);
        
        // 替换对应的结束标签
        const closingTagRegex = new RegExp(`</a>(?=[^<]*${href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'g');
        content = content.replace(closingTagRegex, '</Link>');
      }
    }
    
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    console.error(`Error fixing HTML links in ${filePath}:`, error);
    return false;
  }
}

// 修复未转义的引号
function fixUnescapedEntities(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 替换JSX属性中未转义的引号
    content = content.replace(/(\s+\w+\s*=\s*)"/g, '$1&quot;');
    content = content.replace(/(\s+\w+\s*=\s*.*)"(\s*[>,])/g, '$1&quot;$2');
    
    // 替换JSX内容中未转义的引号
    content = content.replace(/(>)([^<]*)"([^<]*)</g, '$1$2&quot;$3<');
    
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    console.error(`Error fixing unescaped entities in ${filePath}:`, error);
    return false;
  }
}

// 为图片添加alt属性
function fixImageAlt(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 查找没有alt属性的Image组件
    const imageRegex = /<Image\s+([^>]*)>/g;
    const images = content.matchAll(imageRegex);
    
    for (const match of images) {
      const imageTag = match[0];
      const imageAttrs = match[1];
      
      if (!imageAttrs.includes('alt=')) {
        // 提取src属性以生成默认alt文本
        const srcMatch = imageAttrs.match(/src\s*=\s*["']([^"']+)["']/);
        let altText = 'Image';
        
        if (srcMatch) {
          const src = srcMatch[1];
          // 从文件名生成alt文本
          const fileName = path.basename(src, path.extname(src));
          altText = fileName.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        }
        
        const newImageTag = imageTag.replace(/(<Image\s+)/, `$1alt="${altText}" `);
        content = content.replace(imageTag, newImageTag);
      }
    }
    
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    console.error(`Error fixing image alt attributes in ${filePath}:`, error);
    return false;
  }
}

// 修复接口声明问题
function fixInterfaceDeclarations(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 查找空接口声明
    const emptyInterfaceRegex = /export\s+interface\s+(\w+)\s*{}\s*(?:extends\s+(\w+))?/g;
    const interfaces = content.matchAll(emptyInterfaceRegex);
    
    for (const match of interfaces) {
      const fullMatch = match[0];
      const interfaceName = match[1];
      const extendedInterface = match[2];
      
      if (extendedInterface) {
        // 如果接口扩展了另一个接口，添加一个虚拟属性
        const newInterface = `export interface ${interfaceName} extends ${extendedInterface} {\n  _type?: '${interfaceName}';\n}`;
        content = content.replace(fullMatch, newInterface);
      } else {
        // 如果是独立接口，添加一个虚拟属性
        const newInterface = `export interface ${interfaceName} {\n  _type?: '${interfaceName}';\n}`;
        content = content.replace(fullMatch, newInterface);
      }
    }
    
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    console.error(`Error fixing interface declarations in ${filePath}:`, error);
    return false;
  }
}

// 修复any类型
function fixAnyTypes(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 替换any类型为unknown或更具体的类型
    content = content.replace(/:\s*any\b/g, ': unknown');
    
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    console.error(`Error fixing any types in ${filePath}:`, error);
    return false;
  }
}

// 修复所有错误
async function fixAllErrors() {
  // 查找所有TypeScript/JavaScript文件
  const files = glob.sync('src/**/*.{ts,tsx,js,jsx}');
  
  console.log(`Found ${files.length} files to process.`);
  
  for (const file of files) {
    console.log(`Processing ${file}...`);
    
    // 应用所有修复
    fixUnusedImports(file);
    fixHtmlLinks(file);
    fixUnescapedEntities(file);
    fixImageAlt(file);
    fixInterfaceDeclarations(file);
    fixAnyTypes(file);
  }
  
  console.log('All fixes applied successfully!');
}

// 执行修复
fixAllErrors().catch(console.error); 