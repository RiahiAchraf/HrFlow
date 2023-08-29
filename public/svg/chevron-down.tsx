import React, { SVGProps } from 'react';

import { cn } from '@/utils/cn';

type ChevronDownProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

export default function ChevronDown({ className, ...props }: ChevronDownProps) {
  return (
    <svg
      className={cn('h-6 w-6', className)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...props}
    >
      <path
        fillRule='evenodd'
        d='M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z'
        clipRule='evenodd'
      />
    </svg>
  );
}
