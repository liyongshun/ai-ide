'use client';

import React, { createContext, useState, useContext, useCallback } from 'react';
import Toast, { ToastType } from './Toast';

// Toast通知配置接口
interface ToastConfig {
  message: string;
  type: ToastType;
  duration?: number;
}

// Toast上下文接口
interface ToastContextType {
  showToast: (config: ToastConfig) => void;
  hideToast: () => void;
}

// 创建上下文
const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Toast提供者组件
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<ToastConfig | null>(null);
  const [visible, setVisible] = useState(false);

  const showToast = useCallback((config: ToastConfig) => {
    setToast(config);
    setVisible(true);
  }, []);

  const hideToast = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          isVisible={visible}
          onClose={hideToast}
        />
      )}
    </ToastContext.Provider>
  );
};

// 创建Hook来使用Toast
export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast必须在ToastProvider内部使用');
  }
  return context;
};

export default ToastContext; 