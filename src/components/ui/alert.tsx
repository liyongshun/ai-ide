import React from 'react';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Alert({ className, ...props }: AlertProps) {
  return (
    <div
      role="alert"
      className={`relative rounded-lg border p-4 ${className || ''}`}
      {...props}
    />
  );
}

interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function AlertTitle({ className, ...props }: AlertTitleProps) {
  return (
    <h5 className={`mb-1 font-medium leading-none tracking-tight ${className || ''}`} {...props} />
  );
}

interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function AlertDescription({ className, ...props }: AlertDescriptionProps) {
  return <div className={`text-sm ${className || ''}`} {...props} />;
} 