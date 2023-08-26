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

  // const currentList = useCurrentList((state) => state.currentList);
  // const setCurrentList = useCurrentList((state) => state.setCurrentList);

  const [key, setKey] = useState<number>(+new Date());

  // useEffect(() => {
  //   if (setCurrentList && !isNil(currentFilters?.category)) {
  //     setCurrentList(
  //       currentList?.filter((item) => item?.tags[2]?.value === currentFilters?.category),
  //     );
  //   }
  // }, [setCurrentList, currentFilters?.category]);

  return (
    <>
      <h2 className=''>Filters</h2>
      <div className=' flex items-center justify-between'>
        <Select
          key={key}
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
        <Button
          onClick={(e) => {
            e.stopPropagation();
            if (setCurrentFilters) {
              setCurrentFilters({
                ...currentFilters,
                category: undefined,
              });
            }
            setKey(+new Date());
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
