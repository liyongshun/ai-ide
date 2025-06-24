"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { getInviteCode, getInviteCodeUsageRecords, disableInviteCode, enableInviteCode, InviteCode, UsageRecord } from '@/lib/api/inviteCodeApi';
import { AppConfig } from '@/lib/config';

// 定义错误类型
interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
    status?: number;
  };
  message: string;
}

export default function CodeDetailPage() {
  const [inviteCode, setInviteCode] = useState<InviteCode | null>(null);
  const [usageRecords, setUsageRecords] = useState<UsageRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [usageRecordsLoading, setUsageRecordsLoading] = useState<boolean>(true);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pageSize] = useState<number>(10);
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const fetchInviteCode = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getInviteCode(id);
      const data = response.data;
      
      if (data.success) {
        setInviteCode(data.data);
      } else {
        setError(data.message || '获取邀请码详情失败');
      }
    } catch (err: unknown) {
      const apiError = err as ApiError;
      console.error('获取邀请码详情错误:', apiError);
      setError(apiError.response?.data?.message || '获取邀请码详情失败，请稍后再试');
      // 如果是认证错误，跳转到登录页
      if (apiError.response?.status === 401) {
        localStorage.removeItem('token');
        router.push('/invite/admin/login');
      } else if (apiError.response?.status === 404) {
        setError('邀请码不存在');
      }
    } finally {
      setLoading(false);
    }
  }, [id, router]);

  const fetchUsageRecords = useCallback(async () => {
    setUsageRecordsLoading(true);
    try {
      const response = await getInviteCodeUsageRecords(id, currentPage, pageSize);
      const data = response.data;
      
      if (data.success) {
        setUsageRecords(data.data.content);
        setTotalRecords(data.data.totalElements);
      } else {
        setError(data.message || '获取使用记录失败');
      }
    } catch (err: unknown) {
      const apiError = err as ApiError;
      console.error('获取使用记录错误:', apiError);
      // 如果是认证错误，跳转到登录页
      if (apiError.response?.status === 401) {
        localStorage.removeItem('token');
        router.push('/invite/admin/login');
      }
    } finally {
      setUsageRecordsLoading(false);
    }
  }, [id, currentPage, pageSize, router]);

  useEffect(() => {
    // 检查认证状态
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/invite/admin/login');
      return;
    }

    fetchInviteCode();
  }, [fetchInviteCode, router]);

  useEffect(() => {
    if (inviteCode) {
      fetchUsageRecords();
    }
  }, [inviteCode, fetchUsageRecords]);

  const handleToggleStatus = async () => {
    if (!inviteCode) return;
    
    try {
      if (inviteCode.active) {
        await disableInviteCode(id);
      } else {
        await enableInviteCode(id);
      }
      // 刷新详情
      fetchInviteCode();
    } catch (err: unknown) {
      const apiError = err as ApiError;
      console.error('更新邀请码状态错误:', apiError);
      if (apiError.response?.status === 401) {
        localStorage.removeItem('token');
        router.push('/invite/admin/login');
      }
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '无';
    const date = new Date(dateString);
    return date.toLocaleString('zh-CN');
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('已复制到剪贴板');
      })
      .catch(err => {
        console.error('复制失败:', err);
      });
  };

  const totalPages = Math.ceil(totalRecords / pageSize);

  if (loading) {
    return (
      <div className="container mx-auto p-6 flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-6">
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md">
          <p className="font-medium">{error}</p>
          <div className="mt-4">
            <Link
              href="/invite/admin/dashboard"
              className="text-blue-600 hover:text-blue-800"
            >
              返回仪表板
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!inviteCode) {
    return (
      <div className="container mx-auto p-6">
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 p-4 rounded-md">
          <p className="font-medium">没有找到此邀请码</p>
          <div className="mt-4">
            <Link
              href="/invite/admin/dashboard"
              className="text-blue-600 hover:text-blue-800"
            >
              返回仪表板
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">{AppConfig.APP_NAME} 邀请码详情</h1>
        <Link
          href="/invite/admin/dashboard"
          className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
        >
          返回仪表板
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold mb-2">邀请码: {inviteCode.code}</h2>
            <p className="text-gray-500 mb-1">
              <span className="font-medium">ID:</span> {inviteCode.id}
            </p>
            <p className="text-gray-500 mb-1">
              <span className="font-medium">描述:</span> {inviteCode.description || '无描述'}
            </p>
            <p className="text-gray-500 mb-1">
              <span className="font-medium">状态:</span>{' '}
              <span className={`px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${inviteCode.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {inviteCode.active ? '启用' : '禁用'}
              </span>
            </p>
            <p className="text-gray-500 mb-1">
              <span className="font-medium">使用次数:</span> {inviteCode.usedCount} / {inviteCode.maxUses || '无限制'}
            </p>
            <p className="text-gray-500 mb-1">
              <span className="font-medium">创建时间:</span> {formatDate(inviteCode.createdAt)}
            </p>
            {inviteCode.expiresAt && (
              <p className="text-gray-500 mb-1">
                <span className="font-medium">过期时间:</span> {formatDate(inviteCode.expiresAt)}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <button
              onClick={() => copyToClipboard(inviteCode.code)}
              className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              复制邀请码
            </button>
            <button
              onClick={handleToggleStatus}
              className={`block w-full py-2 px-4 rounded-md transition-colors ${inviteCode.active 
                ? 'bg-red-600 text-white hover:bg-red-700' 
                : 'bg-green-600 text-white hover:bg-green-700'}`}
            >
              {inviteCode.active ? '禁用邀请码' : '启用邀请码'}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h2 className="text-lg font-semibold">使用记录</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  记录ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  用户ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  使用时间
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {usageRecordsLoading ? (
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                    </div>
                  </td>
                </tr>
              ) : usageRecords.length === 0 ? (
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                    暂无使用记录
                  </td>
                </tr>
              ) : (
                usageRecords.map((record) => (
                  <tr key={record.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {record.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {record.userId || '未提供用户ID'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {formatDate(record.usedAt)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* 分页 */}
        {totalPages > 1 && (
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-700">
                显示第 <span className="font-medium">{currentPage * pageSize + 1}</span> 到 
                <span className="font-medium"> {Math.min((currentPage + 1) * pageSize, totalRecords)}</span> 条，
                共 <span className="font-medium">{totalRecords}</span> 条记录
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
                disabled={currentPage === 0}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                上一页
              </button>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
                disabled={currentPage >= totalPages - 1}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                下一页
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}