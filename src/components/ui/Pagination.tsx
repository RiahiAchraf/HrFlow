import { range } from 'ramda';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import { cn } from '@/lib';
import { ChevronLeft, ChevronRight } from '~/svg';

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

const Pagination = ({ filter, setServerFilter, metaData }: PaginationProps) => {
  let { page, limit } = filter;
  let { total, maxPage } = metaData ?? {};

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
    return range(1, maxPage + 1);
  }

  const pages = fetchPageNumbers();

  return (
    <div className='mt-8  flex w-full flex-col-reverse justify-center gap-10 border-t border-zinc-z2 pb-32 pt-8 sm:flex-row'>
      <div className='flex w-full items-center justify-center gap-4 sm:justify-between'>
        <div className='flex items-center gap-3 text-sm text-zinc-z7'>
          <span>Showing</span>
          <Select
            defaultValue={limit.toString()}
            onValueChange={(event) => setServerFilter({ page: 1, limit: parseInt(event, 10) })}
          >
            <SelectTrigger className='w-[70px]'>
              <SelectValue placeholder='Limit' />
            </SelectTrigger>
            <SelectContent>
              {[
                { value: '15', title: '15' },
                { value: '10', title: '10' },
                { value: '5', title: '5' },
              ].map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <p className='whitespace-nowrap font-medium'>{`of ${total} results`}</p>
        </div>
      </div>

      <div className='flex items-center gap-2'>
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

        <ul className='isolate inline-flex w-full justify-center gap-2 md:w-auto '>
          {pages.map((item, index) => {
            const pageClassName = cn(
              'flex  items-center justify-center rounded-full h-9 w-9 ',
              page !== item && 'cursor-pointer hover:bg-zinc-z2',
            );

            return (
              <li
                key={index}
                className={cn(pageClassName, page === item && 'bg-white shadow')}
                onClick={() => handleClick(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>

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
      </div>
    </div>
  );
};

export { Pagination };
