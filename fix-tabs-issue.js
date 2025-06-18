const fs = require('fs');

function fixTabsIssue() {
  const filePath = 'src/components/ui/tabs.tsx';
  console.log(`修复文件: ${filePath}`);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 修复 TabsContent 函数中的 setActiveTab 参数问题
    // 在函数参数前添加 eslint-disable-next-line 注释
    content = content.replace(
      /export function TabsContent\(\{ value, activeTab, setActiveTab, children, className, \.\.\.(props|props)\}: TabsContentProps\) \{/g,
      '// eslint-disable-next-line @typescript-eslint/no-unused-vars\nexport function TabsContent({ value, activeTab, setActiveTab, children, className, ...props}: TabsContentProps) {'
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`已修复 TabsContent 函数中的 setActiveTab 问题: ${filePath}`);
  } catch (error) {
    console.error(`处理文件 ${filePath} 时出错:`, error);
  }
}

// 执行修复
fixTabsIssue();
console.log('修复完成!'); 