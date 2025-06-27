"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getAllInviteCodes, disableInviteCode, enableInviteCode, InviteCode } from '@/lib/api/inviteCodeApi';
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

export default function AdminDashboard() {
  const [inviteCodes, setInviteCodes] = useState<InviteCode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [totalElements, setTotalElements] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(10);
  const router = useRouter();

  const fetchInviteCodes = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getAllInviteCodes(currentPage, pageSize);
      const data = response.data;
      if (data.success) {
        setInviteCodes(data.data.content);
        setTotalElements(data.data.totalElements);
      } else {
        setError(data.message);
      }
    } catch (err: unknown) {
      const apiError = err as ApiError;
      console.error('获取邀请码错误:', apiError);
      setError(apiError.response?.data?.message || '获取邀请码失败，请稍后再试');
      // 如果是认证错误，跳转到登录页
      if (apiError.response?.status === 401) {
        localStorage.removeItem('token');
        router.push('/invite/admin/login');
      }
    } finally {
      setLoading(false);
    }
  }, [currentPage, pageSize, router]);

  useEffect(() => {
    // 检查认证状态
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/invite/admin/login');
      return;
    }

    fetchInviteCodes();
  }, [currentPage, router, fetchInviteCodes]);

  const handleToggleStatus = async (id: string, active: boolean) => {
    try {
      if (active) {
        await disableInviteCode(id);
      } else {
        await enableInviteCode(id);
      }
      // 刷新列表
      fetchInviteCodes();
    } catch (err: unknown) {
      const apiError = err as ApiError;
      console.error('更新邀请码状态错误:', apiError);
      if (apiError.response?.status === 401) {
        localStorage.removeItem('token');
        router.push('/invite/admin/login');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/invite/admin/login');
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '无';
    const date = new Date(dateString);
    return date.toLocaleString('zh-CN');
  };

  const totalPages = Math.ceil(totalElements / pageSize);

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">{AppConfig.APP_NAME} 邀请码管理</h1>
        <div className="space-x-4">
          <Link 
            href="/invite/admin/generate" 
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            生成邀请码
          </Link>
          <Link 
            href="/invite/admin/users" 
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
          >
            管理员管理
          </Link>
          <button 
            onClick={handleLogout} 
            className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
          >
            退出登录
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  邀请码
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  描述
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  状态
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  使用次数
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  创建时间
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                    </div>
                  </td>
                </tr>
              ) : inviteCodes.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                    暂无邀请码记录
                  </td>
                </tr>
              ) : (
                inviteCodes.map((inviteCode) => (
                  <tr key={inviteCode.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link href={`/invite/admin/codes/${inviteCode.id}`} className="text-blue-600 hover:text-blue-800">
                        {inviteCode.code}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {inviteCode.description || '无描述'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${inviteCode.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {inviteCode.active ? '启用' : '禁用'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {inviteCode.usedCount} / {inviteCode.maxUses || '无限制'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {formatDate(inviteCode.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleToggleStatus(inviteCode.id, inviteCode.active)}
                        className={`${inviteCode.active ? 'text-red-600 hover:text-red-800' : 'text-green-600 hover:text-green-800'} mr-4`}
                      >
                        {inviteCode.active ? '禁用' : '启用'}
                      </button>
                      <Link href={`/invite/admin/codes/${inviteCode.id}`} className="text-blue-600 hover:text-blue-800">
                        详情
                      </Link>
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
                <span className="font-medium"> {Math.min((currentPage + 1) * pageSize, totalElements)}</span> 条，
                共 <span className="font-medium">{totalElements}</span> 条记录
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