import React, { SVGProps } from 'react';

type ChevronUpProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

export default function ChevronUp({ className, ...props }: ChevronUpProps) {
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
      <path stroke-linecap='round' stroke-linejoin='round' d='M4.5 15.75l7.5-7.5 7.5 7.5' />
    </svg>
  );
}
