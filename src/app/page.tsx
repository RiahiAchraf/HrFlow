'use client';

import dayjs from 'dayjs';
import process from 'process';
import { isEmpty } from 'ramda';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { useGetJobs } from '@/api/jobs';
import { Pagination } from '@/components/ui';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/According';
import { ContentCard, EmptyState, Loading } from '@/components/views';
import { useCurrentList } from '@/stores/useCurrentList';

type ServerFilters = {
  page: number;
  limit: number;
};

export default function Home() {
  const setCurrentList = useCurrentList((state) => state.setCurrentList);
  const currentList = useCurrentList((state) => state.currentList);

  const [serverFilter, setServerFilter] = useState<ServerFilters>({
    page: 1,
    limit: 5,
  });

  // API REQUEST FOR RETRIEVING JOBS
  const { isLoading, isFetching, data, refetch } = useGetJobs({
    ...serverFilter,
    board_keys: JSON.stringify([BOARD_KEY]),
  });

  useEffect(() => {
    refetch();
  }, [serverFilter, refetch]);

  useEffect(() => {
    if (setCurrentList) {
      setCurrentList(data?.data?.jobs);
    }
  }, [data, setCurrentList]);

  return (
    <div className='flex min-h-full flex-col space-y-20'>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {isEmpty(currentList) ? (
            <EmptyState />
          ) : (
            <>
              <h2 className='text-base font-semibold capitalize leading-6 text-zinc-z8'>
                {data?.message}
              </h2>
              <div className='!relative h-full '>
                {isFetching && (
                  <div className=' absolute left-0 top-0 z-10 h-full w-full rounded-xl opacity-50'>
                    <Skeleton className=' pointer-events-none h-full w-full' />
                  </div>
                )}
                <ul>
                  {currentList?.map((item) => {
                    const itemData = item?.created_at;
                    const formattedDate = dayjs(itemData).format('ddd, MMM D, YYYY');

                    return (
                      <li key={item?.id}>
                        <Accordion type='single' collapsible>
                          <AccordionItem value='item-1'>
                            <AccordionTrigger>
                              <div className='flex flex-col items-start'>
                                <div>{item?.name}</div>
                                <div className='text-sm text-zinc-z5'>{formattedDate}</div>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <ContentCard item={item} />
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <Pagination
                filter={serverFilter}
                setServerFilter={setServerFilter}
                metaData={data?.meta}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}

const BOARD_KEY = process.env.NEXT_PUBLIC_BOARD_KEY;
