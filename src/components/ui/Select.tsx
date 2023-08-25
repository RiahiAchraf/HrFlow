import React from 'react';

import { cn } from '@/lib';

type Item = {
  value: number;
  title: string;
};

type SelectProps = {
  items: Item[];
  value: number;
  onLimitUpdate: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function Select({ items, value, onLimitUpdate }: SelectProps) {
  return (
    <select
      className={cn(
        'flex w-auto rounded-xl p-2  focus:outline-none focus:ring-0 cursor-pointer',
        'border border-zinc-z2 hover:bg-zinc-z2  ',
      )}
      value={value}
      onChange={onLimitUpdate}
    >
      {items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.title}
        </option>
      ))}
    </select>
  );
}
