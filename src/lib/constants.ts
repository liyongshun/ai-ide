import { AppConfig } from './config';

export const SITE_NAME = AppConfig.APP_NAME;

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