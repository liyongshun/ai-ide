import { ClassValue, clsx } from 'clsx';
import { AppConfig } from './config';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}

/**
 * 替换文本中出现的"${AppConfig.APP_NAME}"为配置的应用名称
 * 用于处理硬编码的文本内容
 */
export function replaceAppName(text: string): string {
  return text.replace(/{AppConfig.APP_NAME}/g, AppConfig.APP_NAME);
}