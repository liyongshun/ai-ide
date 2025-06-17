import { AppConfig } from './config';

export const SITE_NAME = AppConfig.APP_NAME;
export const SITE_DESCRIPTION = '面向专业开发人员的AI辅助编程工具，提高生产力和代码质量';
export const SITE_URL = 'https://ai-ide.example.com';

export const NAVIGATION = {
  main: [
    { name: '首页', href: '/' },
    { name: '产品', href: '/products' },
    { name: '文档', href: '/docs' },
    { name: '下载', href: '/download' },
    { name: '关于', href: '/about' },
  ],
  footer: [
    { name: '服务条款', href: '/terms' },
    { name: '文档', href: '/docs' },
    { name: '联系我们', href: '/contact' },
  ],
}; 