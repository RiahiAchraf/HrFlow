import React, { SVGProps } from 'react';

type ChevronLeftProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

export default function ChevronLeft({ className, ...props }: ChevronLeftProps) {
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
        d='M6.91602 1.16683L1.08268 7.00016L6.91602 12.8335'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
