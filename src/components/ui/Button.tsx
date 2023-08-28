import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';

import { cn } from '@/lib/cn';

const buttonVariants = cn(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50',
  'bg-white shadow hover:bg-zinc-z2',
  'h-8 px-4 py-2',
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants, className)} ref={ref} {...props} />;
  },
);
Button.displayName = 'Button';

export { Button };
