import React, { SVGProps } from 'react';

type ChevronRightProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

export default function ChevronRight({ className, ...props }: ChevronRightProps) {
  return (
    <svg
      width='8'
      height='14'
      viewBox='0 0 8 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M1.08398 1.16683L6.91732 7.00016L1.08398 12.8335'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
