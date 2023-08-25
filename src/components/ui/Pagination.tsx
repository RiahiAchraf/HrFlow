import { range } from 'ramda';

import { cn } from '@/lib';
import { ChevronLeft, ChevronRight } from '~/svg';

import { Select } from '.';

type PaginationProps = {
  metaData: {
    count: number;
    total: number;
    maxPage: number;
  };

  filter: {
    page: number;
    limit: number;
  };
  setServerFilter: any;
};

export default function Pagination({ filter, setServerFilter, metaData }: PaginationProps) {
  let { page, limit } = filter;
  let { count, total, maxPage } = metaData ?? {};

  const onPageUpdate = (newPage: number) => {
    setServerFilter({ limit, page: newPage });
  };

  function gotoPage(page: any) {
    const currentPage = Math.max(1, Math.min(page, total));
    onPageUpdate && onPageUpdate(currentPage);
  }

  function handleClick(page: any) {
    gotoPage(page);
  }

  function handleMovingBackwards() {
    gotoPage(page - 1);
  }

  function handleMovingForward() {
    gotoPage(page + 1);
  }

  function fetchPageNumbers() {
    return range(1, total / count + 1);
  }

  const pages = fetchPageNumbers();

  return (
    <div className='mt-8 flex w-full justify-center border-t border-zinc-z2 pt-8'>
      <div className='flex  w-full flex-col-reverse items-center justify-center gap-4 md:flex-row md:justify-between'>
        {/* Start Pagination Details  */}
        <div className='flex items-center gap-3 text-sm text-zinc-z7'>
          <span>Showing</span>
          <Select
            value={limit}
            onLimitUpdate={(event) =>
              setServerFilter({ ...filter, limit: parseInt(event.target.value, 10) })
            }
            items={[
              { value: 15, title: '15' },
              { value: 10, title: '10' },
              { value: 5, title: '5' },
            ]}
          />
          <p className='whitespace-nowrap font-medium'>{`of ${total} results`}</p>
        </div>
        {/* End Pagination Details  */}
      </div>

      <div className='flex items-center gap-2'>
        {/* Start Pagination Previous Button */}
        <div className={cn(page === 1 && ' !cursor-not-allowed')}>
          <div
            className={cn(
              page === 1 && 'pointer-events-none text-zinc-z4 ',
              'flex h-9 w-9 cursor-pointer items-center justify-center rounded-full hover:bg-zinc-z2',
            )}
            onClick={() => handleMovingBackwards()}
          >
            <span aria-hidden='true'>
              <ChevronLeft className='h-[10px] w-[10px]' />
            </span>
            <span className='sr-only'>Previous</span>
          </div>
        </div>
        {/* Start Pagination Previous Button */}

        {/* Start Pagination Number Buttons */}
        <ul className='isolate inline-flex w-full justify-center gap-2 md:w-auto '>
          {pages.map((item, index) => {
            const pageClassName = cn(
              'flex  items-center justify-center rounded-full h-9 w-9 ',
              page !== item && 'cursor-pointer hover:bg-zinc-z2',
            );

            return (
              <li
                key={index}
                className={cn(pageClassName, page === item && 'bg-teal-500/40')}
                onClick={() => handleClick(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
        {/* End Pagination Number Buttons */}

        {/* Start Pagination Next Button */}
        <div className={cn(page === maxPage && ' !cursor-not-allowed')}>
          <div
            className={cn(
              page === maxPage && 'pointer-events-none text-zinc-z4 ',
              'flex h-9 w-9 cursor-pointer items-center  justify-center rounded-full hover:bg-zinc-z2',
            )}
            onClick={() => handleMovingForward()}
          >
            <ChevronRight className='h-[10px] w-[10px]' />
            <span className='sr-only'>Next</span>
          </div>
        </div>
        {/* End Pagination Next Button */}
      </div>
    </div>
  );
}
