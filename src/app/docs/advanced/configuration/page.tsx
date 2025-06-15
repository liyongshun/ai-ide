import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '配置文件 | AI IDE文档',
  description: '了解如何通过配置文件自定义AI IDE的行为和功能。',
};

export default function ConfigurationPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">配置文件</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          AI IDE提供了灵活的配置选项，允许您自定义IDE的行为、外观和AI功能，以适应不同的项目需求和个人偏好。
        </p>
      </div>

      <div className="prose prose-blue prose-lg max-w-none">
        <h2>配置系统概述</h2>
        <p>
          AI IDE采用分层的配置系统，使您能够在不同级别上自定义IDE行为。这种设计允许全局设置、用户偏好和项目特定需求共存，同时提供清晰的优先级规则来解决潜在的配置冲突。
        </p>
        
        <h3>配置层级</h3>
        <p>
          AI IDE使用以下配置层级，按优先级从高到低排序：
        </p>
        <ul>
          <li>
            <strong>工作区配置</strong> - 针对当前工作区的临时设置，不随项目共享，适合个人临时调整
          </li>
          <li>
            <strong>项目配置</strong> - 特定项目的专用设置，通常存储在版本控制中并在团队成员间共享
          </li>
          <li>
            <strong>用户配置</strong> - 特定用户的个人设置，适用于该用户打开的所有项目
          </li>
          <li>
            <strong>全局配置</strong> - 影响整个IDE行为的默认设置，为所有用户提供基础配置
          </li>
        </ul>

        <p>
          当一个配置项在多个层级中定义时，优先级较高的层级会覆盖较低层级的设置。这使您可以在全局设置基础上进行逐级自定义。
        </p>

        <h2>配置文件位置与格式</h2>
        <p>
          所有配置文件都使用JSON格式，便于人工编辑和程序处理。各级配置文件的位置如下：
        </p>
        <ul>
          <li>
            <strong>全局配置</strong>: 
            <ul>
              <li>Windows: <code>%APPDATA%/ai-ide/config.json</code></li>
              <li>macOS: <code>~/Library/Application Support/ai-ide/config.json</code></li>
              <li>Linux: <code>~/.config/ai-ide/config.json</code></li>
            </ul>
          </li>
          <li>
            <strong>用户配置</strong>: 
            <ul>
              <li>Windows: <code>%APPDATA%/ai-ide/user-settings.json</code></li>
              <li>macOS: <code>~/Library/Application Support/ai-ide/user-settings.json</code></li>
              <li>Linux: <code>~/.config/ai-ide/user-settings.json</code></li>
            </ul>
          </li>
          <li>
            <strong>项目配置</strong>: 项目根目录下的 <code>.ai-ide/config.json</code> 文件
          </li>
          <li>
            <strong>工作区配置</strong>: 项目根目录下的 <code>.ai-ide/workspace.json</code> 文件（不建议加入版本控制）
          </li>
        </ul>

        <h2>配置文件结构</h2>
        <p>
          AI IDE的配置文件采用分类嵌套结构，便于组织和访问相关设置。主要配置类别包括：
        </p>
        
        <div className="bg-gray-50 p-4 rounded-md overflow-x-auto">
          <pre><code>{`{
  "editor": { /* 编辑器相关设置 */ },
  "ai": { /* AI功能相关设置 */ },
  "theme": { /* 界面主题相关设置 */ },
  "terminal": { /* 终端相关设置 */ },
  "git": { /* Git集成相关设置 */ },
  "language": { /* 语言特定设置 */ },
  "extensions": { /* 插件相关设置 */ },
  "security": { /* 安全相关设置 */ }
}`}</code></pre>
        </div>
        
        <p>
          每个类别下包含多个具体配置项，可以根据需要进行自定义。以下是一个更完整的配置示例：
        </p>

        <div className="bg-gray-50 p-4 rounded-md overflow-x-auto">
          <pre><code>{`{
  "editor": {
    "fontFamily": "Fira Code, Consolas, 'Courier New', monospace",
    "fontSize": 14,
    "tabSize": 2,
    "insertSpaces": true,
    "wordWrap": "on",
    "lineNumbers": "on",
    "minimap": {
      "enabled": true,
      "maxColumn": 120
    },
    "formatOnSave": true,
    "bracketPairColorization": true
  },
  "ai": {
    "completion": {
      "enabled": true,
      "delay": 300,
      "model": "standard",
      "contextLines": 50,
      "multiline": true
    },
    "suggestions": {
      "enabled": true,
      "threshold": 0.7,
      "inlineHints": true
    },
    "analysis": {
      "onSave": true,
      "depth": "medium",
      "securityScan": true
    },
    "privacy": {
      "sendCodeToCloud": true,
      "anonymizeIdentifiers": false,
      "excludeFolders": ["node_modules", ".git", "secrets"]
    }
  },
  "theme": {
    "name": "dark",
    "accentColor": "#007acc",
    "syntax": "default-dark",
    "iconTheme": "material"
  },
  "terminal": {
    "shell": {
      "windows": "powershell.exe",
      "linux": "/bin/bash",
      "osx": "/bin/zsh"
    },
    "fontSize": 13,
    "lineHeight": 1.2
  },
  "git": {
    "enableSmartCommit": true,
    "autofetch": true,
    "confirmSync": false,
    "aiCommitMessages": true
  },
  "language": {
    "javascript": {
      "format": {
        "semicolons": true,
        "singleQuote": true
      },
      "suggest": {
        "completeFunctionCalls": true
      }
    },
    "python": {
      "linting": {
        "enabled": true,
        "pylintPath": "pylint"
      },
      "formatting": {
        "provider": "black"
      }
    }
  }
}`}</code></pre>
        </div>

        <h2>常用配置项详解</h2>
        
        <h3>编辑器设置</h3>
        <div className="overflow-hidden border border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">配置项</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">默认值</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">说明</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">editor.fontFamily</td>
                <td className="px-4 py-3 text-sm text-gray-600">string</td>
                <td className="px-4 py-3 text-sm text-gray-600">Consolas</td>
                <td className="px-4 py-3 text-sm text-gray-600">编辑器字体，可指定多个备选字体</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">editor.fontSize</td>
                <td className="px-4 py-3 text-sm text-gray-600">number</td>
                <td className="px-4 py-3 text-sm text-gray-600">14</td>
                <td className="px-4 py-3 text-sm text-gray-600">字体大小（像素）</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">editor.tabSize</td>
                <td className="px-4 py-3 text-sm text-gray-600">number</td>
                <td className="px-4 py-3 text-sm text-gray-600">4</td>
                <td className="px-4 py-3 text-sm text-gray-600">制表符等效空格数</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">editor.insertSpaces</td>
                <td className="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600">true</td>
                <td className="px-4 py-3 text-sm text-gray-600">按Tab键时是否插入空格而非制表符</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">editor.wordWrap</td>
                <td className="px-4 py-3 text-sm text-gray-600">string</td>
                <td className="px-4 py-3 text-sm text-gray-600">"off"</td>
                <td className="px-4 py-3 text-sm text-gray-600">自动换行模式："off"、"on"、"wordWrapColumn"或"bounded"</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">editor.formatOnSave</td>
                <td className="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600">false</td>
                <td className="px-4 py-3 text-sm text-gray-600">保存时是否自动格式化代码</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">editor.minimap.enabled</td>
                <td className="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600">true</td>
                <td className="px-4 py-3 text-sm text-gray-600">是否显示代码缩略图</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>AI设置</h3>
        <div className="overflow-hidden border border-gray-200 rounded-lg mt-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">配置项</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">默认值</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">说明</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">ai.completion.enabled</td>
                <td className="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600">true</td>
                <td className="px-4 py-3 text-sm text-gray-600">是否启用AI代码补全功能</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">ai.completion.delay</td>
                <td className="px-4 py-3 text-sm text-gray-600">number</td>
                <td className="px-4 py-3 text-sm text-gray-600">300</td>
                <td className="px-4 py-3 text-sm text-gray-600">触发补全的延迟时间(毫秒)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">ai.completion.model</td>
                <td className="px-4 py-3 text-sm text-gray-600">string</td>
                <td className="px-4 py-3 text-sm text-gray-600">"standard"</td>
                <td className="px-4 py-3 text-sm text-gray-600">使用的AI模型："standard"、"fast"或"advanced"</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">ai.completion.multiline</td>
                <td className="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600">true</td>
                <td className="px-4 py-3 text-sm text-gray-600">是否允许多行代码补全</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">ai.privacy.sendCodeToCloud</td>
                <td className="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600">true</td>
                <td className="px-4 py-3 text-sm text-gray-600">是否允许将代码发送到云端进行AI处理</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">ai.privacy.excludeFolders</td>
                <td className="px-4 py-3 text-sm text-gray-600">array</td>
                <td className="px-4 py-3 text-sm text-gray-600">["node_modules", ".git"]</td>
                <td className="px-4 py-3 text-sm text-gray-600">指定不发送到AI服务的文件夹</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>主题设置</h3>
        <div className="overflow-hidden border border-gray-200 rounded-lg mt-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">配置项</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">默认值</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">说明</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">theme.name</td>
                <td className="px-4 py-3 text-sm text-gray-600">string</td>
                <td className="px-4 py-3 text-sm text-gray-600">"light"</td>
                <td className="px-4 py-3 text-sm text-gray-600">界面主题："light"或"dark"</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">theme.accentColor</td>
                <td className="px-4 py-3 text-sm text-gray-600">string</td>
                <td className="px-4 py-3 text-sm text-gray-600">"#007acc"</td>
                <td className="px-4 py-3 text-sm text-gray-600">界面强调色（十六进制颜色值）</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">theme.syntax</td>
                <td className="px-4 py-3 text-sm text-gray-600">string</td>
                <td className="px-4 py-3 text-sm text-gray-600">"default-dark"</td>
                <td className="px-4 py-3 text-sm text-gray-600">代码语法高亮主题</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>配置方法</h2>
        <p>
          AI IDE提供了多种方式来修改配置，以满足不同用户的偏好：
        </p>
        
        <h3>通过设置界面</h3>
        <p>
          最简单的配置方法是使用IDE内置的设置界面：
        </p>
        <ol>
          <li>从菜单选择<strong>文件 {'>'} 设置</strong>或使用快捷键<kbd className="px-1 py-0.5 rounded bg-gray-100 text-xs">Ctrl</kbd>+<kbd className="px-1 py-0.5 rounded bg-gray-100 text-xs">,</kbd></li>
          <li>在设置界面中，您可以根据类别浏览和修改所有可用的配置项</li>
          <li>设置界面提供搜索功能，帮助您快速找到特定设置</li>
          <li>修改后的设置将自动保存到用户配置文件中</li>
        </ol>
        
        <h3>直接编辑配置文件</h3>
        <p>
          对于高级用户或需要进行批量设置的情况，可以直接编辑JSON配置文件：
        </p>
        <ol>
          <li>从菜单选择<strong>文件 {'>'} 设置 {'>'} 打开配置文件</strong></li>
          <li>选择要编辑的配置级别（用户、工作区或项目）</li>
          <li>使用JSON编辑器修改配置，IDE会提供自动补全和验证</li>
          <li>保存文件后，新的配置将立即生效</li>
        </ol>
        
        <h3>使用命令面板</h3>
        <p>
          对于常用设置，可以通过命令面板快速修改：
        </p>
        <ol>
          <li>按<kbd className="px-1 py-0.5 rounded bg-gray-100 text-xs">Ctrl</kbd>+<kbd className="px-1 py-0.5 rounded bg-gray-100 text-xs">Shift</kbd>+<kbd className="px-1 py-0.5 rounded bg-gray-100 text-xs">P</kbd>打开命令面板</li>
          <li>输入"设置:"以筛选设置相关命令</li>
          <li>选择相应命令修改特定设置</li>
        </ol>

        <h2>配置同步</h2>
        <p>
          AI IDE支持跨设备同步用户配置，确保您在不同机器上获得一致的体验：
        </p>
        <ol>
          <li>从菜单选择<strong>文件 {'>'} 设置 {'>'} 配置同步</strong></li>
          <li>登录您的AI IDE账号</li>
          <li>选择要同步的配置类型（编辑器设置、键盘快捷键、插件等）</li>
          <li>启用同步后，您的配置将自动在已登录的设备间保持一致</li>
        </ol>

        <h2>项目级配置最佳实践</h2>
        <p>
          项目级配置是团队协作的重要工具，可以确保所有团队成员使用一致的设置：
        </p>
        <ul>
          <li>
            <strong>版本控制</strong> - 将项目配置文件（<code>.ai-ide/config.json</code>）添加到版本控制系统，但排除工作区配置（<code>.ai-ide/workspace.json</code>）
          </li>
          <li>
            <strong>最小化配置</strong> - 项目配置中只包含对项目至关重要的设置，避免覆盖用户的个人偏好
          </li>
          <li>
            <strong>文档化</strong> - 在项目README中说明关键的IDE配置，特别是不常见或自定义的设置
          </li>
          <li>
            <strong>语言特定设置</strong> - 使用<code>language</code>部分为项目中使用的各种编程语言配置特定的格式化和检查规则
          </li>
          <li>
            <strong>AI隐私设置</strong> - 在项目配置中明确指定哪些文件夹应从AI处理中排除，特别是包含敏感信息的目录
          </li>
        </ul>

        <h2>故障排除</h2>
        <p>
          如果您遇到配置相关的问题，可以尝试以下步骤：
        </p>
        <ul>
          <li>
            <strong>验证JSON格式</strong> - 确保手动编辑的配置文件使用有效的JSON格式
          </li>
          <li>
            <strong>检查配置层级</strong> - 确认设置在正确的配置文件中，并了解不同层级的优先级
          </li>
          <li>
            <strong>重置设置</strong> - 使用命令面板中的"设置: 重置用户设置"命令恢复默认配置
          </li>
          <li>
            <strong>查看日志</strong> - 通过"帮助 {'>'} 打开日志"菜单查看配置加载日志，识别潜在错误
          </li>
        </ul>
      </div>

      <div className="mt-12 rounded-lg bg-blue-50 p-6">
        <h3 className="text-lg font-semibold text-gray-900">配置模板</h3>
        <p className="mt-2 text-gray-600">
          AI IDE提供了针对不同开发场景的配置模板，可以作为您自定义配置的起点。通过命令面板搜索"设置: 应用配置模板"来使用这些模板。
        </p>
        <div className="mt-4">
          <a href="/docs/advanced/custom-models" className="inline-flex text-blue-700 font-medium hover:text-blue-800">
            了解自定义AI模型配置 <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
} 