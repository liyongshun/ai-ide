import React from 'react';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  _type?: 'AlertProps';
}

export function Alert({ className, ...props }: AlertProps) {
  return (
    <div
      role="alert"
      className={`relative rounded-lg border p-4 ${className || ''}`}
      {...props}
    />
  );
}

interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  _type?: 'AlertTitleProps';
}

export function AlertTitle({ className, ...props }: AlertTitleProps) {
  return (
    <h5 className={`mb-1 font-medium leading-none tracking-tight ${className || ''}`} {...props} />
  );
}

interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  _type?: 'AlertDescriptionProps';
}

export function AlertDescription({ className, ...props }: AlertDescriptionProps) {
  return <div className={`text-sm ${className || ''}`} {...props} />;
} 