import * as React from 'react';

import { cn } from '@/utils/cn';
import { MagnifyingGlass } from '~/svg';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className='relative w-full'>
        <MagnifyingGlass
          className='absolute left-3 top-1/2 -translate-y-1/2 text-zinc-z5'
          width={20}
          height={20}
          strokeWidth={1.8}
        />
        <input
          type={type}
          className={cn(
            'flex h-9 w-full border rounded-md border-input text-sm  bg-white pl-10 pr-3 py-1 shadow-sm  transition-colors file:border-0 file:bg-white file:text-sm ring-teal-500 file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
