"use client";

import React, { useState } from 'react';

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  children: React.ReactNode;
}

export function Tabs({ defaultValue, children, className, ...props }: TabsProps) {
  const [activeTab, setActiveTab] = useState<string>(defaultValue || '');
  
  // Clone children to pass the activeTab state and setter
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, {
        activeTab,
        setActiveTab,
      });
    }
    return child;
  });
  
  return (
    <div className={`${className || ''}`} {...props}>
      {childrenWithProps}
    </div>
  );
}

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function TabsList({ children, className, ...props }: TabsListProps) {
  return (
    <div 
      className={`inline-flex h-10 items-center justify-center rounded-lg bg-gray-100 p-1 text-gray-500 mb-4 ${className || ''}`} 
      {...props}
    >
      {children}
    </div>
  );
}

interface TabsItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  activeTab?: string;
  setActiveTab?: React.Dispatch<React.SetStateAction<string>>;
}

export function TabsItem({ value, activeTab, setActiveTab, children, className, ...props }: TabsItemProps) {
  const isActive = activeTab === value;
  
  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
        isActive 
          ? 'bg-white text-gray-900 shadow' 
          : 'text-gray-700 hover:bg-gray-50'
      } ${className || ''}`}
      onClick={() => setActiveTab && setActiveTab(value)}
      {...props}
    >
      {children}
    </button>
  );
}

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  activeTab?: string;
  children: React.ReactNode;
}

export function TabsContent({ value, activeTab, children, className, ...props }: TabsContentProps) {
  if (activeTab !== value) return null;
  
  return (
    <div 
      className={`mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
} 