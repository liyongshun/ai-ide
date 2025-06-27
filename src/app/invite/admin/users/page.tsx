"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getAllAdmins, deleteAdmin, AdminUser } from '@/lib/api/inviteCodeApi';
import { AppConfig } from '@/lib/config';
import LoadingSpinner from '@/components/LoadingSpinner';

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

export default function AdminUsersPage() {
  const [admins, setAdmins] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const fetchAdmins = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getAllAdmins();
      const data = response.data;
      if (data.success) {
        setAdmins(data.data);
      } else {
        setError(data.message);
      }
    } catch (err: unknown) {
      const apiError = err as ApiError;
      console.error('获取管理员错误:', apiError);
      setError(apiError.response?.data?.message || '获取管理员失败，请稍后再试');
      // 如果是认证错误，跳转到登录页
      if (apiError.response?.status === 401) {
        localStorage.removeItem('token');
        router.push('/invite/admin/login');
      }
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    // 检查认证状态
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/invite/admin/login');
      return;
    }

    fetchAdmins();
  }, [router, fetchAdmins]);

  const handleDeleteClick = (id: number) => {
    setDeleteConfirm(id);
  };

  const handleConfirmDelete = async () => {
    if (deleteConfirm === null) return;

    setIsDeleting(true);
    try {
      const response = await deleteAdmin(deleteConfirm);
      const data = response.data;
      if (data.success) {
        setAdmins(prevAdmins => prevAdmins.filter(admin => admin.id !== deleteConfirm));
      } else {
        setError(data.message);
      }
    } catch (err: unknown) {
      const apiError = err as ApiError;
      console.error('删除管理员错误:', apiError);
      setError(apiError.response?.data?.message || '删除管理员失败，请稍后再试');
      if (apiError.response?.status === 401) {
        localStorage.removeItem('token');
        router.push('/invite/admin/login');
      }
    } finally {
      setIsDeleting(false);
      setDeleteConfirm(null);
    }
  };

  const handleCancelDelete = () => {
    setDeleteConfirm(null);
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '无';
    const date = new Date(dateString);
    return date.toLocaleString('zh-CN');
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">{AppConfig.APP_NAME} 管理员管理</h1>
        <div className="space-x-4">
          <Link 
            href="/invite/admin/users/new" 
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
          >
            添加管理员
          </Link>
          <Link 
            href="/invite/admin/dashboard" 
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            返回控制台
          </Link>
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
                  ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  用户名
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  员工ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  创建时间
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  更新时间
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
                      <LoadingSpinner />
                    </div>
                  </td>
                </tr>
              ) : admins.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                    暂无管理员记录
                  </td>
                </tr>
              ) : (
                admins.map((admin) => (
                  <tr key={admin.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {admin.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">
                      {admin.username}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {admin.employeeId || '无'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {formatDate(admin.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {formatDate(admin.updatedAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link 
                        href={`/invite/admin/users/${admin.id}/edit`} 
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                      >
                        编辑
                      </Link>
                      <Link 
                        href={`/invite/admin/users/${admin.id}/password`} 
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        修改密码
                      </Link>
                      <button
                        onClick={() => handleDeleteClick(admin.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        删除
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 删除确认弹窗 */}
      {deleteConfirm !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <h3 className="text-lg font-medium mb-4">确认删除</h3>
            <p className="mb-6 text-gray-700">您确定要删除这个管理员吗？此操作无法撤销。</p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={handleCancelDelete}
                disabled={isDeleting}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
              >
                取消
              </button>
              <button
                onClick={handleConfirmDelete}
                disabled={isDeleting}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors flex items-center"
              >
                {isDeleting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    删除中...
                  </>
                ) : '确认删除'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 