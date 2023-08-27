'use client';

import dayjs from 'dayjs';
import process from 'process';
import { isEmpty } from 'ramda';
import { useEffect, useMemo, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { useGetJobs } from '@/api/jobs';
import { Pagination } from '@/components/ui';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/According';
import { ContentCard, EmptyState, Filters, Loading } from '@/components/views';
import { useCurrentFilters } from '@/stores/useCurrentFilters';

type ServerFilters = {
  page: number;
  limit: number;
};

export default function Home() {
  const currentFilters = useCurrentFilters((state) => state.currentFilters);

  const [serverFilter, setServerFilter] = useState<ServerFilters>({
    page: 1,
    limit: 10,
  });

  // API REQUEST FOR RETRIEVING JOBS
  const { data, isLoading, isFetching, refetch } = useGetJobs({
    ...serverFilter,
    board_keys: JSON.stringify([BOARD_KEY]),
  });

  // Memoize the value of listJobs and ensure that it only changes when the dependencies actually change
  const listJobs = useMemo(() => data?.data?.jobs ?? [], [data]);

  const [filteredList, setFilteredList] = useState<any[]>(listJobs);

  useEffect(() => {
    refetch();
  }, [serverFilter, refetch]);

  useEffect(() => {
    setFilteredList(listJobs);
  }, [listJobs]);

  useEffect(() => {
    let updatedList = [...listJobs];

    // Search for the keyword in the name of the job
    if (currentFilters?.search) {
      updatedList = updatedList.filter((item) =>
        item.name.toLowerCase().includes(currentFilters?.search?.toLowerCase()),
      );
    }

    // Apply category filter if category is selected
    if (currentFilters?.category) {
      updatedList = updatedList?.filter((item) =>
        item.tags.some((tag: any) =>
          tag.value.toLowerCase().includes(currentFilters?.category?.toLowerCase()),
        ),
      );
    }

    // Sort by name if the sorting criteria is 'name'
    if (currentFilters?.sort_by === 'name') {
      updatedList?.sort((a, b) => a?.name?.localeCompare(b.name));
    }

    // Apply sorting if the sorting criteria is 'date'
    if (currentFilters?.sort_by === 'date') {
      updatedList?.sort(
        (a, b) => new Date(a?.created_at).getTime() - new Date(b?.created_at).getTime(),
      );
    }

    // Sort by category if the sorting criteria is 'category'
    if (currentFilters?.sort_by === 'category') {
      updatedList?.sort(
        (a, b) =>
          a?.tags
            ?.find((tag: any) => tag.name === 'category')
            ?.value.localeCompare(b?.tags?.find((tag: any) => tag.name === 'category')?.value),
      );
    }

    // Update the filtered and sorted list
    setFilteredList(updatedList);
  }, [currentFilters, listJobs]);

  return (
    <div className='flex min-h-full flex-col space-y-12'>
      <h2 className='text-base font-semibold capitalize leading-6 text-zinc-z8'>{data?.message}</h2>
      <Filters />
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {isEmpty(listJobs) ? (
            <EmptyState />
          ) : (
            <>
              <div className='!relative h-full '>
                {isFetching && (
                  <div className=' absolute left-0 top-0 z-10 h-full w-full rounded-xl opacity-50'>
                    <Skeleton className=' pointer-events-none h-full w-full' />
                  </div>
                )}
                <ul>
                  {filteredList?.map((item) => {
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
