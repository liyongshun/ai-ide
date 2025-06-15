import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_NAME } from '@/lib/constants';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ size = 'md' }: LogoProps) {
  const sizes = {
    sm: {
      width: 24,
      height: 24,
      className: 'h-6',
      textClassName: 'text-base',
    },
    md: {
      width: 32,
      height: 32,
      className: 'h-8',
      textClassName: 'text-lg',
    },
    lg: {
      width: 40,
      height: 40,
      className: 'h-10',
      textClassName: 'text-xl',
    },
  };

  const { width, height, className, textClassName } = sizes[size];

  return (
    <Link href="/" className="flex items-center">
      <div className="flex items-center">
        <Image
          src="/images/logo.svg"
          alt={`${SITE_NAME} Logo`}
          width={width}
          height={height}
          className={className}
          priority
        />
        <span className={`ml-2 font-semibold ${textClassName}`}>{SITE_NAME}</span>
      </div>
    </Link>
  );
} 