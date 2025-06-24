"use client";

import React, { useState } from 'react';
import { verifyInviteCode } from '@/lib/api/inviteCodeApi';
import Link from 'next/link';
import { AppConfig } from '@/lib/config';

// 定义错误类型
interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
  message: string;
}

export default function VerifyCodePage() {
  const [code, setCode] = useState('');
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await verifyInviteCode(code, userId);
      const data = response.data;
      setResult({
        success: data.success,
        message: data.message
      });
      if (data.success) {
        setCode('');
        setUserId('');
      }
    } catch (err: unknown) {
      const apiError = err as ApiError;
      setResult({
        success: false,
        message: apiError.response?.data?.message || '验证失败，请稍后再试'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-lg p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">{AppConfig.APP_NAME} 邀请码验证</h1>
        <p className="text-gray-600 text-center mb-8">
          请输入您收到的邀请码以获取使用资格
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-1">
              邀请码
            </label>
            <input
              id="code"
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="请输入邀请码"
              required
              maxLength={16}
            />
          </div>

          <div>
            <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-1">
              用户ID（可选）
            </label>
            <input
              id="userId"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="请输入用户ID（可选）"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            {loading ? '验证中...' : '验证邀请码'}
          </button>
        </form>

        {result && (
          <div className={`mt-8 p-4 rounded-md ${result.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            {result.success ? (
              <div className="text-center">
                <h2 className="text-xl font-semibold text-green-800 mb-2">邀请码验证成功！</h2>
                <p className="text-green-700 mb-4">
                  恭喜您获得了访问{AppConfig.APP_NAME}的资格。您现在可以下载并使用我们的IDE工具。
                </p>
                <Link
                  href="/download"
                  className="inline-block bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                >
                  下载{AppConfig.APP_NAME}
                </Link>
              </div>
            ) : (
              <div className="text-center">
                <h2 className="text-xl font-semibold text-red-800 mb-2">邀请码验证失败</h2>
                <p className="text-red-700">{result.message}</p>
              </div>
            )}
          </div>
        )}

        <div className="mt-8 text-center">
          <Link href="/invite/admin/login" className="text-blue-600 hover:text-blue-800 text-sm">
            管理员入口
          </Link>
        </div>
      </div>
    </div>
  );
} 