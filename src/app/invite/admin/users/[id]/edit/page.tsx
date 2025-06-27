"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { getAdminById, updateAdmin, AdminUser } from '@/lib/api/inviteCodeApi';
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

export default function EditAdminPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    employeeId: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [admin, setAdmin] = useState<AdminUser | null>(null);
  
  const router = useRouter();
  const params = useParams();
  const adminId = Number(params.id);

  // 获取管理员信息
  useEffect(() => {
    // 检查认证状态
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/invite/admin/login');
      return;
    }

    const fetchAdmin = async () => {
      if (isNaN(adminId)) {
        setError('无效的管理员ID');
        setLoading(false);
        return;
      }

      try {
        const response = await getAdminById(adminId);
        const data = response.data;
        if (data.success) {
          setAdmin(data.data);
          setFormData({
            username: data.data.username,
            password: '',
            employeeId: data.data.employeeId || ''
          });
        } else {
          setError(data.message);
        }
      } catch (err: unknown) {
        const apiError = err as ApiError;
        console.error('获取管理员信息错误:', apiError);
        setError(apiError.response?.data?.message || '获取管理员信息失败，请稍后再试');
        
        // 如果是认证错误，跳转到登录页
        if (apiError.response?.status === 401) {
          localStorage.removeItem('token');
          router.push('/invite/admin/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAdmin();
  }, [adminId, router]);

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.username.trim()) {
      errors.username = '用户名不能为空';
    } else if (formData.username.length < 3) {
      errors.username = '用户名至少需要3个字符';
    }
    
    if (formData.password && formData.password.length < 6) {
      errors.password = '密码至少需要6个字符';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // 清除相应的错误
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setSaving(true);
    setError('');
    
    try {
      const response = await updateAdmin(
        adminId,
        formData.username,
        formData.password || undefined,
        formData.employeeId || undefined
      );
      
      const data = response.data;
      if (data.success) {
        // 更新成功，跳转到管理员列表
        router.push('/invite/admin/users');
      } else {
        setError(data.message || '更新管理员失败');
      }
    } catch (err: unknown) {
      const apiError = err as ApiError;
      console.error('更新管理员错误:', apiError);
      setError(apiError.response?.data?.message || '更新管理员失败，请稍后再试');
      
      // 如果是认证错误，跳转到登录页
      if (apiError.response?.status === 401) {
        localStorage.removeItem('token');
        router.push('/invite/admin/login');
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6 flex justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error && !admin) {
    return (
      <div className="container mx-auto p-6">
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md mb-4">
          {error}
        </div>
        <div className="flex justify-center">
          <Link 
            href="/invite/admin/users" 
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            返回管理员列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{AppConfig.APP_NAME} 编辑管理员</h1>
          <Link 
            href="/invite/admin/users" 
            className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
          >
            返回管理员列表
          </Link>
        </div>
      </div>
      
      {error && (
        <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              用户名 <span className="text-red-500">*</span>
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${formErrors.username ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="请输入用户名"
              disabled={saving}
            />
            {formErrors.username && (
              <p className="mt-1 text-sm text-red-600">{formErrors.username}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              密码 <span className="text-gray-500 font-normal">(留空表示不修改)</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${formErrors.password ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="请输入新密码（可选）"
              disabled={saving}
            />
            {formErrors.password && (
              <p className="mt-1 text-sm text-red-600">{formErrors.password}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700 mb-1">
              员工ID
            </label>
            <input
              id="employeeId"
              name="employeeId"
              type="text"
              value={formData.employeeId}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="请输入员工ID（选填）"
              disabled={saving}
            />
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center"
            >
              {saving ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  保存中...
                </>
              ) : '保存修改'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 