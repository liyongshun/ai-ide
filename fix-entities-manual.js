const fs = require('fs');

// 修复 src/app/docs/advanced/configuration/page.tsx 文件
function fixConfigurationPage() {
  const filePath = 'src/app/docs/advanced/configuration/page.tsx';
  console.log(`修复文件: ${filePath}`);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 修复第333行的问题 - 使用字符串替换而不是正则表达式
    content = content.replace(
      'td className=&quot;px-4 py-3 text-sm text-gray-600&quot;>自动换行模式：&quot;off&quot;、&quot;on&quot;、&quot;wordWrapColumn&quot;或&quot;bounded&quot;</td>',
      'td className="px-4 py-3 text-sm text-gray-600">自动换行模式：&quot;off&quot;、&quot;on&quot;、&quot;wordWrapColumn&quot;或&quot;bounded&quot;</td>'
    );
    
    // 修复第363行的问题 - 使用字符串替换而不是正则表达式
    content = content.replace(
      'td className=&quot;px-4 py-3 text-sm text-gray-600&quot;>使用的AI模型：&quot;fast&quot;、&quot;standard&quot;或&quot;advanced&quot;</td>',
      'td className="px-4 py-3 text-sm text-gray-600">使用的AI模型：&quot;fast&quot;、&quot;standard&quot;或&quot;advanced&quot;</td>'
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`已修复文件: ${filePath}`);
  } catch (error) {
    console.error(`处理文件 ${filePath} 时出错:`, error);
  }
}

// 修复 src/app/docs/features/code-explanation/page.tsx 文件
function fixCodeExplanationPage() {
  const filePath = 'src/app/docs/features/code-explanation/page.tsx';
  console.log(`修复文件: ${filePath}`);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 修复第111行的问题 - 使用字符串替换而不是正则表达式
    content = content.replace(
      'code className=&quot;bg-gray-100 px-1.5 py-0.5 rounded text-sm&quot;>Cmd/Ctrl + L</code>',
      'code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">Cmd/Ctrl + L</code>'
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`已修复文件: ${filePath}`);
  } catch (error) {
    console.error(`处理文件 ${filePath} 时出错:`, error);
  }
}

// 执行修复
fixConfigurationPage();
fixCodeExplanationPage(); 