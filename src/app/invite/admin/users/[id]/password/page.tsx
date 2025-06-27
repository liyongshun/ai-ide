"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { getAdminById, updateAdminPassword, AdminUser } from '@/lib/api/inviteCodeApi';
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

export default function ChangePasswordPage() {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
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
    
    if (!formData.oldPassword) {
      errors.oldPassword = '当前密码不能为空';
    }
    
    if (!formData.newPassword) {
      errors.newPassword = '新密码不能为空';
    } else if (formData.newPassword.length < 6) {
      errors.newPassword = '新密码至少需要6个字符';
    }
    
    if (formData.newPassword !== formData.confirmPassword) {
      errors.confirmPassword = '两次输入的密码不一致';
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
    setSuccess(false);
    
    try {
      const response = await updateAdminPassword(
        adminId,
        formData.oldPassword,
        formData.newPassword
      );
      
      const data = response.data;
      if (data.success) {
        setSuccess(true);
        // 清空表单
        setFormData({
          oldPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
      } else {
        setError(data.message || '更新密码失败');
      }
    } catch (err: unknown) {
      const apiError = err as ApiError;
      console.error('更新密码错误:', apiError);
      setError(apiError.response?.data?.message || '更新密码失败，请稍后再试');
      
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
          <h1 className="text-2xl font-bold">
            {AppConfig.APP_NAME} 修改管理员密码
            {admin && <span className="text-gray-500 ml-2">- {admin.username}</span>}
          </h1>
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
      
      {success && (
        <div className="mb-6 p-3 bg-green-50 border border-green-200 text-green-700 rounded-md">
          密码修改成功！
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700 mb-1">
              当前密码 <span className="text-red-500">*</span>
            </label>
            <input
              id="oldPassword"
              name="oldPassword"
              type="password"
              value={formData.oldPassword}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${formErrors.oldPassword ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="请输入当前密码"
              disabled={saving}
            />
            {formErrors.oldPassword && (
              <p className="mt-1 text-sm text-red-600">{formErrors.oldPassword}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
              新密码 <span className="text-red-500">*</span>
            </label>
            <input
              id="newPassword"
              name="newPassword"
              type="password"
              value={formData.newPassword}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${formErrors.newPassword ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="请输入新密码"
              disabled={saving}
            />
            {formErrors.newPassword && (
              <p className="mt-1 text-sm text-red-600">{formErrors.newPassword}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              确认新密码 <span className="text-red-500">*</span>
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${formErrors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="请再次输入新密码"
              disabled={saving}
            />
            {formErrors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">{formErrors.confirmPassword}</p>
            )}
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
              ) : '修改密码'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 