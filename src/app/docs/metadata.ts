import { Metadata } from 'next';
import { AppConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: `${AppConfig.APP_NAME} 文档中心`,
  description: `了解如何使用${AppConfig.APP_NAME}提升你的开发效率，包括安装指南、特性介绍和API参考。`,
}; 