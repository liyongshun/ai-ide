import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { AppConfig } from '@/lib/config';

// API基础URL - 从应用配置中获取
const API_URL = AppConfig.API_URL;

// 创建axios实例
const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// 请求拦截器 - 添加认证头
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 客户端环境才获取token
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error: unknown) => {
    return Promise.reject(error);
  }
);

// 响应拦截器 - 处理响应
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: unknown) => {
    return Promise.reject(error);
  }
);

// 接口类型定义
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface InviteCode {
  id: string;
  code: string;
  description: string;
  active: boolean;
  maxUses: number;
  usedCount: number;
  createdAt: string;
  expiresAt: string | null;
}

export interface TokenResponse {
  token: string;
  expiresIn: number;
}

export interface UsageRecord {
  id: string;
  userId: string;
  usedAt: string;
}

export interface AdminUser {
  id: number;
  username: string;
  employeeId: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}

// 验证邀请码
export const verifyInviteCode = (code: string, userId: string = '') => {
  return api.post<ApiResponse<unknown>>('/invite-codes/verify', { code, userId });
};

// 生成邀请码
export const generateInviteCodes = (count: number, description: string = '') => {
  return api.post<ApiResponse<InviteCode[]>>('/invite-codes/generate', { count, description });
};

// 获取所有邀请码（分页）
export const getAllInviteCodes = (page: number = 0, size: number = 10, sortBy: string = 'createdAt', direction: string = 'desc') => {
  return api.get<ApiResponse<{content: InviteCode[], totalElements: number, totalPages: number}>>(`/invite-codes?page=${page}&size=${size}&sortBy=${sortBy}&direction=${direction}`);
};

// 获取邀请码详情
export const getInviteCode = (id: string) => {
  return api.get<ApiResponse<InviteCode>>(`/invite-codes/${id}`);
};

// 获取邀请码使用记录
export const getInviteCodeUsageRecords = (id: string, page: number = 0, size: number = 10) => {
  return api.get<ApiResponse<{content: UsageRecord[], totalElements: number, totalPages: number}>>(`/invite-codes/${id}/usage-records?page=${page}&size=${size}`);
};

// 禁用邀请码
export const disableInviteCode = (id: string) => {
  return api.put<ApiResponse<InviteCode>>(`/invite-codes/${id}/disable`);
};

// 启用邀请码
export const enableInviteCode = (id: string) => {
  return api.put<ApiResponse<InviteCode>>(`/invite-codes/${id}/enable`);
};

// 管理员登录
export const adminLogin = (username: string, password: string) => {
  return api.post<ApiResponse<TokenResponse>>('/auth/login', { username, password });
};

// ===== 管理员管理相关API =====

// 获取所有管理员
export const getAllAdmins = () => {
  return api.get<ApiResponse<AdminUser[]>>('/admin/users');
};

// 获取单个管理员信息
export const getAdminById = (id: number) => {
  return api.get<ApiResponse<AdminUser>>(`/admin/users/${id}`);
};

// 创建管理员
export const createAdmin = (username: string, password: string, employeeId?: string) => {
  return api.post<ApiResponse<AdminUser>>('/admin/users', { username, password, employeeId });
};

// 更新管理员信息
export const updateAdmin = (id: number, username: string, password?: string, employeeId?: string) => {
  return api.put<ApiResponse<AdminUser>>(`/admin/users/${id}`, { username, password, employeeId });
};

// 更新管理员密码
export const updateAdminPassword = (id: number, oldPassword: string, newPassword: string) => {
  return api.put<ApiResponse<boolean>>(`/admin/users/${id}/password`, { oldPassword, newPassword });
};

// 删除管理员
export const deleteAdmin = (id: number) => {
  return api.delete<ApiResponse<boolean>>(`/admin/users/${id}`);
};