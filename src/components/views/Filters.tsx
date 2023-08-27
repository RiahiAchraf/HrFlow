'useClient';

import { useState } from 'react';

import { Button } from '@/components/ui/Button';
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
    <>
      <h2 className=''>Filters</h2>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
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
            <SelectTrigger className='w-[250px]'>
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
            <SelectTrigger className='w-[250px]'>
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
          onClick={(e) => {
            e.stopPropagation();
            if (setCurrentFilters) {
              setCurrentFilters({
                category: undefined,
                sort_by: undefined,
              });
            }
            setKey1(+new Date());
            setKey2(key2 + 1);
          }}
        >
          Reset
        </Button>
      </div>
    </>
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
