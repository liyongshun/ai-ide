"use client";

import React, { useState } from 'react';
import { adminLogin } from '@/lib/api/inviteCodeApi';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// 定义错误类型
interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
  message: string;
}

export default function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await adminLogin(username, password);
      const data = response.data;
      
      if (data.success) {
        // 保存token到localStorage
        localStorage.setItem('token', data.data.token);
        router.push('/invite/admin/dashboard');
      } else {
        setError(data.message || '登录失败，请检查用户名和密码');
      }
    } catch (err: unknown) {
      const apiError = err as ApiError;
      console.error('登录错误:', apiError);
      setError(apiError.response?.data?.message || '登录失败，请检查用户名和密码');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-md p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-8">管理员登录</h1>
        
        {error && (
          <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              用户名
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="请输入用户名"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              密码
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="请输入密码"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            {loading ? '登录中...' : '登录'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800 text-sm">
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
} 