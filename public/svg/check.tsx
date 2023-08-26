import React, { SVGProps } from 'react';

type CheckProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

export default function Check({ className, ...props }: CheckProps) {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      {...props}
    >
      <path stroke-linecap='round' stroke-linejoin='round' d='M4.5 12.75l6 6 9-13.5' />
    </svg>
  );
}
