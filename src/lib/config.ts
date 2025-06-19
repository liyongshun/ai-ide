// 应用配置
export const AppConfig = {
  /**
   * 应用名称 - 此配置将在整个应用中显示
   * 默认为 'Flow'
   */
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || 'Flow',
  
  /**
   * 最新版本号 - 显示在下载页面
   */
  LATEST_VERSION: process.env.NEXT_PUBLIC_LATEST_VERSION || 'v2.5.0',
  
  /**
   * 发布日期 - 显示在下载页面
   */
  RELEASE_DATE: process.env.NEXT_PUBLIC_RELEASE_DATE || '2023年12月15日',
  
  // 其他配置项可以在此处添加
}; 