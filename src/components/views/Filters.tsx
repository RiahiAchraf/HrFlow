'useClient';

import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import { useCurrentFilters } from '@/stores/useCurrentFilters';

export default function Filters() {
  const currentFilters = useCurrentFilters((state) => state.currentFilters);
  const setCurrentFilters = useCurrentFilters((state) => state.setCurrentFilters);

  const [key1, setKey1] = useState<number>(+new Date());
  const [key2, setKey2] = useState<number>(1);

  return (
    <div className='flex flex-col space-y-4'>
      <h2 className=''>Filters</h2>
      <Input
        type='search'
        placeholder='Search by job name'
        value={currentFilters?.search}
        onChange={(event) => {
          if (setCurrentFilters) {
            setCurrentFilters({
              ...currentFilters,
              search: event.target.value,
            });
          }
        }}
      />
      <div className='flex flex-col items-end justify-between gap-4 sm:flex-row sm:items-center'>
        <div className='flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row'>
          <Select
            key={key1}
            value={currentFilters?.category}
            onValueChange={(event) => {
              if (setCurrentFilters) {
                setCurrentFilters({
                  ...currentFilters,
                  category: event,
                });
              }
            }}
          >
            <SelectTrigger className='w-full sm:w-[250px]'>
              <SelectValue placeholder='Select a category' />
            </SelectTrigger>
            <SelectContent>
              {listCategories.map((item, index) => (
                <SelectItem key={index} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            key={key2}
            value={currentFilters?.sort_by}
            onValueChange={(event) => {
              if (setCurrentFilters) {
                setCurrentFilters({
                  ...currentFilters,
                  sort_by: event,
                });
              }
            }}
          >
            <SelectTrigger className='w-full sm:w-[250px]'>
              <SelectValue placeholder='Sort by' />
            </SelectTrigger>
            <SelectContent>
              {sortBy.map((item, index) => (
                <SelectItem value={item.value} key={index}>
                  {item.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button
          className='w-full sm:w-auto'
          onClick={(e) => {
            e.stopPropagation();
            if (setCurrentFilters) {
              setCurrentFilters({
                category: undefined,
                sort_by: undefined,
                search: '',
              });
            }
            setKey1(+new Date());
            setKey2(key2 + 1);
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}

const listCategories = [
  'AI / Research & Development',
  'Artificial Intelligence',
  'Financial Services',
  'Human Resources',
  'Software Engineering',
];

const sortBy = [
  {
    title: 'Date',
    value: 'date',
  },
  {
    title: 'Name',
    value: 'name',
  },
  {
    title: 'Category',
    value: 'category',
  },
];
